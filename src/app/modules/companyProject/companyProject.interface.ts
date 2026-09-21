export interface ICompanyProject {
  title: string;
  companyName?: string;
  description: string;
  technology: string;
  projectImg: string;
  images?: string[];
  liveLink?: string;
  isDeleted?: boolean;
}
