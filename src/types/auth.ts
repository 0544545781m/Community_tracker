/**
 * Authentication and User Role definitions for CD-PTMS
 */

export type UserRole = 
  | 'SUPER_ADMIN'          // National level: manages all regions, MMDAs, and platform settings
  | 'MMDA_ADMIN'           // Assembly level: manages designated Municipal/District projects & communities
  | 'PROJECT_OFFICER'      // Field level: submits updates, photos, and progress on assigned projects
  | 'PUBLIC_USER';         // Citizen level: views verified, public development projects

export interface UserProfile {
  uid: string;
  email: string;
  fullName: string;
  phoneNumber?: string;
  role: UserRole;
  regionId?: string | null;            // Required for MMDA_ADMIN and PROJECT_OFFICER
  administrativeAreaId?: string | null;// Required for MMDA_ADMIN and PROJECT_OFFICER (MMDA)
  department?: string;                 // e.g. "Works Department", "Physical Planning"
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: UserProfile | null;
  loading: boolean;
  error: string | null;
}
