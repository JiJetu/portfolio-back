import { Schema, model } from "mongoose";
import { ITask } from "./task.interface";

const TaskSchema = new Schema<ITask>(
  {
    projectName: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
    },
    budget: {
      type: Number,
      default: 0,
      min: [0, "Budget cannot be negative"],
    },
    client: {
      type: Schema.Types.ObjectId,
      ref: "Client",
      required: false,
    },
    deadline: {
      type: Date,
      required: [true, "Deadline date is required"],
    },
    status: {
      type: String,
      enum: ["pending", "in_progress", "under_review", "completed", "cancelled"],
      default: "pending",
    },
    phase: {
      type: String,
      enum: [
        "frontend",
        "backend",
        "full_stack",
        "ui_ux",
        "devops",
        "qa",
        "other",
      ],
      default: "frontend",
    },
    description: {
      type: String,
      trim: true,
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

export const Task = model<ITask>("Task", TaskSchema);
