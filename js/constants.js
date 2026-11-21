/**
 * Administrative Constants & Taxonomies for Ghana MMDAs
 */

// The 16 Official Administrative Regions of Ghana
const GHANA_REGIONS = [
  { id: 'AHAFO', code: 'AHR', name: 'Ahafo Region', capital: 'Goaso' },
  { id: 'ASHANTI', code: 'AR', name: 'Ashanti Region', capital: 'Kumasi' },
  { id: 'BONO', code: 'BR', name: 'Bono Region', capital: 'Sunyani' },
  { id: 'BONO_EAST', code: 'BER', name: 'Bono East Region', capital: 'Techiman' },
  { id: 'CENTRAL', code: 'CR', name: 'Central Region', capital: 'Cape Coast' },
  { id: 'EASTERN', code: 'ER', name: 'Eastern Region', capital: 'Koforidua' },
  { id: 'GREATER_ACCRA', code: 'GAR', name: 'Greater Accra Region', capital: 'Accra' },
  { id: 'NORTH_EAST', code: 'NER', name: 'North East Region', capital: 'Nalerigu' },
  { id: 'NORTHERN', code: 'NR', name: 'Northern Region', capital: 'Tamale' },
  { id: 'OTI', code: 'OR', name: 'Oti Region', capital: 'Dambai' },
  { id: 'SAVANNAH', code: 'SR', name: 'Savannah Region', capital: 'Damongo' },
  { id: 'UPPER_EAST', code: 'UER', name: 'Upper East Region', capital: 'Bolgatanga' },
  { id: 'UPPER_WEST', code: 'UWR', name: 'Upper West Region', capital: 'Wa' },
  { id: 'VOLTA', code: 'VR', name: 'Volta Region', capital: 'Ho' },
  { id: 'WESTERN', code: 'WR', name: 'Western Region', capital: 'Sekondi-Takoradi' },
  { id: 'WESTERN_NORTH', code: 'WNR', name: 'Western North Region', capital: 'Sefwi Wiawso' }
];

// Seed Sample MMDAs across various regions
const INITIAL_MMDAS = [
  {
    id: 'MMDA-GAR-01',
    regionId: 'GREATER_ACCRA',
    name: 'Ga East Municipal Assembly',
    code: 'GEMA',
    type: 'MUNICIPAL',
    capital: 'Abokobi',
    contactEmail: 'info@gema.gov.gh',
    contactPhone: '+233 302 123 456',
    isActive: true
  },
  {
    id: 'MMDA-GAR-02',
    regionId: 'GREATER_ACCRA',
    name: 'Accra Metropolitan Assembly',
    code: 'AMA',
    type: 'METROPOLITAN',
    capital: 'Accra',
    contactEmail: 'info@ama.gov.gh',
    contactPhone: '+233 302 663 947',
    isActive: true
  },
  {
    id: 'MMDA-AR-01',
    regionId: 'ASHANTI',
    name: 'Kumasi Metropolitan Assembly',
    code: 'KMA',
    type: 'METROPOLITAN',
    capital: 'Kumasi',
    contactEmail: 'contact@kma.gov.gh',
    contactPhone: '+233 322 022 341',
    isActive: true
  },
  {
    id: 'MMDA-NR-01',
    regionId: 'NORTHERN',
    name: 'Tamale Metropolitan Assembly',
    code: 'TMA',
    type: 'METROPOLITAN',
    capital: 'Tamale',
    contactEmail: 'contact@tma.gov.gh',
    contactPhone: '+233 372 022 100',
    isActive: true
  },
  {
    id: 'MMDA-WR-01',
    regionId: 'WESTERN',
    name: 'Sekondi-Takoradi Metropolitan Assembly',
    code: 'STMA',
    type: 'METROPOLITAN',
    capital: 'Sekondi',
    contactEmail: 'info@stma.gov.gh',
    contactPhone: '+233 312 046 371',
    isActive: true
  }
];

// Seed Communities within MMDAs
const INITIAL_COMMUNITIES = [
  { id: 'COM-01', administrativeAreaId: 'MMDA-GAR-01', regionId: 'GREATER_ACCRA', name: 'Abokobi', electoralArea: 'Abokobi Ward' },
  { id: 'COM-02', administrativeAreaId: 'MMDA-GAR-01', regionId: 'GREATER_ACCRA', name: 'Taifa', electoralArea: 'Taifa North' },
  { id: 'COM-03', administrativeAreaId: 'MMDA-GAR-01', regionId: 'GREATER_ACCRA', name: 'Dome', electoralArea: 'Dome Central' },
  { id: 'COM-04', administrativeAreaId: 'MMDA-GAR-02', regionId: 'GREATER_ACCRA', name: 'Jamestown', electoralArea: 'Ashiedu Keteke' },
  { id: 'COM-05', administrativeAreaId: 'MMDA-GAR-02', regionId: 'GREATER_ACCRA', name: 'Osu', electoralArea: 'Klottey Korle' },
  { id: 'COM-06', administrativeAreaId: 'MMDA-AR-01', regionId: 'ASHANTI', name: 'Bantama', electoralArea: 'Bantama Central' },
  { id: 'COM-07', administrativeAreaId: 'MMDA-AR-01', regionId: 'ASHANTI', name: 'Asafo', electoralArea: 'Subin Ward' },
  { id: 'COM-08', administrativeAreaId: 'MMDA-NR-01', regionId: 'NORTHERN', name: 'Aboabo', electoralArea: 'Tamale Central' },
  { id: 'COM-09', administrativeAreaId: 'MMDA-WR-01', regionId: 'WESTERN', name: 'Kwesimintsim', electoralArea: 'Effia-Kwesimintsim' }
];

// Project Taxonomies
const PROJECT_CATEGORIES = [
  { value: 'EDUCATION', label: 'Education & Schools', icon: 'graduation-cap' },
  { value: 'HEALTH', label: 'Health & Sanitation Facilities', icon: 'activity' },
  { value: 'ROADS_TRANSPORT', label: 'Roads & Bridges', icon: 'truck' },
  { value: 'WATER_SANITATION', label: 'Water & Sanitation (WASH)', icon: 'droplets' },
  { value: 'ELECTRIFICATION', label: 'Electrification & Solar', icon: 'zap' },
  { value: 'COMMUNITY_INFRASTRUCTURE', label: 'Civic & Market Infrastructure', icon: 'building' },
  { value: 'AGRICULTURE', label: 'Agriculture & Processing', icon: 'sprout' },
  { value: 'OTHER', label: 'Other Development Initiatives', icon: 'folder' }
];

const PROJECT_STATUSES = [
  { value: 'NOT_STARTED', label: 'Not Started', badgeClass: 'bg-slate-100 text-slate-800 border-slate-200' },
  { value: 'ONGOING', label: 'Ongoing', badgeClass: 'bg-blue-100 text-blue-800 border-blue-200' },
  { value: 'COMPLETED', label: 'Completed', badgeClass: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  { value: 'SUSPENDED', label: 'Suspended', badgeClass: 'bg-amber-100 text-amber-800 border-amber-200' },
  { value: 'DELAYED', label: 'Delayed', badgeClass: 'bg-rose-100 text-rose-800 border-rose-200' }
];

const FUNDING_SOURCES = [
  { value: 'DACF', label: 'District Assemblies Common Fund (DACF)' },
  { value: 'GETFUND', label: 'Ghana Education Trust Fund (GETFund)' },
  { value: 'IGF', label: 'Internally Generated Funds (IGF)' },
  { value: 'DDF', label: 'District Development Facility (DDF / DPAT)' },
  { value: 'WORLD_BANK', label: 'World Bank / Development Partner Credit' },
  { value: 'CENTRAL_GOVERNMENT', label: 'Central Government Direct Ministry Allocation' },
  { value: 'DONOR_PARTNER', label: 'Bilateral / Multilateral Donor Support' },
  { value: 'OTHER', label: 'Public-Private Partnership / Other' }
];

// User Roles
const USER_ROLES = {
  SUPER_ADMIN: {
    id: 'SUPER_ADMIN',
    name: 'Super Administrator (National)',
    description: 'Manages all regions, MMDAs, global audit trail, and cross-district statistics'
  },
  MMDA_ADMIN: {
    id: 'MMDA_ADMIN',
    name: 'Municipal/District Administrator',
    description: 'Manages projects, communities, and verifies progress reports within their assigned MMDA'
  },
  PROJECT_OFFICER: {
    id: 'PROJECT_OFFICER',
    name: 'Project Officer (Field Inspector)',
    description: 'Submits progress updates, site inspection photos, and milestone logs for assigned projects'
  },
  PUBLIC_USER: {
    id: 'PUBLIC_USER',
    name: 'Public Citizen (Transparency Portal)',
    description: 'Searches, tracks, and monitors publicly approved community projects'
  }
};
