import express from "express";
import { EducationControllers } from "./education.controller";
import validateRequest from "../../middlewares/validateRequest";
import { EducationValidation } from "./education.validation";
import auth from "../../middlewares/auth";
import { UserRole } from "../User/user.constant";

const router = express.Router();

router.get("/", EducationControllers.getAllEducation);

router.get(
  "/deleted",
  auth(UserRole.admin),
  EducationControllers.getDeletedEducation
);

router.get("/:id", EducationControllers.getEducationById);

router.post(
  "/",
  auth(UserRole.admin),
  validateRequest(EducationValidation.createEducationSchema),
  EducationControllers.createEducation
);

router.put(
  "/:id",
  auth(UserRole.admin),
  validateRequest(EducationValidation.updateEducationSchema),
  EducationControllers.updateEducation
);

router.patch(
  "/:id/restore",
  auth(UserRole.admin),
  EducationControllers.restoreEducation
);

router.delete(
  "/:id",
  auth(UserRole.admin),
  EducationControllers.deleteEducation
);

router.delete(
  "/:id/permanent",
  auth(UserRole.admin),
  EducationControllers.permanentDeleteEducation
);

export const EducationRoutes = router;
