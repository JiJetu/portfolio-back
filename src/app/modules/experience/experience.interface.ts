import { Document } from "mongoose";

export interface IExperience extends Document {
  designation: string; // e.g. "MERN Stack Developer" or "Frontend Engineer"
  companyName: string; // e.g. "TechNova Corp"
  companyLocation?: string; // e.g. "Dhaka, Bangladesh" or "Remote"
  employmentType?: string; // e.g. "Full-time", "Part-time", "Contract", "Internship"
  startDate: string; // e.g. "Jan 2023"
  endDate?: string; // e.g. "Dec 2024" or empty if running
  isCurrentlyWorking: boolean; // if true, currently employed / running
  description?: string;
  technologies?: string; // e.g. "React, Node.js, Express, MongoDB"
  companyUrl?: string; // e.g. "https://company.com"
  order: number;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
