/**
 * Progress Updates and Verification Records
 */

export interface ProjectAttachment {
  id: string;
  projectId: string;
  updateId?: string;
  name: string;
  url: string;
  storagePath: string;
  fileType: 'IMAGE' | 'PDF' | 'DOCUMENT';
  fileSizeBytes: number;
  caption?: string;
  uploadedBy: string;
  uploadedAt: string;
}

export interface ProgressUpdate {
  id: string;
  projectId: string;
  administrativeAreaId: string;
  reportedById: string;
  reporterName: string;
  reporterEmail?: string;
  
  // Progress metrics
  reportedPercentage: number;          // 0 to 100 as reported by field officer
  verifiedPercentage?: number;        // Independent assessment by District Engineer / MMDA Admin
  isVerified: boolean;
  verifiedById?: string;
  verifiedAt?: string;

  // Status and details
  statusAtUpdate: string;
  narrative: string;                  // Detailed work progress report
  milestonesAchieved?: string[];
  challengesEncountered?: string;
  recommendations?: string;

  // Supporting evidence
  attachments: ProjectAttachment[];
  updateDate: string;                 // ISO date of site inspection/reporting
  createdAt: string;
}
