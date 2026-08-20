// ====================================================================
//  3D Globe — OceanScience Interactive Project Map
//  Powered by Globe.GL
// ====================================================================

(function () {
    'use strict';

    // ─── Service Configuration ───────────────────────────────────────
    const SERVICES = {
        'Bathymetry Survey':      { color: '#22d3ee', icon: '🌊', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/><path d="M2 17c1.5-2 3.5-2 5 0s3.5 2 5 0 3.5-2 5 0 3.5 2 5 0"/><path d="M12 3v6" stroke-dasharray="2 2"/></svg>' },
        'Geophysical Survey':     { color: '#a78bfa', icon: '📡', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22V8"/><path d="M5 12a7 7 0 0 1 14 0"/><path d="M8 9a4 4 0 0 1 8 0"/><circle cx="12" cy="6" r="2"/></svg>' },
        'Platform & Pipeline':    { color: '#f97316', icon: '🏗️', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="6" rx="1"/><path d="M8 10v8"/><path d="M16 10v8"/><path d="M4 18h16"/><path d="M12 10v4"/></svg>' },
        'Submarine Cables':       { color: '#eab308', icon: '🔌', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 12c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/><circle cx="4" cy="12" r="2"/><circle cx="22" cy="12" r="2" fill="currentColor"/></svg>' },
        'Topographic Survey':     { color: '#22c55e', icon: '⛰️', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20L8 8l4 6 4-10 6 16"/><path d="M2 16h20" stroke-dasharray="2 2" opacity=".5"/></svg>' },
        'Geotechnical Services':  { color: '#ef4444', icon: '🔩', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v14"/><path d="M8 12l4 4 4-4"/><rect x="6" y="18" width="12" height="4" rx="1"/><path d="M9 18v-2"/><path d="M15 18v-2"/></svg>' },
        'Oceanography':           { color: '#3b82f6', icon: '🌀', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 2a10 10 0 0 1 0 20"/><path d="M12 2a10 10 0 0 0 0 20"/><path d="M2 12h20"/></svg>' },
        'Weather Forecasting':    { color: '#e879f9', icon: '⛈️', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.5 19a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0-9 0A4.5 4.5 0 0 0 4 14.5"/><path d="M10 19l-2 4"/><path d="M14 19l-2 4"/></svg>' },
        'Positioning (WAPS)':     { color: '#14b8a6', icon: '🧭', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="1" fill="currentColor"/><path d="M12 3v4"/><path d="M12 17v4"/><path d="M3 12h4"/><path d="M17 12h4"/></svg>' },
        'Desktop Study':          { color: '#94a3b8', icon: '💻', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/><path d="M7 8h4"/><path d="M7 11h6"/></svg>' },
        'DPR Preparation':        { color: '#fb923c', icon: '📋', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M9 6h6"/><path d="M9 10h6"/><path d="M9 14h4"/><path d="M9 2V0"/><path d="M15 2V0"/></svg>' },
        'Project Consultancy':    { color: '#c084fc', icon: '🤝', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="7" r="3"/><circle cx="15" cy="7" r="3"/><path d="M3 21v-2a4 4 0 0 1 4-4h2"/><path d="M15 15h2a4 4 0 0 1 4 4v2"/></svg>' },
        'Cathodic Protection':    { color: '#fbbf24', icon: '🛡️', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4z"/><path d="M12 8v4"/><path d="M10 10h4"/></svg>' },
        'UXO Gradiometer':        { color: '#f43f5e', icon: '🧲', svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 3a6 6 0 0 1 12 0"/><path d="M6 3v8"/><path d="M18 3v8"/><path d="M6 11h12"/><path d="M9 11v5"/><path d="M15 11v5"/><circle cx="12" cy="19" r="2"/></svg>' }
    };

    const SERVICE_LIST = Object.keys(SERVICES);

    // ─── 100 Sample Projects ─────────────────────────────────────────
    const DEFAULT_PROJECTS = [
        // ── India (25) ──
        { id:1,  name:"Mumbai ONGC Platform Survey",           service:"Platform & Pipeline",    lat:18.975, lng:72.825,  country:"India",       city:"Mumbai",         client:"ONGC",                year:2024, description:"Complete platform as-built survey and pipeline route assessment for ONGC offshore complex in Mumbai High field." },
        { id:2,  name:"Daman Offshore Bathymetry",             service:"Bathymetry Survey",       lat:20.414, lng:72.832,  country:"India",       city:"Daman",          client:"ONGC",                year:2023, description:"Multibeam bathymetric survey covering 450 sq km for pipeline route feasibility in the Daman offshore block." },
        { id:3,  name:"Gujarat Submarine Cable Route",         service:"Submarine Cables",        lat:21.635, lng:69.609,  country:"India",       city:"Porbandar",      client:"Reliance Jio",        year:2024, description:"Pre-lay and post-lay submarine cable route survey for international fiber optic cable landing." },
        { id:4,  name:"KG Basin Geophysical Study",            service:"Geophysical Survey",      lat:16.287, lng:81.823,  country:"India",       city:"Kakinada",       client:"ONGC",                year:2023, description:"High-resolution geophysical survey including side-scan sonar and sub-bottom profiler in the Krishna-Godavari basin." },
        { id:5,  name:"Visakhapatnam Port Topo Survey",        service:"Topographic Survey",      lat:17.686, lng:83.218,  country:"India",       city:"Visakhapatnam",  client:"VPT",                 year:2024, description:"Topographic and hydrographic survey for port expansion and new berth construction planning." },
        { id:6,  name:"Chennai Coast Oceanographic Study",     service:"Oceanography",            lat:13.082, lng:80.270,  country:"India",       city:"Chennai",        client:"NIOT",                year:2023, description:"Year-long oceanographic data collection including ADCP deployment, wave rider buoys, and water quality monitoring." },
        { id:7,  name:"Kochi Port Weather Station",            service:"Weather Forecasting",     lat:9.966,  lng:76.266,  country:"India",       city:"Kochi",          client:"Cochin Port Trust",   year:2024, description:"Installation and commissioning of automated weather stations for real-time marine weather forecasting." },
        { id:8,  name:"Andaman Islands Geotechnical",          service:"Geotechnical Services",   lat:11.623, lng:92.726,  country:"India",       city:"Port Blair",     client:"Indian Navy",         year:2023, description:"Offshore geotechnical investigation including CPT and borehole drilling for underwater defense infrastructure." },
        { id:9,  name:"Nhava Sheva WAPS Installation",         service:"Positioning (WAPS)",      lat:18.951, lng:72.951,  country:"India",       city:"Nhava Sheva",    client:"JNPT",                year:2024, description:"Wide area positioning system deployment for precise vessel tracking in port approach channels." },
        { id:10, name:"Paradip Port CP Assessment",            service:"Cathodic Protection",     lat:20.316, lng:86.611,  country:"India",       city:"Paradip",        client:"Paradip Port Trust",  year:2023, description:"Cathodic protection survey and anode retrofit design for aging port jetty structures." },
        { id:11, name:"Mangalore Coastal DPR",                 service:"DPR Preparation",         lat:12.914, lng:74.855,  country:"India",       city:"Mangalore",      client:"NMPT",                year:2024, description:"Detailed Project Report for coastal erosion mitigation measures including breakwater design." },
        { id:12, name:"Tuticorin Desalination Desktop Study",  service:"Desktop Study",           lat:8.764,  lng:78.134,  country:"India",       city:"Tuticorin",      client:"TIDCO",               year:2023, description:"Desktop study and environmental data compilation for proposed desalination plant outfall alignment." },
        { id:13, name:"Lakshadweep UXO Clearance Survey",      service:"UXO Gradiometer",         lat:10.566, lng:72.636,  country:"India",       city:"Kavaratti",      client:"Indian Coast Guard",  year:2024, description:"UXO magnetometer and gradiometer survey for safe corridor identification around island approaches." },
        { id:14, name:"Goa Offshore Wind Consultancy",         service:"Project Consultancy",     lat:15.299, lng:73.878,  country:"India",       city:"Goa",            client:"MNRE",                year:2024, description:"Technical consultancy for proposed offshore wind farm including site selection and environmental assessment." },
        { id:15, name:"Haldia River Bathymetry",               service:"Bathymetry Survey",       lat:22.025, lng:88.063,  country:"India",       city:"Haldia",         client:"Haldia Dock Complex", year:2023, description:"Channel maintenance bathymetric survey for navigable depth assurance in Haldia river approach." },
        { id:16, name:"Mundra LNG Pipeline Survey",            service:"Platform & Pipeline",     lat:22.839, lng:69.719,  country:"India",       city:"Mundra",         client:"Adani Ports",         year:2024, description:"Submarine pipeline route survey and pre-installation seabed assessment for LNG terminal expansion." },
        { id:17, name:"Karwar Naval Geophysical",              service:"Geophysical Survey",      lat:14.812, lng:74.129,  country:"India",       city:"Karwar",         client:"Indian Navy",         year:2023, description:"Geophysical survey for naval base expansion including magnetometer and shallow seismic profiling." },
        { id:18, name:"Puducherry Coast Tidal Study",          service:"Oceanography",            lat:11.934, lng:79.830,  country:"India",       city:"Puducherry",     client:"NIO",                 year:2024, description:"Comprehensive tidal observations and current measurement campaign for coastal zone management plan." },
        { id:19, name:"Ratnagiri OTEC Feasibility",            service:"Desktop Study",           lat:16.983, lng:73.312,  country:"India",       city:"Ratnagiri",      client:"NIOT",                year:2023, description:"Desktop study for Ocean Thermal Energy Conversion feasibility including bathymetric data review and thermal profiling." },
        { id:20, name:"Sikka Terminal CP Survey",              service:"Cathodic Protection",     lat:22.445, lng:69.840,  country:"India",       city:"Jamnagar",       client:"RIL",                 year:2024, description:"Underwater cathodic protection inspection and assessment of SPM and submarine pipeline infrastructure." },
        { id:21, name:"Surat FSRU Positioning",                service:"Positioning (WAPS)",      lat:21.170, lng:72.831,  country:"India",       city:"Surat",          client:"Swan Energy",         year:2024, description:"High-precision acoustic positioning for FSRU installation and mooring system alignment." },
        { id:22, name:"Ennore Port Geotechnical",              service:"Geotechnical Services",   lat:13.215, lng:80.320,  country:"India",       city:"Ennore",         client:"KPL",                 year:2023, description:"Offshore geotechnical investigation with vibrocore sampling and in-situ testing for port breakwater extension." },
        { id:23, name:"New Mangalore Topo Survey",             service:"Topographic Survey",      lat:12.918, lng:74.805,  country:"India",       city:"Mangalore",      client:"NMPT",                year:2023, description:"High-resolution drone-based topographic survey for port hinterland development planning." },
        { id:24, name:"Kakinada SBM Weather Forecast",         service:"Weather Forecasting",     lat:16.990, lng:82.240,  country:"India",       city:"Kakinada",       client:"ONGC",                year:2024, description:"Operational weather forecasting services for SBM loading operations including sea state and wind predictions." },
        { id:25, name:"Dwarka Cable Consultancy",              service:"Project Consultancy",     lat:22.238, lng:68.968,  country:"India",       city:"Dwarka",         client:"PowerGrid",           year:2023, description:"Expert consultancy for inter-island submarine power cable design and installation methodology." },

        // ── UAE (12) ──
        { id:26, name:"Abu Dhabi Subsea Pipeline Inspection",  service:"Platform & Pipeline",     lat:24.453, lng:54.377,  country:"UAE",         city:"Abu Dhabi",      client:"ADNOC",               year:2024, description:"Annual pipeline integrity inspection and free-span survey across ADNOC's offshore field network." },
        { id:27, name:"Dubai Palm Bathymetry",                 service:"Bathymetry Survey",       lat:25.112, lng:55.138,  country:"UAE",         city:"Dubai",          client:"Nakheel",             year:2023, description:"Precision multibeam survey around Palm Jumeirah breakwater for maintenance dredging volume calculation." },
        { id:28, name:"Fujairah STS Area Geophysical",         service:"Geophysical Survey",      lat:25.122, lng:56.336,  country:"UAE",         city:"Fujairah",       client:"Fujairah Port",       year:2024, description:"Geophysical survey for ship-to-ship transfer area expansion including anchor penetration assessment." },
        { id:29, name:"Jebel Ali Submarine Cable",             service:"Submarine Cables",        lat:24.984, lng:55.027,  country:"UAE",         city:"Jebel Ali",      client:"du Telecom",          year:2023, description:"Route survey and post-burial depth-of-burial verification for submarine telecommunications cable." },
        { id:30, name:"Ruwais Weather Services",               service:"Weather Forecasting",     lat:24.087, lng:52.731,  country:"UAE",         city:"Ruwais",         client:"ADNOC",               year:2024, description:"24/7 weather forecasting and sea state monitoring for offshore operations support in Ruwais industrial zone." },
        { id:31, name:"Sir Bani Yas Oceanography",             service:"Oceanography",            lat:24.315, lng:52.568,  country:"UAE",         city:"Sir Bani Yas",   client:"EAD",                 year:2023, description:"Oceanographic baseline study including water quality, current patterns, and sediment transport modeling." },
        { id:32, name:"Khalifa Port Topo Survey",              service:"Topographic Survey",      lat:24.815, lng:54.645,  country:"UAE",         city:"Abu Dhabi",      client:"AD Ports",            year:2024, description:"Topographic and bathymetric survey for Khalifa Port expansion Phase 3 engineering design." },
        { id:33, name:"Zakum Field WAPS",                      service:"Positioning (WAPS)",      lat:24.863, lng:53.768,  country:"UAE",         city:"Zakum",          client:"ZADCO",               year:2023, description:"Wide area positioning system installation for dynamic positioning reference during platform construction." },
        { id:34, name:"Das Island CP Survey",                  service:"Cathodic Protection",     lat:25.153, lng:52.873,  country:"UAE",         city:"Das Island",     client:"ADNOC",               year:2024, description:"Comprehensive cathodic protection assessment of Das Island loading terminal and submarine pipelines." },
        { id:35, name:"Abu Dhabi Offshore Wind DPR",           service:"DPR Preparation",         lat:24.320, lng:54.020,  country:"UAE",         city:"Abu Dhabi",      client:"Masdar",              year:2024, description:"Detailed Project Report for proposed 500MW offshore wind farm including geotechnical and metocean data compilation." },
        { id:36, name:"Umm Al Quwain Geotechnical",            service:"Geotechnical Services",   lat:25.564, lng:55.555,  country:"UAE",         city:"Umm Al Quwain",  client:"UAQ FTZ",             year:2023, description:"Marine geotechnical survey with CPT and borehole for proposed marina and breakwater construction." },
        { id:37, name:"Sharjah Port UXO Survey",               service:"UXO Gradiometer",         lat:25.357, lng:55.387,  country:"UAE",         city:"Sharjah",        client:"Gulftainer",          year:2024, description:"Pre-dredge UXO magnetometer survey for Sharjah container port expansion area clearance." },

        // ── Saudi Arabia (10) ──
        { id:38, name:"Jubail Pipeline Route Survey",          service:"Platform & Pipeline",     lat:27.011, lng:49.658,  country:"Saudi Arabia",city:"Jubail",         client:"Saudi Aramco",        year:2024, description:"Pipeline route survey and seabed assessment for new subsea pipeline connecting Jubail industrial complex." },
        { id:39, name:"Jeddah Port Bathymetry",                service:"Bathymetry Survey",       lat:21.485, lng:39.192,  country:"Saudi Arabia",city:"Jeddah",         client:"Mawani",              year:2023, description:"Capital dredging bathymetric survey for Jeddah Islamic Port deepening project to accommodate larger vessels." },
        { id:40, name:"Yanbu Geophysical Survey",              service:"Geophysical Survey",      lat:24.089, lng:38.063,  country:"Saudi Arabia",city:"Yanbu",          client:"Royal Commission",    year:2024, description:"High-resolution sub-bottom profiler and side-scan sonar survey for new industrial port development." },
        { id:41, name:"NEOM Cable Route Survey",               service:"Submarine Cables",        lat:27.950, lng:35.500,  country:"Saudi Arabia",city:"NEOM",           client:"NEOM",                year:2024, description:"Submarine fiber optic cable route survey connecting NEOM to international telecommunications network." },
        { id:42, name:"Ras Tanura Oceanographic",              service:"Oceanography",            lat:26.644, lng:50.160,  country:"Saudi Arabia",city:"Ras Tanura",     client:"Saudi Aramco",        year:2023, description:"Long-term metocean measurement campaign including wave, current, and tide monitoring for terminal expansion." },
        { id:43, name:"Dammam Coastal Topo",                   service:"Topographic Survey",      lat:26.434, lng:50.103,  country:"Saudi Arabia",city:"Dammam",         client:"Eastern Province",    year:2024, description:"Coastal topographic and bathymetric survey for shoreline protection and recreational development planning." },
        { id:44, name:"Safaniya Field Weather",                service:"Weather Forecasting",     lat:28.020, lng:48.900,  country:"Saudi Arabia",city:"Safaniya",       client:"Saudi Aramco",        year:2023, description:"Operational marine weather forecasting for offshore drilling and production operations in Safaniya field." },
        { id:45, name:"Red Sea Desktop Study",                 service:"Desktop Study",           lat:22.300, lng:38.800,  country:"Saudi Arabia",city:"Red Sea Coast",  client:"Red Sea Global",      year:2024, description:"Environmental and metocean desktop study for luxury resort island development in the Red Sea." },
        { id:46, name:"Khafji Joint Field DPR",                service:"DPR Preparation",         lat:28.417, lng:48.500,  country:"Saudi Arabia",city:"Khafji",         client:"Saudi Aramco",        year:2023, description:"DPR for offshore platform decommissioning plan including waste management and environmental assessment." },
        { id:47, name:"Marjan Field Consultancy",              service:"Project Consultancy",     lat:27.580, lng:49.470,  country:"Saudi Arabia",city:"Marjan",         client:"Saudi Aramco",        year:2024, description:"Technical consultancy for Marjan field expansion program including survey methodology design and QA/QC planning." },

        // ── Qatar (5) ──
        { id:48, name:"North Field Expansion Survey",          service:"Geophysical Survey",      lat:26.100, lng:52.000,  country:"Qatar",       city:"North Field",    client:"QatarEnergy",         year:2024, description:"Extensive geophysical survey program for North Field Expansion LNG project seabed characterization." },
        { id:49, name:"Doha Port Bathymetry",                  service:"Bathymetry Survey",       lat:25.295, lng:51.534,  country:"Qatar",       city:"Doha",           client:"Mwani Qatar",         year:2023, description:"Maintenance dredging bathymetric survey for Hamad Port navigation channel and turning basin." },
        { id:50, name:"Ras Laffan Pipeline",                   service:"Platform & Pipeline",     lat:25.930, lng:51.530,  country:"Qatar",       city:"Ras Laffan",     client:"QatarEnergy",         year:2024, description:"Subsea pipeline route survey and pre-lay inspection for new LNG export pipeline corridor." },
        { id:51, name:"Qatar Telecom Cable",                   service:"Submarine Cables",        lat:25.400, lng:51.400,  country:"Qatar",       city:"Doha",           client:"Ooredoo",             year:2023, description:"Submarine cable route survey and burial assessment for international fiber optic telecommunications cable." },
        { id:52, name:"Al Shaheen Geotechnical",               service:"Geotechnical Services",   lat:26.200, lng:51.800,  country:"Qatar",       city:"Al Shaheen",     client:"North Oil Company",   year:2024, description:"Offshore geotechnical investigation for wellhead platform jacket foundation design." },

        // ── Oman (5) ──
        { id:53, name:"Duqm Port Bathymetry",                  service:"Bathymetry Survey",       lat:19.655, lng:57.704,  country:"Oman",        city:"Duqm",           client:"OPAZ",                year:2024, description:"Pre-dredge and post-dredge multibeam bathymetric survey for Duqm port commercial berth construction." },
        { id:54, name:"Muscat Desalination Geophysical",       service:"Geophysical Survey",      lat:23.588, lng:58.394,  country:"Oman",        city:"Muscat",         client:"OPWP",                year:2023, description:"Marine geophysical survey for intake and outfall pipeline routing of desalination plant expansion." },
        { id:55, name:"Sohar Port Topo",                       service:"Topographic Survey",      lat:24.381, lng:56.626,  country:"Oman",        city:"Sohar",          client:"Sohar Port",          year:2024, description:"Integrated topographic and hydrographic survey for port masterplan update and future berth allocation." },
        { id:56, name:"Masirah Island Oceanography",           service:"Oceanography",            lat:20.675, lng:58.890,  country:"Oman",        city:"Masirah",        client:"Oman Navy",           year:2023, description:"Oceanographic survey including current profiling, wave measurement, and water column characterization." },
        { id:57, name:"Sur LNG Terminal CP",                   service:"Cathodic Protection",     lat:22.570, lng:59.528,  country:"Oman",        city:"Sur",            client:"Oman LNG",            year:2024, description:"Cathodic protection survey and life extension assessment for LNG loading terminal marine structures." },

        // ── Kuwait (3) ──
        { id:58, name:"Kuwait Bay Environmental",              service:"Oceanography",            lat:29.350, lng:47.900,  country:"Kuwait",      city:"Kuwait Bay",     client:"KNPC",                year:2024, description:"Environmental oceanographic baseline survey for proposed refinery marine intake and outfall system." },
        { id:59, name:"Mina Al Ahmadi Pipeline",               service:"Platform & Pipeline",     lat:29.051, lng:48.137,  country:"Kuwait",      city:"Mina Al Ahmadi", client:"KOC",                 year:2023, description:"Pipeline integrity survey and CP assessment for aging offshore pipeline network." },
        { id:60, name:"Bubiyan Island Survey",                 service:"Bathymetry Survey",       lat:29.750, lng:48.350,  country:"Kuwait",      city:"Bubiyan",        client:"KPA",                 year:2024, description:"Hydrographic survey for Bubiyan Island port development feasibility and channel design." },

        // ── West Africa — Nigeria (8) ──
        { id:61, name:"Lagos Deep Offshore Geophysical",       service:"Geophysical Survey",      lat:6.260,  lng:3.303,   country:"Nigeria",     city:"Lagos",          client:"Shell Nigeria",       year:2024, description:"Deep water geophysical survey for pipeline route optimization in OML blocks offshore Lagos." },
        { id:62, name:"Bonny Island LNG Pipeline",             service:"Platform & Pipeline",     lat:4.424,  lng:7.162,   country:"Nigeria",     city:"Bonny",          client:"NLNG",                year:2023, description:"Subsea pipeline survey and inspection for Nigeria LNG plant export pipeline system." },
        { id:63, name:"Escravos Terminal Bathymetry",          service:"Bathymetry Survey",       lat:5.607,  lng:5.200,   country:"Nigeria",     city:"Escravos",       client:"Chevron Nigeria",     year:2024, description:"Maintenance bathymetric survey for Escravos terminal approach channel and anchorage areas." },
        { id:64, name:"Bonga FPSO Positioning",                service:"Positioning (WAPS)",      lat:5.200,  lng:4.300,   country:"Nigeria",     city:"Bonga Field",    client:"Shell Nigeria",       year:2023, description:"FPSO positioning verification and mooring alignment survey using acoustic positioning systems." },
        { id:65, name:"Egina Field UXO Survey",                service:"UXO Gradiometer",         lat:5.100,  lng:4.200,   country:"Nigeria",     city:"Egina Field",    client:"Total Nigeria",       year:2024, description:"Pre-installation UXO clearance survey using marine magnetometer and gradiometer for subsea infrastructure." },
        { id:66, name:"Akpo Field Weather Forecast",           service:"Weather Forecasting",     lat:5.400,  lng:4.600,   country:"Nigeria",     city:"Akpo Field",     client:"Total Nigeria",       year:2023, description:"Round-the-clock weather forecasting services for deepwater drilling and construction operations." },
        { id:67, name:"Niger Delta Desktop Study",             service:"Desktop Study",           lat:4.750,  lng:6.500,   country:"Nigeria",     city:"Port Harcourt",  client:"SPDC",                year:2024, description:"Desktop study compiling historical survey data and environmental baseline for field development planning." },
        { id:68, name:"Forcados Terminal DPR",                 service:"DPR Preparation",         lat:5.350,  lng:5.350,   country:"Nigeria",     city:"Forcados",       client:"Shell Nigeria",       year:2023, description:"DPR for terminal upgrade including jetty rehabilitation and loading arm replacement project." },

        // ── West Africa — Ghana (4) ──
        { id:69, name:"Jubilee Field Pipeline Survey",         service:"Platform & Pipeline",     lat:4.800,  lng:-2.900,  country:"Ghana",       city:"Jubilee Field",  client:"Tullow Oil",          year:2024, description:"Annual pipeline inspection and seabed stability survey for Jubilee FPSO production system." },
        { id:70, name:"Takoradi Port Bathymetry",              service:"Bathymetry Survey",       lat:4.883,  lng:-1.750,  country:"Ghana",       city:"Takoradi",       client:"GPHA",                year:2023, description:"Bathymetric survey for Takoradi port expansion and oil services base development." },
        { id:71, name:"TEN Field Geotechnical",                service:"Geotechnical Services",   lat:4.600,  lng:-2.700,  country:"Ghana",       city:"TEN Field",      client:"Tullow Oil",          year:2024, description:"Geotechnical investigation for subsea manifold and flowline anchor foundation design." },
        { id:72, name:"Tema LNG Consultancy",                  service:"Project Consultancy",     lat:5.623,  lng:0.017,   country:"Ghana",       city:"Tema",           client:"Tema LNG",            year:2023, description:"Technical consultancy for floating LNG regasification terminal mooring and marine operations." },

        // ── Southeast Asia — Malaysia (7) ──
        { id:73, name:"Sabah Deepwater Geophysical",           service:"Geophysical Survey",      lat:6.300,  lng:116.100, country:"Malaysia",    city:"Sabah",          client:"Petronas",            year:2024, description:"Deepwater geophysical survey for new block exploration including HR2D seismic and geotechnical." },
        { id:74, name:"Peninsular Gas Pipeline Survey",        service:"Platform & Pipeline",     lat:4.200,  lng:103.800, country:"Malaysia",    city:"Terengganu",     client:"Petronas",            year:2023, description:"Subsea gas pipeline route survey and installation support for peninsular gas utilization project." },
        { id:75, name:"Labuan Marine Bathymetry",              service:"Bathymetry Survey",       lat:5.280,  lng:115.240, country:"Malaysia",    city:"Labuan",         client:"Marine Dept",         year:2024, description:"Hydrographic survey for navigation chart update and port approach channel assessment." },
        { id:76, name:"Miri Offshore Weather",                 service:"Weather Forecasting",     lat:4.399,  lng:113.991, country:"Malaysia",    city:"Miri",           client:"Petronas",            year:2023, description:"Offshore weather forecasting and sea state advisory services for drilling campaign support." },
        { id:77, name:"Bintulu LNG Terminal Topo",             service:"Topographic Survey",      lat:3.168,  lng:113.034, country:"Malaysia",    city:"Bintulu",        client:"Petronas LNG",        year:2024, description:"Coastal topographic survey for LNG terminal expansion including jetty approach road alignment." },
        { id:78, name:"Sarawak Cable Route",                   service:"Submarine Cables",        lat:2.100,  lng:111.400, country:"Malaysia",    city:"Sarawak",        client:"Sarawak Energy",      year:2023, description:"Submarine power cable route survey connecting offshore wind platform to onshore grid substation." },
        { id:79, name:"Kikeh Field Positioning",               service:"Positioning (WAPS)",      lat:6.500,  lng:114.500, country:"Malaysia",    city:"Kikeh Field",    client:"Murphy Oil",          year:2024, description:"Acoustic positioning and navigation services for spar platform installation campaign." },

        // ── Southeast Asia — Indonesia (5) ──
        { id:80, name:"Java Sea Pipeline Survey",              service:"Platform & Pipeline",     lat:-5.800, lng:108.300, country:"Indonesia",   city:"Java Sea",       client:"Pertamina",           year:2024, description:"Offshore pipeline route survey and seabed intervention assessment for Java Sea gas transport project." },
        { id:81, name:"Balikpapan Bay Bathymetry",             service:"Bathymetry Survey",       lat:-1.268, lng:116.827, country:"Indonesia",   city:"Balikpapan",     client:"PHE",                 year:2023, description:"Multibeam bathymetric survey for new port facility and IKN logistics hub development." },
        { id:82, name:"Makassar Strait Geophysical",           service:"Geophysical Survey",      lat:-2.100, lng:117.600, country:"Indonesia",   city:"Makassar Strait",client:"Chevron Indonesia",   year:2024, description:"Marine geophysical survey for deepwater block exploration including sub-bottom profiling." },
        { id:83, name:"Bali Submarine Cable",                  service:"Submarine Cables",        lat:-8.650, lng:115.600, country:"Indonesia",   city:"Bali",           client:"PLN",                 year:2023, description:"Submarine power cable route survey connecting Java-Bali undersea power transmission link." },
        { id:84, name:"Natuna Sea Oceanography",               service:"Oceanography",            lat:3.800,  lng:108.200, country:"Indonesia",   city:"Natuna",         client:"Pertamina",           year:2024, description:"Oceanographic and metocean measurement campaign for floating LNG production facility design." },

        // ── Europe (10) ──
        { id:85, name:"North Sea Wind Farm Survey",            service:"Geophysical Survey",      lat:53.500, lng:2.500,   country:"UK",          city:"North Sea",      client:"Ørsted",              year:2024, description:"Comprehensive geophysical survey for offshore wind farm site characterization in UK North Sea sector." },
        { id:86, name:"Mediterranean Cable Route",             service:"Submarine Cables",        lat:36.500, lng:14.500,  country:"Malta",       city:"Mediterranean",  client:"ElectraLink",         year:2023, description:"Submarine cable route survey for Malta-Sicily interconnector power cable crossing." },
        { id:87, name:"Rotterdam Port Bathymetry",             service:"Bathymetry Survey",       lat:51.891, lng:4.473,   country:"Netherlands", city:"Rotterdam",       client:"Port of Rotterdam",   year:2024, description:"Routine bathymetric monitoring survey for Maasvlakte 2 deep water approach channel maintenance." },
        { id:88, name:"Norwegian Fjord Topo",                  service:"Topographic Survey",      lat:60.392, lng:5.324,   country:"Norway",      city:"Bergen",         client:"Equinor",             year:2023, description:"Coastal and nearshore topographic survey for subsea template installation area in Norwegian fjord." },
        { id:89, name:"Baltic Sea UXO Survey",                 service:"UXO Gradiometer",         lat:55.600, lng:12.800,  country:"Denmark",     city:"Baltic Sea",     client:"Energinet",           year:2024, description:"Pre-construction UXO magnetometer survey for Baltic Pipe gas pipeline route clearance." },
        { id:90, name:"Adriatic Sea Oceanography",             service:"Oceanography",            lat:43.200, lng:15.800,  country:"Italy",       city:"Adriatic",       client:"ENI",                 year:2023, description:"Year-round oceanographic monitoring program including ADCP and wave measurement for offshore platform design." },
        { id:91, name:"Caspian Sea Desktop Study",             service:"Desktop Study",           lat:41.000, lng:50.300,  country:"Azerbaijan",  city:"Baku",           client:"BP",                  year:2024, description:"Desktop study and data gap analysis for Shah Deniz Phase 3 subsea infrastructure expansion." },
        { id:92, name:"Black Sea Geotechnical",                service:"Geotechnical Services",   lat:43.300, lng:28.700,  country:"Bulgaria",    city:"Varna",          client:"Lukoil",              year:2023, description:"Marine geotechnical survey for offshore gas platform foundation design in Bulgarian Black Sea waters." },
        { id:93, name:"Portuguese Coast Weather",              service:"Weather Forecasting",     lat:38.700, lng:-9.150,  country:"Portugal",    city:"Lisbon",         client:"REN",                 year:2024, description:"Marine weather forecasting services for offshore renewable energy test site operations." },
        { id:94, name:"Greek Island Consultancy",              service:"Project Consultancy",     lat:37.900, lng:25.200,  country:"Greece",      city:"Cyclades",       client:"IPTO",                year:2023, description:"Technical consultancy for submarine cable interconnection linking Greek islands to mainland grid." },

        // ── Americas (6) ──
        { id:95, name:"Gulf of Mexico Pipeline",               service:"Platform & Pipeline",     lat:28.500, lng:-89.500, country:"USA",         city:"Gulf of Mexico",  client:"Shell USA",           year:2024, description:"Deepwater pipeline inspection and free-span remediation survey in Gulf of Mexico production area." },
        { id:96, name:"Guyana Offshore Geophysical",           service:"Geophysical Survey",      lat:7.500,  lng:-57.500, country:"Guyana",      city:"Stabroek Block", client:"ExxonMobil",          year:2023, description:"Ultra-deepwater geophysical survey for FPSO mooring design and subsea infrastructure planning." },
        { id:97, name:"Brazil Pre-Salt Bathymetry",            service:"Bathymetry Survey",       lat:-23.500,lng:-42.000, country:"Brazil",      city:"Santos Basin",   client:"Petrobras",           year:2024, description:"High-resolution multibeam survey for subsea equipment installation in pre-salt production area." },
        { id:98, name:"Trinidad Gas CP Survey",                service:"Cathodic Protection",     lat:10.400, lng:-61.300, country:"Trinidad",    city:"Point Lisas",    client:"Atlantic LNG",        year:2023, description:"Cathodic protection evaluation and anode life assessment for LNG marine loading terminal." },
        { id:99, name:"Suriname Exploration DPR",              service:"DPR Preparation",         lat:6.500,  lng:-55.500, country:"Suriname",    city:"Block 58",       client:"TotalEnergies",       year:2024, description:"DPR for exploration drilling campaign including well site survey and environmental management plan." },
        { id:100,name:"Mexico Gulf Geotechnical",              service:"Geotechnical Services",   lat:19.200, lng:-96.100, country:"Mexico",      city:"Veracruz",       client:"Pemex",               year:2023, description:"Offshore geotechnical investigation for shallow water platform jacket foundation in Bay of Campeche." }
    ];

    const STORAGE_KEY = 'OS_GLOBE_PROJECTS';
    let PROJECTS = [];

    function loadProjects() {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                PROJECTS = JSON.parse(stored);
            } catch (e) {
                PROJECTS = [...DEFAULT_PROJECTS];
            }
        } else {
            PROJECTS = [...DEFAULT_PROJECTS];
        }
    }

    // Load initial projects list
    loadProjects();

    // ─── State ───────────────────────────────────────────────────────
    let globe = null;
    let activeFilters = new Set(SERVICE_LIST);
    let searchQuery = '';
    let selectedProject = null;
    let autoRotateSpeed = 0.15;
    let isUserInteracting = false;
    let idleTimer = null;
    let allVisible = true;

    // ─── Helpers ─────────────────────────────────────────────────────
    function getFilteredProjects() {
        let filtered = PROJECTS.filter(p => activeFilters.has(p.service));
        if (searchQuery) {
            const q = searchQuery.toLowerCase();
            filtered = filtered.filter(p =>
                p.name.toLowerCase().includes(q) ||
                p.service.toLowerCase().includes(q) ||
                p.country.toLowerCase().includes(q) ||
                p.city.toLowerCase().includes(q) ||
                (p.client && p.client.toLowerCase().includes(q))
            );
        }
        return filtered;
    }

    function getStats() {
        const filtered = getFilteredProjects();
        const countries = new Set(filtered.map(p => p.country));
        return { projects: filtered.length, countries: countries.size };
    }

    function getServiceCount(service) {
        return PROJECTS.filter(p => p.service === service).length;
    }

    // ─── Star Field Background ───────────────────────────────────────
    function initStarField() {
        const canvas = document.getElementById('star-field');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let w, h, stars = [];

        function resize() {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
        }

        function createStars() {
            stars = [];
            const count = Math.floor((w * h) / 2000);
            for (let i = 0; i < count; i++) {
                stars.push({
                    x: Math.random() * w,
                    y: Math.random() * h,
                    r: Math.random() * 1.3 + 0.3,
                    alpha: Math.random() * 0.6 + 0.2,
                    twinkleSpeed: Math.random() * 0.02 + 0.005,
                    phase: Math.random() * Math.PI * 2
                });
            }
        }

        let t = 0;
        function draw() {
            ctx.clearRect(0, 0, w, h);
            t += 0.016;
            for (const s of stars) {
                const a = s.alpha + Math.sin(t * s.twinkleSpeed * 60 + s.phase) * 0.15;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(200, 220, 255, ${Math.max(0.05, a)})`;
                ctx.fill();
            }
            requestAnimationFrame(draw);
        }

        resize();
        createStars();
        draw();

        window.addEventListener('resize', () => {
            resize();
            createStars();
        });
    }

    // ─── Marker DOM Element ──────────────────────────────────────────
    function createMarkerElement(project, index) {
        const svc = SERVICES[project.service];
        const el = document.createElement('div');
        el.className = 'globe-marker entering';
        el.style.setProperty('--marker-color', svc.color);
        el.style.setProperty('--marker-glow', svc.color + '80');
        el.style.animationDelay = `${index * 30}ms`;

        el.innerHTML = `
            <div class="marker-pulse"></div>
            <div class="marker-icon" style="background:${svc.color}; color: #fff;">
                <span style="font-size:12px;">${svc.icon}</span>
            </div>
            <div class="marker-tooltip">
                <div class="tooltip-name">${project.name}</div>
                <div class="tooltip-service" style="color:${svc.color}">${project.service}</div>
            </div>
        `;

        el.addEventListener('click', (e) => {
            e.stopPropagation();
            openProjectCard(project);
            globe.pointOfView({ lat: project.lat, lng: project.lng, altitude: 1.2 }, 1200);
        });

        return el;
    }

    // ─── Project Detail Card ─────────────────────────────────────────
    function openProjectCard(project) {
        selectedProject = project;
        const svc = SERVICES[project.service];
        const overlay = document.getElementById('project-card-overlay');

        document.getElementById('card-service').textContent = project.service;
        document.getElementById('card-service').style.background = svc.color + '22';
        document.getElementById('card-service').style.color = svc.color;
        document.getElementById('card-name').textContent = project.name;
        document.getElementById('card-location').innerHTML = `
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                <circle cx="12" cy="9" r="2.5"/>
            </svg>
            ${project.city}, ${project.country}
        `;
        document.getElementById('card-description').textContent = project.description;
        document.getElementById('card-client').textContent = project.client || '—';
        document.getElementById('card-year').textContent = project.year || '—';
        document.getElementById('card-coords').textContent = `${project.lat.toFixed(2)}°, ${project.lng.toFixed(2)}°`;
        document.getElementById('card-category').textContent = project.service;
        document.getElementById('card-category').style.color = svc.color;

        overlay.classList.add('active');
    }

    function closeProjectCard() {
        const overlay = document.getElementById('project-card-overlay');
        overlay.classList.remove('active');
        selectedProject = null;
    }

    // ─── Filter Panel ────────────────────────────────────────────────
    function buildFilterPanel() {
        const container = document.getElementById('filter-list');
        container.innerHTML = '';

        SERVICE_LIST.forEach(service => {
            const svc = SERVICES[service];
            const count = getServiceCount(service);
            const item = document.createElement('label');
            item.className = 'filter-item';
            item.style.setProperty('--filter-color', svc.color);

            item.innerHTML = `
                <input type="checkbox" checked data-service="${service}">
                <span class="filter-check"></span>
                <span class="filter-label">${service}</span>
                <span class="filter-count">${count}</span>
            `;

            const checkbox = item.querySelector('input');
            checkbox.addEventListener('change', () => {
                if (checkbox.checked) {
                    activeFilters.add(service);
                } else {
                    activeFilters.delete(service);
                }
                updateGlobe();
                updateStats();
            });

            container.appendChild(item);
        });
    }

    function toggleAllFilters() {
        const checkboxes = document.querySelectorAll('#filter-list input[type="checkbox"]');
        allVisible = !allVisible;

        checkboxes.forEach(cb => {
            cb.checked = allVisible;
            const service = cb.dataset.service;
            if (allVisible) {
                activeFilters.add(service);
            } else {
                activeFilters.delete(service);
            }
        });

        document.getElementById('toggle-all-btn').textContent = allVisible ? 'Hide All' : 'Show All';
        updateGlobe();
        updateStats();
    }

    // ─── Search ──────────────────────────────────────────────────────
    function initSearch() {
        const input = document.getElementById('search-input');
        const clearBtn = document.getElementById('search-clear');
        let debounceTimer;

        input.addEventListener('input', () => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                searchQuery = input.value.trim();
                clearBtn.classList.toggle('visible', searchQuery.length > 0);
                updateGlobe();
                updateStats();
            }, 300);
        });

        clearBtn.addEventListener('click', () => {
            input.value = '';
            searchQuery = '';
            clearBtn.classList.remove('visible');
            updateGlobe();
            updateStats();
        });
    }

    // ─── Stats ───────────────────────────────────────────────────────
    function updateStats() {
        const stats = getStats();
        document.getElementById('stat-projects').textContent = stats.projects;
        document.getElementById('stat-countries').textContent = stats.countries;
    }

    // ─── Globe Init ──────────────────────────────────────────────────
    function updateGlobe() {
        if (!globe) return;
        const filtered = getFilteredProjects();
        globe.htmlElementsData(filtered);
    }

    function initGlobe() {
        const container = document.getElementById('globe-container');

        globe = Globe()
            .globeImageUrl('https://unpkg.com/three-globe@2.35.0/example/img/earth-blue-marble.jpg')
            .bumpImageUrl('https://unpkg.com/three-globe@2.35.0/example/img/earth-topology.png')
            .backgroundImageUrl('')
            .backgroundColor('rgba(0,0,0,0)')
            .showAtmosphere(true)
            .atmosphereColor('#06b6d4')
            .atmosphereAltitude(0.2)
            .htmlElementsData(getFilteredProjects())
            .htmlElement(d => createMarkerElement(d, PROJECTS.indexOf(d)))
            .htmlAltitude(0.01)
            .width(container.clientWidth)
            .height(container.clientHeight)
            (container);

        // Camera initial position (centered on India / Middle East)
        globe.pointOfView({ lat: 20, lng: 65, altitude: 2.5 });

        // Auto-rotation
        globe.controls().autoRotate = true;
        globe.controls().autoRotateSpeed = autoRotateSpeed;
        globe.controls().enableDamping = true;
        globe.controls().dampingFactor = 0.1;

        // Pause rotation on user interaction
        const controls = globe.controls();
        controls.addEventListener('start', () => {
            isUserInteracting = true;
            clearTimeout(idleTimer);
            controls.autoRotate = false;
        });

        controls.addEventListener('end', () => {
            isUserInteracting = false;
            idleTimer = setTimeout(() => {
                controls.autoRotate = true;
            }, 5000);
        });

        // Close card when clicking globe background (or pick coordinates)
        globe.onGlobeClick((coords) => {
            if (isPicking) {
                const latInput = document.getElementById('new-project-lat');
                const lngInput = document.getElementById('new-project-lng');
                if (latInput && lngInput) {
                    latInput.value = coords.lat.toFixed(6);
                    lngInput.value = coords.lng.toFixed(6);
                }
                
                isPicking = false;
                document.getElementById('btn-pick-coords').classList.remove('active');
                document.body.classList.remove('picking-location');
                showToast("Coordinates captured!");
                globe.controls().autoRotate = true;
            } else {
                closeProjectCard();
            }
        });

        // Responsive resize
        window.addEventListener('resize', () => {
            globe.width(container.clientWidth);
            globe.height(container.clientHeight);
        });

        // Customize the Three.js scene for extra polish
        const scene = globe.scene();
        const renderer = globe.renderer();
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Add subtle ambient light using Globe.GL's bundled Three.js
        try {
            const THREE = window.THREE || Object.getPrototypeOf(scene).constructor.__proto__;
            if (window.THREE) {
                const ambientLight = new THREE.AmbientLight(0x404060, 1.0);
                scene.add(ambientLight);
            }
        } catch (e) {
            // Globe.GL handles lighting internally — no action needed
        }

        // Hide loader
        setTimeout(() => {
            document.getElementById('globe-loader').classList.add('hidden');
        }, 1500);
    }

    // ─── Reset View ──────────────────────────────────────────────────
    function resetView() {
        if (!globe) return;
        globe.pointOfView({ lat: 20, lng: 65, altitude: 2.5 }, 1200);
        closeProjectCard();
        globe.controls().autoRotate = true;
    }

    // ─── Mobile Filter Toggle ────────────────────────────────────────
    function initMobileToggle() {
        const btn = document.getElementById('mobile-filter-toggle');
        const panel = document.getElementById('filter-panel');

        btn.addEventListener('click', () => {
            panel.classList.toggle('mobile-open');
        });

        // Close on outside tap
        document.addEventListener('click', (e) => {
            if (!panel.contains(e.target) && !btn.contains(e.target)) {
                panel.classList.remove('mobile-open');
            }
        });
    }

    // ─── Admin Panel Logic ───────────────────────────────────────────
    let isPicking = false;

    function populateServiceDropdown() {
        const select = document.getElementById('new-project-service');
        if (!select) return;
        select.innerHTML = '';
        SERVICE_LIST.forEach(svc => {
            const option = document.createElement('option');
            option.value = svc;
            option.textContent = svc;
            select.appendChild(option);
        });
    }

    function initAdminPanel() {
        const toggleBtn = document.getElementById('admin-toggle-btn');
        const closeBtn = document.getElementById('admin-close-btn');
        const panel = document.getElementById('admin-panel');
        const form = document.getElementById('add-project-form');
        const pickBtn = document.getElementById('btn-pick-coords');
        
        const exportBtn = document.getElementById('btn-export-json');
        const importInput = document.getElementById('import-json-input');
        const resetBtn = document.getElementById('btn-reset-data');

        populateServiceDropdown();

        // Slide panel in/out
        toggleBtn.addEventListener('click', () => {
            panel.classList.toggle('active');
        });
        
        closeBtn.addEventListener('click', () => {
            panel.classList.remove('active');
            if (isPicking) cancelCoordinatePicking();
        });

        // Picking coordinates mode
        pickBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            isPicking = !isPicking;
            pickBtn.classList.toggle('active', isPicking);
            document.body.classList.toggle('picking-location', isPicking);
            
            if (isPicking) {
                showToast("Click on the Globe to select coordinates!");
                if (globe) globe.controls().autoRotate = false;
            } else {
                if (globe) globe.controls().autoRotate = true;
            }
        });

        function cancelCoordinatePicking() {
            isPicking = false;
            pickBtn.classList.remove('active');
            document.body.classList.remove('picking-location');
            if (globe) globe.controls().autoRotate = true;
        }

        // Form Submit
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const name = document.getElementById('new-project-name').value.trim();
            const service = document.getElementById('new-project-service').value;
            const lat = parseFloat(document.getElementById('new-project-lat').value);
            const lng = parseFloat(document.getElementById('new-project-lng').value);
            const city = document.getElementById('new-project-city').value.trim();
            const country = document.getElementById('new-project-country').value.trim();
            const client = document.getElementById('new-project-client').value.trim();
            const yearVal = document.getElementById('new-project-year').value;
            const year = yearVal ? parseInt(yearVal) : new Date().getFullYear();
            const description = document.getElementById('new-project-desc').value.trim();

            const newProject = {
                id: Date.now(),
                name,
                service,
                lat,
                lng,
                city,
                country,
                client,
                year,
                description
            };

            PROJECTS.push(newProject);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(PROJECTS));

            // Refresh UI
            updateGlobe();
            updateStats();
            buildFilterPanel();

            showToast(`Added: "${name}"`);
            form.reset();
            panel.classList.remove('active');
            cancelCoordinatePicking();

            // Zoom in on it
            if (globe) {
                globe.pointOfView({ lat, lng, altitude: 1.4 }, 1200);
                globe.controls().autoRotate = false;
            }
        });

        // Backup Export
        exportBtn.addEventListener('click', () => {
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(PROJECTS, null, 2));
            const downloadAnchor = document.createElement('a');
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", "ocean-science-projects.json");
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
            showToast("Exported projects list successfully!");
        });

        // Backup Import
        importInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(evt) {
                try {
                    const parsed = JSON.parse(evt.target.result);
                    if (Array.isArray(parsed)) {
                        PROJECTS = parsed;
                        localStorage.setItem(STORAGE_KEY, JSON.stringify(PROJECTS));
                        updateGlobe();
                        updateStats();
                        buildFilterPanel();
                        showToast("Imported projects successfully!");
                    } else {
                        showToast("Invalid file: must be a projects array.");
                    }
                } catch (err) {
                    showToast("Error reading file.");
                }
            };
            reader.readAsText(file);
        });

        // Reset data
        resetBtn.addEventListener('click', () => {
            if (confirm("Reset database? This clears all added projects and restores defaults.")) {
                localStorage.removeItem(STORAGE_KEY);
                PROJECTS = [...DEFAULT_PROJECTS];
                updateGlobe();
                updateStats();
                buildFilterPanel();
                showToast("Data reset to defaults.");
            }
        });
    }

    // Toast Notification helper
    function showToast(message) {
        let toast = document.getElementById('globe-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'globe-toast';
            toast.className = 'globe-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('active');

        clearTimeout(toast.timer);
        toast.timer = setTimeout(() => {
            toast.classList.remove('active');
        }, 4000);
    }

    // ─── Boot ────────────────────────────────────────────────────────
    function init() {
        // Detect iframe mode
        if (window.self !== window.top) {
            document.body.classList.add('in-iframe');
        }

        initStarField();
        buildFilterPanel();
        initSearch();
        updateStats();
        initMobileToggle();
        initAdminPanel();

        // Event Listeners
        document.getElementById('toggle-all-btn').addEventListener('click', toggleAllFilters);
        document.getElementById('reset-view-btn').addEventListener('click', resetView);
        document.getElementById('card-close-btn').addEventListener('click', closeProjectCard);
        document.getElementById('project-card-overlay').addEventListener('click', (e) => {
            if (e.target === e.currentTarget) closeProjectCard();
        });

        // Listen for messages from parent window
        window.addEventListener('message', (e) => {
            if (e.data && e.data.type === 'focus-project') {
                const { lat, lng, name } = e.data;
                
                // Find matching project
                const p = PROJECTS.find(proj => Math.abs(proj.lat - lat) < 0.05 && Math.abs(proj.lng - lng) < 0.05) ||
                          PROJECTS.find(proj => proj.name.toLowerCase().includes(name.toLowerCase()));
                          
                if (p && globe) {
                    openProjectCard(p);
                    globe.pointOfView({ lat: p.lat, lng: p.lng, altitude: 1.3 }, 1200);
                    globe.controls().autoRotate = false;
                }
            }
        });

        // Initialize globe
        initGlobe();
    }

    // Wait for DOM
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
