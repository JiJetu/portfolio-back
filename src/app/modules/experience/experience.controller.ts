import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ExperienceServices } from "./experience.service";

const createExperience = catchAsync(async (req, res) => {
  const experience = await ExperienceServices.createExperience(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Experience created successfully",
    data: experience,
  });
});

const getAllExperience = catchAsync(async (req, res) => {
  const experienceList = await ExperienceServices.getAllExperience();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experience retrieved successfully",
    data: experienceList,
  });
});

const getDeletedExperience = catchAsync(async (req, res) => {
  const deletedList = await ExperienceServices.getDeletedExperience();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Deleted experience retrieved successfully",
    data: deletedList,
  });
});

const getExperienceById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const experience = await ExperienceServices.getExperienceById(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experience retrieved successfully",
    data: experience,
  });
});

const updateExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const experience = await ExperienceServices.updateExperience(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experience updated successfully",
    data: experience,
  });
});

const deleteExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const experience = await ExperienceServices.deleteExperience(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experience deleted successfully",
    data: experience,
  });
});

const restoreExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const experience = await ExperienceServices.restoreExperience(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experience restored successfully",
    data: experience,
  });
});

const permanentDeleteExperience = catchAsync(async (req, res) => {
  const { id } = req.params;
  const experience = await ExperienceServices.permanentDeleteExperience(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Experience permanently deleted successfully",
    data: experience,
  });
});

export const ExperienceControllers = {
  createExperience,
  getAllExperience,
  getDeletedExperience,
  getExperienceById,
  updateExperience,
  deleteExperience,
  restoreExperience,
  permanentDeleteExperience,
};
