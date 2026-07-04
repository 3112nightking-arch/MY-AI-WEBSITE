import os
import sqlite3
import gzip
import io
from datetime import datetime
from flask import Flask, render_template, request, jsonify, make_response # type: ignore

app = Flask(__name__, template_folder='.', static_folder='.', static_url_path='')

DATABASE_PATH = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'database.db')

def init_db():
    conn = sqlite3.connect(DATABASE_PATH)
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS contacts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            subject TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS rfqs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            company TEXT NOT NULL,
            contact_name TEXT NOT NULL,
            email TEXT NOT NULL,
            env TEXT NOT NULL,
            services TEXT NOT NULL,
            depth TEXT NOT NULL,
            size TEXT NOT NULL,
            date TEXT NOT NULL,
            datum TEXT NOT NULL,
            coords TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    conn.commit()
    conn.close()

# Initialize Database on startup
init_db()

# Gzip compression middleware to make site load extremely fast
@app.after_request
def compress(response):
    accept_encoding = request.headers.get('Accept-Encoding', '')
    if 'gzip' not in accept_encoding.lower():
        return response
    if response.status_code < 200 or response.status_code >= 300:
        return response
    if 'gzip' in response.headers.get('Content-Encoding', ''):
        return response
    
    # Compress content for HTML, CSS, JS and JSON
    content_type = response.headers.get('Content-Type', '')
    if not any(t in content_type for t in ['html', 'css', 'javascript', 'json']):
        return response

    response.direct_passthrough = False
    data = response.get_data()
    
    gzip_buffer = io.BytesIO()
    with gzip.GzipFile(mode='wb', fileobj=gzip_buffer) as gzip_file:
        gzip_file.write(data)
        
    response.set_data(gzip_buffer.getvalue())
    response.headers['Content-Encoding'] = 'gzip'
    response.headers['Content-Length'] = len(response.get_data())
    return response

# Cache control for assets
@app.after_request
def add_cache_headers(response):
    path = request.path
    if path.startswith('/static/'):
        # Cache static resources for 1 day
        response.headers['Cache-Control'] = 'public, max-age=86400'
    return response

@app.route('/')
def home():
    return render_template('INDEX.HTML')

@app.route('/submit-contact', methods=['POST'])
def submit_contact():
    try:
        data = request.json or request.form
        name = data.get('name')
        email = data.get('email')
        subject = data.get('subject')
        message = data.get('message')
        
        if not all([name, email, subject, message]):
            return jsonify({'status': 'error', 'message': 'Missing required fields'}), 400
            
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        cursor.execute(
            'INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)',
            (name, email, subject, message)
        )
        conn.commit()
        conn.close()
        
        return jsonify({'status': 'success', 'message': 'Contact request stored successfully.'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/submit-rfq', methods=['POST'])
def submit_rfq():
    try:
        data = request.json or request.form
        company = data.get('company')
        contact_name = data.get('contact_name')
        email = data.get('email')
        env = data.get('env', 'Not Specified')
        services = data.get('services', '')
        depth = data.get('depth', 'Not Specified')
        size = data.get('size', 'Not Specified')
        date = data.get('date', 'Not Specified')
        datum = data.get('datum', 'Not Specified')
        coords = data.get('coords', 'None Provided')
        
        if not all([company, contact_name, email]):
            return jsonify({'status': 'error', 'message': 'Missing required client fields'}), 400
            
        conn = sqlite3.connect(DATABASE_PATH)
        cursor = conn.cursor()
        cursor.execute(
            '''INSERT INTO rfqs (company, contact_name, email, env, services, depth, size, date, datum, coords) 
               VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)''',
            (company, contact_name, email, env, services, depth, size, date, datum, coords)
        )
        conn.commit()
        conn.close()
        
        return jsonify({'status': 'success', 'message': 'RFQ request stored successfully.'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)}), 500

@app.route('/api/fleet-telemetry', methods=['GET'])
def get_fleet_telemetry():
    # Serve real-time GPS coordinates and statuses for B2B fleet from backend
    fleet_data = [
        {
            'id': 'vessel-01',
            'category': 'vessel',
            'name': 'GTV Samudra Sarvekshak',
            'tag': 'GEOTECHNICAL DRILL VESSEL',
            'desc': 'ONGC owned Geotechnical Drilling Vessel operated by Ocean Science. Outfitted with offshore boring towers, heave compensation, seabed CPT setups, and an on-board soil mechanics testing laboratory.',
            'specs': {
                'Length Overall': '76.4 meters',
                'Max Drilling Depth': '300m below seabed',
                'CPT Push Capacity': '10-20 Tons (AP10)',
                'Dynamic Positioning': 'DP-1 System Grade',
                'Berthing Capacity': '58 berths',
                'Certifications': 'IRS / DNV GL Class'
            },
            'mission': {
                'status': 'ACTIVE MISSION',
                'project': 'KG Basin Soil Boring Campaign',
                'client': 'GAIL (India) Limited',
                'lat': 16.989124,
                'lng': 82.247510,
                'speed': 2.1
            }
        },
        {
            'id': 'vessel-02',
            'category': 'vessel',
            'name': 'OSS Shield',
            'tag': 'MULTI-ROLE SURVEY VESSEL',
            'desc': 'Main research and survey vessel mobilized for offshore geophysics, side-scan sweeps, cable route routing, and deepwater metocean deployments.',
            'specs': {
                'Length Overall': '48.2 meters',
                'Swath Mapping': 'Kongsberg EM2040 Dual RX',
                'Magnetometer Sweep': 'EdgeTech Gradiometer Rig',
                'Sub-Bottom Profiler': 'Innomar Parametric SBP',
                'Positioning System': 'Veripos Dual GNSS (WAPS)',
                'Cruising Speed': '11.0 knots maximum'
            },
            'mission': {
                'status': 'STANDBY / CALIBRATION',
                'project': 'Sensor Calibration Trials',
                'client': 'Mumbai Port Authority',
                'lat': 18.951710,
                'lng': 72.952614,
                'speed': 0.0
            }
        },
        {
            'id': 'sensor-01',
            'category': 'sensor',
            'name': 'Kongsberg EM2040 MBES',
            'tag': 'MULTIBEAM ECHOSOUNDER',
            'desc': 'High-precision dual-receiver multibeam echosounder for shallow and deep water swath hydrographic surveys, strictly complying with IHO Special Order standards.',
            'specs': {
                'Acoustic Frequency': '200 to 400 kHz',
                'Max Swath Width': '140 degrees swath',
                'Operational Limits': '600 meters depth',
                'Ping Rate Limit': 'Up to 50 Hz',
                'Pulse Types': 'FM Chirp / CW Profile',
                'Aperture Swath': '0.5 deg beamwidth'
            },
            'mission': {
                'status': 'OPERATIONAL / CALIBRATED',
                'project': 'OSS Mumbai Depot Calibration',
                'client': 'OSS Fleet Division',
                'lat': 19.016930,
                'lng': 73.039420,
                'speed': 0.0
            }
        },
        {
            'id': 'sensor-02',
            'category': 'sensor',
            'name': 'EdgeTech 4200-FS SSS',
            'tag': 'SIDE SCAN SONAR',
            'desc': 'Digital side scan sonar system for seafloor anomaly mapping, obstacle investigation, and cable route hazard assessments.',
            'specs': {
                'Dual Frequency': '120 kHz / 410 kHz Dual',
                'Horizontal Swath': '0.3 degrees swath',
                'Swath Range': '300m per channel',
                'Signal Technology': 'Full-Spectrum Chirp',
                'Safety Coupling': 'Acoustic release tow link',
                'Depth Rating': '2000 meters limit'
            },
            'mission': {
                'status': 'ACTIVE MISSION',
                'project': 'Oman Fiber Route Survey',
                'client': 'E-Marine PJSC',
                'lat': 23.678120,
                'lng': 57.886510,
                'speed': 4.2
            }
        },
        {
            'id': 'rig-01',
            'category': 'geotech',
            'name': 'Seabed CPT ROSON-100',
            'tag': 'CONE PENETRATION RIG',
            'desc': 'Continuous seabed CPT system deployed directly on the ocean floor to measure sleeve friction and soil shear profiles.',
            'specs': {
                'Pushing Force': '100 kN (10 Tons force)',
                'Depth Limits': '2000 meters subsea',
                'Bore Penetration': 'Up to 25 meters subsea',
                'Measurement': 'Cone resistance & pore pressure',
                'Link Interface': 'Fiber-optic data wireline',
                'Hydraulic Power': '400V 3-Phase power pack'
            },
            'mission': {
                'status': 'OPERATIONAL / TESTED',
                'project': 'Maintenance Bench Testing',
                'client': 'OSS Geotechnical',
                'lat': 19.016930,
                'lng': 73.039420,
                'speed': 0.0
            }
        }
    ]
    return jsonify(fleet_data)

@app.route('/admin/dashboard')
def admin_dashboard():
    # Sleek read-only HTML dashboard to review RFQs and contact form submissions
    try:
        conn = sqlite3.connect(DATABASE_PATH)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        
        cursor.execute('SELECT * FROM contacts ORDER BY created_at DESC')
        contacts = cursor.fetchall()
        
        cursor.execute('SELECT * FROM rfqs ORDER BY created_at DESC')
        rfqs = cursor.fetchall()
        
        conn.close()
        
        # Simple styled admin HTML page that matches OSS website style
        html_content = """
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>OSS B2B Console Dashboard</title>
            <script src="https://cdn.tailwindcss.com"></script>
            <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&family=JetBrains+Mono&display=swap" rel="stylesheet">
            <style>
                body { font-family: 'Outfit', sans-serif; background-color: #020617; }
                .tech { font-family: 'JetBrains Mono', monospace; }
            </style>
        </head>
        <body class="text-slate-100 p-8">
            <div class="max-w-7xl mx-auto">
                <header class="flex justify-between items-center border-b border-slate-800 pb-6 mb-8">
                    <div>
                        <h1 class="text-3xl font-bold tracking-tight text-white">OSS Operations Control</h1>
                        <p class="text-slate-400 text-sm mt-1">B2B RFQ Submissions and Client Communications</p>
                    </div>
                    <span class="bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-3 py-1 rounded text-xs tech">CONSOLE LIVE</span>
                </header>

                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <!-- RFQ Section -->
                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                        <h2 class="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                            <span>Request for Quotes (RFQs)</span>
                            <span class="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-300">""" + str(len(rfqs)) + """ total</span>
                        </h2>
                        
                        <div class="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                            """ + "".join([f"""
                            <div class="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                                <div class="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 class="font-bold text-white text-base">{rfq['company']}</h4>
                                        <p class="text-xs text-slate-400">{rfq['contact_name']} ({rfq['email']})</p>
                                    </div>
                                    <span class="text-[10px] text-cyan-400 tech bg-cyan-950 px-2 py-0.5 rounded">{rfq['created_at']}</span>
                                </div>
                                <div class="text-xs space-y-1.5 border-t border-slate-800/60 pt-2 mt-2">
                                    <div><span class="text-slate-500">ENV:</span> <span class="text-white font-semibold">{rfq['env']}</span></div>
                                    <div><span class="text-slate-500">SERVICES:</span> <span class="text-white">{rfq['services']}</span></div>
                                    <div class="grid grid-cols-2 gap-2 text-[11px]">
                                        <div><span class="text-slate-500">DEPTH:</span> {rfq['depth']}</div>
                                        <div><span class="text-slate-500">EST. SIZE:</span> {rfq['size']}</div>
                                    </div>
                                    <div class="bg-slate-950/80 p-2 rounded text-[10px] tech mt-2 text-emerald-400 overflow-x-auto whitespace-pre-wrap">{rfq['coords']}</div>
                                </div>
                            </div>
                            """ for rfq in rfqs]) + """
                        </div>
                    </div>

                    <!-- Contacts Section -->
                    <div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                        <h2 class="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                            <span>Client Messages</span>
                            <span class="text-xs bg-slate-800 px-2 py-0.5 rounded text-slate-300">""" + str(len(contacts)) + """ total</span>
                        </h2>
                        
                        <div class="space-y-4 max-h-[600px] overflow-y-auto pr-2">
                            """ + "".join([f"""
                            <div class="bg-slate-900 border border-slate-800 p-4 rounded-lg">
                                <div class="flex justify-between items-start mb-2">
                                    <div>
                                        <h4 class="font-bold text-white text-base">{c['name']}</h4>
                                        <p class="text-xs text-slate-400">{c['email']}</p>
                                    </div>
                                    <span class="text-[10px] text-cyan-400 tech bg-cyan-950 px-2 py-0.5 rounded">{c['created_at']}</span>
                                </div>
                                <div class="text-xs border-t border-slate-800/60 pt-2 mt-2">
                                    <p class="font-semibold text-slate-200 mb-1">Subject: {c['subject']}</p>
                                    <p class="text-slate-300 bg-slate-950/50 p-2.5 rounded leading-relaxed">{c['message']}</p>
                                </div>
                            </div>
                            """ for c in contacts]) + """
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
        """
        return make_response(html_content)
    except Exception as e:
        return f"<h3>Admin Dashboard Error: {str(e)}</h3>", 500

if __name__ == '__main__':
    # PORT override useful on macOS where AirPlay occupies port 5000
    app.run(host='0.0.0.0', port=int(os.environ.get('PORT', 5000)), debug=True)
