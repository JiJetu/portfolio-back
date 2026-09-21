import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SocialValidation } from "./social.validation";
import { SocialControllers } from "./social.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "../User/user.constant";

const router = express.Router();

router.get("/", SocialControllers.getAllSocials);

router.get("/:id", SocialControllers.getSocialById);

router.post(
  "/",
  auth(UserRole.admin),
  validateRequest(SocialValidation.createSocialSchema),
  SocialControllers.createSocial
);

router.put(
  "/:id",
  auth(UserRole.admin),
  validateRequest(SocialValidation.updateSocialSchema),
  SocialControllers.updateSocial
);

router.delete("/:id", auth(UserRole.admin), SocialControllers.deleteSocial);

export const SocialRoutes = router;
