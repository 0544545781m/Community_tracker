/**
 * Administrative Hierarchy Definitions for Ghana MMDAs
 */

export interface Region {
  id: string;                          // Region code or slug, e.g. "GAR", "AR"
  name: string;                        // e.g. "Greater Accra Region", "Ashanti Region"
  code: string;                        // e.g. "GAR"
  capital: string;                     // e.g. "Accra", "Kumasi"
  mmdaCount?: number;
  createdAt: string;
}

export type AdministrativeAreaType = 
  | 'METROPOLITAN'                     // Metropolis, e.g. Accra Metropolitan Assembly (AMA)
  | 'MUNICIPAL'                        // Municipality, e.g. Ga East Municipal Assembly (GEMA)
  | 'DISTRICT';                        // District, e.g. Ada East District Assembly

export interface AdministrativeArea {
  id: string;
  regionId: string;                    // Foreign key linking to Region
  name: string;                        // e.g. "Ga East Municipal Assembly"
  code: string;                        // e.g. "GEMA"
  type: AdministrativeAreaType;
  capital: string;                     // Administrative seat / capital
  officeAddress?: string;
  contactEmail?: string;
  contactPhone?: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Community {
  id: string;
  administrativeAreaId: string;        // Foreign key linking to MMDA
  regionId: string;                    // Foreign key linking to Region
  name: string;                        // e.g. "Abokobi", "Taifa", "Dome"
  electoralArea?: string;              // Local electoral subdivision
  populationEstimate?: number;
  createdAt: string;
}
