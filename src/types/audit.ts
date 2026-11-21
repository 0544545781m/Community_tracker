/**
 * Audit Trail and Activity Logging
 */

export type AuditAction = 
  | 'CREATE'
  | 'UPDATE'
  | 'DELETE'
  | 'STATUS_CHANGE'
  | 'VERIFY_PROGRESS'
  | 'FILE_UPLOAD'
  | 'USER_ROLE_CHANGE'
  | 'LOGIN';

export interface AuditLog {
  id: string;
  userId: string;
  userEmail: string;
  userRole: string;
  administrativeAreaId?: string | null;
  action: AuditAction;
  entityType: 'PROJECT' | 'PROGRESS_UPDATE' | 'COMMUNITY' | 'MMDA' | 'USER' | 'AUTH';
  entityId: string;
  details: string;
  timestamp: string;
  ipAddress?: string;
}
