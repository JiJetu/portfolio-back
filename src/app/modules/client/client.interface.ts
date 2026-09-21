import { Document } from "mongoose";

export interface IClient extends Document {
  name: string;
  email?: string;
  company?: string;
  phone?: string;
  address?: string;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
