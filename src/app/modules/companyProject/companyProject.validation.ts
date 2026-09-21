import { z } from "zod";

const createCompanyProjectSchema = z.object({
  body: z.object({
    title: z.string().min(1, "Title is required"),
    companyName: z.string().optional().default(""),
    description: z.string().min(1, "Description is required"),
    technology: z.string().min(1, "Technology is required"),
    projectImg: z.string().min(1, "Project banner image is required"),
    images: z.array(z.string()).optional().default([]),
    liveLink: z.string().optional().default(""),
    isDeleted: z.boolean().optional().default(false),
  }),
});

const updateCompanyProjectSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    companyName: z.string().optional(),
    description: z.string().optional(),
    technology: z.string().optional(),
    projectImg: z.string().optional(),
    images: z.array(z.string()).optional(),
    liveLink: z.string().optional(),
    isDeleted: z.boolean().optional(),
  }),
});

export const CompanyProjectValidation = {
  createCompanyProjectSchema,
  updateCompanyProjectSchema,
};
