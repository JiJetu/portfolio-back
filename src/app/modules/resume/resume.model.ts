import { Schema, model } from "mongoose";
import { IResume } from "./resume.interface";

const resumeSchema = new Schema<IResume>(
  {
    title: { type: String, required: true, trim: true },
    resumeUrl: { type: String, required: true, trim: true },
    downloadUrl: { type: String, trim: true },
    fileName: { type: String, trim: true },
    fileType: { type: String, default: "pdf" },
    isActive: { type: Boolean, default: true },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Resume = model<IResume>("Resume", resumeSchema);
