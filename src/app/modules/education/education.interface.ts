import { Document } from "mongoose";

export interface IEducation extends Document {
  title: string; // e.g. "BSc in Computer Science"
  institution: string; // e.g. "University of Information Technology and Sciences"
  startDate: string; // e.g. "2020"
  endDate?: string; // e.g. "2024"
  isRunning: boolean; // if true, currently studying / running
  result?: string; // e.g. "3.63"
  outOf?: string; // e.g. "4"
  description?: string;
  order: number;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
