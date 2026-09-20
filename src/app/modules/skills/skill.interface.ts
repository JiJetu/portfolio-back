import { SkillType } from "./skill.constant";

export type TSkillType = keyof typeof SkillType;

export interface ISkill {
  name: string;
  proficiency: number;
  skillType: TSkillType;
  isDeleted?: boolean;
}
