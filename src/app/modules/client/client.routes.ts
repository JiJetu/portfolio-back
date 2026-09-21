import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ClientValidation } from "./client.validation";
import { ClientControllers } from "./client.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "../User/user.constant";

const router = express.Router();

router.get("/", auth(UserRole.admin), ClientControllers.getAllClients);

router.get("/:id", auth(UserRole.admin), ClientControllers.getClientById);

router.post(
  "/",
  auth(UserRole.admin),
  validateRequest(ClientValidation.createClientSchema),
  ClientControllers.createClient
);

router.put(
  "/:id",
  auth(UserRole.admin),
  validateRequest(ClientValidation.updateClientSchema),
  ClientControllers.updateClient
);

router.delete("/:id", auth(UserRole.admin), ClientControllers.deleteClient);

export const ClientRoutes = router;
