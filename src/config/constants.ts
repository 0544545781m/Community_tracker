/**
 * Ghana Administrative & System Constants
 */

import { Region, ProjectCategory, ProjectStatus, FundingSource } from '../types';

// The 16 Official Administrative Regions of Ghana
export const GHANA_REGIONS: Omit<Region, 'createdAt'>[] = [
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
  { id: 'WESTERN_NORTH', code: 'WNR', name: 'Western North Region', capital: 'Sefwi Wiawso' },
];

export const PROJECT_CATEGORIES: { value: ProjectCategory; label: string; icon: string }[] = [
  { value: 'EDUCATION', label: 'Education & Schools', icon: 'GraduationCap' },
  { value: 'HEALTH', label: 'Health & Sanitation Facilities', icon: 'Activity' },
  { value: 'ROADS_TRANSPORT', label: 'Roads & Bridges', icon: 'Truck' },
  { value: 'WATER_SANITATION', label: 'Water & Sanitation (WASH)', icon: 'Droplets' },
  { value: 'ELECTRIFICATION', label: 'Electrification & Solar', icon: 'Zap' },
  { value: 'COMMUNITY_INFRASTRUCTURE', label: 'Civic & Market Infrastructure', icon: 'Building' },
  { value: 'AGRICULTURE', label: 'Agriculture & Processing', icon: 'Sprout' },
  { value: 'OTHER', label: 'Other Development Initiatives', icon: 'Folder' },
];

export const PROJECT_STATUSES: { value: ProjectStatus; label: string; color: string; bg: string }[] = [
  { value: 'NOT_STARTED', label: 'Not Started', color: 'text-slate-700', bg: 'bg-slate-100' },
  { value: 'ONGOING', label: 'Ongoing', color: 'text-blue-700', bg: 'bg-blue-100' },
  { value: 'COMPLETED', label: 'Completed', color: 'text-emerald-700', bg: 'bg-emerald-100' },
  { value: 'SUSPENDED', label: 'Suspended', color: 'text-amber-700', bg: 'bg-amber-100' },
  { value: 'DELAYED', label: 'Delayed', color: 'text-rose-700', bg: 'bg-rose-100' },
];

export const FUNDING_SOURCES: { value: FundingSource; label: string }[] = [
  { value: 'DACF', label: 'District Assemblies Common Fund (DACF)' },
  { value: 'GETFUND', label: 'Ghana Education Trust Fund (GETFund)' },
  { value: 'IGF', label: 'Internally Generated Funds (IGF)' },
  { value: 'DDF', label: 'District Development Facility (DDF / DPAT)' },
  { value: 'WORLD_BANK', label: 'World Bank / Development Partner Credit' },
  { value: 'CENTRAL_GOVERNMENT', label: 'Central Government / Ministry Direct' },
  { value: 'DONOR_PARTNER', label: 'Bilateral / Multilateral Donor Support' },
  { value: 'OTHER', label: 'Other Sources / Public-Private Partnership' },
];
