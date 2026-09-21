import express from "express";
import { ExperienceControllers } from "./experience.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ExperienceValidation } from "./experience.validation";
import auth from "../../middlewares/auth";
import { UserRole } from "../User/user.constant";

const router = express.Router();

router.get("/", ExperienceControllers.getAllExperience);

router.get(
  "/deleted",
  auth(UserRole.admin),
  ExperienceControllers.getDeletedExperience
);

router.get("/:id", ExperienceControllers.getExperienceById);

router.post(
  "/",
  auth(UserRole.admin),
  validateRequest(ExperienceValidation.createExperienceSchema),
  ExperienceControllers.createExperience
);

router.put(
  "/:id",
  auth(UserRole.admin),
  validateRequest(ExperienceValidation.updateExperienceSchema),
  ExperienceControllers.updateExperience
);

router.patch(
  "/:id/restore",
  auth(UserRole.admin),
  ExperienceControllers.restoreExperience
);

router.delete(
  "/:id",
  auth(UserRole.admin),
  ExperienceControllers.deleteExperience
);

router.delete(
  "/:id/permanent",
  auth(UserRole.admin),
  ExperienceControllers.permanentDeleteExperience
);

export const ExperienceRoutes = router;
