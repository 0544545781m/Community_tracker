/**
 * Main Application Controller (CD-PTMS)
 */

const App = {
  // Current user state
  currentUser: {
    role: 'MMDA_ADMIN',
    email: 'admin@gema.gov.gh',
    name: 'Ga East Planning Officer',
    regionId: 'GREATER_ACCRA',
    administrativeAreaId: 'MMDA-GAR-01'
  },
  
  currentView: 'dashboard',
  isPublicMode: false,
  charts: {},

  init() {
    this.updateUserContextUI();
    this.populateStaticDropdowns();
    this.renderDashboard();
    this.renderProjectsTable();
    this.renderProgressUpdates();
    this.renderAdministrative();
    this.renderCommunities();
    this.renderReports();
    this.renderAuditTrail();
    this.renderPublicProjects();

    // Initialize Lucide icons
    if (window.lucide) {
      window.lucide.createIcons();
    }
  },

  handleRoleChange(role) {
    this.currentUser.role = role;
    if (role === 'SUPER_ADMIN') {
      this.currentUser.name = 'National Coordinator';
      this.currentUser.email = 'national.admin@ghanagov.gh';
      this.currentUser.administrativeAreaId = null;
      this.currentUser.regionId = null;
    } else if (role === 'MMDA_ADMIN') {
      this.currentUser.name = 'Ga East Planning Officer';
      this.currentUser.email = 'admin@gema.gov.gh';
      this.currentUser.administrativeAreaId = 'MMDA-GAR-01';
      this.currentUser.regionId = 'GREATER_ACCRA';
    } else if (role === 'PROJECT_OFFICER') {
      this.currentUser.name = 'Ing. Emmanuel Mensah';
      this.currentUser.email = 'po.mensah@gema.gov.gh';
      this.currentUser.administrativeAreaId = 'MMDA-GAR-01';
      this.currentUser.regionId = 'GREATER_ACCRA';
    } else if (role === 'PUBLIC_USER') {
      this.currentUser.name = 'Citizen Visitor';
      this.currentUser.email = 'citizen@community.org';
      this.togglePublicMode(true);
      return;
    }

    if (this.isPublicMode && role !== 'PUBLIC_USER') {
      this.togglePublicMode(false);
    }

    this.updateUserContextUI();
    this.renderDashboard();
    this.renderProjectsTable();
    this.renderProgressUpdates();
  },

  updateUserContextUI() {
    const nameEl = document.getElementById('user-display-name');
    const badgeEl = document.getElementById('user-role-badge');
    const initialsEl = document.getElementById('user-avatar-initials');
    const mmdaEl = document.getElementById('active-mmda-name');

    if (nameEl) nameEl.textContent = this.currentUser.name;
    if (badgeEl) badgeEl.textContent = USER_ROLES[this.currentUser.role]?.name || this.currentUser.role;
    if (initialsEl) initialsEl.textContent = this.currentUser.name.split(' ').map(n => n[0]).join('').substring(0, 2);
    
    if (mmdaEl) {
      if (this.currentUser.role === 'SUPER_ADMIN') {
        mmdaEl.textContent = 'Republic of Ghana (All MMDAs)';
      } else {
        const mmda = DataStore.getMMDAs().find(m => m.id === this.currentUser.administrativeAreaId);
        mmdaEl.textContent = mmda ? mmda.name : 'All Districts';
      }
    }
  },

  switchView(viewName) {
    if (this.isPublicMode) {
      this.togglePublicMode(false);
    }

    this.currentView = viewName;
    const views = ['dashboard', 'projects', 'progress', 'administrative', 'communities', 'reports', 'audit', 'public'];
    views.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) el.classList.add('hidden');
      const navBtn = document.getElementById(`nav-${v}`);
      if (navBtn) navBtn.classList.remove('nav-active');
    });

    const activeEl = document.getElementById(`view-${viewName}`);
    if (activeEl) activeEl.classList.remove('hidden');

    const activeNav = document.getElementById(`nav-${viewName}`);
    if (activeNav) activeNav.classList.add('nav-active');

    // Trigger charts resize when dashboard becomes active
    if (viewName === 'dashboard') {
      this.renderCharts();
    }

    if (window.lucide) window.lucide.createIcons();
  },

  togglePublicMode(forceState) {
    this.isPublicMode = typeof forceState === 'boolean' ? forceState : !this.isPublicMode;
    const sidebar = document.getElementById('app-sidebar');
    const publicBtn = document.getElementById('btn-toggle-public');
    const roleSwitcher = document.getElementById('role-switcher');

    if (this.isPublicMode) {
      if (sidebar) sidebar.classList.add('hidden');
      if (publicBtn) {
        publicBtn.classList.add('bg-gov-gold', 'text-slate-900', 'font-bold');
        publicBtn.innerHTML = '<i data-lucide="shield-check" class="w-3.5 h-3.5"></i> Return to Admin';
      }
      if (roleSwitcher) roleSwitcher.value = 'PUBLIC_USER';
      this.showOnlyView('public');
    } else {
      if (sidebar) sidebar.classList.remove('hidden');
      if (publicBtn) {
        publicBtn.classList.remove('bg-gov-gold', 'text-slate-900', 'font-bold');
        publicBtn.innerHTML = '<i data-lucide="globe-2" class="w-3.5 h-3.5"></i> Public Portal';
      }
      if (roleSwitcher && roleSwitcher.value === 'PUBLIC_USER') {
        roleSwitcher.value = 'MMDA_ADMIN';
        this.currentUser.role = 'MMDA_ADMIN';
      }
      this.switchView('dashboard');
    }
    if (window.lucide) window.lucide.createIcons();
  },

  showOnlyView(viewName) {
    const views = ['dashboard', 'projects', 'progress', 'administrative', 'communities', 'reports', 'audit', 'public'];
    views.forEach(v => {
      const el = document.getElementById(`view-${v}`);
      if (el) el.classList.add('hidden');
    });
    const target = document.getElementById(`view-${viewName}`);
    if (target) target.classList.remove('hidden');
  },

  // RENDER: DASHBOARD
  renderDashboard() {
    const projects = this.getFilteredProjectsForUser();
    const totalProjects = projects.length;
    const totalBudget = projects.reduce((sum, p) => sum + (Number(p.budgetGHS) || 0), 0);
    const completedProjects = projects.filter(p => p.status === 'COMPLETED').length;
    const avgProgress = totalProjects ? Math.round(projects.reduce((sum, p) => sum + (Number(p.progressPercentage) || 0), 0) / totalProjects) : 0;

    document.getElementById('kpi-total-projects').textContent = totalProjects;
    document.getElementById('kpi-total-budget').textContent = formatGHS(totalBudget);
    document.getElementById('kpi-completed-projects').textContent = completedProjects;
    document.getElementById('kpi-avg-progress').textContent = `${avgProgress}%`;

    this.renderDashboardRecentUpdates();
    this.renderCharts();
  },

  renderCharts() {
    const projects = this.getFilteredProjectsForUser();

    // 1. Budget by Category
    const categoryTotals = {};
    PROJECT_CATEGORIES.forEach(c => categoryTotals[c.label] = 0);
    projects.forEach(p => {
      const cat = PROJECT_CATEGORIES.find(c => c.value === p.category);
      const label = cat ? cat.label : 'Other';
      categoryTotals[label] = (categoryTotals[label] || 0) + Number(p.budgetGHS || 0);
    });

    const catCtx = document.getElementById('chart-category');
    if (catCtx) {
      if (this.charts.category) this.charts.category.destroy();
      this.charts.category = new Chart(catCtx, {
        type: 'doughnut',
        data: {
          labels: Object.keys(categoryTotals),
          datasets: [{
            data: Object.values(categoryTotals),
            backgroundColor: ['#0A192F', '#059669', '#D97706', '#2563EB', '#7C3AED', '#DB2777', '#0891B2', '#4B5563'],
            borderWidth: 2,
            borderColor: '#ffffff'
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { boxWidth: 10, font: { size: 10 } } }
          }
        }
      });
    }

    // 2. Status Distribution
    const statusCounts = { 'Not Started': 0, 'Ongoing': 0, 'Completed': 0, 'Suspended': 0, 'Delayed': 0 };
    projects.forEach(p => {
      const stat = PROJECT_STATUSES.find(s => s.value === p.status);
      const label = stat ? stat.label : 'Ongoing';
      statusCounts[label] = (statusCounts[label] || 0) + 1;
    });

    const statCtx = document.getElementById('chart-status');
    if (statCtx) {
      if (this.charts.status) this.charts.status.destroy();
      this.charts.status = new Chart(statCtx, {
        type: 'bar',
        data: {
          labels: Object.keys(statusCounts),
          datasets: [{
            label: 'Projects',
            data: Object.values(statusCounts),
            backgroundColor: ['#94A3B8', '#3B82F6', '#10B981', '#F59E0B', '#EF4444'],
            borderRadius: 6
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false }
          },
          scales: {
            y: { beginAtZero: true, ticks: { precision: 0 } }
          }
        }
      });
    }
  },

  renderDashboardRecentUpdates() {
    const updates = DataStore.getUpdates().slice(0, 3);
    const container = document.getElementById('dashboard-recent-updates');
    if (!container) return;

    if (!updates.length) {
      container.innerHTML = '<div class="p-4 text-xs text-slate-500">No field inspection reports filed yet.</div>';
      return;
    }

    const projects = DataStore.getProjects();
    container.innerHTML = updates.map(u => {
      const p = projects.find(item => item.id === u.projectId);
      return `
        <div class="p-3 flex items-start justify-between gap-3 hover:bg-slate-50 transition-colors">
          <div class="flex items-start space-x-3">
            <div class="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
              <i data-lucide="check-circle-2" class="w-4 h-4"></i>
            </div>
            <div>
              <div class="text-xs font-bold text-slate-900">${p ? p.title : 'Community Project'}</div>
              <p class="text-[11px] text-slate-600 mt-0.5 line-clamp-1">${u.narrative}</p>
              <div class="text-[10px] text-slate-400 mt-1 flex items-center gap-2">
                <span>By ${u.reporterName}</span>
                <span>•</span>
                <span>${formatDate(u.updateDate)}</span>
              </div>
            </div>
          </div>
          <div class="text-right shrink-0">
            <span class="text-xs font-bold text-emerald-700">${u.reportedPercentage}% Done</span>
            ${u.isVerified ? '<span class="block text-[9px] text-blue-600 font-semibold">Verified</span>' : '<span class="block text-[9px] text-amber-600 font-semibold">Pending Verification</span>'}
          </div>
        </div>
      `;
    }).join('');
  },

  // RENDER: PROJECTS TABLE
  renderProjectsTable() {
    const tbody = document.getElementById('projects-table-body');
    const emptyState = document.getElementById('projects-empty-state');
    if (!tbody) return;

    const filtered = this.getFilteredProjectsList();
    if (!filtered.length) {
      tbody.innerHTML = '';
      if (emptyState) emptyState.classList.remove('hidden');
      return;
    }
    if (emptyState) emptyState.classList.add('hidden');

    const mmdas = DataStore.getMMDAs();
    const regions = GHANA_REGIONS;
    const communities = DataStore.getCommunities();

    tbody.innerHTML = filtered.map(p => {
      const mmda = mmdas.find(m => m.id === p.administrativeAreaId);
      const reg = regions.find(r => r.id === p.regionId);
      const com = communities.find(c => c.id === p.communityId);

      return `
        <tr class="hover:bg-slate-50/80 transition-colors">
          <td class="py-3 px-4 font-mono font-medium text-slate-700">${p.referenceNumber}</td>
          <td class="py-3 px-4 max-w-xs">
            <div class="font-semibold text-slate-900 line-clamp-1">${p.title}</div>
            <div class="text-[11px] text-slate-500">${com ? com.name : 'Community'} • ${p.contractor}</div>
          </td>
          <td class="py-3 px-4">
            <div class="font-medium text-slate-800">${mmda ? mmda.name : 'MMDA'}</div>
            <div class="text-[10px] text-slate-500">${reg ? reg.name : ''}</div>
          </td>
          <td class="py-3 px-4 font-semibold text-slate-900">${formatGHS(p.budgetGHS)}</td>
          <td class="py-3 px-4">${getStatusBadge(p.status)}</td>
          <td class="py-3 px-4">
            <div class="w-24">
              <div class="flex justify-between text-[10px] mb-1 font-semibold text-slate-600">
                <span>${p.progressPercentage}%</span>
              </div>
              <div class="w-full bg-slate-200 rounded-full h-1.5 overflow-hidden">
                <div class="bg-gov-green h-1.5 rounded-full" style="width: ${p.progressPercentage}%"></div>
              </div>
            </div>
          </td>
          <td class="py-3 px-4 text-right">
            <button onclick="App.openSubmitProgressModal('${p.id}')" class="px-2.5 py-1 text-[11px] font-semibold text-white bg-gov-navy-900 hover:bg-gov-navy-800 rounded shadow-sm">
              Update
            </button>
          </td>
        </tr>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  },

  applyProjectFilters() {
    this.renderProjectsTable();
  },

  getFilteredProjectsList() {
    let list = this.getFilteredProjectsForUser();
    const search = document.getElementById('filter-search')?.value.toLowerCase();
    const mmda = document.getElementById('filter-mmda')?.value;
    const cat = document.getElementById('filter-category')?.value;
    const stat = document.getElementById('filter-status')?.value;

    if (search) {
      list = list.filter(p => 
        p.title.toLowerCase().includes(search) || 
        p.referenceNumber.toLowerCase().includes(search) ||
        p.contractor.toLowerCase().includes(search)
      );
    }
    if (mmda) list = list.filter(p => p.administrativeAreaId === mmda);
    if (cat) list = list.filter(p => p.category === cat);
    if (stat) list = list.filter(p => p.status === stat);

    return list;
  },

  getFilteredProjectsForUser() {
    const all = DataStore.getProjects();
    if (this.currentUser.role === 'SUPER_ADMIN') {
      return all;
    }
    // District boundary isolation: MMDA admins & project officers only see their MMDA projects
    if (this.currentUser.administrativeAreaId) {
      return all.filter(p => p.administrativeAreaId === this.currentUser.administrativeAreaId);
    }
    return all;
  },

  // RENDER: PROGRESS UPDATES
  renderProgressUpdates() {
    const container = document.getElementById('progress-updates-list');
    if (!container) return;

    const updates = DataStore.getUpdates();
    const projects = DataStore.getProjects();

    if (!updates.length) {
      container.innerHTML = '<div class="bg-white p-6 rounded-xl border border-slate-200 text-center text-xs text-slate-500">No progress updates recorded yet.</div>';
      return;
    }

    container.innerHTML = updates.map(u => {
      const p = projects.find(item => item.id === u.projectId);
      const isSuperOrAdmin = this.currentUser.role === 'SUPER_ADMIN' || this.currentUser.role === 'MMDA_ADMIN';

      return `
        <div class="bg-white p-5 rounded-xl border border-slate-200 shadow-sm space-y-3 text-xs">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono font-bold text-gov-navy-900">${p ? p.referenceNumber : 'PRJ'}</span>
                <span>•</span>
                <span class="font-bold text-slate-900">${p ? p.title : 'Project'}</span>
              </div>
              <div class="text-[11px] text-slate-500 mt-0.5">
                Reported by <span class="font-semibold text-slate-700">${u.reporterName}</span> on ${formatDate(u.updateDate)}
              </div>
            </div>
            <div class="flex items-center gap-2">
              <span class="px-2.5 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-800 border border-blue-200">
                ${u.reportedPercentage}% Reported
              </span>
              ${u.isVerified 
                ? `<span class="px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1"><i data-lucide="check" class="w-3.5 h-3.5"></i> Verified (${u.verifiedPercentage || u.reportedPercentage}%)</span>`
                : (isSuperOrAdmin 
                    ? `<button onclick="App.handleVerifyUpdate('${u.id}', ${u.reportedPercentage})" class="px-3 py-1 bg-gov-navy-900 hover:bg-gov-navy-800 text-white rounded text-[11px] font-bold shadow-sm">Verify Now</button>`
                    : `<span class="px-2.5 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200">Pending Verification</span>`)
              }
            </div>
          </div>

          <p class="text-slate-700 leading-relaxed">${u.narrative}</p>

          ${u.attachments && u.attachments.length ? `
            <div class="pt-2 flex flex-wrap gap-3">
              ${u.attachments.map(att => `
                <div class="flex items-center gap-2 p-2 bg-slate-50 rounded-lg border border-slate-200">
                  <img src="${att.url}" alt="${att.name}" class="w-12 h-12 object-cover rounded">
                  <div>
                    <span class="font-medium text-[11px] text-slate-800 block line-clamp-1">${att.name}</span>
                    <a href="${att.url}" target="_blank" class="text-[10px] text-gov-navy-600 hover:underline">View Photo</a>
                  </div>
                </div>
              `).join('')}
            </div>
          ` : ''}
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  },

  handleVerifyUpdate(updateId, reportedPercentage) {
    const verified = prompt(`Enter verified percentage (Reported was ${reportedPercentage}%):`, reportedPercentage);
    if (verified !== null && !isNaN(verified)) {
      DataStore.verifyProgressUpdate(updateId, Number(verified), this.currentUser);
      this.renderProgressUpdates();
      this.renderProjectsTable();
      this.renderDashboard();
      this.renderAuditTrail();
      alert('Progress update verified and locked into official project history.');
    }
  },

  // RENDER: ADMINISTRATIVE (REGIONS & MMDAS)
  renderAdministrative() {
    const grid = document.getElementById('regions-grid');
    if (grid) {
      grid.innerHTML = GHANA_REGIONS.map(r => `
        <div class="p-3 bg-slate-50 rounded-lg border border-slate-200">
          <span class="text-[10px] font-bold text-gov-gold block">${r.code}</span>
          <span class="font-bold text-slate-900 text-xs block truncate">${r.name}</span>
          <span class="text-[10px] text-slate-500">Seat: ${r.capital}</span>
        </div>
      `).join('');
    }

    const tbody = document.getElementById('mmdas-table-body');
    if (tbody) {
      const mmdas = DataStore.getMMDAs();
      tbody.innerHTML = mmdas.map(m => {
        const reg = GHANA_REGIONS.find(r => r.id === m.regionId);
        return `
          <tr class="hover:bg-slate-50">
            <td class="py-3 px-4 font-bold text-slate-900">${m.name}</td>
            <td class="py-3 px-4 font-mono font-medium">${m.code}</td>
            <td class="py-3 px-4"><span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-800">${m.type}</span></td>
            <td class="py-3 px-4">${reg ? reg.name : m.regionId}</td>
            <td class="py-3 px-4">${m.capital}</td>
            <td class="py-3 px-4"><span class="text-emerald-700 font-semibold">Active</span></td>
          </tr>
        `;
      }).join('');
    }
  },

  // RENDER: COMMUNITIES
  renderCommunities() {
    const tbody = document.getElementById('communities-table-body');
    if (!tbody) return;

    const communities = DataStore.getCommunities();
    const mmdas = DataStore.getMMDAs();
    const regions = GHANA_REGIONS;

    tbody.innerHTML = communities.map(c => {
      const mmda = mmdas.find(m => m.id === c.administrativeAreaId);
      const reg = regions.find(r => r.id === c.regionId);
      return `
        <tr class="hover:bg-slate-50">
          <td class="py-3 px-4 font-bold text-slate-900">${c.name}</td>
          <td class="py-3 px-4 text-slate-600">${c.electoralArea || 'N/A'}</td>
          <td class="py-3 px-4 font-medium text-slate-800">${mmda ? mmda.name : 'MMDA'}</td>
          <td class="py-3 px-4 text-slate-600">${reg ? reg.name : c.regionId}</td>
        </tr>
      `;
    }).join('');
  },

  // RENDER: DISTRICT REPORTS
  renderReports() {
    const projects = this.getFilteredProjectsForUser();
    const totalProjects = projects.length;
    const totalBudget = projects.reduce((sum, p) => sum + (Number(p.budgetGHS) || 0), 0);
    const avgProgress = totalProjects ? Math.round(projects.reduce((sum, p) => sum + (Number(p.progressPercentage) || 0), 0) / totalProjects) : 0;

    document.getElementById('report-date').textContent = new Date().toLocaleDateString('en-GB');
    document.getElementById('report-total-projects').textContent = totalProjects;
    document.getElementById('report-total-budget').textContent = formatGHS(totalBudget);
    document.getElementById('report-exec-rate').textContent = `${avgProgress}%`;

    const wrapper = document.getElementById('report-table-wrapper');
    if (!wrapper) return;

    wrapper.innerHTML = `
      <table class="w-full text-left text-xs border border-slate-200">
        <thead class="bg-slate-50 border-b border-slate-200 font-semibold text-slate-700">
          <tr>
            <th class="p-2.5">Ref No</th>
            <th class="p-2.5">Title</th>
            <th class="p-2.5">Contractor</th>
            <th class="p-2.5">Budget</th>
            <th class="p-2.5">Status</th>
            <th class="p-2.5">Progress</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-slate-200">
          ${projects.map(p => `
            <tr>
              <td class="p-2.5 font-mono">${p.referenceNumber}</td>
              <td class="p-2.5 font-medium text-slate-900">${p.title}</td>
              <td class="p-2.5 text-slate-600">${p.contractor}</td>
              <td class="p-2.5 font-semibold">${formatGHS(p.budgetGHS)}</td>
              <td class="p-2.5">${p.status}</td>
              <td class="p-2.5 font-bold">${p.progressPercentage}%</td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  },

  // RENDER: AUDIT TRAIL
  renderAuditTrail() {
    const tbody = document.getElementById('audit-table-body');
    if (!tbody) return;

    const logs = DataStore.getAuditLogs();
    tbody.innerHTML = logs.map(l => `
      <tr class="hover:bg-slate-50">
        <td class="py-3 px-4 font-mono text-[11px] text-slate-500">${formatDate(l.timestamp)}</td>
        <td class="py-3 px-4 font-medium text-slate-900">${l.userEmail}</td>
        <td class="py-3 px-4"><span class="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">${l.userRole}</span></td>
        <td class="py-3 px-4 font-bold text-gov-navy-900">${l.action}</td>
        <td class="py-3 px-4 text-slate-600">${l.entityType}</td>
        <td class="py-3 px-4 text-slate-700">${l.details}</td>
      </tr>
    `).join('');
  },

  // RENDER: PUBLIC CITIZEN PORTAL
  renderPublicProjects() {
    const grid = document.getElementById('public-projects-grid');
    if (!grid) return;

    const allProjects = DataStore.getProjects().filter(p => p.isPubliclyVisible);
    const search = document.getElementById('public-search')?.value.toLowerCase();
    const region = document.getElementById('public-region-filter')?.value;

    let filtered = allProjects;
    if (search) {
      filtered = filtered.filter(p => 
        p.title.toLowerCase().includes(search) ||
        p.contractor.toLowerCase().includes(search) ||
        p.referenceNumber.toLowerCase().includes(search)
      );
    }
    if (region) {
      filtered = filtered.filter(p => p.regionId === region);
    }

    if (!filtered.length) {
      grid.innerHTML = '<div class="col-span-3 text-center p-8 bg-white rounded-xl border border-slate-200 text-xs text-slate-500">No public development projects match your search criteria.</div>';
      return;
    }

    const mmdas = DataStore.getMMDAs();
    const regions = GHANA_REGIONS;

    grid.innerHTML = filtered.map(p => {
      const mmda = mmdas.find(m => m.id === p.administrativeAreaId);
      const reg = regions.find(r => r.id === p.regionId);

      return `
        <div class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
          <div class="h-44 bg-slate-100 relative overflow-hidden">
            <img src="${p.coverImageUrl || 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?w=600&auto=format&fit=crop&q=60'}" alt="${p.title}" class="w-full h-full object-cover">
            <div class="absolute top-3 right-3">
              ${getStatusBadge(p.status)}
            </div>
            <div class="absolute bottom-3 left-3 bg-gov-navy-900/85 backdrop-blur-sm text-white px-2.5 py-1 rounded text-[11px] font-mono font-medium">
              ${p.referenceNumber}
            </div>
          </div>

          <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
            <div>
              <div class="text-[11px] font-bold text-gov-gold uppercase tracking-wider mb-1">
                ${reg ? reg.name : ''} • ${mmda ? mmda.name : ''}
              </div>
              <h3 class="text-sm font-bold text-slate-900 leading-snug line-clamp-2">${p.title}</h3>
              <p class="text-xs text-slate-600 mt-2 line-clamp-2">${p.description}</p>
            </div>

            <div class="space-y-3 pt-3 border-t border-slate-100 text-xs">
              <div>
                <div class="flex justify-between text-[11px] font-bold text-slate-700 mb-1">
                  <span>Physical Completion</span>
                  <span>${p.progressPercentage}%</span>
                </div>
                <div class="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div class="bg-gov-green h-2 rounded-full" style="width: ${p.progressPercentage}%"></div>
                </div>
              </div>

              <div class="grid grid-cols-2 gap-2 text-[11px] text-slate-600">
                <div>
                  <span class="text-slate-400 block text-[10px]">Contractor:</span>
                  <span class="font-semibold text-slate-800 line-clamp-1">${p.contractor}</span>
                </div>
                <div>
                  <span class="text-slate-400 block text-[10px]">Approved Budget:</span>
                  <span class="font-bold text-slate-900">${formatGHS(p.budgetGHS)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    if (window.lucide) window.lucide.createIcons();
  },

  // STATIC DROPDOWNS POPULATION
  populateStaticDropdowns() {
    // Populate Region dropdowns
    const regOpts = GHANA_REGIONS.map(r => `<option value="${r.id}">${r.name} (${r.code})</option>`).join('');
    const modalReg = document.getElementById('modal-proj-region');
    const pubReg = document.getElementById('public-region-filter');
    if (modalReg) modalReg.innerHTML = regOpts;
    if (pubReg) pubReg.innerHTML = '<option value="">All 16 Regions</option>' + regOpts;

    // Populate Category dropdowns
    const catOpts = PROJECT_CATEGORIES.map(c => `<option value="${c.value}">${c.label}</option>`).join('');
    const modalCat = document.getElementById('modal-proj-category');
    const filterCat = document.getElementById('filter-category');
    if (modalCat) modalCat.innerHTML = catOpts;
    if (filterCat) filterCat.innerHTML = '<option value="">All Categories</option>' + catOpts;

    // Populate Status filter dropdown
    const statOpts = PROJECT_STATUSES.map(s => `<option value="${s.value}">${s.label}</option>`).join('');
    const filterStat = document.getElementById('filter-status');
    if (filterStat) filterStat.innerHTML = '<option value="">All Statuses</option>' + statOpts;

    // Populate Funding dropdown
    const fundOpts = FUNDING_SOURCES.map(f => `<option value="${f.value}">${f.label}</option>`).join('');
    const modalFund = document.getElementById('modal-proj-funding');
    if (modalFund) modalFund.innerHTML = fundOpts;

    // Populate MMDAs dropdown in filter
    const mmdas = DataStore.getMMDAs();
    const mmdaOpts = mmdas.map(m => `<option value="${m.id}">${m.name} (${m.code})</option>`).join('');
    const filterMmda = document.getElementById('filter-mmda');
    if (filterMmda) filterMmda.innerHTML = '<option value="">All MMDAs</option>' + mmdaOpts;

    // Trigger initial MMDA population in modal
    if (modalReg && modalReg.value) {
      this.handleModalRegionChange(modalReg.value);
    }
  },

  handleModalRegionChange(regionId) {
    const mmdas = DataStore.getMMDAs().filter(m => m.regionId === regionId);
    const mmdaSelect = document.getElementById('modal-proj-mmda');
    if (mmdaSelect) {
      if (!mmdas.length) {
        mmdaSelect.innerHTML = `<option value="">No MMDAs registered in this region yet</option>`;
      } else {
        mmdaSelect.innerHTML = mmdas.map(m => `<option value="${m.id}">${m.name}</option>`).join('');
      }
      this.handleModalMMDAChange(mmdaSelect.value);
    }
  },

  handleModalMMDAChange(mmdaId) {
    const communities = DataStore.getCommunities().filter(c => c.administrativeAreaId === mmdaId);
    const comSelect = document.getElementById('modal-proj-community');
    if (comSelect) {
      if (!communities.length) {
        comSelect.innerHTML = `<option value="">No communities listed (Default Center)</option>`;
      } else {
        comSelect.innerHTML = communities.map(c => `<option value="${c.id}">${c.name} (${c.electoralArea || 'Ward'})</option>`).join('');
      }
    }
  },

  // MODAL CONTROLS: NEW PROJECT
  openNewProjectModal() {
    if (this.currentUser.role === 'PUBLIC_USER' || this.currentUser.role === 'PROJECT_OFFICER') {
      alert('Only MMDA Administrators or Super Administrators have permission to register new projects.');
      return;
    }
    const modal = document.getElementById('modal-new-project');
    if (modal) modal.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  },

  closeNewProjectModal() {
    const modal = document.getElementById('modal-new-project');
    if (modal) modal.classList.add('hidden');
  },

  handleCreateProject(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const regionId = formData.get('regionId');
    const mmdaId = formData.get('administrativeAreaId');
    const reg = GHANA_REGIONS.find(r => r.id === regionId);
    const mmda = DataStore.getMMDAs().find(m => m.id === mmdaId);

    const projectData = {
      referenceNumber: generateReferenceNumber(reg?.code, mmda?.code),
      title: formData.get('title'),
      description: formData.get('description'),
      regionId,
      administrativeAreaId: mmdaId,
      communityId: formData.get('communityId') || 'COM-01',
      category: formData.get('category'),
      contractor: formData.get('contractor'),
      budgetGHS: Number(formData.get('budgetGHS')),
      fundingSource: formData.get('fundingSource'),
      startDate: formData.get('startDate'),
      expectedCompletionDate: formData.get('expectedCompletionDate'),
      status: 'NOT_STARTED',
      progressPercentage: 0,
      assignedOfficerName: formData.get('assignedOfficerName') || 'Ing. Assigned Officer',
      isPubliclyVisible: formData.get('isPubliclyVisible') === 'on',
      coverImageUrl: 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?w=800&auto=format&fit=crop&q=60'
    };

    DataStore.addProject(projectData, this.currentUser);
    this.closeNewProjectModal();
    event.target.reset();

    this.renderDashboard();
    this.renderProjectsTable();
    this.renderReports();
    this.renderAuditTrail();
    this.renderPublicProjects();

    alert(`Project successfully registered with Reference Number: ${projectData.referenceNumber}`);
  },

  // MODAL CONTROLS: SUBMIT PROGRESS UPDATE
  openSubmitProgressModal(projectId) {
    if (this.currentUser.role === 'PUBLIC_USER') {
      alert('Public citizens cannot submit official progress updates.');
      return;
    }
    const modal = document.getElementById('modal-progress-update');
    const projectSelect = document.getElementById('modal-update-project');
    const projects = this.getFilteredProjectsForUser();

    if (projectSelect) {
      projectSelect.innerHTML = projects.map(p => `
        <option value="${p.id}" ${projectId === p.id ? 'selected' : ''}>
          ${p.referenceNumber} - ${p.title}
        </option>
      `).join('');
    }

    const dateInput = document.getElementById('modal-update-date');
    if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];

    if (modal) modal.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  },

  closeSubmitProgressModal() {
    const modal = document.getElementById('modal-progress-update');
    if (modal) modal.classList.add('hidden');
  },

  handleCreateProgressUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const photoUrl = formData.get('photoUrl') || 'https://images.unsplash.com/photo-1541888946425-d0fbb186156f?w=600&auto=format&fit=crop&q=60';

    const updateData = {
      projectId: formData.get('projectId'),
      administrativeAreaId: this.currentUser.administrativeAreaId || 'MMDA-GAR-01',
      reportedById: 'USR-' + Date.now(),
      reporterName: formData.get('reporterName'),
      reportedPercentage: Number(formData.get('reportedPercentage')),
      statusAtUpdate: formData.get('statusAtUpdate'),
      updateDate: formData.get('updateDate'),
      narrative: formData.get('narrative'),
      attachments: [
        {
          name: 'Site_Inspection_Evidence.jpg',
          url: photoUrl,
          fileType: 'IMAGE'
        }
      ]
    };

    DataStore.addProgressUpdate(updateData, this.currentUser);
    this.closeSubmitProgressModal();
    event.target.reset();

    this.renderProgressUpdates();
    this.renderProjectsTable();
    this.renderDashboard();
    this.renderReports();
    this.renderAuditTrail();
    this.renderPublicProjects();

    alert('Site inspection progress update successfully logged.');
  }
};

// Initialize App when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  App.init();
});
