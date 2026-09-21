import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { TaskValidation } from "./task.validation";
import { TaskControllers } from "./task.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "../User/user.constant";

const router = express.Router();

router.get("/", auth(UserRole.admin), TaskControllers.getAllTasks);

router.get("/:id", auth(UserRole.admin), TaskControllers.getTaskById);

router.post(
  "/",
  auth(UserRole.admin),
  validateRequest(TaskValidation.createTaskSchema),
  TaskControllers.createTask
);

router.put(
  "/:id",
  auth(UserRole.admin),
  validateRequest(TaskValidation.updateTaskSchema),
  TaskControllers.updateTask
);

router.delete("/:id", auth(UserRole.admin), TaskControllers.deleteTask);

export const TaskRoutes = router;
