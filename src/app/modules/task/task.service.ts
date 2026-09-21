import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { ITask } from "./task.interface";
import { Task } from "./task.model";

const createTask = async (payload: Partial<ITask>) => {
  // If client is empty string or "none", remove it
  if (!payload.client || payload.client === "" || payload.client === "none") {
    delete payload.client;
  }
  const task = await (await Task.create(payload)).populate("client");
  return task;
};

const getAllTasks = async (query?: {
  status?: string;
  phase?: string;
  client?: string;
}) => {
  const filter: Record<string, unknown> = { isDeleted: false };

  if (query?.status) {
    filter.status = query.status;
  }
  if (query?.phase) {
    filter.phase = query.phase;
  }
  if (query?.client) {
    filter.client = query.client;
  }

  const tasks = await Task.find(filter)
    .populate("client")
    .sort({ createdAt: -1 });

  return tasks;
};

const getTaskById = async (id: string) => {
  const task = await Task.findById(id).populate("client");

  if (!task || task.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Task not found");
  }

  return task;
};

const updateTask = async (id: string, payload: Partial<ITask>) => {
  if (!payload.client || payload.client === "" || payload.client === "none") {
    payload.client = undefined;
  }

  const task = await Task.findByIdAndUpdate(id, payload, {
    new: true,
  }).populate("client");

  if (!task || task.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Task not found");
  }

  return task;
};

const deleteTask = async (id: string) => {
  const task = await Task.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  if (!task) {
    throw new AppError(httpStatus.NOT_FOUND, "Task not found");
  }

  return task;
};

export const TaskServices = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
