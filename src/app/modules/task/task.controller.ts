import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { TaskServices } from "./task.service";

const createTask = catchAsync(async (req, res) => {
  const task = await TaskServices.createTask(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Task created successfully",
    data: task,
  });
});

const getAllTasks = catchAsync(async (req, res) => {
  const tasks = await TaskServices.getAllTasks(req.query);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Tasks retrieved successfully",
    data: tasks,
  });
});

const getTaskById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const task = await TaskServices.getTaskById(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Task retrieved successfully",
    data: task,
  });
});

const updateTask = catchAsync(async (req, res) => {
  const { id } = req.params;
  const task = await TaskServices.updateTask(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Task updated successfully",
    data: task,
  });
});

const deleteTask = catchAsync(async (req, res) => {
  const { id } = req.params;
  const task = await TaskServices.deleteTask(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Task deleted successfully",
    data: task,
  });
});

export const TaskControllers = {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
};
