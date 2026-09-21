import { Document, Types } from "mongoose";
import { IClient } from "../client/client.interface";

export type TTaskStatus =
  | "pending"
  | "in_progress"
  | "under_review"
  | "completed"
  | "cancelled";

export type TTaskPhase =
  | "frontend"
  | "backend"
  | "full_stack"
  | "ui_ux"
  | "devops"
  | "qa"
  | "other";

export interface ITask extends Document {
  projectName: string;
  budget: number;
  client?: Types.ObjectId | IClient | string;
  deadline: Date;
  status: TTaskStatus;
  phase: TTaskPhase;
  description?: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
