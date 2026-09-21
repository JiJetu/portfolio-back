import { Schema, model } from "mongoose";
import { ISocial } from "./social.interface";

const SocialSchema = new Schema<ISocial>(
  {
    platform: {
      type: String,
      required: [true, "Social platform identifier is required"],
      trim: true,
      lowercase: true,
    },
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    url: {
      type: String,
      required: [true, "Profile URL is required"],
      trim: true,
    },
    icon: {
      type: String,
      default: "",
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    order: {
      type: Number,
      default: 0,
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

export const Social = model<ISocial>("Social", SocialSchema);
