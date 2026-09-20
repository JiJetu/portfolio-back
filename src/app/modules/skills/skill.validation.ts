import { z } from "zod";
import { SkillType } from "./skill.constant";

const createSkillSchema = z.object({
  body: z.object({
    name: z.string().min(1, "Skill name is required"),
    proficiency: z
      .number()
      .min(0, "proficiency must be at least 0")
      .max(100, "proficiency cannot exceed 100"),
    skillType: z.nativeEnum(SkillType, {
      errorMap: () => ({ message: "Invalid skill type" }),
    }),
  }),
});

const updateSkillSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    proficiency: z.number().min(0).max(100).optional(),
    skillType: z
      .nativeEnum(SkillType, {
        errorMap: () => ({ message: "Invalid skill type" }),
      })
      .optional(),
  }),
});

export const SkillValidation = {
  createSkillSchema,
  updateSkillSchema,
};
