import React from 'react';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  CheckCircle2, 
  FileText, 
  Globe2 
} from 'lucide-react';
import { GHANA_REGIONS, PROJECT_CATEGORIES, PROJECT_STATUSES } from './config/constants';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Top National Header Bar */}
      <header className="bg-gov-navy-900 text-white border-b-4 border-gov-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gov-navy-800 border border-gov-gold/40 flex items-center justify-center text-gov-gold font-bold shadow-sm">
              <Building2 className="w-6 h-6 text-gov-gold" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-gov-gold font-semibold block">
                Republic of Ghana • MMDAs Portal
              </span>
              <h1 className="text-lg font-bold leading-tight tracking-tight">
                Community Development Project Tracking & Monitoring System (CD-PTMS)
              </h1>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-900/60 text-emerald-300 border border-emerald-500/30">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse mr-2"></span>
              Phase 1 Initialized
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">
        {/* Banner */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center space-x-1.5 text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-50 text-blue-700 mb-3">
              <ShieldCheck className="w-4 h-4 text-blue-600" />
              <span>Multi-Tenant Administrative Governance Engine</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              Tracking Infrastructure & Social Interventions Across Ghana's 16 Regions
            </h2>
            <p className="mt-2 text-slate-600 text-sm leading-relaxed">
              CD-PTMS establishes transparency, accountability, and evidence-based progress monitoring
              for Metropolitan, Municipal, and District Assemblies. Built with React, TypeScript, Tailwind CSS, 
              and Cloud Firestore.
            </p>
          </div>
        </div>

        {/* Phase 1 Verification Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-700 mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">16 Administrative Regions</h3>
            <p className="text-xs text-slate-500 mt-1">
              Standardized region codes and capitals configured across Greater Accra, Ashanti, Western, and all 16 regions.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span>Configured Regions</span>
              <span className="font-semibold text-slate-900">{GHANA_REGIONS.length} Regions</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-700 mb-4">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">Project Taxonomies</h3>
            <p className="text-xs text-slate-500 mt-1">
              Categories covering Education, Health, Feeder Roads, WASH, Electrification, and Agriculture.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span>Standard Categories</span>
              <span className="font-semibold text-slate-900">{PROJECT_CATEGORIES.length} Categories</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700 mb-4">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-slate-900">Lifecycle Status Tracking</h3>
            <p className="text-xs text-slate-500 mt-1">
              Auditable status stages: Not Started, Ongoing, Completed, Suspended, and Delayed.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
              <span>Lifecycle Stages</span>
              <span className="font-semibold text-slate-900">{PROJECT_STATUSES.length} Statuses</span>
            </div>
          </div>
        </div>

        {/* System Architecture Modules */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="px-6 py-4 border-b border-slate-200 bg-slate-50/50 flex items-center justify-between">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4 text-gov-navy-900" />
              Application Architecture Modules & Implementation Roadmap
            </h3>
            <span className="text-xs font-medium text-slate-500">BTech ICT Engineering Baseline</span>
          </div>
          <div className="divide-y divide-slate-100">
            <div className="p-4 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
              <div className="flex items-center space-x-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Phase 1: Project Initialisation & Architecture</h4>
                  <p className="text-xs text-slate-500">TypeScript models, Tailwind government palette, Firebase config, and project scaffold.</p>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-100 text-emerald-800">
                Completed
              </span>
            </div>

            <div className="p-4 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-400">2</div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Phase 2: UI Design System & Application Layout</h4>
                  <p className="text-xs text-slate-500">Government sidebar, top navigation, responsive shells, and reusable UI primitives.</p>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                Upcoming
              </span>
            </div>

            <div className="p-4 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-400">3</div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Phase 3: Firebase Configuration & Authentication</h4>
                  <p className="text-xs text-slate-500">User sessions, password recovery, error handling, and secure state persistence.</p>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                Upcoming
              </span>
            </div>

            <div className="p-4 flex items-center justify-between hover:bg-slate-50/60 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full border-2 border-slate-300 flex items-center justify-center text-[10px] font-bold text-slate-400">4</div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">Phase 4: Multi-Tenant RBAC & Assembly Data Isolation</h4>
                  <p className="text-xs text-slate-500">Super Admin, MMDA Admin, Project Officer, and Public User permissions.</p>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                Upcoming
              </span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Republic of Ghana • MMDAs Project Monitoring System.</p>
          <p className="flex items-center gap-1.5">
            <Globe2 className="w-3.5 h-3.5 text-gov-navy-600" />
            Designed for Transparency, Accountability & Sustainable Community Development
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;

