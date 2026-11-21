/**
 * Project Data Definitions
 */

export type ProjectStatus = 
  | 'NOT_STARTED'
  | 'ONGOING'
  | 'COMPLETED'
  | 'SUSPENDED'
  | 'DELAYED';

export type ProjectCategory = 
  | 'EDUCATION'               // Schools, libraries, teacher quarters
  | 'HEALTH'                  // Clinics, CHPS compounds, hospitals
  | 'ROADS_TRANSPORT'         // Feeder roads, bridges, culverts
  | 'WATER_SANITATION'        // Boreholes, public toilets, drainage
  | 'ELECTRIFICATION'         // Grid extension, solar streetlights
  | 'COMMUNITY_INFRASTRUCTURE'// Markets, community centers, durbar grounds
  | 'AGRICULTURE'             // Irrigation dams, processing centers
  | 'OTHER';

export type FundingSource = 
  | 'DACF'                    // District Assemblies Common Fund
  | 'GETFUND'                 // Ghana Education Trust Fund
  | 'IGF'                     // Internally Generated Funds
  | 'DDF'                     // District Development Facility / DPAT
  | 'WORLD_BANK'              // Development Partner projects (e.g. GARID, SOCO)
  | 'CENTRAL_GOVERNMENT'      // Ministries, Departments & Agencies
  | 'DONOR_PARTNER'
  | 'OTHER';

export interface Project {
  id: string;
  referenceNumber: string;             // e.g., "GAR-GEMA-2026-001"
  title: string;
  description: string;
  regionId: string;
  administrativeAreaId: string;
  communityId: string;
  category: ProjectCategory;
  contractor: string;
  budgetGHS: number;                  // Approved budget in Ghana Cedis (GHS)
  expenditureToDateGHS?: number;       // Actual amount disbursed
  fundingSource: FundingSource;
  startDate: string;                   // ISO date string: YYYY-MM-DD
  expectedCompletionDate: string;      // ISO date string: YYYY-MM-DD
  actualCompletionDate?: string | null;// ISO date string if completed
  status: ProjectStatus;
  progressPercentage: number;          // 0 to 100
  assignedOfficerId?: string;          // Assigned Project Officer UID
  assignedOfficerName?: string;
  isPubliclyVisible: boolean;          // Transparency portal display flag
  coverImageUrl?: string;
  gpsCoordinates?: {
    latitude: number;
    longitude: number;
  };
  createdAt: string;
  updatedAt: string;
}
