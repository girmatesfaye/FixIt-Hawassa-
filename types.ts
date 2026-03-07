
export enum RequestStatus {
  IN_PROGRESS = 'In Progress',
  SEARCHING = 'Searching',
  PENDING = 'Pending',
  COMPLETED = 'Completed'
}

export enum ReportStatus {
  RESOLVED = 'Resolved',
  UNDER_REVIEW = 'Under Review',
  ACTION_TAKEN = 'Action Taken'
}

export interface ServiceRequest {
  id: string;
  title: string;
  category: string;
  description: string;
  status: RequestStatus;
  date: string;
  workerName?: string;
  workerRole?: string;
  workerAvatar?: string;
  location?: string;
  level?: string;
}

export interface Report {
  id: string;
  workerName: string;
  dateSubmitted: string;
  status: ReportStatus;
  category: string;
  issue: string;
  clientDescription: string;
  adminResolution: string;
}

export interface User {
  name: string;
  location: string;
  avatar: string;
  isVerified: boolean;
}
