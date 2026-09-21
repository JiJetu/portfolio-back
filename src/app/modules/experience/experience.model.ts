import { Schema, model } from "mongoose";
import { IExperience } from "./experience.interface";

const experienceSchema = new Schema<IExperience>(
  {
    designation: { type: String, required: true, trim: true },
    companyName: { type: String, required: true, trim: true },
    companyLocation: { type: String, trim: true },
    employmentType: { type: String, default: "Full-time", trim: true },
    startDate: { type: String, required: true, trim: true },
    endDate: { type: String, trim: true },
    isCurrentlyWorking: { type: Boolean, default: false },
    description: { type: String, trim: true },
    technologies: { type: String, trim: true },
    companyUrl: { type: String, trim: true },
    order: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Experience = model<IExperience>("Experience", experienceSchema);
