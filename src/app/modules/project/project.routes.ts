import express from "express";
import { ProjectControllers } from "./project.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProjectValidation } from "./project.validatrion";
import auth from "../../middlewares/auth";
import { UserRole } from "../User/user.constant";

const router = express.Router();

router.get("/", ProjectControllers.getAllProjects);

router.get("/:id", ProjectControllers.getProjectById);

router.post(
  "/",
  auth(UserRole.admin),
  validateRequest(ProjectValidation.createProjectSchema),
  ProjectControllers.createProject
);

router.put(
  "/:id",
  auth(UserRole.admin),
  validateRequest(ProjectValidation.updateProjectSchema),
  ProjectControllers.updateProject
);

router.delete("/:id", auth(UserRole.admin), ProjectControllers.deleteProject);

export const ProjectRoutes = router;
