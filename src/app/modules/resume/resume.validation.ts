import { z } from "zod";

const createResumeSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Resume title is required" }).min(1),
    resumeUrl: z.string({ required_error: "Resume URL is required" }).min(1),
    downloadUrl: z.string().optional(),
    fileName: z.string().optional(),
    fileType: z.string().optional(),
    isActive: z.boolean().optional(),
  }),
});

const updateResumeSchema = z.object({
  body: z.object({
    title: z.string().min(1).optional(),
    resumeUrl: z.string().min(1).optional(),
    downloadUrl: z.string().optional(),
    fileName: z.string().optional(),
    fileType: z.string().optional(),
    isActive: z.boolean().optional(),
  }),
});

export const ResumeValidation = {
  createResumeSchema,
  updateResumeSchema,
};
