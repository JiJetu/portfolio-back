import { z } from "zod";

const createEducationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "Education title is required" }).min(1),
    institution: z.string({ required_error: "Institution name is required" }).min(1),
    startDate: z.string({ required_error: "Start date is required" }).min(1),
    endDate: z.string().optional(),
    isRunning: z.boolean().optional(),
    result: z.string().optional(),
    outOf: z.string().optional(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});

const updateEducationSchema = z.object({
  body: z.object({
    title: z.string().min(1).optional(),
    institution: z.string().min(1).optional(),
    startDate: z.string().min(1).optional(),
    endDate: z.string().optional(),
    isRunning: z.boolean().optional(),
    result: z.string().optional(),
    outOf: z.string().optional(),
    description: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const EducationValidation = {
  createEducationSchema,
  updateEducationSchema,
};
