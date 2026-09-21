import { Document } from "mongoose";

export interface IResume extends Document {
  title: string;
  resumeUrl: string;
  downloadUrl?: string;
  fileName?: string;
  fileType?: string;
  isActive: boolean;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
