import { Router } from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { UserRoutes } from "../modules/User/user.route";
import { ProjectRoutes } from "../modules/project/project.routes";
import { BlogRoutes } from "../modules/blogs/blog.routes";
import { SkillRoutes } from "../modules/skills/skill.routes";
import { ClientRoutes } from "../modules/client/client.routes";
import { TaskRoutes } from "../modules/task/task.routes";
import { SocialRoutes } from "../modules/social/social.routes";
import { CompanyProjectRoutes } from "../modules/companyProject/companyProject.routes";
import { ResumeRoutes } from "../modules/resume/resume.routes";
import { EducationRoutes } from "../modules/education/education.routes";
import { ExperienceRoutes } from "../modules/experience/experience.routes";

const router = Router();

const moduleRoute = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/projects",
    route: ProjectRoutes,
  },
  {
    path: "/company-projects",
    route: CompanyProjectRoutes,
  },
  {
    path: "/blogs",
    route: BlogRoutes,
  },
  {
    path: "/skills",
    route: SkillRoutes,
  },
  {
    path: "/education",
    route: EducationRoutes,
  },
  {
    path: "/experience",
    route: ExperienceRoutes,
  },
  {
    path: "/clients",
    route: ClientRoutes,
  },
  {
    path: "/tasks",
    route: TaskRoutes,
  },
  {
    path: "/socials",
    route: SocialRoutes,
  },
  {
    path: "/resumes",
    route: ResumeRoutes,
  },
  {
    path: "/users",
    route: UserRoutes,
  },
];

moduleRoute.forEach((route) => router.use(route.path, route.route));

export default router;
