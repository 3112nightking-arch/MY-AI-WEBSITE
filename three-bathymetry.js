// 3D Hydrographic & Sonar Simulator for OceanScience
// Powered by Three.js

(function () {
    'use strict';

    // State Variables
    let scene, camera, renderer, controls;
    let terrain, terrainGeometry, water, waterGeometry;
    let boatGroup, radarDome, sonarBeam, sbpLayers = [];
    let activePayload = 'mbes';
    let speedValue = 4.5;
    let pingRateValue = 15;
    let pointsMapped = 12482;
    let wireframeMode = false;
    let seaSurfaceVisible = true;
    let timeOffset = 0;
    let clock = new THREE.Clock();
    let container;

    const SYSTEM_STATUS = {
        mbes: {
            name: 'MBES (MULTIBEAM)',
            freq: '300',
            swath: '120',
            beamColor: 0x22d3ee, // cyan
            beamOpacity: 0.25,
            beamScale: [18, 14, 0.4] // wide fan
        },
        sss: {
            name: 'SIDE SCAN SONAR',
            freq: '410',
            swath: '200',
            beamColor: 0xf97316, // orange
            beamOpacity: 0.25,
            beamScale: [24, 14, 0.2] // dual side fans
        },
        sbp: {
            name: 'SUB-BOTTOM PROFILER',
            freq: '10',
            swath: '10',
            beamColor: 0xef4444, // red
            beamOpacity: 0.6,
            beamScale: [1, 14, 1] // narrow pencil beam
        }
    };

    function init() {
        container = document.getElementById('three-canvas-container');
        if (!container) return;

        // Create Scene
        scene = new THREE.Scene();
        scene.background = new THREE.Color(0x020617); // Dark Slate matching site theme
        scene.fog = new THREE.FogExp2(0x020617, 0.015);

        // Create Camera
        const aspect = container.clientWidth / container.clientHeight;
        camera = new THREE.PerspectiveCamera(45, aspect, 0.1, 1000);
        camera.position.set(30, 20, 35);

        // Create Renderer
        renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(container.clientWidth, container.clientHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        container.appendChild(renderer.domElement);

        // Hide preloader once loaded
        const loader = document.getElementById('sim-loader');
        if (loader) loader.style.opacity = 0;
        setTimeout(() => { if (loader) loader.style.display = 'none'; }, 500);

        // Add Controls
        if (THREE.OrbitControls) {
            controls = new THREE.OrbitControls(camera, renderer.domElement);
            controls.enableDamping = true;
            controls.dampingFactor = 0.05;
            controls.maxPolarAngle = Math.PI / 2.05; // Prevent camera going below seabed
            controls.minDistance = 15;
            controls.maxDistance = 120;
            controls.target.set(0, 4, 0);
            controls.autoRotate = true;
            controls.autoRotateSpeed = 0.25;
        }

        // Add Lights
        const ambientLight = new THREE.AmbientLight(0x0a192f, 1.2);
        scene.add(ambientLight);

        const dirLight = new THREE.DirectionalLight(0xffffff, 0.8);
        dirLight.position.set(20, 40, 20);
        dirLight.castShadow = true;
        dirLight.shadow.mapSize.width = 1024;
        dirLight.shadow.mapSize.height = 1024;
        dirLight.shadow.bias = -0.001;
        scene.add(dirLight);

        const pointLight = new THREE.PointLight(0x06b6d4, 1.5, 30);
        pointLight.position.set(0, 10, 0);
        scene.add(pointLight);

        // Build Environment elements
        buildSeabed();
        buildWater();
        buildVessel();
        buildSonarBeam();
        buildSubBottomStrata();

        // Bind events
        window.addEventListener('resize', onWindowResize);
        setupSliders();

        // Start Loop
        animate();
    }

    // --- HEIGHT CALCULATION ---
    function getHeight(x, z, offset = 0) {
        // Generates beautiful subsea canyons, hills, and trenches
        const scale1 = 0.04;
        const scale2 = 0.12;
        
        let y = Math.sin(x * scale1) * Math.cos((z + offset) * scale1) * 7.5;
        y += Math.cos(x * scale2 + 2.0) * Math.sin((z + offset) * scale2) * 2.2;
        
        // Add a central canyon-like trench running along Z
        const distToCenter = Math.abs(x);
        y -= Math.max(0, 9 - distToCenter * 0.7); 
        
        return y;
    }

    // --- BUILD SEABED TERRAIN ---
    function buildSeabed() {
        const width = 80;
        const depth = 80;
        const segments = 60;
        
        // PlaneGeometry centered, then rotated on X
        terrainGeometry = new THREE.PlaneGeometry(width, depth, segments, segments);
        terrainGeometry.rotateX(-Math.PI / 2);

        // Add color attributes for custom vertex coloring
        const count = terrainGeometry.attributes.position.count;
        const colors = new Float32Array(count * 3);
        terrainGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

        // Use custom material that supports vertex colors and lighting
        const terrainMaterial = new THREE.MeshStandardMaterial({
            vertexColors: true,
            roughness: 0.8,
            metalness: 0.1,
            flatShading: true,
            side: THREE.DoubleSide
        });

        terrain = new THREE.Mesh(terrainGeometry, terrainMaterial);
        terrain.receiveShadow = true;
        scene.add(terrain);
        
        updateTerrain(0);
    }

    // --- BUILD WATER SURFACE ---
    function buildWater() {
        const width = 80;
        const depth = 80;
        const segments = 30;

        waterGeometry = new THREE.PlaneGeometry(width, depth, segments, segments);
        waterGeometry.rotateX(-Math.PI / 2);

        // Glassy ocean surface material
        const waterMaterial = new THREE.MeshStandardMaterial({
            color: 0x0891b2,
            roughness: 0.15,
            metalness: 0.8,
            transparent: true,
            opacity: 0.4,
            shininess: 90,
            side: THREE.DoubleSide
        });

        water = new THREE.Mesh(waterGeometry, waterMaterial);
        water.position.y = 10;
        scene.add(water);
    }

    // --- BUILD LOW-POLY VESSEL ---
    function buildVessel() {
        boatGroup = new THREE.Group();
        boatGroup.position.set(0, 10, 0);
        
        const hullMaterial = new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.5 }); // Dark charcoal
        const deckMaterial = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.6 }); // White
        const cabinMaterial = new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4 }); // Grey
        const metalMaterial = new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.8, roughness: 0.2 }); // Silver
        const stripeMaterial = new THREE.MeshStandardMaterial({ color: 0xf97316, roughness: 0.5 }); // Orange safety stripe
        const windowMaterial = new THREE.MeshStandardMaterial({ color: 0x22d3ee, emissive: 0x22d3ee, emissiveIntensity: 1.5 }); // Glowing cyan

        // 1. Boat Main Hull (Box)
        const hull = new THREE.Mesh(new THREE.BoxGeometry(4, 1.2, 9), hullMaterial);
        hull.position.y = 0.4;
        hull.castShadow = true;
        hull.receiveShadow = true;
        boatGroup.add(hull);

        // 2. Boat Bow (Front Cone)
        const bow = new THREE.Mesh(new THREE.ConeGeometry(2, 4, 4), hullMaterial);
        bow.rotateX(-Math.PI / 2);
        bow.rotateY(Math.PI / 4);
        bow.scale.set(1, 1.2, 1);
        bow.position.set(0, 0.4, 4.5 + 0.8);
        bow.castShadow = true;
        boatGroup.add(bow);

        // 3. Deck Plate (White top)
        const deck = new THREE.Mesh(new THREE.BoxGeometry(3.9, 0.1, 8.8), deckMaterial);
        deck.position.y = 1.05;
        deck.receiveShadow = true;
        boatGroup.add(deck);

        // 4. Safety Stripe
        const stripe = new THREE.Mesh(new THREE.BoxGeometry(4.04, 0.15, 8.5), stripeMaterial);
        stripe.position.set(0, 0.6, 0.2);
        boatGroup.add(stripe);

        // 5. Main Cabin
        const cabin = new THREE.Mesh(new THREE.BoxGeometry(2.8, 1.6, 4.5), cabinMaterial);
        cabin.position.set(0, 1.85, -0.5);
        cabin.castShadow = true;
        boatGroup.add(cabin);

        // 6. Bridge windshield & side windows
        const bridgeWin = new THREE.Mesh(new THREE.BoxGeometry(2.62, 0.4, 0.1), windowMaterial);
        bridgeWin.position.set(0, 2.1, 1.76);
        boatGroup.add(bridgeWin);

        const sideWin1 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.4, 1.8), windowMaterial);
        sideWin1.position.set(1.41, 2.1, 0);
        boatGroup.add(sideWin1);

        const sideWin2 = sideWin1.clone();
        sideWin2.position.x = -1.41;
        boatGroup.add(sideWin2);

        // 7. Mast & Radar Dome
        const mast = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.12, 3), metalMaterial);
        mast.position.set(0, 3.5, -1.8);
        mast.castShadow = true;
        boatGroup.add(mast);

        const crossbar = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 1.8), metalMaterial);
        crossbar.rotateZ(Math.PI / 2);
        crossbar.position.set(0, 4.2, -1.8);
        boatGroup.add(crossbar);

        radarDome = new THREE.Group();
        const domeBase = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.4, 0.2), metalMaterial);
        const domeScanner = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.15, 0.25), stripeMaterial);
        domeScanner.position.y = 0.15;
        radarDome.add(domeBase);
        radarDome.add(domeScanner);
        radarDome.position.set(0, 5.1, -1.8);
        boatGroup.add(radarDome);

        scene.add(boatGroup);
    }

    // --- BUILD SONAR BEAM MESH ---
    function buildSonarBeam() {
        // Semi-transparent cone representing acoustic scan swath
        const geometry = new THREE.CylinderGeometry(0.1, 1, 1, 32, 1, true); // Open ended cylinder
        geometry.translate(0, -0.5, 0); // Origin at top tip

        const material = new THREE.MeshBasicMaterial({
            color: SYSTEM_STATUS.mbes.beamColor,
            transparent: true,
            opacity: SYSTEM_STATUS.mbes.beamOpacity,
            side: THREE.DoubleSide,
            depthWrite: false,
            blending: THREE.AdditiveBlending
        });

        sonarBeam = new THREE.Mesh(geometry, material);
        sonarBeam.position.set(0, 9.8, 0); // Position at boat bottom transducer
        sonarBeam.scale.fromArray(SYSTEM_STATUS.mbes.beamScale);
        scene.add(sonarBeam);
    }

    // --- BUILD SUB-BOTTOM STRATA (SBP Sediment Planes) ---
    function buildSubBottomStrata() {
        const layersData = [
            { y: -13, color: 0x78350f, opacity: 0.18 }, // Sand layer
            { y: -16, color: 0x451a03, opacity: 0.25 }, // Silt / Clay layer
            { y: -20, color: 0x1e293b, opacity: 0.35 }  // Hard Bedrock layer
        ];

        layersData.forEach((layer) => {
            const geom = new THREE.PlaneGeometry(80, 80, 10, 10);
            geom.rotateX(-Math.PI / 2);

            const mat = new THREE.MeshStandardMaterial({
                color: layer.color,
                roughness: 0.9,
                transparent: true,
                opacity: 0.0, // Hidden initially
                wireframe: true,
                side: THREE.DoubleSide
            });

            const mesh = new THREE.Mesh(geom, mat);
            mesh.position.y = layer.y;
            scene.add(mesh);
            sbpLayers.push(mesh);
        });
    }

    // --- UPDATE TERRAIN & READOUTS ---
    function updateTerrain(dt) {
        if (!terrainGeometry) return;
        
        timeOffset += speedValue * dt * 0.15; // Shift heightmap offset

        const posAttr = terrainGeometry.attributes.position;
        const colorAttr = terrainGeometry.attributes.color;
        const count = posAttr.count;

        let centerDepth = 10; // Default depth readout
        const currentParams = SYSTEM_STATUS[activePayload];

        for (let i = 0; i < count; i++) {
            const x = posAttr.getX(i);
            const z = posAttr.getZ(i);

            // Compute current height wave
            const y = getHeight(x, z, timeOffset);
            posAttr.setY(i, y);

            // Fetch depth under boat (X=0, Z=0)
            if (Math.abs(z) < 1.0 && Math.abs(x) < 1.0) {
                // Water surface is at Y=10. Depth = 10 - y.
                centerDepth = 10 - y;
            }

            // Colors:
            // Seabed flows along Z. Z=0 is under the boat.
            // Vertices behind the boat (Z <= 0) are mapped (scanned).
            // Vertices ahead of the boat (Z > 0) are unmapped (unscanned).
            const isScanned = z <= 0;

            let r, g, b;
            if (isScanned) {
                // Height-based rainbow bathymetric spectrum (-12m to +5m scale)
                const normY = Math.max(0, Math.min(1, (y + 11) / 16));

                if (normY < 0.2) { // Deep: Navy Blue to Royal Blue
                    const t = normY / 0.2;
                    r = 0.02; g = 0.05 + t * 0.25; b = 0.5 + t * 0.4;
                } else if (normY < 0.45) { // Medium-Deep: Blue to Teal/Cyan
                    const t = (normY - 0.2) / 0.25;
                    r = 0.02 + t * 0.1; g = 0.3 + t * 0.5; b = 0.9 - t * 0.1;
                } else if (normY < 0.7) { // Medium: Cyan to Green/Yellow
                    const t = (normY - 0.45) / 0.25;
                    r = 0.12 + t * 0.7; g = 0.8 + t * 0.2; b = 0.8 - t * 0.8;
                } else { // Shallow Peaks: Yellow to Orange/Red
                    const t = (normY - 0.7) / 0.3;
                    r = 0.82 + t * 0.18; g = 1.0 - t * 0.9; b = 0;
                }

                // Add bright sweep glow at Z=0 (scanning zone)
                if (Math.abs(z) < 1.2) {
                    const swathLimit = parseFloat(currentParams.swath) / 8.0; // scale swath to scene coordinates
                    if (Math.abs(x) <= swathLimit) {
                        const glowC = new THREE.Color(currentParams.beamColor);
                        r = r * 0.3 + glowC.r * 0.7;
                        g = g * 0.3 + glowC.g * 0.7;
                        b = b * 0.3 + glowC.b * 0.7;
                    }
                }
            } else {
                // Unscanned: Dark tech blue/grey
                r = 0.05; g = 0.10; b = 0.18;
            }

            colorAttr.setXYZ(i, r, g, b);
        }

        posAttr.needsUpdate = true;
        colorAttr.needsUpdate = true;
        terrainGeometry.computeVertexNormals();

        // Update HUD depths in DOM
        const hudDepth = document.getElementById('hud-depth');
        if (hudDepth) {
            hudDepth.innerText = centerDepth.toFixed(1);
        }

        // Adjust sonar beam length so it hits the seabed under the boat
        if (sonarBeam) {
            const seabedY = getHeight(0, 0, timeOffset);
            const beamLength = 9.8 - seabedY; // boat bottom to seabed
            sonarBeam.scale.y = beamLength;
            // Place it properly so it anchors at the transducer tip
            sonarBeam.position.y = 9.8;
        }
    }

    // --- ANIMATION LOOP ---
    function animate() {
        requestAnimationFrame(animate);

        const dt = clock.getDelta();
        const time = clock.getElapsedTime();

        // 1. Rotate Radar Scanner
        if (radarDome) {
            radarDome.rotation.y += dt * 4.5;
        }

        // 2. Animate Water Waves & Rock Boat
        if (water && seaSurfaceVisible) {
            const posAttr = waterGeometry.attributes.position;
            const count = posAttr.count;
            for (let i = 0; i < count; i++) {
                const x = posAttr.getX(i);
                const z = posAttr.getZ(i);
                // Complex wave formula
                const waveY = Math.sin(x * 0.15 + time * 1.8) * Math.cos(z * 0.15 + time * 1.4) * 0.2;
                posAttr.setY(i, 10 + waveY);
            }
            posAttr.needsUpdate = true;

            // Rock the boat gently on waves
            const boatWave = Math.sin(time * 1.8) * Math.cos(time * 1.4) * 0.2;
            boatGroup.position.y = 10 + boatWave;
            boatGroup.rotation.z = Math.sin(time * 1.2) * 0.03; // Roll
            boatGroup.rotation.x = Math.cos(time * 1.0) * 0.015; // Pitch
        } else if (boatGroup) {
            // Static if water is disabled
            boatGroup.position.y = 10;
            boatGroup.rotation.set(0, 0, 0);
        }

        // 3. Sonar Beam Sweep micro-animation
        if (sonarBeam && activePayload !== 'sbp') {
            // Sweeping effect along X axis
            const sweepFreq = activePayload === 'sss' ? 1.5 : 2.5;
            sonarBeam.rotation.z = Math.sin(time * sweepFreq) * 0.05;
        } else if (sonarBeam) {
            sonarBeam.rotation.z = 0; // SBP doesn't sweep
        }

        // 4. Update Seabed heightmap and vertex colors
        updateTerrain(dt);

        // 5. Update mapped points counters
        if (speedValue > 0) {
            pointsMapped += Math.round(speedValue * pingRateValue * dt * 4.2);
            const hudPoints = document.getElementById('hud-points');
            if (hudPoints) hudPoints.innerText = pointsMapped.toLocaleString();
        }

        // 6. Update Coordinates gently
        const hudCoords = document.getElementById('hud-coords');
        if (hudCoords && Math.random() < 0.02) {
            const lat = (18.9517 + Math.sin(time * 0.02) * 0.05).toFixed(4);
            const lng = (72.8261 + Math.cos(time * 0.02) * 0.05).toFixed(4);
            hudCoords.innerText = `${lat}°N, ${lng}°E`;
        }

        // Controls updates
        if (controls) controls.update();

        renderer.render(scene, camera);
    }

    // --- SLIDERS & CONTROLS BINDINGS ---
    function setupSliders() {
        const sliderSpeed = document.getElementById('slider-speed');
        const valSpeed = document.getElementById('val-speed');
        const hudSpeed = document.getElementById('hud-speed');

        if (sliderSpeed) {
            sliderSpeed.addEventListener('input', (e) => {
                speedValue = parseFloat(e.target.value);
                if (valSpeed) valSpeed.innerText = speedValue.toFixed(1);
                if (hudSpeed) hudSpeed.innerText = speedValue.toFixed(1);
            });
        }

        const sliderPing = document.getElementById('slider-ping');
        const valPing = document.getElementById('val-ping');
        const hudPings = document.getElementById('hud-pings');

        if (sliderPing) {
            sliderPing.addEventListener('input', (e) => {
                pingRateValue = parseInt(e.target.value);
                if (valPing) valPing.innerText = pingRateValue;
                if (hudPings) hudPings.innerText = pingRateValue;
            });
        }
    }

    // --- PAYLOAD CONFIG (MBES/SSS/SBP) ---
    window.setPayload = function (type) {
        if (!SYSTEM_STATUS[type]) return;
        activePayload = type;

        const config = SYSTEM_STATUS[type];

        // Update HUD
        const hudPayload = document.getElementById('hud-payload');
        const hudFreq = document.getElementById('hud-freq');
        const hudSwath = document.getElementById('hud-swath');
        
        if (hudPayload) hudPayload.innerText = config.name;
        if (hudFreq) hudFreq.innerText = config.freq;
        if (hudSwath) hudSwath.innerText = config.swath;

        // Update Beam styling
        if (sonarBeam) {
            sonarBeam.material.color.setHex(config.beamColor);
            sonarBeam.material.opacity = config.beamOpacity;
            
            // Reapply base scale
            sonarBeam.scale.set(config.beamScale[0], config.beamScale[1], config.beamScale[2]);
        }

        // Sub-Bottom strata layers rendering (only visible in SBP mode)
        sbpLayers.forEach((layer) => {
            if (type === 'sbp') {
                layer.material.opacity = layer.position.y === -13 ? 0.35 : (layer.position.y === -16 ? 0.45 : 0.6);
            } else {
                layer.material.opacity = 0.0; // Hide
            }
        });

        // Toggle Active Button styling
        ['mbes', 'sss', 'sbp'].forEach((btnId) => {
            const btn = document.getElementById(`btn-payload-${btnId}`);
            if (!btn) return;
            if (btnId === type) {
                // Active
                btn.className = `py-3 px-4 rounded-xl border text-left transition-all duration-300 font-medium text-xs flex items-center gap-3 bg-${type === 'mbes' ? 'cyan' : (type === 'sss' ? 'orange' : 'red')}-950/20 border-${type === 'mbes' ? 'cyan' : (type === 'sss' ? 'orange' : 'red')}-500/40 text-${type === 'mbes' ? 'cyan' : (type === 'sss' ? 'orange' : 'red')}-400 shadow-[0_0_15px_rgba(6,182,212,0.05)]`;
                const dot = btn.querySelector('span');
                if (dot) dot.className = `w-2.5 h-2.5 rounded-full bg-${type === 'mbes' ? 'cyan' : (type === 'sss' ? 'orange' : 'red')}-400 shadow-[0_0_8px_currentColor]`;
            } else {
                // Inactive
                btn.className = "py-3 px-4 rounded-xl border text-left transition-all duration-300 font-medium text-xs flex items-center gap-3 bg-slate-900/50 border-gray-800 text-gray-400 hover:border-gray-700 hover:text-white";
                const dot = btn.querySelector('span');
                if (dot) dot.className = `w-2.5 h-2.5 rounded-full bg-gray-600`;
            }
        });
    };

    // --- WIREFRAME MODE TOGGLE ---
    window.toggleWireframe = function () {
        wireframeMode = !wireframeMode;
        if (terrain) {
            terrain.material.wireframe = wireframeMode;
        }

        const btn = document.getElementById('btn-wireframe');
        if (btn) {
            btn.innerText = `WIREFRAME: ${wireframeMode ? 'ON' : 'OFF'}`;
            if (wireframeMode) {
                btn.className = "py-2.5 px-3 rounded-lg border border-cyan-500/30 text-center text-xs font-mono text-cyan-400 bg-cyan-950/10";
            } else {
                btn.className = "py-2.5 px-3 rounded-lg border border-gray-800 text-center text-xs font-mono text-gray-400 hover:border-cyan-500/30 hover:text-white transition-colors bg-slate-900/40";
            }
        }
    };

    // --- WATER VISIBILITY TOGGLE ---
    window.toggleSeaSurface = function () {
        seaSurfaceVisible = !seaSurfaceVisible;
        if (water) {
            water.visible = seaSurfaceVisible;
        }

        const btn = document.getElementById('btn-seasurface');
        if (btn) {
            btn.innerText = `WATER: ${seaSurfaceVisible ? 'VISIBLE' : 'HIDDEN'}`;
            if (seaSurfaceVisible) {
                btn.className = "py-2.5 px-3 rounded-lg border border-cyan-500/20 text-center text-xs font-mono text-cyan-400 bg-cyan-950/10";
            } else {
                btn.className = "py-2.5 px-3 rounded-lg border border-gray-800 text-center text-xs font-mono text-gray-400 hover:border-cyan-500/30 hover:text-white transition-colors bg-slate-900/40";
            }
        }
    };

    // --- GENERATE NEW TERRAIN SEABED ---
    window.generateNewTerrain = function () {
        // Clear scanned history visually by resetting timeOffset
        timeOffset = Math.random() * 1000;
        
        // Randomize coefficients inside getHeight function via local generator adjustment
        const rnd1 = 3 + Math.random() * 6;
        const rnd2 = 1.5 + Math.random() * 2;
        const rnd3 = 5 + Math.random() * 6;
        
        window.getHeightRandomized = function(x, z, offset) {
            const scale1 = 0.04;
            const scale2 = 0.12;
            let y = Math.sin(x * scale1) * Math.cos((z + offset) * scale1) * rnd1;
            y += Math.cos(x * scale2 + 2.0) * Math.sin((z + offset) * scale2) * rnd2;
            const distToCenter = Math.abs(x);
            y -= Math.max(0, rnd3 - distToCenter * 0.7);
            return y;
        };

        // Redefine local getHeight binding
        getHeight = window.getHeightRandomized;
        
        // Flash HUD counter to show re-calibration
        const hudPoints = document.getElementById('hud-points');
        if (hudPoints) {
            hudPoints.innerText = "0";
            pointsMapped = 0;
        }
        
        updateTerrain(0);
    };

    function onWindowResize() {
        if (!container || !camera) return;
        const width = container.clientWidth;
        const height = container.clientHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    // --- BOOTSTRAP INITIALIZATION ---
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            // Small delay to ensure container sizing is calculated correctly
            setTimeout(init, 300);
        });
    } else {
        setTimeout(init, 300);
    }

})();
