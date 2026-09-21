import { Schema, model } from "mongoose";
import { ICompanyProject } from "./companyProject.interface";

const CompanyProjectSchema = new Schema<ICompanyProject>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      default: "",
      trim: true,
    },
    description: {
      type: String,
      required: true,
    },
    technology: {
      type: String,
      required: true,
    },
    projectImg: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      default: [],
    },
    liveLink: {
      type: String,
      default: "",
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const CompanyProjects = model<ICompanyProject>(
  "CompanyProjects",
  CompanyProjectSchema
);
