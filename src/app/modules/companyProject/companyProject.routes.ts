import express from "express";
import { CompanyProjectControllers } from "./companyProject.controller";
import validateRequest from "../../middlewares/validateRequest";
import { CompanyProjectValidation } from "./companyProject.validation";
import auth from "../../middlewares/auth";
import { UserRole } from "../User/user.constant";

const router = express.Router();

router.get("/", CompanyProjectControllers.getAllCompanyProjects);

router.get(
  "/deleted",
  auth(UserRole.admin),
  CompanyProjectControllers.getDeletedCompanyProjects
);

router.get("/:id", CompanyProjectControllers.getCompanyProjectById);

router.post(
  "/",
  auth(UserRole.admin),
  validateRequest(CompanyProjectValidation.createCompanyProjectSchema),
  CompanyProjectControllers.createCompanyProject
);

router.put(
  "/:id",
  auth(UserRole.admin),
  validateRequest(CompanyProjectValidation.updateCompanyProjectSchema),
  CompanyProjectControllers.updateCompanyProject
);

router.patch(
  "/:id/restore",
  auth(UserRole.admin),
  CompanyProjectControllers.restoreCompanyProject
);

router.delete(
  "/:id",
  auth(UserRole.admin),
  CompanyProjectControllers.deleteCompanyProject
);

router.delete(
  "/:id/permanent",
  auth(UserRole.admin),
  CompanyProjectControllers.permanentDeleteCompanyProject
);

export const CompanyProjectRoutes = router;
