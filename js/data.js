/**
 * Data Storage & State Management
 * 
 * Provides robust multi-tenant data storage pre-populated with
 * authentic development projects across ALL 16 ADMINISTRATIVE REGIONS OF GHANA.
 */

const STORAGE_KEY_PROJECTS = 'cdptms_projects_v16';
const STORAGE_KEY_UPDATES = 'cdptms_updates_v16';
const STORAGE_KEY_MMDAS = 'cdptms_mmdas_v16';
const STORAGE_KEY_COMMUNITIES = 'cdptms_communities_v16';
const STORAGE_KEY_AUDIT = 'cdptms_audit_v16';

// 16 Real Development Projects Across ALL 16 Regions of Ghana
const SEED_PROJECTS = [
  // 1. AHAFO REGION
  {
    id: 'PRJ-AHR-001',
    referenceNumber: 'AHR-ANMA-2026-001',
    title: 'Construction of Mim Agro-Processing Center and Grains Warehouse',
    description: 'Modern post-harvest facility with solar dryers, storage silos, and agro-processing equipment for local maize and cocoa farmers.',
    regionId: 'AHAFO',
    administrativeAreaId: 'MMDA-AHR-01',
    communityId: 'COM-AHR-02',
    category: 'AGRICULTURE',
    contractor: 'Ahafo Green AgroTech Ltd',
    budgetGHS: 1850000,
    expenditureToDateGHS: 920000,
    fundingSource: 'DACF',
    startDate: '2025-04-10',
    expectedCompletionDate: '2026-09-30',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 55,
    assignedOfficerName: 'Ing. Kofi Poku',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-04-01T09:00:00Z'
  },
  // 2. ASHANTI REGION
  {
    id: 'PRJ-AR-001',
    referenceNumber: 'AR-KMA-2026-001',
    title: 'Bantama Maternity & Child Health Clinic Expansion',
    description: 'Expansion of existing health facility to a 30-bed maternity ward, surgical theatre, and cold chain vaccine storage facility.',
    regionId: 'ASHANTI',
    administrativeAreaId: 'MMDA-AR-01',
    communityId: 'COM-AR-01',
    category: 'HEALTH',
    contractor: 'Asanko Construction Consortium',
    budgetGHS: 4200000,
    expenditureToDateGHS: 2800000,
    fundingSource: 'WORLD_BANK',
    startDate: '2025-01-20',
    expectedCompletionDate: '2026-08-30',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 70,
    assignedOfficerName: 'Ing. Kwabena Acheampong',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-01-10T11:15:00Z'
  },
  // 3. BONO REGION
  {
    id: 'PRJ-BR-001',
    referenceNumber: 'BR-SMA-2026-001',
    title: 'Fiapre Solar-Mechanized Water Supply and Distribution Grid',
    description: 'High-yield borehole drilling, 40,000-liter overhead storage tank, and piped distribution to over 3,500 residents.',
    regionId: 'BONO',
    administrativeAreaId: 'MMDA-BR-01',
    communityId: 'COM-BR-02',
    category: 'WATER_SANITATION',
    contractor: 'Bono Hydro Systems Ghana',
    budgetGHS: 850000,
    expenditureToDateGHS: 850000,
    fundingSource: 'DACF',
    startDate: '2024-09-01',
    expectedCompletionDate: '2025-07-31',
    actualCompletionDate: '2025-07-25',
    status: 'COMPLETED',
    progressPercentage: 100,
    assignedOfficerName: 'Ing. Rita Yeboah',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?w=800&auto=format&fit=crop&q=60',
    createdAt: '2024-08-20T10:00:00Z'
  },
  // 4. BONO EAST REGION
  {
    id: 'PRJ-BER-001',
    referenceNumber: 'BER-TMA-2026-001',
    title: 'Tuobodom Senior High Modern 3-Unit Science and ICT Laboratory Block',
    description: 'State-of-the-art laboratory complex equipped with 60 computers, internet connectivity, and physics/chemistry laboratory apparatus.',
    regionId: 'BONO_EAST',
    administrativeAreaId: 'MMDA-BER-01',
    communityId: 'COM-BER-02',
    category: 'EDUCATION',
    contractor: 'Pragmatic Builders & Allied Services',
    budgetGHS: 1950000,
    expenditureToDateGHS: 1200000,
    fundingSource: 'GETFUND',
    startDate: '2025-05-15',
    expectedCompletionDate: '2026-11-20',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 62,
    assignedOfficerName: 'Mr. Frank Owusu',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-05-01T08:30:00Z'
  },
  // 5. CENTRAL REGION
  {
    id: 'PRJ-CR-001',
    referenceNumber: 'CR-CCMA-2026-001',
    title: 'Kotokuraba Market Internal Access Paving and Drainage Works',
    description: 'Upgrading of market secondary access paths with interlocking pavement blocks and reinforced concrete storm-water drains.',
    regionId: 'CENTRAL',
    administrativeAreaId: 'MMDA-CR-01',
    communityId: 'COM-CR-01',
    category: 'COMMUNITY_INFRASTRUCTURE',
    contractor: 'Cape Coast Engineering Works',
    budgetGHS: 1250000,
    expenditureToDateGHS: 980000,
    fundingSource: 'IGF',
    startDate: '2025-02-10',
    expectedCompletionDate: '2026-06-30',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 80,
    assignedOfficerName: 'Ing. Samuel Arthur',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1574958269340-fa927304f202?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-01-25T14:00:00Z'
  },
  // 6. EASTERN REGION
  {
    id: 'PRJ-ER-001',
    referenceNumber: 'ER-NJSMA-2026-001',
    title: 'Effiduase-Asokore Flood Control Drainage and Culvert Upgrading',
    description: 'Construction of 2.4km U-drains and twin box culverts to mitigate perennial flooding along the Densu basin catchment.',
    regionId: 'EASTERN',
    administrativeAreaId: 'MMDA-ER-01',
    communityId: 'COM-ER-02',
    category: 'ROADS_TRANSPORT',
    contractor: 'Onyx Civil Infrastructure Ltd',
    budgetGHS: 3100000,
    expenditureToDateGHS: 1550000,
    fundingSource: 'DDF',
    startDate: '2025-03-01',
    expectedCompletionDate: '2026-10-15',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 50,
    assignedOfficerName: 'Ing. Cynthia Osei',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-02-15T09:40:00Z'
  },
  // 7. GREATER ACCRA REGION
  {
    id: 'PRJ-GAR-001',
    referenceNumber: 'GAR-GEMA-2026-001',
    title: 'Construction of 2-Storey 12-Unit Classroom Block with Ancillary Facilities',
    description: 'Modern educational facility with science lab, library, and headteacher office at Abokobi Presby Basic School.',
    regionId: 'GREATER_ACCRA',
    administrativeAreaId: 'MMDA-GAR-01',
    communityId: 'COM-GAR-01',
    category: 'EDUCATION',
    contractor: 'Consar Limited Ghana',
    budgetGHS: 2850000,
    expenditureToDateGHS: 1950000,
    fundingSource: 'GETFUND',
    startDate: '2025-03-10',
    expectedCompletionDate: '2026-12-15',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 68,
    assignedOfficerName: 'Ing. Emmanuel Mensah',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-03-01T10:00:00Z'
  },
  // 8. NORTH EAST REGION
  {
    id: 'PRJ-NER-001',
    referenceNumber: 'NER-EMMA-2026-001',
    title: 'Gambaga Community Health Planning and Services (CHPS) Compound',
    description: 'Construction of fully equipped CHPS Compound with maternity delivery suite, nurses quarters, and solar refrigeration.',
    regionId: 'NORTH_EAST',
    administrativeAreaId: 'MMDA-NER-01',
    communityId: 'COM-NER-02',
    category: 'HEALTH',
    contractor: 'Savannah Health Infrastructures',
    budgetGHS: 720000,
    expenditureToDateGHS: 720000,
    fundingSource: 'DACF',
    startDate: '2024-11-01',
    expectedCompletionDate: '2025-08-15',
    actualCompletionDate: '2025-08-10',
    status: 'COMPLETED',
    progressPercentage: 100,
    assignedOfficerName: 'Ms. Amina Issah',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60',
    createdAt: '2024-10-15T11:00:00Z'
  },
  // 9. NORTHERN REGION
  {
    id: 'PRJ-NR-001',
    referenceNumber: 'NR-TMA-2026-001',
    title: 'Mechanized Solar-Powered Water Supply System for Aboabo Sub-District',
    description: 'Drilling of high-yield boreholes, installation of 50,000-liter overhead storage reservoirs, and 12 public standpipes.',
    regionId: 'NORTHERN',
    administrativeAreaId: 'MMDA-NR-01',
    communityId: 'COM-NR-01',
    category: 'WATER_SANITATION',
    contractor: 'Savannah HydroTech Ghana Ltd',
    budgetGHS: 980000,
    expenditureToDateGHS: 350000,
    fundingSource: 'DACF',
    startDate: '2025-06-01',
    expectedCompletionDate: '2026-03-31',
    actualCompletionDate: null,
    status: 'DELAYED',
    progressPercentage: 35,
    assignedOfficerName: 'Mr. Abdulai Fuseini',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-05-15T09:00:00Z'
  },
  // 10. OTI REGION
  {
    id: 'PRJ-OR-001',
    referenceNumber: 'OR-KEMA-2026-001',
    title: 'Dambai Lakeside Modern Transport Terminal & Sanitation Facility',
    description: 'Paving of bus and boat passenger boarding terminal, ticketing booths, modern washrooms, and solar streetlights.',
    regionId: 'OTI',
    administrativeAreaId: 'MMDA-OR-01',
    communityId: 'COM-OR-01',
    category: 'COMMUNITY_INFRASTRUCTURE',
    contractor: 'Volta Lake Engineering Works',
    budgetGHS: 1400000,
    expenditureToDateGHS: 600000,
    fundingSource: 'DDF',
    startDate: '2025-07-01',
    expectedCompletionDate: '2026-08-30',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 42,
    assignedOfficerName: 'Ing. Moses Gyamfi',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1574958269340-fa927304f202?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-06-15T10:30:00Z'
  },
  // 11. SAVANNAH REGION
  {
    id: 'PRJ-SR-001',
    referenceNumber: 'SR-WGMA-2026-001',
    title: 'Larabanga Women Cooperative Shea Butter Processing Facility',
    description: 'Eco-friendly mechanical shea processing mills, drying platforms, clean water connections, and training shed.',
    regionId: 'SAVANNAH',
    administrativeAreaId: 'MMDA-SR-01',
    communityId: 'COM-SR-02',
    category: 'AGRICULTURE',
    contractor: 'Mole Eco-Development Partners',
    budgetGHS: 890000,
    expenditureToDateGHS: 750000,
    fundingSource: 'WORLD_BANK',
    startDate: '2025-02-15',
    expectedCompletionDate: '2026-05-30',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 85,
    assignedOfficerName: 'Mr. Dramani Adam',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-01-30T13:20:00Z'
  },
  // 12. UPPER EAST REGION
  {
    id: 'PRJ-UER-001',
    referenceNumber: 'UER-BMA-2026-001',
    title: 'Zuarungu Small Earth Dam & Micro-Irrigation Scheme',
    description: 'Rehabilitation of earth embankment dam, spillway, and gravity canals for all-year vegetable farming by 400 households.',
    regionId: 'UPPER_EAST',
    administrativeAreaId: 'MMDA-UER-01',
    communityId: 'COM-UER-02',
    category: 'AGRICULTURE',
    contractor: 'Bolga Irrigation Engineering Ltd',
    budgetGHS: 2150000,
    expenditureToDateGHS: 1400000,
    fundingSource: 'CENTRAL_GOVERNMENT',
    startDate: '2025-01-10',
    expectedCompletionDate: '2026-07-31',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 65,
    assignedOfficerName: 'Ing. Atanga Akologo',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&auto=format&fit=crop&q=60',
    createdAt: '2024-12-18T09:10:00Z'
  },
  // 13. UPPER WEST REGION
  {
    id: 'PRJ-UWR-001',
    referenceNumber: 'UWR-WMA-2026-001',
    title: 'Bamahu Community Electrification & Solar Mini-Grid System',
    description: 'Installation of 80kWp solar PV farm, battery storage, and 4.5km low-voltage distribution lines to underserved suburbs.',
    regionId: 'UPPER_WEST',
    administrativeAreaId: 'MMDA-UWR-01',
    communityId: 'COM-UWR-02',
    category: 'ELECTRIFICATION',
    contractor: 'SunPower West Africa Ltd',
    budgetGHS: 1780000,
    expenditureToDateGHS: 1100000,
    fundingSource: 'DONOR_PARTNER',
    startDate: '2025-04-01',
    expectedCompletionDate: '2026-09-30',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 60,
    assignedOfficerName: 'Mr. Naa Dery',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-03-20T11:45:00Z'
  },
  // 14. VOLTA REGION
  {
    id: 'PRJ-VR-001',
    referenceNumber: 'VR-HMA-2026-001',
    title: 'Ho Bankoe Technical & Vocational Training Workshop Hall',
    description: 'Construction of 2-storey technical training block with mechanical, welding, and garment technology workshops.',
    regionId: 'VOLTA',
    administrativeAreaId: 'MMDA-VR-01',
    communityId: 'COM-VR-01',
    category: 'EDUCATION',
    contractor: 'Volta Builders Consortium',
    budgetGHS: 2450000,
    expenditureToDateGHS: 1600000,
    fundingSource: 'GETFUND',
    startDate: '2025-02-01',
    expectedCompletionDate: '2026-10-31',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 65,
    assignedOfficerName: 'Ing. Mawuli Agbeko',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-01-15T15:00:00Z'
  },
  // 15. WESTERN REGION
  {
    id: 'PRJ-WR-001',
    referenceNumber: 'WR-STMA-2026-001',
    title: 'Rehabilitation of Kwesimintsim Community Durbar Grounds & Artisanal Sheds',
    description: 'Development of paved community gathering grounds, covered pavilions for local artisans, and public washrooms.',
    regionId: 'WESTERN',
    administrativeAreaId: 'MMDA-WR-01',
    communityId: 'COM-WR-01',
    category: 'COMMUNITY_INFRASTRUCTURE',
    contractor: 'Western Coastal Builders Ltd',
    budgetGHS: 750000,
    expenditureToDateGHS: 120000,
    fundingSource: 'IGF',
    startDate: '2026-02-01',
    expectedCompletionDate: '2026-11-30',
    actualCompletionDate: null,
    status: 'NOT_STARTED',
    progressPercentage: 0,
    assignedOfficerName: 'Ing. Patricia Arthur',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60',
    createdAt: '2026-01-28T14:20:00Z'
  },
  // 16. WESTERN NORTH REGION
  {
    id: 'PRJ-WNR-001',
    referenceNumber: 'WNR-SWMA-2026-001',
    title: 'Asawinso Cocoa Farming Feeder Road Culvert and Spot Improvement',
    description: 'Gravelling, reshaping, and installation of 5 pipe culverts along the 8.5km cocoa evacuation farm track.',
    regionId: 'WESTERN_NORTH',
    administrativeAreaId: 'MMDA-WNR-01',
    communityId: 'COM-WNR-02',
    category: 'ROADS_TRANSPORT',
    contractor: 'Sefwi Pioneer Roads Ltd',
    budgetGHS: 1100000,
    expenditureToDateGHS: 550000,
    fundingSource: 'DACF',
    startDate: '2025-06-10',
    expectedCompletionDate: '2026-04-30',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 50,
    assignedOfficerName: 'Mr. Isaac Boakye',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-05-25T10:00:00Z'
  }
];

// Seed Historical Progress Updates
const SEED_UPDATES = [
  {
    id: 'UPD-001',
    projectId: 'PRJ-GAR-001',
    administrativeAreaId: 'MMDA-GAR-01',
    reportedById: 'USR-PO-01',
    reporterName: 'Ing. Emmanuel Mensah',
    updateDate: '2025-11-18',
    reportedPercentage: 68,
    verifiedPercentage: 65,
    isVerified: true,
    statusAtUpdate: 'ONGOING',
    narrative: 'Roofing structure completed with high-grade aluminum sheets. Electrical conduit wiring underway. Plastering of internal ground floor classrooms completed.',
    attachments: [
      { name: 'Roofing_Completion_Inspection.jpg', url: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?w=600&auto=format&fit=crop&q=60', fileType: 'IMAGE' }
    ],
    createdAt: '2025-11-18T16:00:00Z'
  },
  {
    id: 'UPD-002',
    projectId: 'PRJ-AR-001',
    administrativeAreaId: 'MMDA-AR-01',
    reportedById: 'USR-PO-03',
    reporterName: 'Ing. Kwabena Acheampong',
    updateDate: '2025-12-05',
    reportedPercentage: 70,
    verifiedPercentage: 70,
    isVerified: true,
    statusAtUpdate: 'ONGOING',
    narrative: 'Ground floor slab successfully cast and cured. First floor columns reinforced and shuttered. Concrete batch tests met required BS standards.',
    attachments: [
      { name: 'Slab_Casting_Verification.jpg', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=60', fileType: 'IMAGE' }
    ],
    createdAt: '2025-12-05T14:30:00Z'
  },
  {
    id: 'UPD-003',
    projectId: 'PRJ-UER-001',
    administrativeAreaId: 'MMDA-UER-01',
    reportedById: 'USR-PO-12',
    reporterName: 'Ing. Atanga Akologo',
    updateDate: '2026-01-15',
    reportedPercentage: 65,
    verifiedPercentage: 65,
    isVerified: true,
    statusAtUpdate: 'ONGOING',
    narrative: 'Core trench excavated and backfilled with impervious clay. Stone pitching along downstream face 70% complete.',
    attachments: [
      { name: 'Dam_Spillway_Construction.jpg', url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=600&auto=format&fit=crop&q=60', fileType: 'IMAGE' }
    ],
    createdAt: '2026-01-15T10:00:00Z'
  }
];

// Seed Audit Trail Logs
const SEED_AUDIT_LOGS = [
  {
    id: 'AUD-001',
    userEmail: 'national.coordinator@ghanagov.gh',
    userRole: 'SUPER_ADMIN',
    action: 'CREATE',
    entityType: 'MMDA',
    entityId: 'MMDA-AHR-01',
    details: 'Initialised 16 Regional MMDA registries across Ghana.',
    timestamp: '2025-01-05T08:00:00Z'
  },
  {
    id: 'AUD-002',
    userEmail: 'admin@gema.gov.gh',
    userRole: 'MMDA_ADMIN',
    action: 'CREATE',
    entityType: 'PROJECT',
    entityId: 'PRJ-GAR-001',
    details: 'Registered project: 2-Storey 12-Unit Classroom Block (Abokobi).',
    timestamp: '2025-03-01T10:00:00Z'
  },
  {
    id: 'AUD-003',
    userEmail: 'admin@kma.gov.gh',
    userRole: 'MMDA_ADMIN',
    action: 'CREATE',
    entityType: 'PROJECT',
    entityId: 'PRJ-AR-001',
    details: 'Registered project: Bantama Maternity & Child Health Clinic Expansion.',
    timestamp: '2025-01-10T11:15:00Z'
  },
  {
    id: 'AUD-004',
    userEmail: 'po.mensah@gema.gov.gh',
    userRole: 'PROJECT_OFFICER',
    action: 'UPDATE',
    entityType: 'PROGRESS_UPDATE',
    entityId: 'UPD-001',
    details: 'Submitted progress report: 68% milestone achieved with inspection photo.',
    timestamp: '2025-11-18T16:00:00Z'
  }
];

// State Store Object
const DataStore = {
  getProjects() {
    const raw = localStorage.getItem(STORAGE_KEY_PROJECTS);
    if (!raw) {
      this.saveProjects(SEED_PROJECTS);
      return SEED_PROJECTS;
    }
    const parsed = JSON.parse(raw);
    // Ensure all 16 regions exist
    if (parsed.length < 16) {
      this.saveProjects(SEED_PROJECTS);
      return SEED_PROJECTS;
    }
    return parsed;
  },

  saveProjects(projects) {
    localStorage.setItem(STORAGE_KEY_PROJECTS, JSON.stringify(projects));
  },

  getUpdates() {
    const raw = localStorage.getItem(STORAGE_KEY_UPDATES);
    if (!raw) {
      this.saveUpdates(SEED_UPDATES);
      return SEED_UPDATES;
    }
    return JSON.parse(raw);
  },

  saveUpdates(updates) {
    localStorage.setItem(STORAGE_KEY_UPDATES, JSON.stringify(updates));
  },

  getMMDAs() {
    const raw = localStorage.getItem(STORAGE_KEY_MMDAS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_MMDAS, JSON.stringify(INITIAL_MMDAS));
      return INITIAL_MMDAS;
    }
    const parsed = JSON.parse(raw);
    if (parsed.length < 16) {
      localStorage.setItem(STORAGE_KEY_MMDAS, JSON.stringify(INITIAL_MMDAS));
      return INITIAL_MMDAS;
    }
    return parsed;
  },

  saveMMDAs(mmdas) {
    localStorage.setItem(STORAGE_KEY_MMDAS, JSON.stringify(mmdas));
  },

  getCommunities() {
    const raw = localStorage.getItem(STORAGE_KEY_COMMUNITIES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_COMMUNITIES, JSON.stringify(INITIAL_COMMUNITIES));
      return INITIAL_COMMUNITIES;
    }
    const parsed = JSON.parse(raw);
    if (parsed.length < 16) {
      localStorage.setItem(STORAGE_KEY_COMMUNITIES, JSON.stringify(INITIAL_COMMUNITIES));
      return INITIAL_COMMUNITIES;
    }
    return parsed;
  },

  getAuditLogs() {
    const raw = localStorage.getItem(STORAGE_KEY_AUDIT);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_AUDIT, JSON.stringify(SEED_AUDIT_LOGS));
      return SEED_AUDIT_LOGS;
    }
    return JSON.parse(raw);
  },

  logAction(action, entityType, entityId, details, user) {
    const logs = this.getAuditLogs();
    const newLog = {
      id: 'AUD-' + Date.now(),
      userEmail: user?.email || 'admin@ghanagov.gh',
      userRole: user?.role || 'SUPER_ADMIN',
      action,
      entityType,
      entityId,
      details,
      timestamp: new Date().toISOString()
    };
    logs.unshift(newLog);
    localStorage.setItem(STORAGE_KEY_AUDIT, JSON.stringify(logs));
  },

  addProject(projectData, user) {
    const projects = this.getProjects();
    const id = 'PRJ-' + Date.now();
    const newProject = {
      id,
      ...projectData,
      createdAt: new Date().toISOString()
    };
    projects.unshift(newProject);
    this.saveProjects(projects);
    this.logAction('CREATE', 'PROJECT', id, `Registered project: ${newProject.title}`, user);
    return newProject;
  },

  addProgressUpdate(updateData, user) {
    const updates = this.getUpdates();
    const id = 'UPD-' + Date.now();
    const newUpdate = {
      id,
      ...updateData,
      isVerified: user?.role === 'MMDA_ADMIN' || user?.role === 'SUPER_ADMIN',
      createdAt: new Date().toISOString()
    };
    updates.unshift(newUpdate);
    this.saveUpdates(updates);

    // Update Project Status & Progress Percentage
    const projects = this.getProjects();
    const projectIndex = projects.findIndex(p => p.id === updateData.projectId);
    if (projectIndex !== -1) {
      projects[projectIndex].progressPercentage = Number(updateData.reportedPercentage);
      if (updateData.statusAtUpdate) {
        projects[projectIndex].status = updateData.statusAtUpdate;
      }
      this.saveProjects(projects);
    }

    this.logAction('UPDATE', 'PROGRESS_UPDATE', id, `Submitted progress report for project ${updateData.projectId}`, user);
    return newUpdate;
  },

  verifyProgressUpdate(updateId, verifiedPercentage, user) {
    const updates = this.getUpdates();
    const idx = updates.findIndex(u => u.id === updateId);
    if (idx !== -1) {
      updates[idx].isVerified = true;
      updates[idx].verifiedPercentage = Number(verifiedPercentage);
      this.saveUpdates(updates);

      // Reflect in project record
      const projects = this.getProjects();
      const pIdx = projects.findIndex(p => p.id === updates[idx].projectId);
      if (pIdx !== -1) {
        projects[pIdx].progressPercentage = Number(verifiedPercentage);
        this.saveProjects(projects);
      }

      this.logAction('VERIFY_PROGRESS', 'PROJECT', updates[idx].projectId, `MMDA Planning Office verified progress update at ${verifiedPercentage}%`, user);
      return true;
    }
    return false;
  }
};
