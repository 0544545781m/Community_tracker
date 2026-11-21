/**
 * Administrative Constants & Taxonomies for Ghana MMDAs
 * Full coverage for all 16 Administrative Regions of Ghana
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

// Active MMDAs covering ALL 16 REGIONS OF GHANA
const INITIAL_MMDAS = [
  // 1. Ahafo Region
  {
    id: 'MMDA-AHR-01',
    regionId: 'AHAFO',
    name: 'Asunafo North Municipal Assembly',
    code: 'ANMA',
    type: 'MUNICIPAL',
    capital: 'Goaso',
    contactEmail: 'info@anma.gov.gh',
    contactPhone: '+233 352 091 100',
    isActive: true
  },
  // 2. Ashanti Region
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
  // 3. Bono Region
  {
    id: 'MMDA-BR-01',
    regionId: 'BONO',
    name: 'Sunyani Municipal Assembly',
    code: 'SMA',
    type: 'MUNICIPAL',
    capital: 'Sunyani',
    contactEmail: 'info@sma.gov.gh',
    contactPhone: '+233 352 027 000',
    isActive: true
  },
  // 4. Bono East Region
  {
    id: 'MMDA-BER-01',
    regionId: 'BONO_EAST',
    name: 'Techiman Municipal Assembly',
    code: 'TeMA',
    type: 'MUNICIPAL',
    capital: 'Techiman',
    contactEmail: 'info@tema.gov.gh',
    contactPhone: '+233 352 522 110',
    isActive: true
  },
  // 5. Central Region
  {
    id: 'MMDA-CR-01',
    regionId: 'CENTRAL',
    name: 'Cape Coast Metropolitan Assembly',
    code: 'CCMA',
    type: 'METROPOLITAN',
    capital: 'Cape Coast',
    contactEmail: 'info@ccma.gov.gh',
    contactPhone: '+233 332 132 500',
    isActive: true
  },
  // 6. Eastern Region
  {
    id: 'MMDA-ER-01',
    regionId: 'EASTERN',
    name: 'New Juaben South Municipal Assembly',
    code: 'NJSMA',
    type: 'MUNICIPAL',
    capital: 'Koforidua',
    contactEmail: 'info@njsma.gov.gh',
    contactPhone: '+233 342 022 411',
    isActive: true
  },
  // 7. Greater Accra Region
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
  // 8. North East Region
  {
    id: 'MMDA-NER-01',
    regionId: 'NORTH_EAST',
    name: 'East Mamprusi Municipal Assembly',
    code: 'EMMA',
    type: 'MUNICIPAL',
    capital: 'Nalerigu',
    contactEmail: 'info@emma.gov.gh',
    contactPhone: '+233 372 098 120',
    isActive: true
  },
  // 9. Northern Region
  {
    id: 'MMDA-NR-01',
    regionId: 'NORTHERN',
    name: 'Tamale Metropolitan Assembly',
    code: 'TaMA',
    type: 'METROPOLITAN',
    capital: 'Tamale',
    contactEmail: 'contact@tma.gov.gh',
    contactPhone: '+233 372 022 100',
    isActive: true
  },
  // 10. Oti Region
  {
    id: 'MMDA-OR-01',
    regionId: 'OTI',
    name: 'Krachi East Municipal Assembly',
    code: 'KEMA',
    type: 'MUNICIPAL',
    capital: 'Dambai',
    contactEmail: 'info@kema.gov.gh',
    contactPhone: '+233 362 194 000',
    isActive: true
  },
  // 11. Savannah Region
  {
    id: 'MMDA-SR-01',
    regionId: 'SAVANNAH',
    name: 'West Gonja Municipal Assembly',
    code: 'WGMA',
    type: 'MUNICIPAL',
    capital: 'Damongo',
    contactEmail: 'info@wgma.gov.gh',
    contactPhone: '+233 372 092 340',
    isActive: true
  },
  // 12. Upper East Region
  {
    id: 'MMDA-UER-01',
    regionId: 'UPPER_EAST',
    name: 'Bolgatanga Municipal Assembly',
    code: 'BMA',
    type: 'MUNICIPAL',
    capital: 'Bolgatanga',
    contactEmail: 'info@bma.gov.gh',
    contactPhone: '+233 382 022 220',
    isActive: true
  },
  // 13. Upper West Region
  {
    id: 'MMDA-UWR-01',
    regionId: 'UPPER_WEST',
    name: 'Wa Municipal Assembly',
    code: 'WMA',
    type: 'MUNICIPAL',
    capital: 'Wa',
    contactEmail: 'info@wma.gov.gh',
    contactPhone: '+233 392 022 050',
    isActive: true
  },
  // 14. Volta Region
  {
    id: 'MMDA-VR-01',
    regionId: 'VOLTA',
    name: 'Ho Municipal Assembly',
    code: 'HMA',
    type: 'MUNICIPAL',
    capital: 'Ho',
    contactEmail: 'info@hma.gov.gh',
    contactPhone: '+233 362 026 800',
    isActive: true
  },
  // 15. Western Region
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
  },
  // 16. Western North Region
  {
    id: 'MMDA-WNR-01',
    regionId: 'WESTERN_NORTH',
    name: 'Sefwi Wiawso Municipal Assembly',
    code: 'SWMA',
    type: 'MUNICIPAL',
    capital: 'Sefwi Wiawso',
    contactEmail: 'info@swma.gov.gh',
    contactPhone: '+233 312 092 110',
    isActive: true
  }
];

// Communities across ALL 16 REGIONS
const INITIAL_COMMUNITIES = [
  // Ahafo
  { id: 'COM-AHR-01', administrativeAreaId: 'MMDA-AHR-01', regionId: 'AHAFO', name: 'Goaso Central', electoralArea: 'Goaso Ward' },
  { id: 'COM-AHR-02', administrativeAreaId: 'MMDA-AHR-01', regionId: 'AHAFO', name: 'Mim', electoralArea: 'Mim Ahofadiekrom' },
  // Ashanti
  { id: 'COM-AR-01', administrativeAreaId: 'MMDA-AR-01', regionId: 'ASHANTI', name: 'Bantama', electoralArea: 'Bantama Central' },
  { id: 'COM-AR-02', administrativeAreaId: 'MMDA-AR-01', regionId: 'ASHANTI', name: 'Asafo', electoralArea: 'Subin Ward' },
  // Bono
  { id: 'COM-BR-01', administrativeAreaId: 'MMDA-BR-01', regionId: 'BONO', name: 'Sunyani Central', electoralArea: 'Newtown Ward' },
  { id: 'COM-BR-02', administrativeAreaId: 'MMDA-BR-01', regionId: 'BONO', name: 'Fiapre', electoralArea: 'Fiapre Ward' },
  // Bono East
  { id: 'COM-BER-01', administrativeAreaId: 'MMDA-BER-01', regionId: 'BONO_EAST', name: 'Techiman Central', electoralArea: 'Techiman Urban' },
  { id: 'COM-BER-02', administrativeAreaId: 'MMDA-BER-01', regionId: 'BONO_EAST', name: 'Tuobodom', electoralArea: 'Tuobodom North' },
  // Central
  { id: 'COM-CR-01', administrativeAreaId: 'MMDA-CR-01', regionId: 'CENTRAL', name: 'Kotokuraba', electoralArea: 'Kotokuraba Market' },
  { id: 'COM-CR-02', administrativeAreaId: 'MMDA-CR-01', regionId: 'CENTRAL', name: 'Pedu', electoralArea: 'Pedu Estate' },
  // Eastern
  { id: 'COM-ER-01', administrativeAreaId: 'MMDA-ER-01', regionId: 'EASTERN', name: 'Koforidua Central', electoralArea: 'Adweso' },
  { id: 'COM-ER-02', administrativeAreaId: 'MMDA-ER-01', regionId: 'EASTERN', name: 'Effiduase', electoralArea: 'Effiduase Ward' },
  // Greater Accra
  { id: 'COM-GAR-01', administrativeAreaId: 'MMDA-GAR-01', regionId: 'GREATER_ACCRA', name: 'Abokobi', electoralArea: 'Abokobi Ward' },
  { id: 'COM-GAR-02', administrativeAreaId: 'MMDA-GAR-01', regionId: 'GREATER_ACCRA', name: 'Taifa', electoralArea: 'Taifa North' },
  { id: 'COM-GAR-03', administrativeAreaId: 'MMDA-GAR-01', regionId: 'GREATER_ACCRA', name: 'Dome', electoralArea: 'Dome Central' },
  { id: 'COM-GAR-04', administrativeAreaId: 'MMDA-GAR-02', regionId: 'GREATER_ACCRA', name: 'Jamestown', electoralArea: 'Ashiedu Keteke' },
  { id: 'COM-GAR-05', administrativeAreaId: 'MMDA-GAR-02', regionId: 'GREATER_ACCRA', name: 'Osu', electoralArea: 'Klottey Korle' },
  // North East
  { id: 'COM-NER-01', administrativeAreaId: 'MMDA-NER-01', regionId: 'NORTH_EAST', name: 'Nalerigu Central', electoralArea: 'Nalerigu Ward' },
  { id: 'COM-NER-02', administrativeAreaId: 'MMDA-NER-01', regionId: 'NORTH_EAST', name: 'Gambaga', electoralArea: 'Gambaga East' },
  // Northern
  { id: 'COM-NR-01', administrativeAreaId: 'MMDA-NR-01', regionId: 'NORTHERN', name: 'Aboabo', electoralArea: 'Tamale Central' },
  { id: 'COM-NR-02', administrativeAreaId: 'MMDA-NR-01', regionId: 'NORTHERN', name: 'Lamashegu', electoralArea: 'Tamale South' },
  // Oti
  { id: 'COM-OR-01', administrativeAreaId: 'MMDA-OR-01', regionId: 'OTI', name: 'Dambai Central', electoralArea: 'Dambai Lakeside' },
  { id: 'COM-OR-02', administrativeAreaId: 'MMDA-OR-01', regionId: 'OTI', name: 'Tokuroano', electoralArea: 'Tokuroano Ward' },
  // Savannah
  { id: 'COM-SR-01', administrativeAreaId: 'MMDA-SR-01', regionId: 'SAVANNAH', name: 'Damongo Central', electoralArea: 'Damongo Ward' },
  { id: 'COM-SR-02', administrativeAreaId: 'MMDA-SR-01', regionId: 'SAVANNAH', name: 'Larabanga', electoralArea: 'Larabanga Heritage Ward' },
  // Upper East
  { id: 'COM-UER-01', administrativeAreaId: 'MMDA-UER-01', regionId: 'UPPER_EAST', name: 'Bolgatanga Central', electoralArea: 'Tanzui Ward' },
  { id: 'COM-UER-02', administrativeAreaId: 'MMDA-UER-01', regionId: 'UPPER_EAST', name: 'Zuarungu', electoralArea: 'Zuarungu Ward' },
  // Upper West
  { id: 'COM-UWR-01', administrativeAreaId: 'MMDA-UWR-01', regionId: 'UPPER_WEST', name: 'Wa Central', electoralArea: 'Wa Urban' },
  { id: 'COM-UWR-02', administrativeAreaId: 'MMDA-UWR-01', regionId: 'UPPER_WEST', name: 'Bamahu', electoralArea: 'Bamahu Ward' },
  // Volta
  { id: 'COM-VR-01', administrativeAreaId: 'MMDA-VR-01', regionId: 'VOLTA', name: 'Ho Central', electoralArea: 'Ho Bankoe' },
  { id: 'COM-VR-02', administrativeAreaId: 'MMDA-VR-01', regionId: 'VOLTA', name: 'Kpenoe', electoralArea: 'Kpenoe Sub-district' },
  // Western
  { id: 'COM-WR-01', administrativeAreaId: 'MMDA-WR-01', regionId: 'WESTERN', name: 'Kwesimintsim', electoralArea: 'Effia-Kwesimintsim' },
  { id: 'COM-WR-02', administrativeAreaId: 'MMDA-WR-01', regionId: 'WESTERN', name: 'Takoradi Port Area', electoralArea: 'Takoradi Central' },
  // Western North
  { id: 'COM-WNR-01', administrativeAreaId: 'MMDA-WNR-01', regionId: 'WESTERN_NORTH', name: 'Sefwi Wiawso Central', electoralArea: 'Wiawso Urban' },
  { id: 'COM-WNR-02', administrativeAreaId: 'MMDA-WNR-01', regionId: 'WESTERN_NORTH', name: 'Asawinso', electoralArea: 'Asawinso Ward' }
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
    description: 'Manages all 16 regions, MMDAs, global audit trail, and cross-district statistics'
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
