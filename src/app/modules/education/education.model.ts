import { Schema, model } from "mongoose";
import { IEducation } from "./education.interface";

const educationSchema = new Schema<IEducation>(
  {
    title: { type: String, required: true, trim: true },
    institution: { type: String, required: true, trim: true },
    startDate: { type: String, required: true, trim: true },
    endDate: { type: String, trim: true },
    isRunning: { type: Boolean, default: false },
    result: { type: String, trim: true },
    outOf: { type: String, default: "4", trim: true },
    description: { type: String, trim: true },
    order: { type: Number, default: 0 },
    isDeleted: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
);

export const Education = model<IEducation>("Education", educationSchema);
