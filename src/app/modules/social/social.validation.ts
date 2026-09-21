import { z } from "zod";

const createSocialSchema = z.object({
  body: z.object({
    platform: z.string({ required_error: "Platform is required" }).min(1),
    title: z.string({ required_error: "Title is required" }).min(1),
    url: z.string({ required_error: "URL is required" }).url("Must be a valid URL"),
    icon: z.string().optional(),
    isActive: z.boolean().optional().default(true),
    order: z.number().optional().default(0),
  }),
});

const updateSocialSchema = z.object({
  body: z.object({
    platform: z.string().min(1).optional(),
    title: z.string().min(1).optional(),
    url: z.string().url("Must be a valid URL").optional(),
    icon: z.string().optional(),
    isActive: z.boolean().optional(),
    order: z.number().optional(),
  }),
});

export const SocialValidation = {
  createSocialSchema,
  updateSocialSchema,
};
