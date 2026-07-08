# Ocean Science Website

Marketing and B2B website for Ocean Science (OSS), built as a single-page site served by a lightweight Flask backend.

## Features

- Single-page website (`INDEX.HTML`) with styles in `style.css` and interactivity in `script.js`
- Contact form and Request-for-Quote (RFQ) form, stored in a local SQLite database
- Fleet telemetry API (`/api/fleet-telemetry`) serving vessel, sensor, and geotech rig data
- Read-only admin dashboard at `/admin/dashboard` to review RFQs and contact messages
- Gzip compression and cache headers for fast page loads

## Project structure

```
app.py             Flask backend (routes, forms, telemetry API, admin dashboard)
requirements.txt   Python dependencies
INDEX.HTML         Main single-page site
base.html          Base HTML template
style.css          Site styles
script.js          Site interactivity
IMAGES/            Image assets (case studies, team, services, news, logos)
database.db        SQLite database (created automatically on first run; not committed)
docs/              Reference documents (not deployed) — company profile / historical client list
```

## Running locally

```bash
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python app.py
```

The site is then available at http://localhost:5000 and the admin dashboard at http://localhost:5000/admin/dashboard.
