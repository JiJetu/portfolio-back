import express from "express";
import { ResumeControllers } from "./resume.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ResumeValidation } from "./resume.validation";
import auth from "../../middlewares/auth";
import { UserRole } from "../User/user.constant";

const router = express.Router();

router.get("/", ResumeControllers.getAllResumes);

router.get("/active", ResumeControllers.getActiveResume);

router.get(
  "/deleted",
  auth(UserRole.admin),
  ResumeControllers.getDeletedResumes
);

router.get("/:id", ResumeControllers.getResumeById);

router.post(
  "/",
  auth(UserRole.admin),
  validateRequest(ResumeValidation.createResumeSchema),
  ResumeControllers.createResume
);

router.put(
  "/:id",
  auth(UserRole.admin),
  validateRequest(ResumeValidation.updateResumeSchema),
  ResumeControllers.updateResume
);

router.patch(
  "/:id/active",
  auth(UserRole.admin),
  ResumeControllers.setActiveResume
);

router.patch(
  "/:id/restore",
  auth(UserRole.admin),
  ResumeControllers.restoreResume
);

router.delete(
  "/:id",
  auth(UserRole.admin),
  ResumeControllers.deleteResume
);

router.delete(
  "/:id/permanent",
  auth(UserRole.admin),
  ResumeControllers.permanentDeleteResume
);

export const ResumeRoutes = router;
