/**
 * Data Storage & State Management
 * 
 * Provides robust state persistence (backed by localStorage or Firestore),
 * pre-populated with realistic development projects across various Ghanaian MMDAs.
 */

const STORAGE_KEY_PROJECTS = 'cdptms_projects';
const STORAGE_KEY_UPDATES = 'cdptms_updates';
const STORAGE_KEY_MMDAS = 'cdptms_mmdas';
const STORAGE_KEY_COMMUNITIES = 'cdptms_communities';
const STORAGE_KEY_AUDIT = 'cdptms_audit';

// Initial realistic seed projects across different regions & MMDAs in Ghana
const SEED_PROJECTS = [
  {
    id: 'PRJ-GAR-001',
    referenceNumber: 'GAR-GEMA-2026-001',
    title: 'Construction of 2-Storey 12-Unit Classroom Block with Ancillary Facilities',
    description: 'Modern educational facility with science lab, library, and headteacher office at Abokobi Presby Basic School.',
    regionId: 'GREATER_ACCRA',
    administrativeAreaId: 'MMDA-GAR-01',
    communityId: 'COM-01',
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
    assignedOfficerId: 'USR-PO-01',
    assignedOfficerName: 'Ing. Emmanuel Mensah',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-03-01T10:00:00Z'
  },
  {
    id: 'PRJ-GAR-002',
    referenceNumber: 'GAR-GEMA-2026-002',
    title: 'Paving and Modernization of Dome Market Drainage and Access Walkways',
    description: 'Upgrading of market internal roads, concrete drain construction, and installation of solar street lighting to curb flood risks.',
    regionId: 'GREATER_ACCRA',
    administrativeAreaId: 'MMDA-GAR-01',
    communityId: 'COM-03',
    category: 'ROADS_TRANSPORT',
    contractor: 'Onyx Engineering Works',
    budgetGHS: 1450000,
    expenditureToDateGHS: 1450000,
    fundingSource: 'DACF',
    startDate: '2024-08-15',
    expectedCompletionDate: '2025-09-30',
    actualCompletionDate: '2025-09-28',
    status: 'COMPLETED',
    progressPercentage: 100,
    assignedOfficerId: 'USR-PO-02',
    assignedOfficerName: 'Ms. Sarah Boateng',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1574958269340-fa927304f202?w=800&auto=format&fit=crop&q=60',
    createdAt: '2024-08-01T08:30:00Z'
  },
  {
    id: 'PRJ-AR-001',
    referenceNumber: 'AR-KMA-2026-001',
    title: 'Bantama Maternity & Child Health Clinic Expansion',
    description: 'Expansion of existing clinic to a 30-bed maternity ward, surgical theatre, and cold chain vaccine storage.',
    regionId: 'ASHANTI',
    administrativeAreaId: 'MMDA-AR-01',
    communityId: 'COM-06',
    category: 'HEALTH',
    contractor: 'Asanko Construction Consortium',
    budgetGHS: 4200000,
    expenditureToDateGHS: 1800000,
    fundingSource: 'WORLD_BANK',
    startDate: '2025-01-20',
    expectedCompletionDate: '2026-08-30',
    actualCompletionDate: null,
    status: 'ONGOING',
    progressPercentage: 45,
    assignedOfficerId: 'USR-PO-03',
    assignedOfficerName: 'Ing. Kwabena Acheampong',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-01-10T11:15:00Z'
  },
  {
    id: 'PRJ-NR-001',
    referenceNumber: 'NR-TMA-2026-001',
    title: 'Mechanized Solar-Powered Water Supply System for Aboabo Sub-District',
    description: 'Drilling of high-yield boreholes, installation of 50,000-liter overhead storage reservoirs, and 12 public standpipes.',
    regionId: 'NORTHERN',
    administrativeAreaId: 'MMDA-NR-01',
    communityId: 'COM-08',
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
    assignedOfficerId: 'USR-PO-04',
    assignedOfficerName: 'Mr. Abdulai Fuseini',
    isPubliclyVisible: true,
    coverImageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?w=800&auto=format&fit=crop&q=60',
    createdAt: '2025-05-15T09:00:00Z'
  },
  {
    id: 'PRJ-WR-001',
    referenceNumber: 'WR-STMA-2026-001',
    title: 'Rehabilitation of Kwesimintsim Community Durbar Grounds & Artisanal Sheds',
    description: 'Development of paved community gathering grounds, covered pavilions for local artisans, and public washrooms.',
    regionId: 'WESTERN',
    administrativeAreaId: 'MMDA-WR-01',
    communityId: 'COM-09',
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
    assignedOfficerId: 'USR-PO-05',
    assignedOfficerName: 'Ing. Patricia Arthur',
    isPubliclyVisible: false,
    coverImageUrl: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&auto=format&fit=crop&q=60',
    createdAt: '2026-01-28T14:20:00Z'
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
    reportedPercentage: 45,
    verifiedPercentage: 45,
    isVerified: true,
    statusAtUpdate: 'ONGOING',
    narrative: 'Ground floor slab successfully cast and cured. First floor columns reinforced and shuttered. Concrete batch tests met required BS standards.',
    attachments: [
      { name: 'Slab_Casting_Verification.jpg', url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&auto=format&fit=crop&q=60', fileType: 'IMAGE' }
    ],
    createdAt: '2025-12-05T14:30:00Z'
  }
];

// Seed Audit Trail Logs
const SEED_AUDIT_LOGS = [
  {
    id: 'AUD-001',
    userEmail: 'superadmin@ghanagov.gh',
    userRole: 'SUPER_ADMIN',
    action: 'CREATE',
    entityType: 'MMDA',
    entityId: 'MMDA-GAR-01',
    details: 'Registered Ga East Municipal Assembly into national MMDA registry.',
    timestamp: '2025-01-15T09:12:00Z'
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
    userEmail: 'po.mensah@gema.gov.gh',
    userRole: 'PROJECT_OFFICER',
    action: 'UPDATE',
    entityType: 'PROGRESS_UPDATE',
    entityId: 'UPD-001',
    details: 'Submitted progress report: 68% milestone achieved with inspection photo.',
    timestamp: '2025-11-18T16:00:00Z'
  },
  {
    id: 'AUD-004',
    userEmail: 'admin@gema.gov.gh',
    userRole: 'MMDA_ADMIN',
    action: 'VERIFY_PROGRESS',
    entityType: 'PROJECT',
    entityId: 'PRJ-GAR-001',
    details: 'MMDA Planning Office verified reported progress at 65%.',
    timestamp: '2025-11-20T11:25:00Z'
  }
];

// State Store Object
const DataStore = {
  // Load or Initialize
  getProjects() {
    const raw = localStorage.getItem(STORAGE_KEY_PROJECTS);
    if (!raw) {
      this.saveProjects(SEED_PROJECTS);
      return SEED_PROJECTS;
    }
    return JSON.parse(raw);
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
    return JSON.parse(raw);
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
    return JSON.parse(raw);
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
      userEmail: user?.email || 'user@assembly.gov.gh',
      userRole: user?.role || 'MMDA_ADMIN',
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

      this.logAction('VERIFY_PROGRESS', 'PROJECT', updates[idx].projectId, `MMDA Planning Office verified progress update ${updateId} at ${verifiedPercentage}%`, user);
      return true;
    }
    return false;
  }
};
