import { Document } from "mongoose";

export interface ISocial extends Document {
  platform: string; // e.g. linkedin, github, facebook, instagram, twitter, youtube, website, other
  title: string; // Display title
  url: string; // Profile URL
  icon?: string; // Optional icon identifier
  isActive: boolean;
  order: number;
  isDeleted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
