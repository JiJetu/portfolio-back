import { z } from "zod";

const createTaskSchema = z.object({
  body: z.object({
    projectName: z
      .string({ required_error: "Project name is required" })
      .min(1, "Project name cannot be empty"),
    budget: z.number().min(0).optional().default(0),
    client: z.string().optional().nullable(),
    deadline: z.string({ required_error: "Deadline date is required" }),
    status: z
      .enum(["pending", "in_progress", "under_review", "completed", "cancelled"])
      .optional()
      .default("pending"),
    phase: z
      .enum([
        "frontend",
        "backend",
        "full_stack",
        "ui_ux",
        "devops",
        "qa",
        "other",
      ])
      .optional()
      .default("frontend"),
    description: z.string().optional(),
  }),
});

const updateTaskSchema = z.object({
  body: z.object({
    projectName: z.string().min(1).optional(),
    budget: z.number().min(0).optional(),
    client: z.string().optional().nullable(),
    deadline: z.string().optional(),
    status: z
      .enum(["pending", "in_progress", "under_review", "completed", "cancelled"])
      .optional(),
    phase: z
      .enum([
        "frontend",
        "backend",
        "full_stack",
        "ui_ux",
        "devops",
        "qa",
        "other",
      ])
      .optional(),
    description: z.string().optional(),
  }),
});

export const TaskValidation = {
  createTaskSchema,
  updateTaskSchema,
};
