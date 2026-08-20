// DATA ARRAYS
const services = [
    { id: '01', title: 'Bathymetry Survey', overview: 'A bathymetric survey is the process of mapping the seafloor. It involves collecting data to measure the depth of water and to chart the underwater topography. This data is essential for various applications, including navigation, coastal engineering, and marine science.', caps: ['MBES surveys', 'Singlebeam profiles', 'Volume computation', 'Channel monitoring'], img: './IMAGES/SERVICE IMAGE/Bathymetry Survey IMG.PNG', icon: 'target' },
    { id: '02', title: 'Geophysical Survey', overview: 'Geophysical surveys are a vital tool for locating and mapping objects and features buried underground or underwater without the need for excavation.', caps: ['Side-Scan Sonar Surveys', 'Sub-Bottom profiling', 'Geohazard Identification', 'Cable route surveys'], img: './IMAGES/SERVICE IMAGE/Geophysical Surveys.PNG', icon: 'zap' },
    { id: '03', title: 'Offshore Platform Site & Pipeline Route Surveys', overview: 'Offshore platform and pipeline surveys are critical for the planning, design, and safe installation of subsea infrastructure. These specialized surveys gather detailed data about the seafloor and sub-surface conditions to mitigate risks and ensure the long-term integrity of offshore facilities.', caps: ['Platform Site Investigation', 'Pipeline Route Planning', 'Subsea Infrastructure Support'], img: './IMAGES/SERVICE IMAGE/Offshore Platform & Pipeline Surveys.PNG', icon: 'waves' },
    { id: '04', title: 'Submarine Cable Route Surveys', overview: 'Submarine cable route surveys are essential for the successful deployment and long-term operation of underwater communication and power cables. These surveys meticulously investigate the seabed conditions along the planned cable path to identify and mitigate potential risks, ensuring the cable protection and reliability.', caps: ['Cable Route Hazard Analysis', 'Seabed Condition Mapping', 'Burial Assessment Surveys'], img: './IMAGES/GIF/fotor-video_remover_object-preview-20250924122325.gif', icon: 'hard-hat' },
    { id: '05', title: 'Topographic Survey', overview: 'A topographic survey is a detailed map of the physical features of a piece of land. It provides essential information for a wide range of projects, from residential construction to large-scale engineering works. This information is crucial for architects, engineers, building contractors, and property owners to make informed decisions during the planning and design phases of a project.', caps: ['Land & Coastal Feature Mapping', 'Construction Site Planning', 'Engineering Design Support'], img: './IMAGES/GIF/topographic-survey-video-generation_ijl796Jp.GIF', icon: 'locate-fixed' },
    { id: '06', title: 'Gradiometer Surveys for UXO Search', overview: 'Gradiometer surveys are a vital geophysical technique used to detect Unexploded Ordnance (UXO). They measure the magnetic gradient of the earth magnetic field, which is the rate of change of the magnetic field strength over a distance. UXO, being ferromagnetic, cause local anomalies or distortions in this field that gradiometers can identify.', caps: ['UXO Detection & Mapping', 'Magnetic Anomaly Analysis', 'Site Clearance Certification'], img: './IMAGES/GIF/underwater-equipment-video-generation_XkB6v7sk.GIF', icon: 'flask-conical' },
    { id: '07', title: 'Shallow & Deep Water Oceanography', overview: 'Shallow Water Oceanography, also known as coastal oceanography, focuses on the ocean environment from the shoreline to the edge of the continental shelf, typically to a depth of about 200 meters. The defining characteristic of shallow water is that its depth is less than half the wavelength of a surface wave, meaning the waves are significantly influenced by the seafloor.', caps: ['Current & Wave Measurement', 'Water Quality Sampling', 'Environmental Impact Assessment'], img: './IMAGES/SERVICE IMAGE/Shallow & Deep Water Oceanography.PNG', icon: 'droplets' },
    { id: '08', title: 'Weather Forecasting Services', overview: 'Weather forecasting services use a combination of science, technology, and observation to predict the state of the atmosphere at a future time. These services are vital for public safety, transportation, agriculture, marine construction and various industries that are sensitive to weather conditions.', caps: ['Marine Weather Forecasting', 'Operational Planning Support', 'Metocean Data Analysis'], img: './IMAGES/SERVICE IMAGE/Weather Forecasting.PNG', icon: 'cloud-sun' },
    { id: '09', title: 'Wide Area Positioning Services', overview: 'Wide Area Positioning Services (WAPS) are a type of augmentation system that provides improved accuracy for standard satellite navigation systems like GPS, GLONASS, and Galileo. These services use a network of ground-based reference stations to monitor satellite signals and broadcast correction data to users over a wide geographical area, enhancing the precision of positioning. Ocean Science provides & installs Veripos Marine GNSS Correction Services for survey and many commercial vessels all over the Indian sub-continent.', caps: ['Veripos GNSS Correction', 'Vessel & ROV Positioning', 'Subsea Metrology'], img: './IMAGES/SERVICE IMAGE/positioning.PNG', icon: 'satellite' }
];

const management = [
    { name: 'Capt. Rajesh Iyer', role: 'Managing Director', init: 'RI', bg: 'from-amber-900/40', tags: ['HYDROGRAPHY', 'OFFSHORE'], bio: 'Master Mariner with 35+ years across hydrographic surveying and offshore operations.' },
    { name: 'Anita Deshpande', role: 'Director — R&D', init: 'AD', bg: 'from-blue-900/40', tags: ['GEOPHYSICS', 'IIT BOMBAY'], bio: 'PhD in Marine Geophysics, specialized in sub-bottom profiling.' },
    { name: 'Cdr. Vikram Shetty', role: 'Director — Ops', init: 'VS', bg: 'from-slate-800/60', tags: ['NAVY', 'FIELD OPS'], bio: 'Ex-Indian Navy Hydrographer leading vessel mobilisations.' },
    { name: 'Meera Nair', role: 'Head — Geotechnical', init: 'MN', bg: 'from-amber-950/50', tags: ['DRILLING', 'CPT', 'SOIL LAB'], bio: 'M.Tech Geotechnical Engineering. Leads marine drilling and CPT campaigns.' },
    { name: 'Arjun Mehta', role: 'Head — Survey Tech', init: 'AM', bg: 'from-indigo-900/40', tags: ['MULTIBEAM', 'RTK', 'PATCH TESTS'], bio: 'Manages the multibeam, ADCP and positioning fleet. Specialist in patch-test calibrations.' },
    { name: 'Priya Rao', role: 'Head — QA & Env', init: 'PR', bg: 'from-slate-900/80', tags: ['EIA', 'WATER QUALITY', 'ISO'], bio: 'ISO Lead Auditor. Heads water-quality, EIA support and quality management.' }
];

const newsPosts = [
    { cat: 'PROJECT', date: '12 April 2026', title: 'Vizhinjam Port Phase III Complete', sum: 'Monitoring delivered weekly volume reports across the breakwater extension front during the southwest monsoon window.', time: '4 min' },
    { cat: 'COMPANY', date: '4 March 2026', title: 'Triple ISO Recertification', sum: 'External audit cleared with zero non-conformities, reaffirming the firm\'s quality, environmental and HSE management systems.', time: '3 min' },
    { cat: 'PROJECT', date: '21 February 2026', title: 'Mobilisation underway for inter-island fibre cable route survey, Andaman Sea', sum: 'Field team and equipment dispatched to Port Blair for a 280 km nearshore-to-deep-water cable corridor survey.', time: '5 min' },
    { cat: 'COMPANY', date: '28 January 2026', title: 'Geotechnical laboratory expanded with new triaxial and CRS rigs', sum: 'Mumbai lab adds advanced consolidation and triaxial capacity to support offshore wind feasibility studies in the Gulf of Khambhat.', time: '3 min' },
    { cat: 'INDUSTRY', date: '15 November 2025', title: 'Paper presented at IHMA on patch-test discipline for breakwater surveys', sum: 'Director Anita Deshpande co-authored a technical paper presented at the International Harbour Masters Association annual congress.', time: '6 min' },
    { cat: 'TECHNOLOGY', date: '30 September 2025', title: 'Interferometric multibeam upgrade enables wider swath in shallow water', sum: 'New head adds dramatically wider swath coverage in waters under 8 m, halving acquisition time on shallow channel surveys.', time: '4 min' }
];

const openRoles = [
    { title: "Senior Hydrographic Surveyor", dept: "SURVEY OPERATIONS", location: "MUMBAI", exp: "6 – 10 YEARS", type: "FULL-TIME", desc: "Lead multibeam and singlebeam acquisition campaigns for ports, dredging and cable-route projects." },
    { title: "Geophysicist", dept: "GEOPHYSICS & R&D", location: "MUMBAI", exp: "3 – 6 YEARS", type: "FULL-TIME", desc: "Process and interpret side-scan, sub-bottom profile and magnetometer data." },
    { title: "Marine Geotechnical Engineer", dept: "GEOTECHNICAL SERVICES", location: "MUMBAI", exp: "4 – 8 YEARS", type: "FULL-TIME", desc: "Design and supervise offshore borehole, CPT and vibrocoring campaigns." },
    { title: "Field Survey Engineer", dept: "SURVEY OPERATIONS", location: "PAN-INDIA", exp: "1 – 3 YEARS", type: "FULL-TIME", desc: "Frontline acquisition role on bathymetry and inland-waterways campaigns." },
    { title: "Survey Data Processor", dept: "SURVEY OPERATIONS", location: "MUMBAI", exp: "2 – 5 YEARS", type: "FULL-TIME", desc: "Process raw bathymetric data and generate deliverables." },
    { title: "CAD / GIS Specialist", dept: "DELIVERABLES STUDIO", location: "MUMBAI", exp: "2 – 5 YEARS", type: "FULL-TIME", desc: "Author the AutoCAD drawings and GIS layers for final reports." }
];

const resourcesData = [
    { id: 'res-01', cat: 'Brochure', title: 'Ocean Science — Company Brochure 2026', desc: 'An overview of our six service lines, certifications, fleet of survey instruments and selected case studies from the past five years.', format: 'PDF', size: '8.4 MB', pages: '28 pages', date: '15 Jan 2026', icon: 'book-open' },
    { id: 'res-02', cat: 'Capability Sheet', title: 'Bathymetric & Hydrographic Survey Capabilities', desc: 'Detailed capability statement covering multibeam, singlebeam, ADCP and tide-gauge spreads, IHO Order compliance and recent deliverables.', format: 'PDF', size: '2.1 MB', pages: '8 pages', date: '2 Dec 2025', icon: 'file-text' },
    { id: 'res-03', cat: 'Capability Sheet', title: 'Geophysical Survey Capabilities', desc: 'Side-scan sonar, sub-bottom profiler and magnetometer service offering with sample data extracts and processing workflow.', format: 'PDF', size: '3.6 MB', pages: '10 pages', date: '2 Dec 2025', icon: 'file-text' },
    { id: 'res-04', cat: 'Capability Sheet', title: 'Marine Geotechnical Investigation Capabilities', desc: 'Offshore drilling, CPT, vibrocoring and in-house soil laboratory capabilities with reference to API RP 2GEO standards.', format: 'PDF', size: '4.2 MB', pages: '12 pages', date: '2 Dec 2025', icon: 'file-text' },
    { id: 'res-05', cat: 'Equipment List', title: 'Survey Equipment & Instrumentation Inventory', desc: 'Current inventory of multibeam heads, sonars, motion sensors, GNSS receivers and laboratory equipment, with calibration status.', format: 'PDF', size: '1.8 MB', pages: '14 pages', date: '1 Feb 2026', icon: 'wrench' },
    { id: 'res-06', cat: 'Technical Paper', title: 'Patch-Test Discipline for Long-Running Breakwater Monitoring', desc: 'Co-authored paper presented at the IHMA annual congress, distilling 18 months of continuous monitoring at Vizhinjam Port.', format: 'PDF', size: '1.2 MB', pages: '6 pages', date: '15 Nov 2025', icon: 'graduation-cap' },
    { id: 'res-07', cat: 'Standard', title: 'IHO S-44 Summary & Internal Compliance Notes', desc: 'Plain-language summary of IHO S-44 Order Special, 1a, 1b and 2 with our internal compliance procedures referenced.', format: 'PDF', size: '0.9 MB', pages: '5 pages', date: '22 Aug 2025', icon: 'scale' },
    { id: 'res-08', cat: 'Technical Paper', title: 'Bathymetry for the National Inland Waterways Mission', desc: 'Case study on conducting bathymetric and ADCP surveys across creeks and rivers in Maharashtra for inland transport development.', format: 'PDF', size: '2.7 MB', pages: '9 pages', date: '10 Jun 2025', icon: 'graduation-cap' }
];

const projectsData = [
    { company: "GAIL (INDIA) LIMITED", projectName: "Side Scan Sonar Survey in KG Basin for GAIL", location: "Andhra Pradesh", country: "India", region: "Asia", type: "Side Scan Sonar Survey", date: "May 2026", lat: 16.9891, lng: 82.2475, description: "HIRING OF SERVICES FOR SIDE SCAN SONAR SURVEY IN MAJOR WATERBODY CROSSINGS OF NG PIPELINES IN KG BASIN" },
    { company: "E-Marine PJSC", projectName: "Hiring of Dive Swim, Topographic & Inshore Survey Services", location: "Barka", country: "Oman", region: "Middle East", type: "Dive Swim, Topographic & Inshore Survey", date: "Nov 2025", lat: 23.6781, lng: 57.8865, description: "Hiring of Dive Swim, Topographic & Inshore Survey Services at Barka, Oman." },
    { company: "Cemindia Projects Limited", projectName: "Multibeam Bathymetry Survey Breakwater", location: "Vizhinjam, Kerala", country: "India", region: "Asia", type: "Multibeam Bathymetry Survey", date: "Sept 2025", lat: 8.3784, lng: 76.9905, description: "Multibeam Bathymetry Survey Breakwater, Vizhinjam, Kerala." },
    { company: "EGS Survey Middle East LLC FZ", projectName: "Hire of Personnel", location: "UAE", country: "UAE", region: "Middle East", type: "Hire of Personnel", date: "Aug 2025", lat: 25.2048, lng: 55.2708, description: "Hire of Personnel." },
    { company: "Tridel Meteorology Projects Contracting LLC", projectName: "Hiring of Personnel and Equipment", location: "Bahrain", country: "Bahrain", region: "Middle East", type: "Hiring of Personnel and Equipment", date: "Aug 2025", lat: 26.0667, lng: 50.5577, description: "Hiring of Personnel and Equipment for survey project in Bahrain." },
    { company: "Sadhav Shipping Ltd.", projectName: "Inspection of Multibeam System", location: "India", country: "India", region: "Asia", type: "Inspection", date: "Jul 2025", lat: 19.0760, lng: 72.8777, description: "Inspection of Multibeam System (ELAC 1185 system)." },
    { company: "The Shipping Corporation of India", projectName: "Provision of INMARSAT DGPS", location: "Indian Waters", country: "India", region: "Asia", type: "DGPS Services", date: "Jun 2025", lat: 18.9517, lng: 72.9526, description: "Provision of INMARSAT based differential global positioning system for ONGC owned Geotechnical Vessel (GTV) Samudra Sarvekshak." },
    { company: "Inland Waterways Authority of India", projectName: "Detailed Hydrographic Surveys", location: "Maharashtra", country: "India", region: "Asia", type: "Hydrographic Surveys", date: "Jun 2025", lat: 19.7515, lng: 75.7139, description: "Detailed Hydrographic Surveys for various National Waterways (NW-10, NW-28 & NW-53) in Maharashtra." },
    { company: "EGS Survey Middle East LLC FZ", projectName: "Hire of Personnel", location: "UAE", country: "UAE", region: "Middle East", type: "Hire of Personnel", date: "May 2025", lat: 25.2048, lng: 55.2708, description: "Hire of Personnel." },
    { company: "Ultra Dimensions Pvt. Ltd.", projectName: "Bathymetry Survey with MBES", location: "SBC Visakhapatnam", country: "India", region: "Asia", type: "Bathymetry Survey", date: "May 2025", lat: 17.6868, lng: 83.2185, description: "Bathymetry Survey with MBES at SBC Visakhapatnam." },
    { company: "IndoAsia Copper Limited", projectName: "Bathymetry Survey", location: "Jafrabad to Victor Port", country: "India", region: "Asia", type: "Bathymetry Survey", date: "Mar 2025", lat: 20.8700, lng: 71.3700, description: "Bathymetry Survey from Jafrabad to Victor Port." },
    { company: "Afcons Infrastructure Limited", projectName: "Bathymetry Survey Work at AMCSWF Project", location: "Visakhapatnam", country: "India", region: "Asia", type: "Bathymetry Survey", date: "Mar 2025", lat: 17.6868, lng: 83.2185, description: "Bathymetry Survey Work at AMCSWF Project." },
    { company: "Shanker Survey Pvt. Ltd.", projectName: "Hire of Equipment and Personnel", location: "Assam", country: "India", region: "Asia", type: "Hire of Equipment and Personnel", date: "Mar 2025", lat: 26.2006, lng: 92.9376, description: "Hire of Equipment and Personnel in Assam." },
    { company: "Shanker Survey Pvt. Ltd.", projectName: "Hire of Equipment and Personnel", location: "Chhara", country: "India", region: "Asia", type: "Hire of Equipment and Personnel", date: "Jan 2025", lat: 20.7800, lng: 71.0400, description: "Hire of Equipment and Personnel in Chhara." },
    { company: "IndoAsia Copper Limited", projectName: "Bathymetry Survey", location: "Victor Port", country: "India", region: "Asia", type: "Bathymetry Survey", date: "Dec 2024", lat: 20.9083, lng: 71.4556, description: "Bathymetry Survey at Victor Port." },
    { company: "Navitech Hydrographics India Pvt. Ltd.", projectName: "Hire of Equipment and Personnel", location: "India", country: "India", region: "Asia", type: "Hire of Equipment and Personnel", date: "Nov 2024", lat: 19.0760, lng: 72.8777, description: "Hire of Equipment and Personnel." },
    { company: "Geostar Surveys India Pvt. Ltd.", projectName: "Provision of GeoSwath MBES Operator", location: "India", country: "India", region: "Asia", type: "Provision of Personnel", date: "Nov 2024", lat: 19.0760, lng: 72.8777, description: "Provision of GeoSwath Multibeam Echosounder Operator / Processor." },
    { company: "Shankar Survey Pvt. Ltd.", projectName: "Hire of Equipment and Personnel", location: "India", country: "India", region: "Asia", type: "Hire of Equipment and Personnel", date: "Nov 2024", lat: 19.0760, lng: 72.8777, description: "Hire of Equipment and Personnel." },
    { company: "Telecommunications Consultants India Limited", projectName: "DPR preparation on submarine cable repair facility", location: "India", country: "India", region: "Asia", type: "Consultancy", date: "Aug 2024", lat: 28.6139, lng: 77.2090, description: "Consultancy partner for DPR preparation on indigenous submarine cable repair facility in India." },
    { company: "Zenith Survey (I) Pvt. Ltd.", projectName: "Hire of Equipment and Personnel", location: "India", country: "India", region: "Asia", type: "Hire of Equipment and Personnel", date: "May 2024", lat: 19.0760, lng: 72.8777, description: "Hire of Equipment and Personnel." },
    { company: "AMNS Port Hazira Limited", projectName: "Magnetometer and Multibeam survey", location: "Hazira", country: "India", region: "Asia", type: "Magnetometer and Multibeam survey", date: "May 2024", lat: 21.1000, lng: 72.7000, description: "Magnetometer and Multibeam survey." },
    { company: "Geostar Surveys India Pvt. Ltd.", projectName: "Hire of ADCP and Personnel", location: "India", country: "India", region: "Asia", type: "Hire of Equipment and Personnel", date: "May 2024", lat: 19.0760, lng: 72.8777, description: "Hire of ADCP and Personnel." },
    { company: "SAExploration Inc-Marine", projectName: "DGPS and GYRO verification", location: "Mumbai Port", country: "India", region: "Asia", type: "DGPS and GYRO verification", date: "Feb 2024", lat: 18.9517, lng: 72.9526, description: "DGPS and GYRO verification for 3 vessels at Mumbai Port." },
    { company: "The Shipping Corporation of India", projectName: "Provision of INMARSAT DGPS", location: "Indian Waters", country: "India", region: "Asia", type: "DGPS Services", date: "Jan 2024", lat: 18.9517, lng: 72.9526, description: "Provision of INMARSAT based differential global positioning system for ONGC owned Geotechnical Vessel (GTV) Samudra Sarvekshak." },
    { company: "EGS (Asia) Limited", projectName: "Provision of Personnel Support", location: "Singapore", country: "Singapore", region: "Asia", type: "Provision of Personnel Support", date: "Jan 2024", lat: 1.3521, lng: 103.8198, description: "Provision of Personnel Support onboard EGS Surveyor in Singapore." },
    { company: "Adani Hazira Port Ltd.", projectName: "ADCP, Geophysical Survey & Bathymetry", location: "South Gujarat Coast", country: "India", region: "Asia", type: "ADCP, Geophysical Survey & Bathymetry", date: "Oct 2023", lat: 20.1989, lng: 72.7481, description: "Acoustic Doppler Current Profiler (ADCP), Geophysical (Sub-bottom profiler) Survey & Multibeam Bathymetry survey works at South Gujarat Coast (Bhagod & Nargol)." },
    { company: "SAExploration Inc-Marine", projectName: "DGPS and GYRO verification", location: "Mumbai Port", country: "India", region: "Asia", type: "DGPS and GYRO verification", date: "Sept 2023", lat: 18.9517, lng: 72.9526, description: "DGPS and GYRO verification for 3 vessels at Mumbai Port." },
    { company: "Reliance Industries Limited Kakinada", projectName: "Inspection services for shallow water asset", location: "Kakinada", country: "India", region: "Asia", type: "Inspection services", date: "Aug 2023", lat: 16.9891, lng: 82.2475, description: "Inspection services for shallow water asset integrity as per SOW for block: KG-DWN-98/3." },
    { company: "National Institute of Ocean Technology", projectName: "Bathymetry Survey", location: "Tamil Nadu Coast", country: "India", region: "Asia", type: "Bathymetry Survey", date: "Jul 2023", lat: 10.9416, lng: 79.8485, description: "Conducting Bathymetry Survey along the Tamil Nadu Coast." },
    { company: "GAIL India Limited", projectName: "Side scan sonar survey", location: "India", country: "India", region: "Asia", type: "Side scan sonar survey", date: "June 2023", lat: 19.0760, lng: 72.8777, description: "Side scan sonar survey in rivers at pipeline crossings of DBPL pipeline including SPUR lines." },
    { company: "Zenith Survey (I) Pvt. Ltd.", projectName: "Hiring of survey equipment and manpower", location: "India", country: "India", region: "Asia", type: "Hiring of survey equipment and manpower", date: "May 2023", lat: 19.0760, lng: 72.8777, description: "Hiring of survey equipment and manpower." },
    { company: "DNOCS Limited", projectName: "Services for test/trial of MBES", location: "Payra Port", country: "Bangladesh", region: "Asia", type: "Services for test/trial of MBES", date: "May 2023", lat: 21.9500, lng: 90.3000, description: "Services for test/trial of multibeam Echosounder - Payra Port Authority." },
    { company: "International Seaport Dredging", projectName: "Provision of Multibeam set with operator", location: "India", country: "India", region: "Asia", type: "Provision of Equipment and Operator", date: "Apr 2023", lat: 19.0760, lng: 72.8777, description: "Provision of Multibeam set with operator." },
    { company: "EGS (Asia) Limited", projectName: "Provision of Personnel Support", location: "India", country: "India", region: "Asia", type: "Provision of Personnel Support", date: "Apr 2023", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard Ocean Invincible for RAMAN Project." },
    { company: "Amphibia Consultants Pvt. Ltd.", projectName: "Marine Route Survey", location: "India", country: "India", region: "Asia", type: "Marine Route Survey", date: "Apr 2023", lat: 19.0760, lng: 72.8777, description: "Marine Route Survey (inshore) for RAMAN Fiber Optic Cable System." },
    { company: "SAExploration Inc-Marine", projectName: "Navigation Calibration", location: "India", country: "India", region: "Asia", type: "Navigation Calibration", date: "Mar 2023", lat: 19.0760, lng: 72.8777, description: "Navigation Calibration of two vessels Nand Sarthi and Parasea." },
    { company: "Zenith Survey (I) Pvt. Ltd.", projectName: "Provision of Survey Equipment and Team", location: "Dahej", country: "India", region: "Asia", type: "Provision of Survey Equipment and Team", date: "Mar 2023", lat: 21.7000, lng: 72.6000, description: "Provision of Survey Equipment and Team for Dahej Project Site, Gujarat." },
    { company: "SAExploration Inc-Marine", projectName: "Provision of MBES System", location: "Hazira", country: "India", region: "Asia", type: "Provision of Equipment", date: "Feb 2023", lat: 21.1000, lng: 72.7000, description: "Provision of 125 KHz Multibeam System at Hazira." },
    { company: "EGS (Asia) Limited", projectName: "Provision of Personnel Support", location: "KSA", country: "Saudi Arabia", region: "Middle East", type: "Provision of Personnel Support", date: "Feb 2023", lat: 23.8859, lng: 45.0792, description: "Provision of Personnel Support onboard Ocean Invincible in KSA." },
    { company: "SAExploration Inc-Marine", projectName: "Service of Survey Engineer", location: "Hazira", country: "India", region: "Asia", type: "Service of Survey Engineer", date: "Jan 2023", lat: 21.1000, lng: 72.7000, description: "Service of Survey Engineer for shallow water hazard survey at Hazira." },
    { company: "International Seaport Dredging", projectName: "Provision of Single Beam System", location: "Kakinada", country: "India", region: "Asia", type: "Provision of Equipment", date: "Jan 2023", lat: 16.9891, lng: 82.2475, description: "Provision of Single Beam System and Operators at Kakinada." },
    { company: "International Seaport Dredging", projectName: "Provision of Multibeam System", location: "Kakinada", country: "India", region: "Asia", type: "Provision of Equipment", date: "Jan 2023", lat: 16.9891, lng: 82.2475, description: "Provision of Multibeam System and Operators at Kakinada." },
    { company: "Gujarat Pipavav Port Ltd.", projectName: "Bathymetric Survey", location: "Pipavav Port", country: "India", region: "Asia", type: "Bathymetric Survey", date: "Jan 2023", lat: 20.9083, lng: 71.4556, description: "Bathymetric Survey for Maintenance Dredging works at Gujarat Pipavav Port Limited (APM Terminals Pipavav)." },
    { company: "Lightstorm Telecom Connectivity Private Limited", projectName: "Desktop Study", location: "Mahuva, Daman, Alibaug", country: "India", region: "Asia", type: "Desktop Study", date: "Nov 2022", lat: 21.1000, lng: 71.8000, description: "Desktop Study including site visits at Mahuva, Daman, and Alibaug site." },
    { company: "SAExploration Inc-Marine", projectName: "DGPS and GYRO verification", location: "India", country: "India", region: "Asia", type: "DGPS and GYRO verification", date: "Nov 2022", lat: 19.0760, lng: 72.8777, description: "DGPS and GYRO verification for 3 vessels." },
    { company: "DNOCS Limited / OMC Bangladesh", projectName: "Services for Test / Trial of MBES", location: "Bangladesh", country: "Bangladesh", region: "Asia", type: "Services for Test / Trial of MBES", date: "Oct 2022", lat: 23.6850, lng: 90.3563, description: "Services for Test / Trial and Training of Multibeam Echo Sounder." },
    { company: "Adani Port & Special Economic Zone Ltd.", projectName: "Mundra Intake Outfall Study", location: "Mundra", country: "India", region: "Asia", type: "Study", date: "Aug 2022", lat: 22.7754, lng: 69.7158, description: "Mundra Intake Outfall Study." },
    { company: "Sati Drugs & Surgicals", projectName: "Training for Side Scan Sonar", location: "Guwahati, Assam", country: "India", region: "Asia", type: "Training", date: "July 2022", lat: 26.1445, lng: 91.7362, description: "Training for Side Scan Sonar PULSAR at Fire & Emergency Services, Assam, Guwahati." },
    { company: "Petronet LNG", projectName: "Bathymetry Survey", location: "Dahej", country: "India", region: "Asia", type: "Bathymetry Survey", date: "July 2022", lat: 21.7000, lng: 72.6000, description: "Bathymetry Survey at Dahej." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Survey Personnel Support", location: "Israel", country: "Israel", region: "Middle East", type: "Provision of Survey Personnel Support", date: "July 2022", lat: 31.0461, lng: 34.8516, description: "Provision of Survey Personnel Support for Israel Landfall Survey and Reporting." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "July 2022", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard Northern Endeavour." },
    { company: "Atlantis Consultancy/ Lightstorm", projectName: "Mini DTS", location: "Mumbai, Mandvi, Kochi, Digha, Chennai, Machlipatnam", country: "India", region: "Asia", type: "Mini DTS", date: "June 2022", lat: 19.0760, lng: 72.8777, description: "Mini DTS at Versova Mumbai, Mandvi, Kochi, Digha, Chennai, and Machlipatnam." },
    { company: "EGS (Asia) Ltd.", projectName: "Site visits for SMW6", location: "Mumbai and Chennai", country: "India", region: "Asia", type: "Site visits", date: "Mar 2022", lat: 19.0760, lng: 72.8777, description: "Site visits for SMW6 cable project in India (Mumbai and Chennai)." },
    { company: "Shree Krishna Stevedores Pvt Ltd.", projectName: "Search Survey of sunken vessel", location: "Goa", country: "India", region: "Asia", type: "Search Survey", date: "Feb 2022", lat: 15.2993, lng: 73.9380, description: "Search Survey of sunken vessel Shree Krishna VIII off Goa." },
    { company: "Tata Communications Transformations Services Limited", projectName: "Independent Monitoring Agency", location: "Kochi Lakshadweep Islands", country: "India", region: "Asia", type: "Independent Monitoring", date: "Dec 2021", lat: 10.5600, lng: 72.6400, description: "Selection of Independent Monitoring Agency for Submarine Optical Fibre Cable Project for Kochi Lakshadweep Islands." },
    { company: "EGS Asia Ltd", projectName: "Support services", location: "India", country: "India", region: "Asia", type: "Support services", date: "Nov 2021", lat: 19.0760, lng: 72.8777, description: "Support services on vessel Northern Endeavour for IAX/IEX project." },
    { company: "Amphibia Consultants", projectName: "Marine Route Survey", location: "India", country: "India", region: "Asia", type: "Marine Route Survey", date: "Nov 2021", lat: 19.0760, lng: 72.8777, description: "Marine Route Survey for Submarine Fibre Optic Cable System Projects at West Coast and East Coast of India." },
    { company: "Atlantis Consultants Pvt. Ltd.", projectName: "Site visit", location: "Mumbai", country: "India", region: "Asia", type: "Site visit", date: "Nov 2021", lat: 19.0760, lng: 72.8777, description: "Mumbai (Juhu and Versova) site visit for Desktop Study." },
    { company: "Petronet LNG Limited Dahej", projectName: "Bathymetry Survey", location: "Dahej", country: "India", region: "Asia", type: "Bathymetry Survey", date: "Sept 2021", lat: 21.7000, lng: 72.6000, description: "Bathymetry Survey at Dahej." },
    { company: "UltraTech Cement Limited", projectName: "Topography Work", location: "Jafrabad", country: "India", region: "Asia", type: "Topography Work", date: "Sept 2021", lat: 20.8700, lng: 71.3700, description: "Topography Work at GCW and Topography & Marine Survey Work at Jafrabad." },
    { company: "SARK EPC Projects Pvt. Ltd", projectName: "Offshore CIPL survey", location: "Mumbai", country: "India", region: "Asia", type: "Offshore CIPL survey", date: "Sept 2021", lat: 18.8500, lng: 72.9300, description: "Offshore CIPL survey on Uran Mandwa pipeline for GAIL Mumbai Project." },
    { company: "The Shipping Corporation of India Limited", projectName: "Provision of INMARSAT DGPS", location: "India", country: "India", region: "Asia", type: "DGPS Services", date: "Aug 2021", lat: 19.0760, lng: 72.8777, description: "Provision of INMARSAT based differential global positioning system for ONGC owned Geotechnical Vessel (GTV) Samudra Sarvekshak." },
    { company: "EGS (Asia) Ltd.", projectName: "Site visit", location: "Mumbai", country: "India", region: "Asia", type: "Site visit", date: "Aug 2021", lat: 19.0760, lng: 72.8777, description: "RAMAN - Site visit in Mumbai." },
    { company: "Zenith Survey (I) Pvt. Ltd.", projectName: "Geophysical and Bathymetric Survey", location: "Omkareshwar", country: "India", region: "Asia", type: "Geophysical and Bathymetric Survey", date: "May 2021", lat: 22.2500, lng: 76.1500, description: "Geophysical and Bathymetric Survey at Omkareshwar site in Madhya Pradesh." },
    { company: "GeoAcoustics Ltd.", projectName: "To complete SAT on GeoPulse", location: "India", country: "India", region: "Asia", type: "SAT", date: "Feb 2021", lat: 19.0760, lng: 72.8777, description: "To complete SAT on GeoPulse + System on NIOT Vessel Sagar Anveshika." },
    { company: "Sapura Engineering & Construction", projectName: "Barge Positioning & Survey System", location: "Jamnagar", country: "India", region: "Asia", type: "Barge Positioning & Survey System", date: "Dec 2020", lat: 22.4707, lng: 70.0577, description: "Barge Positioning & Survey System in Jamnagar." },
    { company: "Dahej Harbour Infrastructure Limited", projectName: "Bathymetric Survey", location: "Dahej", country: "India", region: "Asia", type: "Bathymetry Survey", date: "Dec 2020", lat: 21.7000, lng: 72.6000, description: "Bathymetric Survey for DHIL Jetty during Pre, Interim and Post Dredging." },
    { company: "Narmada Water Resources", projectName: "Bathymetric Survey of Reservoirs", location: "Saurashtra", country: "India", region: "Asia", type: "Bathymetric Survey", date: "Dec 2020", lat: 22.3000, lng: 70.8000, description: "Conducting Bathymetric Survey of Reservoirs of Saurashtra Region under National Hydrology Project." },
    { company: "Atlantis Consultancy", projectName: "Site visit supervision", location: "Malaysia", country: "Malaysia", region: "Asia", type: "Site visit supervision", date: "Sept 2020", lat: 4.2105, lng: 101.9758, description: "Site visit supervision of IAX/ IEX - Malaysia." },
    { company: "Dredging Corporation of India Limited", projectName: "Provision of Surveyor", location: "JNPT", country: "India", region: "Asia", type: "Provision of Surveyor", date: "Sept 2020", lat: 18.9500, lng: 72.9500, description: "Provision of Surveyor to act as DCI Rep for ongoing survey works at JNPT." },
    { company: "Atlantis Consultancy", projectName: "Site visit supervision", location: "Mumbai and Chennai", country: "India", region: "Asia", type: "Site visit supervision", date: "Sept 2020", lat: 19.0760, lng: 72.8777, description: "Site visit supervision of IAX/ IEX – Mumbai and Chennai." },
    { company: "Atlantis Consultancy", projectName: "DTS at Versova and KharDanda", location: "Mumbai", country: "India", region: "Asia", type: "DTS", date: "Sept 2020", lat: 19.1350, lng: 72.8150, description: "DTS at Versova and KharDanda." },
    { company: "Vedanta Limited", projectName: "Geophysical Survey", location: "India", country: "India", region: "Asia", type: "Geophysical Survey", date: "Sept 2020", lat: 19.0760, lng: 72.8777, description: "Geophysical Survey." },
    { company: "Petronet LNG Limited Dahej", projectName: "Bathymetry Survey", location: "Dahej", country: "India", region: "Asia", type: "Bathymetry Survey", date: "August 2020", lat: 21.7000, lng: 72.6000, description: "Bathymetry Survey at Dahej." },
    { company: "Sapura Engineering & Construction", projectName: "As built Survey", location: "India", country: "India", region: "Asia", type: "As built Survey", date: "Jun 2020", lat: 19.0760, lng: 72.8777, description: "Provision of As built Survey for 42\" Pipeline, 4\" FOC, Bathymetry Survey (including boat) & Topography Survey." },
    { company: "NEC Technologies India Pvt. Ltd.", projectName: "Feasibility study", location: "Mumbai – Hulu Male", country: "India", region: "Asia", type: "Feasibility study", date: "Feb 2020", lat: 19.0760, lng: 72.8777, description: "Feasibility study of Mumbai – Hulu Male cable route." },
    { company: "Gujarat Pipavav Port Limited", projectName: "Pre and Post Dredging Bathymetry", location: "Pipavav Port", country: "India", region: "Asia", type: "Bathymetry Survey", date: "Feb 2020", lat: 20.9083, lng: 71.4556, description: "Pre and Post Dredging Bathymetry survey at APM Terminals Pipavav." },
    { company: "A to Z AXIM", projectName: "Bathymetry Survey", location: "Sittwe Port", country: "Myanmar", region: "Asia", type: "Bathymetry Survey", date: "Feb 2020", lat: 20.1471, lng: 92.8996, description: "Bathymetry Survey at Sittwe Port Myanmar." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "Feb 2020", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel Ridley Thomas." },
    { company: "Bharti Airtel Ltd.", projectName: "EIG Submarine Cable Survey", location: "Versova", country: "India", region: "Asia", type: "Cable Survey", date: "Feb 2020", lat: 19.1350, lng: 72.8150, description: "EIG Submarine Cable Survey at Versova." },
    { company: "EGS (Asia) Ltd", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "Feb 2020", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel EGS Surveyor." },
    { company: "FCG ANZDEC Limited", projectName: "Third-party Inspection/Diving", location: "Someshwara", country: "India", region: "Asia", type: "Inspection/Diving", date: "Jan 2020", lat: 12.7933, lng: 74.8633, description: "Third-party Inspection/Diving: Under Water photography and video recordings of Someshwara offshore reef construction works." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "Jan 2020", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel Ridley Thomas." },
    { company: "New Horizon Surveys India Private Limited", projectName: "ADCP Observation", location: "Kashid", country: "India", region: "Asia", type: "ADCP Observation", date: "Jan 2020", lat: 18.4230, lng: 72.9060, description: "ADCP Observation at Kashid Site, Maharashtra." },
    { company: "Cairn India Ltd.", projectName: "Vessel Positioning Services", location: "Ravva Field", country: "India", region: "Asia", type: "Vessel Positioning Services", date: "Jan 2020", lat: 16.3700, lng: 82.3300, description: "Vessel Positioning Services for Ravva Field." },
    { company: "Gujarat Pipavav Port Limited", projectName: "Bathymetry survey", location: "Pipavav Port", country: "India", region: "Asia", type: "Bathymetry survey", date: "Dec 2019", lat: 20.9083, lng: 71.4556, description: "Bathymetry survey at APM Terminals Pipavav." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "Nov 2019", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel EGS Surveyor." },
    { company: "New Horizon Surveys India Private Limited", projectName: "Survey at Chhara LNG Terminal", location: "Chhara", country: "India", region: "Asia", type: "Survey", date: "Nov 2019", lat: 20.7800, lng: 71.0400, description: "Bathymetry survey, Geophysical survey, Metocean Observations, sample collections and analysis at Chhara LNG Terminal." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "Philippines", country: "Philippines", region: "Asia", type: "Provision of Personnel Support", date: "Oct 2019", lat: 12.8797, lng: 121.7740, description: "Provision of Personnel Support to carry out landfall survey in Philippines." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "Oct 2019", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel EGS Surveyor." },
    { company: "Atlantis Consultancy", projectName: "DTS of BMH locations", location: "Mumbai and Chennai", country: "India", region: "Asia", type: "DTS", date: "Oct 2019", lat: 19.0760, lng: 72.8777, description: "DTS of BMH locations in Mumbai and Chennai." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "Sept 2019", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel EGS Surveyor." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "Sept 2019", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel Northern Endeavour." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "Aug 2019", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel EGS Surveyor." },
    { company: "Tata Consulting Engineers Limited", projectName: "Geotechnical Investigation", location: "Mumbai and Karanja", country: "India", region: "Asia", type: "Geotechnical Investigation", date: "July 2019", lat: 18.9220, lng: 72.8190, description: "Geotechnical Investigation, Topographic, Met-ocean observations and Geophysical Survey for Construction of new Wharf at ND(Mumbai) and Jetty at Karanja." },
    { company: "Adani Cementation Ltd.", projectName: "Geophysical Survey and Bathymetry", location: "KORI creek", country: "India", region: "Asia", type: "Geophysical Survey", date: "July 2019", lat: 23.6000, lng: 68.3000, description: "Consultant for conducting Geophysical Survey, Bathymetry Survey and Oceanographic Data Collection for KORI creek for 10MTPA Lakhpat Clinkerisation unit." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "July 2019", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel Northern Endeavour." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "Jun 2019", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel EGS Surveyor." },
    { company: "Howe Engineering Projects (India) Pvt. Ltd.", projectName: "Multi beam bathymetry survey works", location: "Vizhinjam", country: "India", region: "Asia", type: "Bathymetry survey", date: "Jun 2019", lat: 8.3784, lng: 76.9905, description: "Multi beam bathymetry survey works before and after monsoon at Break water location at Vizhinjam, Kerala." },
    { company: "EGS (Asia) Ltd.", projectName: "DTS and Report for TEAS", location: "Mumbai", country: "India", region: "Asia", type: "DTS", date: "May 2019", lat: 19.0760, lng: 72.8777, description: "DTS and Report for TEAS in Mumbai." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "Japan", country: "Japan", region: "Asia", type: "Provision of Personnel Support", date: "Apr 2019", lat: 36.2048, lng: 138.2529, description: "Provision of Personnel Support onboard vessel Northern Endeavour in Japan." },
    { company: "Arcadis India Pvt. Ltd.", projectName: "Offshore Marine Water & Sediment Sampling", location: "India", country: "India", region: "Asia", type: "Sampling and Analysis", date: "Apr 2019", lat: 19.0760, lng: 72.8777, description: "Offshore Marine Water & Sediment Sampling and Analysis." },
    { company: "Atlantis Consultancy", projectName: "DTS of BMH location", location: "Chennai", country: "India", region: "Asia", type: "DTS", date: "Apr 2019", lat: 13.0827, lng: 80.2707, description: "DTS of BMH location in Chennai." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "Jan 2019", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard Vessel Northern Endeavour." },
    { company: "Amphibia Consultants Pvt. Ltd.", projectName: "Provision of Survey Support", location: "India", country: "India", region: "Asia", type: "Provision of Survey Support", date: "Jan 2019", lat: 19.0760, lng: 72.8777, description: "Provision of Survey Support for CANI project." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "Solomon Island", country: "Solomon Islands", region: "Oceania", type: "Provision of Personnel Support", date: "Oct 2018", lat: -9.6457, lng: 160.1562, description: "Provision of Personnel Support onboard vessel Northern Endeavour in Solomon Island." },
    { company: "Kongsberg Maritime India Pvt. Ltd.", projectName: "Training on SBP", location: "Paira Port", country: "Bangladesh", region: "Asia", type: "Training", date: "Oct 2018", lat: 21.9500, lng: 90.3000, description: "Training on SBP at Paira Port, Pathuakhali, Bangladesh." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "Taiwan", country: "Taiwan", region: "Asia", type: "Provision of Personnel Support", date: "Oct 2018", lat: 23.6978, lng: 120.9605, description: "Provision of Personnel Support onboard vessel RS Shankar in Taiwan." },
    { company: "Sapura Engineering & Construction", projectName: "Topographic Survey", location: "Pirpau", country: "India", region: "Asia", type: "Topographic Survey", date: "Oct 2018", lat: 19.0100, lng: 72.9000, description: "Additional Topographic Survey at Pirpau Location." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "Papua New Guinea", country: "Papua New Guinea", region: "Oceania", type: "Provision of Personnel Support", date: "Sep 2018", lat: -6.3150, lng: 143.9555, description: "Provision of Personnel Support onboard vessel Northern Endeavour in Papua New Guinea." },
    { company: "Elcome Integrated", projectName: "Training on Qinsy software", location: "KERI Campus", country: "India", region: "Asia", type: "Training", date: "Sept 2018", lat: 19.0760, lng: 72.8777, description: "Training on Qinsy software at KERI Campus." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "Hong Kong", country: "Hong Kong", region: "Asia", type: "Provision of Personnel Support", date: "Sep 2018", lat: 22.3193, lng: 114.1694, description: "Provision of Personnel Support - Shore based Geo for data processing, Hong Kong." },
    { company: "Mantovani Dharti Pvt. Ltd.", projectName: "Side Scan Sonar Survey", location: "Jafrabad", country: "India", region: "Asia", type: "Side Scan Sonar Survey", date: "Sept 2018", lat: 20.8700, lng: 71.3700, description: "Side Scan Sonar Survey at Jafrabad, near Rajula, Gujarat." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "Hong Kong", country: "Hong Kong", region: "Asia", type: "Provision of Personnel Support", date: "Aug 2018", lat: 22.3193, lng: 114.1694, description: "Provision of Personnel Support - Shore based Geo for data processing, Hong Kong." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "Singapore", country: "Singapore", region: "Asia", type: "Provision of Personnel Support", date: "Aug 2018", lat: 1.3521, lng: 103.8198, description: "Provision of Personnel Support onboard vessel EGS Surveyor in Singapore." },
    { company: "Adani Infra (India) Limited", projectName: "Sampling and testing of river water", location: "India", country: "India", region: "Asia", type: "Sampling", date: "July 2018", lat: 19.0760, lng: 72.8777, description: "Sampling and testing of river water and bed for intake water system of 2x800 MW coal-based Ultra Supercritical Thermal Power Project." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "Taiwan", country: "Taiwan", region: "Asia", type: "Provision of Personnel Support", date: "June 2018", lat: 23.6978, lng: 120.9605, description: "Provision of Personnel Support - Shore based Geo for data processing, Taiwan." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "Peru", country: "Peru", region: "South America", type: "Provision of Personnel Support", date: "June 2018", lat: -9.1900, lng: -75.0152, description: "Provision of Personnel Support onboard vessel Geo Explorer in Peru." },
    { company: "EGS Survey Pty. Ltd. Australia", projectName: "Provision of a Surveyor", location: "Mozambique", country: "Mozambique", region: "Africa", type: "Provision of Surveyor", date: "June 2018", lat: -18.6657, lng: 35.5296, description: "Provision of a Surveyor on board MV Solution in Mozambique." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "June 2018", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel Northern Endeavour." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "May 2018", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel EGS Surveyor." },
    { company: "HPCL - Mittal Pipeline Limited", projectName: "Offshore Seabed Engineering Survey", location: "Modhva Coast", country: "India", region: "Asia", type: "Engineering Survey", date: "May 2018", lat: 22.8600, lng: 69.3700, description: "Offshore Seabed Engineering Survey off Modhva Coast, Gulf of Kutch." },
    { company: "EGS (Asia) Ltd.", projectName: "Provision of Personnel Support", location: "International Waters", country: "International Waters", region: "Asia", type: "Provision of Personnel Support", date: "May 2018", lat: 19.0760, lng: 72.8777, description: "Provision of Personnel Support onboard vessel Ridley Thomas." },
    { company: "Atlantis Consultancy", projectName: "DTS of segments", location: "Andaman", country: "India", region: "Asia", type: "DTS", date: "May 2018", lat: 11.9761, lng: 92.9876, description: "DTS of segments Havelock to Long Island and Long Island to Rangat - Andaman." },
    { company: "Vizhinjam International Seaport Ltd.", projectName: "Geophysical Survey works", location: "Vizhinjam", country: "India", region: "Asia", type: "Geophysical Survey", date: "May 2018", lat: 8.3784, lng: 76.9905, description: "Geophysical Survey works at Vizhinjam." },
    { company: "Indomarine Solutions", projectName: "Bathymetry Survey", location: "Ponnani and Kovalithottam", country: "India", region: "Asia", type: "Bathymetry Survey", date: "April 2018", lat: 10.7766, lng: 75.9250, description: "Bathymetry Survey at Ponnani and Kovalithottam." },
    { company: "Howe Engineering Projects (India) Pvt. Ltd.", projectName: "Wave observation", location: "Vizhinjam Port", country: "India", region: "Asia", type: "Wave observation", date: "April 2018", lat: 8.3784, lng: 76.9905, description: "Wave observation in the container jetty area at Vizhinjam Port, Kerala." },
    { company: "Sapura Engineering & Construction", projectName: "Survey Services", location: "Jawahar Dweep", country: "India", region: "Asia", type: "Survey Services", date: "March 2018", lat: 18.9600, lng: 72.8900, description: "Provision of Pre-Engineering, Pre-Installation & As Laid Survey Services – Fifth Oil Berth at Jawahar Dweep Project of MbPT." },
    { company: "Tata Consulting Engineers Limited", projectName: "Geotechnical Investigation", location: "DGNP – Kochi", country: "India", region: "Asia", type: "Geotechnical Investigation", date: "March 2018", lat: 9.9312, lng: 76.2673, description: "Geotechnical Investigation, Topographic & Geophysical Survey for Dry Dock, Wharves and Associated Facilities (DGNP – Kochi)." },
    { company: "TechnipFMC Ltd", projectName: "Geophysical Survey Works", location: "India", country: "India", region: "Asia", type: "Geophysical Survey Works", date: "February 2018", lat: 19.0760, lng: 72.8777, description: "Geophysical Survey Works for LNG/GAS Development Project." },
    { company: "Petronet LNG Limited", projectName: "Bathymetry Survey", location: "Kochi", country: "India", region: "Asia", type: "Bathymetry Survey", date: "February 2018", lat: 9.9312, lng: 76.2673, description: "Bathymetry Survey at Kochi." },
    { company: "Sarathy Geotech & Engineering Services Pvt Ltd", projectName: "Geophysical Survey work", location: "Colombo", country: "Sri Lanka", region: "Asia", type: "Geophysical Survey work", date: "February 2018", lat: 6.9271, lng: 79.8612, description: "Geophysical Survey work at Colombo, Sri Lanka." },
    { company: "Sanghi Industries Ltd.", projectName: "Wave and Current Measurement", location: "Sanghi Channel", country: "India", region: "Asia", type: "Wave and Current Measurement", date: "February 2018", lat: 23.4800, lng: 68.4300, description: "Wave and Current Measurement of Sanghi Channel." },
    { company: "Indomarine Solutions", projectName: "Bathymetry Survey", location: "Kanyakumari", country: "India", region: "Asia", type: "Bathymetry Survey", date: "December 2017", lat: 8.0883, lng: 77.5385, description: "Bathymetry Survey at Kanyakumari for Tamilnadu Maritime Board." },
    { company: "Telecommunications Consultants India Limited", projectName: "Desktop study", location: "Lakshadweep", country: "India", region: "Asia", type: "Desktop study", date: "December 2017", lat: 10.5667, lng: 72.6167, description: "Desktop study Lakshadweep." },
    { company: "Tata Consulting Engineers Limited", projectName: "Techno Economic Feasibility Report", location: "Vijaydurg", country: "India", region: "Asia", type: "Feasibility Report", date: "December 2017", lat: 16.5599, lng: 73.3400, description: "Techno Economic Feasibility Report for Development of Port at Vijaydurg, Maharashtra." },
    { company: "Howe Engineering Projects (India) Pvt. Ltd.", projectName: "Geophysical Survey", location: "Vizhinjam Port", country: "India", region: "Asia", type: "Geophysical Survey", date: "December 2017", lat: 8.3784, lng: 76.9905, description: "Geophysical Survey at Vizhinjam Port." },
    { company: "Indomarine Solutions", projectName: "Bathymetry and Current Meter observation", location: "Tuticorin", country: "India", region: "Asia", type: "Bathymetry", date: "December 2017", lat: 8.7642, lng: 78.1348, description: "Bathymetry and Current Meter observation in Tuticorin." },
    { company: "Howe Engineering Projects (India) Pvt. Ltd.", projectName: "Sub-Bottom Profiling Survey", location: "Thengapattanam", country: "India", region: "Asia", type: "Sub-Bottom Profiling Survey", date: "December 2017", lat: 8.2323, lng: 77.1706, description: "Sub-Bottom Profiling Survey at Thengapattanam for breakwater project at Vizhinjam, Kerala." },
    { company: "Marine Engineering and Trade Services", projectName: "Positioning Services", location: "India", country: "India", region: "Asia", type: "Positioning Services", date: "December 2017", lat: 19.0760, lng: 72.8777, description: "Positioning Services." },
    { company: "Sadhav Shipping Ltd.", projectName: "Calibration Services", location: "Mumbai", country: "India" }
];

// ROUTING
function navigateTo(pageId) {
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    document.getElementById(`page-${pageId}`).classList.add('active');

    document.documentElement.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    document.documentElement.style.scrollBehavior = '';

    toggleMobileMenu(false);

    // Header opacity logic
    const header = document.getElementById('main-header');
    const headerBg = document.getElementById('header-bg');
    if (pageId === 'home') {
        headerBg.style.opacity = '0';
    } else {
        headerBg.style.opacity = '1';
    }

    // Initialize Map exactly once when Projects page is opened
    if (pageId === 'projects') {
        setTimeout(initProjectsMap, 300); // 300ms to allow CSS transitions to finish before Leaflet calculates size
    }
    if (pageId === 'resources') {
        renderResources();
    }
}

// SCROLL LISTENER
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
        const headerBg = document.getElementById('header-bg');
        if (headerBg && document.getElementById('page-home').classList.contains('active')) {
            headerBg.style.opacity = window.scrollY > 100 ? '1' : '0';
        }

        // Back to top button visibility
        const backToTop = document.getElementById('back-to-top');
        if (backToTop) {
            if (window.scrollY > 300) {
                backToTop.classList.remove('opacity-0', 'pointer-events-none');
                backToTop.classList.add('opacity-100', 'pointer-events-auto');
            } else {
                backToTop.classList.add('opacity-0', 'pointer-events-none');
                backToTop.classList.remove('opacity-100', 'pointer-events-auto');
            }
        }
        scrollTimeout = null;
    }, 100);
}, { passive: true });

let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        if (mapInitialized && projectsMap) projectsMap.invalidateSize();
        if (contactMapInitialized && contactMap) contactMap.invalidateSize();
    }, 150);
}, { passive: true });

// UI HELPERS
function toggleMobileMenu(force) {
    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('menu-icon');
    const isHidden = menu.classList.contains('hidden');
    const show = force !== undefined ? force : isHidden;

    if (show) {
        menu.classList.remove('hidden');
        menu.classList.add('flex');
        icon.setAttribute('data-lucide', 'x');
    } else {
        menu.classList.add('hidden');
        menu.classList.remove('flex');
        icon.setAttribute('data-lucide', 'menu');
    }
    lucide.createIcons();
}

// FILTER FUNCTIONS
let currentNewsFilter = 'ALL';
function filterNews(cat) {
    currentNewsFilter = cat;
    document.querySelectorAll('.news-filter').forEach(btn => {
        if (btn.innerText.toUpperCase() === cat.toUpperCase()) {
            btn.className = "news-filter px-6 py-2 border border-amber-500 bg-amber-500 text-[#0a1128] text-[10px] font-bold tracking-widest rounded-sm";
        } else {
            btn.className = "news-filter px-6 py-2 border border-gray-800 hover:border-gray-600 text-gray-400 text-[10px] font-bold tracking-widest rounded-sm";
        }
    });
    renderNews();
}

let currentCareerFilter = 'ALL';
function filterCareers(cat) {
    currentCareerFilter = cat;
    document.querySelectorAll('.career-filter').forEach(btn => {
        if (btn.innerText.toUpperCase() === cat.toUpperCase()) {
            btn.className = "career-filter px-5 py-2 border border-amber-500 bg-amber-500 text-[#0a1128] text-[10px] font-bold tracking-widest rounded-sm";
        } else {
            btn.className = "career-filter px-5 py-2 border border-gray-800 hover:border-gray-600 text-gray-400 text-[10px] font-bold tracking-widest rounded-sm";
        }
    });
    renderCareers();
}

let currentResourceFilter = 'All';
let currentResourceSearch = '';
function filterResources(cat) {
    if (cat !== undefined) {
        currentResourceFilter = cat;
        document.querySelectorAll('.resource-filter-btn').forEach(btn => {
            const btnId = `res-btn-${cat.replace(/\s+/g, '-')}`;
            if (btn.id === btnId) {
                btn.className = "resource-filter-btn active text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full text-[#020617] bg-[#06b6d4] border border-[#06b6d4] shadow-[0_0_12px_rgba(6,182,212,0.4)] transition-all";
            } else {
                btn.className = "resource-filter-btn text-xs font-bold uppercase tracking-wider px-5 py-2.5 rounded-full border border-slate-800/80 text-gray-400 hover:border-slate-700 hover:text-white transition-all bg-[#0f172a]/20";
            }
        });
    }
    renderResources();
}

// RENDERING
function renderServices() {
    const grid = document.getElementById('services-grid');
    grid.innerHTML = services.map(s => `
        <div class="bg-[#0a1128] border border-gray-800 p-8 rounded-sm hover:border-gray-500 transition-all group flex flex-col">
            <div class="flex justify-between items-start mb-8">
                <div class="p-3 bg-[#151c33] border border-gray-800 text-amber-500 group-hover:bg-amber-500 group-hover:text-black transition-all">
                    <i data-lucide="${s.icon}" class="w-5 h-5"></i>
                </div>
                <span class="text-gray-700 text-xs font-bold">${s.id}</span>
            </div>
            <h3 class="text-xl font-bold mb-4">${s.title}</h3>
            <p class="text-gray-500 text-sm mb-10 flex-grow">${s.overview}</p>
            <button onclick="renderDetail('${s.id}')" class="text-amber-500 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2 hover:text-amber-400">
                See capability <i data-lucide="arrow-right" class="w-3 h-3"></i>
            </button>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderDetail(id) {
    const s = services.find(x => x.id === id);
    if (!s) {
        console.error(`Service with id '${id}' not found.`);
        // Optionally, navigate to a 404 page or show an error message
        return;
    }
    document.getElementById('service-hero-img').src = s.img;
    document.getElementById('service-title').innerText = s.title;
    document.getElementById('service-desc').innerText = s.overview;
    document.getElementById('service-overview').innerText = s.overview + " Our campaigns leverage high-end sensors to ensure data integrity for critical construction decisions.";
    document.getElementById('service-capabilities').innerHTML = s.caps.map(c => `
        <li class="flex items-start gap-4">
            <i data-lucide="check-circle" class="w-4 h-4 text-amber-500 mt-1 flex-shrink-0"></i>
            <span class="text-gray-300">${c}</span>
        </li>
    `).join('');
    navigateTo('service-detail');
}

function getShortName(fullName) {
    if (fullName.includes('Pramod Kumar Tyagi')) return 'Cdr. Tyagi';
    if (fullName.includes('Ajay Kumar Jolly')) return 'Cmde. Jolly';
    if (fullName.includes('Bhupinder Singh Rainu')) return 'Cdr. Rainu';
    if (fullName.includes('Veena')) return 'Veena S.';
    let name = fullName.split(',')[0].trim();
    let parts = name.split(' ');
    if (parts.length > 2) {
        return parts[0] + ' ' + parts[parts.length - 1];
    }
    return name;
}

window.currentSelectedLeaderIndex = 0;

function inspectLeader(index) {
    const m = management[index];
    if (!m) return;

    const img = document.getElementById('inspector-img');
    const name = document.getElementById('inspector-name');
    const role = document.getElementById('inspector-role');
    const bio = document.getElementById('inspector-bio');
    const exp = document.getElementById('inspector-exp');
    const missions = document.getElementById('inspector-missions');
    const tags = document.getElementById('inspector-tags');

    if (img) img.src = m.img || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80';
    if (name) name.innerText = m.name;
    if (role) role.innerText = m.role;
    if (bio) bio.innerText = m.bio;
    if (exp) exp.innerText = m.exp || '20+ Yrs';
    if (missions) missions.innerText = m.missions || '100+';
    if (tags) {
        tags.innerHTML = (m.tags || []).map(t => `
            <span class="text-[9px] font-bold text-slate-300 bg-slate-800/80 uppercase px-2.5 py-1 rounded-md border border-slate-700/30">${t}</span>
        `).join('');
    }
    lucide.createIcons();
}

function selectLeader(index) {
    window.currentSelectedLeaderIndex = index;
    document.querySelectorAll('.orbit-avatar-wrapper').forEach((el, idx) => {
        if (idx === index) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
    inspectLeader(index);
}

function renderManagement() {
    const orbitRoot = document.getElementById('management-orbit-root');
    if (!orbitRoot) return;

    orbitRoot.innerHTML = management.map((m, index) => {
        const angle = (2 * Math.PI * index) / management.length - Math.PI / 2;
        const x = 38 * Math.cos(angle);
        const y = 38 * Math.sin(angle);
        const shortName = getShortName(m.name);

        return `
        <div class="absolute" style="left: calc(50% + ${x}%); top: calc(50% + ${y}%); transform: translate(-50%, -50%); z-index: 30;">
            <div class="orbit-avatar-wrapper cursor-pointer flex flex-col items-center orbit-item-spin" id="orbit-avatar-${index}" 
                 onmouseenter="inspectLeader(${index})" 
                 onmouseleave="inspectLeader(window.currentSelectedLeaderIndex)"
                 onclick="selectLeader(${index})">
                <div class="orbit-avatar-img-container">
                    <img src="${m.img || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80'}" alt="${m.name}" class="orbit-avatar-img">
                </div>
                <div class="orbit-avatar-label">
                    ${shortName}
                </div>
            </div>
        </div>
        `;
    }).join('');

    // Wire up modal button click
    const modalBtn = document.getElementById('inspector-modal-btn');
    if (modalBtn) {
        modalBtn.onclick = () => openMemberModal(window.currentSelectedLeaderIndex);
    }

    // Set initial state to the first leader (MD)
    selectLeader(0);
}


function renderNews() {
    const grid = document.getElementById('news-grid');
    const filtered = currentNewsFilter === 'ALL' ? newsPosts : newsPosts.filter(n => n.cat === currentNewsFilter);

    grid.innerHTML = filtered.map(n => `
        <div class="flex flex-col border border-gray-800 bg-[#0c132b]/30 p-8 hover:border-gray-600 transition-all cursor-pointer group">
            <div class="flex gap-4 items-center mb-8">
                <span class="text-[9px] font-bold text-amber-500 border border-amber-900/50 px-2 py-0.5">${n.cat}</span>
                <span class="text-gray-600 text-[10px]">${n.date}</span>
            </div>
            <h3 class="text-lg font-bold mb-4 group-hover:text-amber-500 transition-colors">${n.title}</h3>
            <p class="text-gray-500 text-sm mb-10 flex-grow">${n.sum}</p>
            <div class="mt-auto flex items-center gap-2 text-gray-500 text-[10px] font-bold uppercase border-t border-gray-800 pt-6">
                <i data-lucide="clock" class="w-3 h-3 text-amber-500/40"></i> ${n.time}
                <i data-lucide="chevron-right" class="w-3 h-3 ml-auto group-hover:text-amber-500 group-hover:translate-x-1 transition-all"></i>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderCareers() {
    const list = document.getElementById('job-list');
    const filtered = currentCareerFilter === 'ALL' ? openRoles : openRoles.filter(r => r.dept === currentCareerFilter);

    if (filtered.length === 0) {
        list.innerHTML = '<div class="py-20 text-center border border-dashed border-gray-800 rounded-sm"><p class="text-gray-500">No roles currently open in this department.</p></div>';
        return;
    }

    list.innerHTML = filtered.map(r => `
        <div class="group bg-[#0c132b]/40 border border-gray-800/80 hover:border-gray-600 p-8 rounded-sm transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div class="flex-grow max-w-2xl">
                <h4 class="text-white text-xl font-bold mb-3 group-hover:text-amber-500 transition-colors">${r.title}</h4>
                <p class="text-gray-400 text-sm leading-relaxed mb-6">${r.desc}</p>
                <div class="flex flex-wrap gap-y-3 gap-x-6 text-gray-500 text-[10px] font-bold tracking-widest uppercase">
                    <div class="flex items-center gap-2"><i data-lucide="briefcase" class="w-3 h-3 text-amber-500/50"></i><span>${r.dept}</span></div>
                    <div class="flex items-center gap-2"><i data-lucide="map-pin" class="w-3 h-3 text-amber-500/50"></i><span>${r.location}</span></div>
                    <div class="flex items-center gap-2"><i data-lucide="clock" class="w-3 h-3 text-amber-500/50"></i><span>${r.exp}</span></div>
                </div>
            </div>
            <div class="flex items-center gap-6">
                <span class="bg-[#151c33] border border-amber-900/40 text-amber-500 text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-sm">${r.type}</span>
                <i data-lucide="chevron-right" class="text-gray-700 group-hover:text-white transition-all"></i>
            </div>
        </div>
    `).join('');
    lucide.createIcons();
}

function renderResources() {
    const grid = document.getElementById('resources-grid');
    if (!grid) return;

    const filtered = resourcesData.filter(r => {
        const matchCat = currentResourceFilter === 'All' || r.cat === currentResourceFilter;
        const matchSearch = r.title.toLowerCase().includes(currentResourceSearch) || r.desc.toLowerCase().includes(currentResourceSearch);
        return matchCat && matchSearch;
    });

    if (filtered.length === 0) {
        grid.innerHTML = `
            <div class="col-span-full py-20 text-center border border-dashed border-slate-800 rounded-xl">
                <i data-lucide="folder-search" class="w-12 h-12 text-slate-600 mx-auto mb-4"></i>
                <p class="text-slate-400 text-sm">No technical resources matched your current filter or query.</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    const cardsHtml = filtered.map((r) => {
        return `
        <article id="res-card-${r.id}" class="break-inside-avoid inline-block w-full mb-8 relative bg-[#0f172a]/60 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700/60 overflow-hidden hover:bg-[#0f172a]/90 hover:border-[#06b6d4]/60 hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(6,182,212,0.2)] transition-all duration-400 flex flex-col group">
            <div class="h-32 bg-gradient-to-br from-[#1e293b]/80 to-[#0f172a]/80 flex items-center justify-center border-b border-slate-700/60 group-hover:from-[#06b6d4]/10 group-hover:to-[#1e293b]/90 transition-colors">
                <i data-lucide="${r.icon}" class="w-12 h-12 text-[#06b6d4] opacity-80 group-hover:opacity-100 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300"></i>
            </div>
            <div class="p-6 flex flex-col">
                <span class="text-[10px] font-bold text-[#06b6d4] uppercase tracking-[0.25em] font-mono mb-3 block">${r.cat}</span>
                <h3 class="text-lg font-bold text-white mb-3 group-hover:text-[#06b6d4] transition-colors leading-snug">${r.title}</h3>
                <p class="text-slate-300/80 text-sm leading-relaxed mb-6">${r.desc}</p>
                <div class="flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-slate-700/50 mt-auto">
                    <div class="flex items-center gap-3 text-slate-400 text-[10px] font-bold uppercase font-mono tracking-wider">
                        <span>${r.format}</span>
                        <span class="text-slate-600">•</span>
                        <span>${r.size}</span>
                    </div>
                    <button onclick="startResourceDownload('${r.id}')" class="flex items-center gap-2 text-[#06b6d4] hover:text-white text-[10px] font-bold uppercase font-mono tracking-widest transition-colors relative z-10 bg-[#06b6d4]/10 hover:bg-[#06b6d4]/30 px-3 py-1.5 rounded-md border border-[#06b6d4]/30">
                        <i data-lucide="download" class="w-3.5 h-3.5"></i> Get
                    </button>
                </div>
            </div>
        </article>
        `;
    }).join('');

    grid.innerHTML = `
    <div class="col-span-full columns-1 md:columns-2 lg:columns-3 gap-8 w-full py-8">
        ${cardsHtml}
    </div>
    `;

    lucide.createIcons();
}

function startResourceDownload(id) {
    const card = document.getElementById(`res-card-${id}`);
    if (!card || card.querySelector('.download-telemetry-container')) return;

    const resource = resourcesData.find(r => r.id === id);
    if (!resource) return;

    const telemetryDiv = document.createElement('div');
    telemetryDiv.className = "download-telemetry-container absolute inset-0 bg-[#020617]/95 backdrop-blur-md flex flex-col justify-between p-6 z-30 font-mono text-[9px] text-[#06b6d4] space-y-1.5 transition-all duration-300 border border-[#06b6d4]/30 rounded-xl";

    telemetryDiv.innerHTML = `
        <div class="flex justify-between items-center border-b border-slate-800/60 pb-2">
            <span class="font-bold tracking-widest text-[#06b6d4]">SECURE DOWNLINK CONSOLE</span>
            <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06b6d4] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-[#06b6d4]"></span>
            </span>
        </div>
        <div class="telemetry-log flex-grow flex flex-col justify-end space-y-0.5 overflow-hidden text-slate-400 py-3">
            <!-- Progress logs go here -->
        </div>
        <div class="space-y-2">
            <div class="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden border border-slate-800">
                <div class="telemetry-progress-bar bg-[#ff6b00] h-full w-0 transition-all duration-100 shadow-[0_0_8px_rgba(255,107,0,0.6)]"></div>
            </div>
            <div class="flex justify-between items-center text-[8px] text-slate-500 font-bold uppercase tracking-widest">
                <span>STATUS: RECEIVING EXPORT FILE</span>
                <span class="telemetry-percent text-[#ff6b00]">0%</span>
            </div>
        </div>
    `;

    card.appendChild(telemetryDiv);

    const logContainer = telemetryDiv.querySelector('.telemetry-log');
    const progressBar = telemetryDiv.querySelector('.telemetry-progress-bar');
    const percentLabel = telemetryDiv.querySelector('.telemetry-percent');

    const logMessages = [
        { time: 0, msg: "INITIALIZING SEABED-DATA DOWNLINK HANDSHAKE..." },
        { time: 200, msg: "ESTABLISHING END-TO-END CRYPTO SHA-256 TUNNEL..." },
        { time: 450, msg: "TUNNEL SECURED // REQUESTING BLOB: " + resource.title.substring(0, 24).toUpperCase() + "..." },
        { time: 700, msg: "SERVER RESPONSE: 200 OK // STREAM PORT OPENED" },
        { time: 900, msg: "RECEIVING INCOMING PACKETS [PORT SPEED: 48.2 MBPS]" },
        { time: 1100, msg: "SAVING BLOCK CACHE [DECOMPRESSING DATA AT 87%]" },
        { time: 1350, msg: "TRANSFER COMPLETE // SIZE RECEIVED: " + resource.size },
        { time: 1550, msg: "RUNNING INTEGRITY CHECK & MD5 CHECKSUM VERIFICATION..." },
        { time: 1750, msg: "CHECKSUM VERIFICATION: OK // GENERATING EXPORT FILE" },
        { time: 1900, msg: "DECRYPTION & EXPORT COMPLETE // WRITING BLOB TO SYSTEM" }
    ];

    function appendLog(text) {
        const line = document.createElement('div');
        line.className = "truncate";
        line.innerHTML = '<span class="text-slate-600">[' + new Date().toLocaleTimeString() + ']</span> ' + text;
        logContainer.appendChild(line);
        logContainer.scrollTop = logContainer.scrollHeight;
    }

    let progress = 0;
    const startTime = Date.now();
    const duration = 2000;

    let messageIndex = 0;

    const interval = setInterval(() => {
        const elapsed = Date.now() - startTime;
        progress = Math.min((elapsed / duration) * 100, 100);

        progressBar.style.width = progress + '%';
        percentLabel.innerText = Math.floor(progress) + '%';

        while (messageIndex < logMessages.length && elapsed >= logMessages[messageIndex].time) {
            appendLog(logMessages[messageIndex].msg);
            messageIndex++;
        }

        if (progress >= 100) {
            clearInterval(interval);

            setTimeout(() => {
                const content = "========================================================================\n" +
                    "OCEAN SCIENCE & SURVEYING PVT. LTD. — SECURE DOCUMENT PORTAL\n" +
                    "========================================================================\n\n" +
                    "Document Title: " + resource.title + "\n" +
                    "Category      : " + resource.cat + "\n" +
                    "Format        : " + resource.format + "\n" +
                    "Size          : " + resource.size + "\n" +
                    "Release Date  : " + resource.date + "\n" +
                    "IHO Standard  : S-44 Order Compliance Assured\n\n" +
                    "------------------------------------------------------------------------\n" +
                    "This is a secure mock download file for the Ocean Science & Surveying\n" +
                    "Pvt. Ltd. Single Page Application demonstrator.\n\n" +
                    "For access to the full official documentation and capability sheets,\n" +
                    "please contact our sales and client relation operations:\n" +
                    "Email: mail@oceanscience.in\n" +
                    "Phone: +91 22 2759 5100\n" +
                    "Address: Tower #8, CBD Belapur, Navi Mumbai - 400 614, India\n" +
                    "------------------------------------------------------------------------\n" +
                    "© 2026 Ocean Science & Surveying Pvt. Ltd. All Rights Reserved.\n" +
                    "========================================================================";
                const blob = new Blob([content], { type: 'text/plain' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = resource.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.txt';
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);

                telemetryDiv.style.opacity = '0';
                setTimeout(() => {
                    telemetryDiv.remove();
                }, 300);
            }, 500);
        }
    }, 50);
}

// Helper to safely parse dates for sorting (fixes non-standard 'Sept')
function parseProjectDate(dateString) {
    if (!dateString) return 0;
    const cleanDate = dateString.replace(/Sept/ig, 'Sep');
    const parsed = new Date(cleanDate).getTime();
    return isNaN(parsed) ? 0 : parsed;
}

// Sort projects by date (newest first)
projectsData.sort((a, b) => parseProjectDate(b.date) - parseProjectDate(a.date));

// Map Variables
let mapInitialized = false;
let projectsMap;
let projectMarkers = [];
let filteredProjects = [];
// Filter projects logic
function filterProjects() {
    const searchTerm = document.getElementById('project-search').value.toLowerCase();
    const region = document.getElementById('project-region-filter').value;
    const year = document.getElementById('project-year-filter').value;

    filteredProjects = projectsData.filter(p => {
        const matchesSearch = (p.projectName && p.projectName.toLowerCase().includes(searchTerm)) ||
            (p.company && p.company.toLowerCase().includes(searchTerm)) ||
            (p.country && p.country.toLowerCase().includes(searchTerm));
        const matchesRegion = region === '' || p.region === region;
        const matchesYear = year === '' || (p.date && p.date.includes(year));
        return matchesSearch && matchesRegion && matchesYear;
    });

    renderProjectsSidebar();
    updateMapMarkers();
}

// Render Sidebar List
function renderProjectsSidebar() {
    const list = document.getElementById('projects-sidebar-list');

    if (!filteredProjects || filteredProjects.length === 0) {
        list.innerHTML = '<div class="p-8 text-center text-gray-500 text-xs flex flex-col items-center gap-3"><i data-lucide="search-x" class="w-8 h-8 text-gray-700"></i>No projects found matching your criteria.</div>';
        lucide.createIcons(); // ensure to re-run lucide icons if applicable
        return;
    }

    list.innerHTML = filteredProjects.map((p, index) => {
        if (!p.lat || !p.lng) return '';

        let isCurrent = p.date && p.date.includes('2026');
        let badgeColor = isCurrent ? 'bg-[#ff6b00] text-white' : 'bg-[#ff6b00] text-[#121212]';
        let hoverBorder = isCurrent ? 'hover:border-blue-400' : 'hover:border-teal-400';
        let textColor = isCurrent ? 'text-[#ff6b00]' : 'text-[#ff6b00]';
        let currentBadge = isCurrent ? `<span class="bg-[#ff6b00]/20 text-white px-1.5 py-0.5 rounded text-[8px] ml-2 align-middle font-bold">CURRENT</span>` : '';

        // Keep track of the original index to match with map marker array
        const originalIndex = projectsData.findIndex(op => op === p);

        return `
        <div class="p-4 border border-gray-800 bg-[#242424] hover:bg-[#111112] rounded ${hoverBorder} cursor-pointer transition-all flex gap-3" onclick="focusProject(${originalIndex})">
            <div class="w-6 h-6 rounded-full ${badgeColor} flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">${originalIndex + 1}</div>
            <div class="flex-grow">
                <h3 class="text-sm font-bold text-white mb-1 leading-tight">${p.projectName}${currentBadge}</h3>
                <p class="text-xs ${textColor} mb-3 font-semibold">${p.company}</p>
                <div class="flex justify-between items-center text-[10px] text-gray-400 font-medium uppercase tracking-wider">
                    <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3 h-3"></i> ${p.country}</span>
                    <span class="flex items-center gap-1"><i data-lucide="calendar" class="w-3 h-3"></i> ${(p.date || '').split(' ').pop()}</span>
                </div>
            </div>
        </div>
        `;
    }).join('');
    lucide.createIcons();
}

// Update Map Markers and Cluster Logic
let arcLayers = [];

function getBezierPoints(latlng1, latlng2, pointsCount = 30) {
    const lat1 = latlng1[0], lng1 = latlng1[1];
    const lat2 = latlng2[0], lng2 = latlng2[1];

    // Calculate control point
    const midLat = (lat1 + lat2) / 2;
    const midLng = (lng1 + lng2) / 2;

    // Offset perpendicular to the line
    const dist = Math.sqrt(Math.pow(lat2 - lat1, 2) + Math.pow(lng2 - lng1, 2));
    const angle = Math.atan2(lat2 - lat1, lng2 - lng1) + Math.PI / 2; // perpendicular
    const curvature = 0.25; // height of curve
    const offset = dist * curvature;

    const ctrlLat = midLat + Math.sin(angle) * offset;
    const ctrlLng = midLng + Math.cos(angle) * offset;

    const points = [];
    for (let i = 0; i <= pointsCount; i++) {
        const t = i / pointsCount;
        const lat = (1 - t) * (1 - t) * lat1 + 2 * (1 - t) * t * ctrlLat + t * t * lat2;
        const lng = (1 - t) * (1 - t) * lng1 + 2 * (1 - t) * t * ctrlLng + t * t * lng2;
        points.push([lat, lng]);
    }
    return points;
}

function drawConnectionArcs() {
    // Remove existing arcs
    arcLayers.forEach(layer => {
        if (projectsMap && layer) projectsMap.removeLayer(layer);
    });
    arcLayers = [];

    if (!projectsMap) return;

    const hq = [19.0169, 73.0394]; // Mumbai Head Office coordinates
    const addedDestinations = new Set();

    filteredProjects.forEach(p => {
        if (!p.lat || !p.lng) return;

        // Calculate distance in degrees
        const dist = Math.sqrt(Math.pow(p.lat - hq[0], 2) + Math.pow(p.lng - hq[1], 2));

        // Only draw arcs for projects that are far enough from Mumbai (> 2.5 degrees) to keep it clean
        if (dist > 2.5) {
            const destKey = `${p.lat.toFixed(2)},${p.lng.toFixed(2)}`;
            if (addedDestinations.has(destKey)) return; // Avoid duplicate lines to the same city
            addedDestinations.add(destKey);

            const points = getBezierPoints(hq, [p.lat, p.lng]);
            const arc = L.polyline(points, {
                color: '#22d3ee',
                weight: 1.5,
                opacity: 0.8,
                className: 'glowing-arc'
            }).addTo(projectsMap);

            arcLayers.push(arc);
        }
    });
}

function updateMapMarkers() {
    // Remove existing markers
    projectMarkers.forEach(marker => {
        if (marker) marker.remove();
    });
    projectMarkers = [];

    const markersForBounds = [];

    // First gather projects by exact coordinates (rounded) so we can spread overlapping markers
    const coordBuckets = {};
    filteredProjects.forEach((p) => {
        if (p.lat && p.lng) {
            const originalIndex = projectsData.findIndex(op => op === p);
            const key = `${p.lat.toFixed(6)},${p.lng.toFixed(6)}`;
            if (!coordBuckets[key]) coordBuckets[key] = [];
            coordBuckets[key].push({ p, originalIndex });
        }
    });

    // Helper to convert meters to degrees approximately
    function metersToLatDeg(m) { return m / 111320; }
    function metersToLngDeg(m, lat) { return m / (111320 * Math.cos(lat * Math.PI / 180)); }

    // Create markers, applying a small deterministic spread for groups with more than one point
    Object.values(coordBuckets).forEach(group => {
        const groupSize = group.length;
        const baseLat = group[0].p.lat;
        const baseLng = group[0].p.lng;

        group.forEach((item, idx) => {
            const { p, originalIndex } = item;
            const isCurrent = p.date && p.date.includes('2026');

            const icon = L.divIcon({
                className: `custom-number-marker ${isCurrent ? 'current-project' : ''}`,
                html: `<span>${originalIndex + 1}</span>`,
                iconSize: [22, 22],
                iconAnchor: [11, 11],
                popupAnchor: [0, -11]
            });

            let lat = p.lat;
            let lng = p.lng;

            if (groupSize > 1) {
                // Spread points in a small circle so overlapping markers become visible
                const spacingMeters = 25; // base spacing in meters
                const radius = spacingMeters * (1 + Math.floor(idx / 6));
                const angle = (idx * (360 / groupSize)) * (Math.PI / 180);
                const dLat = Math.cos(angle) * radius;
                const dLng = Math.sin(angle) * radius;
                lat = baseLat + metersToLatDeg(dLat);
                lng = baseLng + metersToLngDeg(dLng, baseLat);
            }

            const marker = L.marker([lat, lng], { icon: icon });

            const popupContent = `
                <div style="font-family: 'Outfit', sans-serif; max-width: 280px; padding: 4px;">
                    <h3 style="font-weight: bold; font-size: 16px; margin: 0 0 4px 0; color: #06b6d4;">${p.projectName}</h3>
                    <p style="font-size: 12px; color: #d1d5db; margin: 0 0 12px 0; font-weight: 600; border-bottom: 1px solid #374151; padding-bottom: 8px;">${p.company}</p>
                    
                    <ul style="list-style: none; padding: 0; margin: 0 0 12px 0; font-size: 12px; display: flex; flex-direction: column; gap: 6px;">
                        <li><strong style="color: #9ca3af; width: 60px; display: inline-block;">Location:</strong> <span style="color: #ffffff;">${p.location}, ${p.country}</span></li>
                        <li><strong style="color: #9ca3af; width: 60px; display: inline-block;">Type:</strong> <span style="color: #ffffff;">${p.type}</span></li>
                        <li><strong style="color: #9ca3af; width: 60px; display: inline-block;">Date:</strong> <span style="color: #ffffff;">${p.date}</span></li>
                    </ul>
                    
                    ${p.description ? `<p style="font-size: 12px; color: #e5e7eb; line-height: 1.5; margin: 0; padding-top: 8px; border-top: 1px solid #374151;">${p.description}</p>` : ''}
                </div>
            `;
            marker.bindPopup(popupContent);

            marker.addTo(projectsMap);
            markersForBounds.push(marker);
            projectMarkers[originalIndex] = marker;
        });
    });

    // Adjust bounds if there are markers to display and a filter is active
    const searchInput = document.getElementById('project-search');
    const regionInput = document.getElementById('project-region-filter');
    const yearInput = document.getElementById('project-year-filter');
    const currentInput = document.getElementById('project-current-filter');

    const isFiltered = (searchInput && searchInput.value !== '') ||
        (regionInput && regionInput.value !== '') ||
        (yearInput && yearInput.value !== '') ||
        (currentInput && currentInput.checked);

    if (markersForBounds.length > 0) {
        if (isFiltered) {
            const featureGroup = L.featureGroup(markersForBounds);
            const paddingLeft = window.innerWidth > 768 ? 450 : 50;
            projectsMap.fitBounds(featureGroup.getBounds(), { paddingTopLeft: [paddingLeft, 50], paddingBottomRight: [50, 50], maxZoom: 12 });
        } else {
            // For initial load / unfiltered state, show full world view
            projectsMap.setView([15, 20], 2);
        }
    }

    // Draw animated connection arcs
    drawConnectionArcs();
}

// Focus Specific Project from Sidebar Click
function focusProject(index) {
    const marker = projectMarkers[index];
    if (marker) {
        projectsMap.setView(marker.getLatLng(), 12, { animate: true, duration: 1 })
        setTimeout(() => marker.openPopup(), 500);
    }
}

// Initialize Leaflet Map
function initProjectsMap() {
    if (mapInitialized) {
        projectsMap.invalidateSize();
        return;
    }

    projectsMap = L.map('projects-map', {
        minZoom: 2,
        maxZoom: 18,
        zoomControl: false,
        maxBounds: [
            [-85, -180],
            [85, 180]
        ],
        maxBoundsViscosity: 0.5
    }).setView([15, 20], 2);

    // Add zoom control to bottom right so it's not hidden by sidebar
    L.control.zoom({ position: 'bottomright' }).addTo(projectsMap);

    // Add a premium, fast light-themed tile layer (CartoDB Positron)
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
        noWrap: true
    }).addTo(projectsMap);

    filteredProjects = [...projectsData];
    updateMapMarkers();
    renderProjectsSidebar();
    mapInitialized = true;
}

// INITIALIZE
window.onload = () => {
    requestAnimationFrame(() => {
        lucide.createIcons();
        renderServices();
        renderManagement();
        renderNews();
        renderCareers();
        renderResources();

        // Setup AI Chat
        const aiChatForm = document.getElementById('ai-chat-form');
        if (aiChatForm) {
            aiChatForm.addEventListener('submit', handleAiChatSubmit);
        }

        // Setup real-time search filter
        const resourceSearch = document.getElementById('resource-search');
        if (resourceSearch) {
            resourceSearch.addEventListener('input', (e) => {
                currentResourceSearch = e.target.value.toLowerCase();
                renderResources();
            });
        }

        // Initialize B2B RFQ steps layout if updateRfqSteps exists
        if (typeof updateRfqSteps === 'function') {
            updateRfqSteps();
        }

        // Initialize Fleet Hub dataset if it exists
        if (typeof initFleetHub === 'function') {
            initFleetHub();
        }

        // Initialize Desk Clock and Status
        updateDeskClock();
        setInterval(updateDeskClock, 1000);
        updateDeskStatus();
        setInterval(updateDeskStatus, 60000);
    });
};

// B2B RFQ SURVEY WIZARD ENGINE BACKUP
let currentRfqStep = 1;
let rfqSelectedEnv = '';
let rfqSelectedServices = [];

function switchContactForm(mode) {
    const indicator = document.getElementById('toggle-indicator');
    const msgBtn = document.getElementById('toggle-msg-btn');
    const rfqBtn = document.getElementById('toggle-rfq-btn');
    const msgWrapper = document.getElementById('contact-message-wrapper');
    const rfqWrapper = document.getElementById('contact-rfq-wrapper');

    if (mode === 'message') {
        if (indicator) indicator.style.transform = 'translateX(0)';
        if (msgBtn) {
            msgBtn.classList.add('active');
            msgBtn.classList.remove('text-slate-400');
            msgBtn.classList.add('text-white');
        }
        if (rfqBtn) {
            rfqBtn.classList.remove('active');
            rfqBtn.classList.remove('text-white');
            rfqBtn.classList.add('text-slate-400');
        }
        if (msgWrapper) msgWrapper.classList.remove('hidden');
        if (rfqWrapper) rfqWrapper.classList.add('hidden');
    } else {
        if (indicator) indicator.style.transform = 'translateX(calc(100% - 4px))';
        if (rfqBtn) {
            rfqBtn.classList.add('active');
            rfqBtn.classList.remove('text-slate-400');
            rfqBtn.classList.add('text-white');
        }
        if (msgBtn) {
            msgBtn.classList.remove('active');
            msgBtn.classList.remove('text-white');
            msgBtn.classList.add('text-slate-400');
        }
        if (msgWrapper) msgWrapper.classList.add('hidden');
        if (rfqWrapper) rfqWrapper.classList.remove('hidden');

        if (window.contactMap) {
            setTimeout(() => {
                window.contactMap.invalidateSize();
            }, 100);
        }
    }
    updateRfqTelemetrySummary();
}

function selectRfqEnvironment(env) {
    rfqSelectedEnv = env;
    document.querySelectorAll('#rfq-step-1 .rfq-card-option').forEach(card => {
        card.classList.remove('selected');
    });
    const selectedCard = document.getElementById(`rfq-env-${env}`);
    if (selectedCard) {
        selectedCard.classList.add('selected');
    }

    updateRfqTelemetrySummary();

    // Premium auto-advance UX
    setTimeout(() => {
        if (currentRfqStep === 1 && rfqSelectedEnv === env) {
            nextRfqStep();
        }
    }, 400);
}

function toggleRfqService(service) {
    const index = rfqSelectedServices.indexOf(service);
    const card = document.getElementById(`rfq-serv-${service}`);
    if (index === -1) {
        rfqSelectedServices.push(service);
        if (card) card.classList.add('selected');
    } else {
        rfqSelectedServices.splice(index, 1);
        if (card) card.classList.remove('selected');
    }
    updateRfqTelemetrySummary();
}

function updateRfqSteps() {
    // Hide all steps, show active
    for (let i = 1; i <= 4; i++) {
        const stepDiv = document.getElementById(`rfq-step-${i}`);
        if (stepDiv) {
            if (i === currentRfqStep) {
                stepDiv.classList.add('active');
            } else {
                stepDiv.classList.remove('active');
            }
        }
    }

    // Update step trackers in header progress bar
    for (let i = 1; i <= 4; i++) {
        const indicator = document.getElementById(`rfq-indicator-${i}`);
        if (indicator) {
            const badge = indicator.querySelector('span:first-child');
            const label = indicator.querySelector('span:last-child');

            if (i < currentRfqStep) {
                // Completed Step
                if (badge) {
                    badge.className = "w-5 h-5 rounded-full bg-slate-900 border border-cyan-500 text-cyan-400 flex items-center justify-center text-[9px] font-bold transition-all";
                    badge.innerHTML = '✓';
                }
                if (label) label.className = "text-[#06b6d4] transition-colors";
            } else if (i === currentRfqStep) {
                // Active Step
                if (badge) {
                    badge.className = "w-5 h-5 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center text-[9px] font-bold transition-all shadow-[0_0_10px_rgba(6,182,212,0.5)]";
                    badge.innerHTML = i;
                }
                if (label) label.className = "text-white font-bold transition-colors";
            } else {
                // Future Step
                if (badge) {
                    badge.className = "w-5 h-5 rounded-full bg-slate-800 text-gray-500 flex items-center justify-center text-[9px] font-normal transition-all";
                    badge.innerHTML = i;
                }
                if (label) label.className = "text-gray-500 transition-colors";
            }
        }

        // Update lines
        if (i < 4) {
            const line = document.getElementById(`rfq-line-${i}`);
            if (line) {
                if (i < currentRfqStep) {
                    line.className = "w-6 h-[2px] bg-cyan-500 transition-colors";
                } else {
                    line.className = "w-6 h-[2px] bg-slate-800 transition-colors";
                }
            }
        }
    }

    const prevBtn = document.getElementById('rfq-prev-btn');
    const nextBtn = document.getElementById('rfq-next-btn');

    if (currentRfqStep === 1) {
        if (prevBtn) prevBtn.classList.add('opacity-50', 'pointer-events-none');
    } else {
        if (prevBtn) prevBtn.classList.remove('opacity-50', 'pointer-events-none');
    }

    if (currentRfqStep === 4) {
        if (nextBtn) {
            nextBtn.innerText = "Submit RFQ";
            nextBtn.type = "submit";
        }
    } else {
        if (nextBtn) {
            nextBtn.innerText = "Next Step";
            nextBtn.type = "button";
        }
    }
    updateRfqTelemetrySummary();
}

function prevRfqStep() {
    if (currentRfqStep > 1) {
        currentRfqStep--;
        updateRfqSteps();
    }
}

function nextRfqStep() {
    // Validation step 1
    if (currentRfqStep === 1 && !rfqSelectedEnv) {
        const nextBtn = document.getElementById('rfq-next-btn');
        if (nextBtn) {
            const originalText = nextBtn.innerText;
            nextBtn.innerText = "Select Environment First!";
            nextBtn.style.backgroundColor = "#ef4444";
            nextBtn.style.color = "#ffffff";
            setTimeout(() => {
                nextBtn.innerText = originalText;
                nextBtn.style.backgroundColor = "";
                nextBtn.style.color = "";
            }, 1500);
        }
        return;
    }

    // Validation step 2
    if (currentRfqStep === 2 && rfqSelectedServices.length === 0) {
        const nextBtn = document.getElementById('rfq-next-btn');
        if (nextBtn) {
            const originalText = nextBtn.innerText;
            nextBtn.innerText = "Select At Least 1 Service!";
            nextBtn.style.backgroundColor = "#ef4444";
            nextBtn.style.color = "#ffffff";
            setTimeout(() => {
                nextBtn.innerText = originalText;
                nextBtn.style.backgroundColor = "";
                nextBtn.style.color = "";
            }, 1500);
        }
        return;
    }

    if (currentRfqStep < 4) {
        currentRfqStep++;
        updateRfqSteps();
    }
}

function handleRfqSubmit(event) {
    event.preventDefault();

    const company = document.getElementById('rfq-company').value;
    const contactName = document.getElementById('rfq-contact-name').value;
    const email = document.getElementById('rfq-email').value;
    const depth = document.getElementById('rfq-depth').value || 'Not Specified';
    const size = document.getElementById('rfq-size').value || 'Not Specified';
    const date = document.getElementById('rfq-date').value || 'Not Specified';
    const datum = document.getElementById('rfq-datum').value || 'Not Specified';
    const coords = document.getElementById('rfq-coords').value || 'None Provided';

    const envName = rfqSelectedEnv.charAt(0).toUpperCase() + rfqSelectedEnv.slice(1);
    const servicesList = rfqSelectedServices.map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(', ');

    const emailBody = `B2B SURVEY REQUEST FOR QUOTE (RFQ)
==================================

CLIENT INFORMATION
------------------
Company Name: ${company}
Contact Person: ${contactName}
Professional Email: ${email}

SURVEY PROFILE
--------------
Marine Environment: ${envName}
Required Service Scope: ${servicesList}

TECHNICAL SPECIFICATIONS
------------------------
Target Depth Range: ${depth}
Estimated Area / Route Length: ${size}
Estimated Commencement Date: ${date}
Required Datum / Grid Reference: ${datum}

PROJECT COORDINATES / BOUNDARIES / RPL DATA
-------------------------------------------
${coords}

==================================
Generated via Ocean Science RFQ Survey Builder`;

    const subject = `B2B RFQ Survey Request - ${company}`;
    const mailtoLink = `mailto:mail@oceanscience.in?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
    alert('Your email application has been opened with the structured RFQ details.');

    // Reset form and state
    event.target.reset();
    currentRfqStep = 1;
    rfqSelectedEnv = '';
    rfqSelectedServices = [];
    document.querySelectorAll('.rfq-card-option').forEach(card => card.classList.remove('selected'));
    updateRfqSteps();
    switchContactForm('message');
}

// CUSTOM OPERATIONS CONSOLE FUNCTIONS
function updateDeskClock() {
    const clockEl = document.getElementById('local-desk-time');
    if (!clockEl) return;
    const now = new Date();
    const istTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (3600000 * 5.5));
    clockEl.innerText = istTime.toLocaleTimeString('en-US', { hour12: false }) + ' (IST)';
}

function updateDeskStatus() {
    const badgeEl = document.getElementById('office-status-badge');
    if (!badgeEl) return;
    const now = new Date();
    const istTime = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + (3600000 * 5.5));
    const hours = istTime.getHours();
    const day = istTime.getDay();
    const isOpen = day >= 1 && day <= 5 && hours >= 9 && hours < 18;
    if (isOpen) {
        badgeEl.className = "px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 flex items-center gap-1.5";
        badgeEl.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Active';
    } else {
        badgeEl.className = "px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 flex items-center gap-1.5";
        badgeEl.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> Email Monitored';
    }
}

function switchLocationDesk(deskId) {
    const tabHq = document.getElementById('loc-tab-hq');
    const tabKakinada = document.getElementById('loc-tab-kakinada');
    const contentHq = document.getElementById('loc-content-hq');
    const contentKakinada = document.getElementById('loc-content-kakinada');
    if (!tabHq || !tabKakinada || !contentHq || !contentKakinada) return;

    if (deskId === 'hq') {
        tabHq.classList.add('active', 'text-white');
        tabHq.classList.remove('text-slate-400');
        tabKakinada.classList.remove('active', 'text-white');
        tabKakinada.classList.add('text-slate-400');
        contentHq.classList.remove('hidden');
        contentKakinada.classList.add('hidden');

        if (window.contactMap) {
            window.contactMap.setView([19.0169, 73.0394], 12);
        }
    } else {
        tabKakinada.classList.add('active', 'text-white');
        tabKakinada.classList.remove('text-slate-400');
        tabHq.classList.remove('active', 'text-white');
        tabHq.classList.add('text-slate-400');
        contentKakinada.classList.remove('hidden');
        contentHq.classList.add('hidden');

        if (window.contactMap) {
            window.contactMap.setView([16.9792, 82.2647], 12);
        }
    }
}

function toggleFaq(index) {
    const answer = document.getElementById(`faq-answer-${index}`);
    const arrow = document.getElementById(`faq-arrow-${index}`);
    if (!answer || !arrow) return;

    const isOpen = answer.classList.contains('open');

    for (let i = 1; i <= 3; i++) {
        const ans = document.getElementById(`faq-answer-${i}`);
        const arr = document.getElementById(`faq-arrow-${i}`);
        if (ans) ans.classList.remove('open');
        if (arr) arr.classList.remove('rotated');
    }

    if (!isOpen) {
        answer.classList.add('open');
        arrow.classList.add('rotated');
    }
}

function updateRfqTelemetrySummary() {
    const envEl = document.getElementById('telemetry-env');
    const capsEl = document.getElementById('telemetry-caps');
    const depthEl = document.getElementById('telemetry-depth');
    const sizeEl = document.getElementById('telemetry-size');
    const launchEl = document.getElementById('telemetry-launch');
    const datumEl = document.getElementById('telemetry-datum');
    const clientEl = document.getElementById('telemetry-client');
    const statusEl = document.getElementById('telemetry-status');

    if (!envEl) return;

    if (rfqSelectedEnv) {
        envEl.innerText = rfqSelectedEnv.toUpperCase();
        envEl.className = "text-cyan-400 font-bold";
    } else {
        envEl.innerText = "NONE SELECTED";
        envEl.className = "text-white font-bold";
    }

    if (rfqSelectedServices.length > 0) {
        capsEl.innerText = JSON.stringify(rfqSelectedServices.map(s => s.toUpperCase()));
        capsEl.className = "text-cyan-400 font-bold";
    } else {
        capsEl.innerText = "[]";
        capsEl.className = "text-white font-bold";
    }

    const depthVal = document.getElementById('rfq-depth') ? document.getElementById('rfq-depth').value : '';
    const sizeVal = document.getElementById('rfq-size') ? document.getElementById('rfq-size').value : '';
    const dateVal = document.getElementById('rfq-date') ? document.getElementById('rfq-date').value : '';
    const datumVal = document.getElementById('rfq-datum') ? document.getElementById('rfq-datum').value : '';

    if (depthEl) {
        depthEl.innerText = depthVal ? depthVal : "N/A";
        depthEl.className = depthVal ? "text-cyan-400 font-bold" : "text-white font-bold";
    }
    if (sizeEl) {
        sizeEl.innerText = sizeVal ? sizeVal : "N/A";
        sizeEl.className = sizeVal ? "text-cyan-400 font-bold" : "text-white font-bold";
    }
    if (launchEl) {
        launchEl.innerText = dateVal ? dateVal : "N/A";
        launchEl.className = dateVal ? "text-cyan-400 font-bold" : "text-white font-bold";
    }
    if (datumEl) {
        datumEl.innerText = datumVal ? datumVal : "N/A";
        datumEl.className = datumVal ? "text-cyan-400 font-bold" : "text-white font-bold";
    }

    const companyVal = document.getElementById('rfq-company') ? document.getElementById('rfq-company').value : '';
    const contactVal = document.getElementById('rfq-contact-name') ? document.getElementById('rfq-contact-name').value : '';
    if (clientEl) {
        if (companyVal || contactVal) {
            clientEl.innerText = `${contactVal || 'UNKNOWN'} @ ${companyVal || 'UNKNOWN'}`.toUpperCase();
            clientEl.className = "text-cyan-400 font-bold";
        } else {
            clientEl.innerText = "N/A";
            clientEl.className = "text-white font-bold";
        }
    }

    if (statusEl) {
        if (currentRfqStep === 1) {
            statusEl.innerText = "STEP 1 // ENV_SELECTION";
        } else if (currentRfqStep === 2) {
            statusEl.innerText = "STEP 2 // CAPABILITIES_TUNE";
        } else if (currentRfqStep === 3) {
            statusEl.innerText = "STEP 3 // SPECIFICATIONS_INPUT";
        } else if (currentRfqStep === 4) {
            statusEl.innerText = "STEP 4 // READY_TO_TRANSMIT";
        }
    }
}

// B2B EQUIPMENT & VESSEL FLEET DATA BACKUP
const fleetData = [
    {
        id: 'vessel-01',
        category: 'vessel',
        name: 'GTV Samudra Sarvekshak',
        tag: 'GEOTECHNICAL DRILL VESSEL',
        desc: 'ONGC owned Geotechnical Drilling Vessel operated by Ocean Science. Outfitted with offshore boring towers, heave compensation, seabed CPT setups, and an on-board soil mechanics testing laboratory.',
        specs: {
            'Length Overall': '76.4 meters',
            'Max Drilling Depth': '300m below seabed',
            'CPT Push Capacity': '10-20 Tons (AP10)',
            'Dynamic Positioning': 'DP-1 System Grade',
            'Berthing Capacity': '58 berths',
            'Certifications': 'IRS / DNV GL Class'
        },
        mission: {
            status: 'ACTIVE MISSION',
            project: 'KG Basin Soil Boring Campaign',
            client: 'GAIL (India) Limited',
            lat: 16.989124,
            lng: 82.247510,
            speed: 2.1
        }
    },
    {
        id: 'vessel-02',
        category: 'vessel',
        name: 'OSS Shield',
        tag: 'MULTI-ROLE SURVEY VESSEL',
        desc: 'Main research and survey vessel mobilized for offshore geophysics, side-scan sweeps, cable route routing, and deepwater metocean deployments.',
        specs: {
            'Length Overall': '48.2 meters',
            'Swath Mapping': 'Kongsberg EM2040 Dual RX',
            'Magnetometer Sweep': 'EdgeTech Gradiometer Rig',
            'Sub-Bottom Profiler': 'Innomar Parametric SBP',
            'Positioning System': 'Veripos Dual GNSS (WAPS)',
            'Cruising Speed': '11.0 knots maximum'
        },
        mission: {
            status: 'STANDBY / CALIBRATION',
            project: 'Sensor Calibration Trials',
            client: 'Mumbai Port Authority',
            lat: 18.951710,
            lng: 72.952614,
            speed: 0.0
        }
    },
    {
        id: 'sensor-01',
        category: 'sensor',
        name: 'Kongsberg EM2040 MBES',
        tag: 'MULTIBEAM ECHOSOUNDER',
        desc: 'High-precision dual-receiver multibeam echosounder for shallow and deep water swath hydrographic surveys, strictly complying with IHO Special Order standards.',
        specs: {
            'Acoustic Frequency': '200 to 400 kHz',
            'Max Swath Width': '140 degrees swath',
            'Operational Limits': '600 meters depth',
            'Ping Rate Limit': 'Up to 50 Hz',
            'Pulse Types': 'FM Chirp / CW Profile',
            'Aperture Swath': '0.5 deg beamwidth'
        },
        mission: {
            status: 'OPERATIONAL / CALIBRATED',
            project: 'OSS Mumbai Depot Calibration',
            client: 'OSS Fleet Division',
            lat: 19.016930,
            lng: 73.039420,
            speed: 0.0
        }
    },
    {
        id: 'sensor-02',
        category: 'sensor',
        name: 'EdgeTech 4200-FS SSS',
        tag: 'SIDE SCAN SONAR',
        desc: 'Digital side scan sonar system for seafloor anomaly mapping, obstacle investigation, and cable route hazard assessments.',
        specs: {
            'Dual Frequency': '120 kHz / 410 kHz Dual',
            'Horizontal Swath': '0.3 degrees swath',
            'Swath Range': '300m per channel',
            'Signal Technology': 'Full-Spectrum Chirp',
            'Safety Coupling': 'Acoustic release tow link',
            'Depth Rating': '2000 meters limit'
        },
        mission: {
            status: 'ACTIVE MISSION',
            project: 'Oman Fiber Route Survey',
            client: 'E-Marine PJSC',
            lat: 23.678120,
            lng: 57.886510,
            speed: 4.2
        }
    },
    {
        id: 'rig-01',
        category: 'geotech',
        name: 'Seabed CPT ROSON-100',
        tag: 'CONE PENETRATION RIG',
        desc: 'Continuous seabed CPT system deployed directly on the ocean floor to measure sleeve friction and soil shear profiles.',
        specs: {
            'Pushing Force': '100 kN (10 Tons force)',
            'Depth Limits': '2000 meters subsea',
            'Bore Penetration': 'Up to 25 meters subsea',
            'Measurement': 'Cone resistance & pore pressure',
            'Link Interface': 'Fiber-optic data wireline',
            'Hydraulic Power': '400V 3-Phase power pack'
        },
        mission: {
            status: 'OPERATIONAL / TESTED',
            project: 'Maintenance Bench Testing',
            client: 'OSS Geotechnical',
            lat: 19.016930,
            lng: 73.039420,
            speed: 0.0
        }
    }
];

let activeFleetFilter = 'all';
let selectedAssetId = '';
let telemetryInterval;

function filterFleet(category) {
    activeFleetFilter = category;

    document.querySelectorAll('.filter-tab-btn').forEach(btn => {
        if (btn.id === `fleet-btn-${category}`) {
            btn.classList.add('active', 'text-white');
            btn.classList.remove('text-gray-400');
        } else {
            btn.classList.remove('active', 'text-white');
            btn.classList.add('text-gray-400');
        }
    });

    renderFleetGrid();
}

function renderFleetGrid() {
    const container = document.getElementById('fleet-cards-container');
    if (!container) return;

    const filtered = fleetData.filter(item => {
        return activeFleetFilter === 'all' || item.category === activeFleetFilter;
    });

    container.innerHTML = filtered.map(item => {
        const isActive = item.mission.status === 'ACTIVE MISSION' || item.mission.status === 'DEPLOYED ON VESSEL';
        const statusClass = isActive ? 'pulse-badge-active' : 'pulse-badge-standby';
        const isSelected = item.id === selectedAssetId ? 'selected' : '';

        return `
        <div onclick="inspectAsset('${item.id}')" id="fleet-card-${item.id}" class="fleet-grid-card ${isSelected} cursor-pointer p-6 rounded-xl flex flex-col justify-between min-h-[180px] border border-gray-800 bg-[#0f172a]/20">
            <div class="flex justify-between items-start">
                <span class="text-[9px] text-[#06b6d4] font-bold tracking-[0.2em] uppercase tech-label">${item.tag}</span>
                <span class="text-[8px] font-bold px-2 py-0.5 rounded-full ${statusClass} tech-label uppercase flex items-center">${item.mission.status}</span>
            </div>
            <div class="mt-4">
                <h4 class="text-white font-bold text-lg leading-tight transition-colors group-hover:text-[#06b6d4]">${item.name}</h4>
                <p class="text-[11px] text-gray-400 mt-2 line-clamp-2 leading-relaxed">${item.desc}</p>
            </div>
            <div class="border-t border-slate-800/80 pt-3 mt-4 flex items-center justify-between text-[9px] text-slate-500 font-bold uppercase tracking-widest tech-label">
                <span>INVENTORY ID: ${item.id.toUpperCase()}</span>
                <span class="text-[#ff6b00] group-hover:underline">Inspect Specs →</span>
            </div>
        </div>
        `;
    }).join('');
}

function inspectAsset(id) {
    selectedAssetId = id;

    document.querySelectorAll('.fleet-grid-card').forEach(card => {
        card.classList.remove('selected');
    });
    const card = document.getElementById(`fleet-card-${id}`);
    if (card) card.classList.add('selected');

    const placeholder = document.getElementById('inspector-placeholder');
    const content = document.getElementById('inspector-content');
    if (placeholder) placeholder.classList.add('hidden');
    if (content) content.classList.remove('hidden');

    const item = fleetData.find(a => a.id === id);
    if (!item) return;

    const specsHtml = Object.entries(item.specs).map(([key, val]) => `
        <div class="flex justify-between items-center py-2 border-b border-slate-800/60 text-xs">
            <span class="text-gray-400">${key}</span>
            <span class="text-white font-semibold font-mono tech-label">${val}</span>
        </div>
    `).join('');

    const telemetryHtml = `
        <div class="bg-[#020617]/90 border border-slate-800 rounded-lg p-4 font-mono text-[10px] space-y-2 relative overflow-hidden">
            <div class="absolute -top-10 -right-10 w-24 h-24 bg-[#06b6d4]/5 rounded-full blur-xl"></div>
            <div class="flex justify-between items-center border-b border-slate-800 pb-1.5 mb-2">
                <span class="text-[#06b6d4] font-bold tracking-widest tech-label">LIVE DATA TRANSCEIVER</span>
                <span class="flex h-1.5 w-1.5 relative">
                    <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
                </span>
            </div>
            <div><span class="text-slate-500">MISSION:</span> <span class="text-emerald-400 font-bold">${item.mission.project}</span></div>
            <div><span class="text-slate-500">CLIENT:</span> <span class="text-white font-bold">${item.mission.client}</span></div>
            <div class="grid grid-cols-2 gap-4 pt-1.5 mt-1 border-t border-slate-800/60">
                <div><span class="text-slate-500">LATITUDE:</span> <span id="telemetry-lat" class="text-cyan-400 font-bold font-mono">${item.mission.lat.toFixed(6)} N</span></div>
                <div><span class="text-slate-500">LONGITUDE:</span> <span id="telemetry-lng" class="text-cyan-400 font-bold font-mono">${item.mission.lng.toFixed(6)} E</span></div>
            </div>
            <div class="grid grid-cols-2 gap-4">
                <div><span class="text-slate-500">SPEED:</span> <span id="telemetry-speed" class="text-white font-mono">${item.mission.speed.toFixed(1)} kts</span></div>
                <div><span class="text-slate-500">STATUS:</span> <span class="text-cyan-400">${item.mission.status}</span></div>
            </div>
        </div>
    `;

    content.innerHTML = `
        <div>
            <div class="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <span class="text-[10px] text-cyan-400 font-mono tracking-widest tech-label uppercase">BLUEPRINT SPECIFICATION SHEET</span>
                <span class="text-[9px] text-[#ff6b00] font-bold border border-[#ff6b00]/30 bg-[#ff6b00]/10 px-2.5 py-0.5 rounded-sm uppercase tracking-widest tech-label">${item.tag}</span>
            </div>
            
            <h3 class="text-2xl font-bold text-white mb-2 leading-tight">${item.name}</h3>
            <p class="text-xs text-gray-400 leading-relaxed mb-6">${item.desc}</p>
            
            <div class="space-y-1 mb-8">
                <h4 class="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-2 font-mono">Technical Parameters</h4>
                ${specsHtml}
            </div>
        </div>
        
        <div>
            <h4 class="text-[9px] text-slate-500 font-bold uppercase tracking-wider mb-2 font-mono">Live Operation Telemetry</h4>
            ${telemetryHtml}
        </div>
    `;

    lucide.createIcons();
}

function initFleetHub() {
    renderFleetGrid();

    if (telemetryInterval) clearInterval(telemetryInterval);
    telemetryInterval = setInterval(() => {
        fleetData.forEach(item => {
            if (item.mission.speed > 0) {
                const driftFactor = 0.000008 * item.mission.speed;
                item.mission.lat += (Math.random() - 0.5) * driftFactor;
                item.mission.lng += (Math.random() - 0.5) * driftFactor;
            }
        });

        if (selectedAssetId) {
            const activeItem = fleetData.find(a => a.id === selectedAssetId);
            if (activeItem && activeItem.mission.speed > 0) {
                const latEl = document.getElementById('telemetry-lat');
                const lngEl = document.getElementById('telemetry-lng');
                if (latEl) latEl.innerText = `${activeItem.mission.lat.toFixed(6)} N`;
                if (lngEl) lngEl.innerText = `${activeItem.mission.lng.toFixed(6)} E`;
            }
        }
    }, 3000);
}

// Live HQ Status Timer
setInterval(() => {
    const el = document.getElementById('live-hq-time');
    if (el) {
        const d = new Date();
        const options = { timeZone: 'Asia/Kolkata', hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };
        el.innerText = new Intl.DateTimeFormat('en-US', options).format(d) + ' IST';
    }
}, 1000);

// â”€â”€ AI CHAT HANDLER (calls /api/ask-ai with SSE streaming) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
async function handleAiChatSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const input = form.querySelector('input[name="question"], textarea[name="question"], #ai-chat-input');
    const responseContainer = document.getElementById('ai-chat-response');
    const sendBtn = form.querySelector('button[type="submit"]');

    if (!input || !input.value.trim()) return;

    const question = input.value.trim();
    input.value = '';
    if (sendBtn) sendBtn.disabled = true;

    // Append user message to response container
    if (responseContainer) {
        const userMsg = document.createElement('div');
        userMsg.className = 'ai-user-msg';
        userMsg.innerHTML = `<span class="ai-user-label">You:</span> ${escapeHtml(question)}`;
        responseContainer.appendChild(userMsg);

        const botMsg = document.createElement('div');
        botMsg.className = 'ai-bot-msg';
        botMsg.innerHTML = `<span class="ai-bot-label">AI:</span> <span class="ai-response-text"></span><span class="ai-cursor">â–Œ</span>`;
        responseContainer.appendChild(botMsg);
        responseContainer.scrollTop = responseContainer.scrollHeight;

        const responseText = botMsg.querySelector('.ai-response-text');
        const cursor = botMsg.querySelector('.ai-cursor');

        try {
            const res = await fetch('/api/ask-ai', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ question })
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({ error: `Error ${res.status}` }));
                responseText.textContent = err.error || 'Something went wrong.';
                cursor.remove();
                return;
            }

            // Handle streaming response (SSE / chunked)
            const reader = res.body.getReader();
            const decoder = new TextDecoder();
            let buffer = '';
            let fullText = '';

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                buffer += decoder.decode(value, { stream: true });
                const lines = buffer.split('\n');
                buffer = lines.pop(); // keep incomplete line

                for (const line of lines) {
                    if (!line.startsWith('data:')) continue;
                    const data = line.slice(5).trim();
                    if (data === '[DONE]') continue;
                    try {
                        const parsed = JSON.parse(data);
                        // Anthropic streaming format
                        if (parsed.type === 'content_block_delta' && parsed.delta?.text) {
                            fullText += parsed.delta.text;
                            responseText.textContent = fullText;
                            responseContainer.scrollTop = responseContainer.scrollHeight;
                        }
                    } catch (_) { /* skip parse errors */ }
                }
            }

            cursor.remove();
            if (!fullText) responseText.textContent = 'No response received.';

        } catch (err) {
            responseText.textContent = `Error: ${err.message}`;
            cursor.remove();
        } finally {
            if (sendBtn) sendBtn.disabled = false;
            responseContainer.scrollTop = responseContainer.scrollHeight;
        }
    }
}

function escapeHtml(str) {
    return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}