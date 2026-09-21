import { z } from "zod";

const createExperienceSchema = z.object({
  body: z.object({
    designation: z.string({ required_error: "Designation / Job title is required" }).min(1),
    companyName: z.string({ required_error: "Company name is required" }).min(1),
    companyLocation: z.string().optional(),
    employmentType: z.string().optional(),
    startDate: z.string({ required_error: "Start date is required" }).min(1),
    endDate: z.string().optional(),
    isCurrentlyWorking: z.boolean().optional(),
    description: z.string().optional(),
    technologies: z.string().optional(),
    companyUrl: z.string().optional(),
    order: z.number().optional(),
  }),
});

const updateExperienceSchema = z.object({
  body: z.object({
    designation: z.string().min(1).optional(),
    companyName: z.string().min(1).optional(),
    companyLocation: z.string().optional(),
    employmentType: z.string().optional(),
    startDate: z.string().min(1).optional(),
    endDate: z.string().optional(),
    isCurrentlyWorking: z.boolean().optional(),
    description: z.string().optional(),
    technologies: z.string().optional(),
    companyUrl: z.string().optional(),
    order: z.number().optional(),
  }),
});

export const ExperienceValidation = {
  createExperienceSchema,
  updateExperienceSchema,
};
