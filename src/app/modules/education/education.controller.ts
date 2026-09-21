import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { EducationServices } from "./education.service";

const createEducation = catchAsync(async (req, res) => {
  const education = await EducationServices.createEducation(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Education created successfully",
    data: education,
  });
});

const getAllEducation = catchAsync(async (req, res) => {
  const educationList = await EducationServices.getAllEducation();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Education retrieved successfully",
    data: educationList,
  });
});

const getDeletedEducation = catchAsync(async (req, res) => {
  const deletedList = await EducationServices.getDeletedEducation();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Deleted education retrieved successfully",
    data: deletedList,
  });
});

const getEducationById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const education = await EducationServices.getEducationById(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Education retrieved successfully",
    data: education,
  });
});

const updateEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const education = await EducationServices.updateEducation(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Education updated successfully",
    data: education,
  });
});

const deleteEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const education = await EducationServices.deleteEducation(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Education deleted successfully",
    data: education,
  });
});

const restoreEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const education = await EducationServices.restoreEducation(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Education restored successfully",
    data: education,
  });
});

const permanentDeleteEducation = catchAsync(async (req, res) => {
  const { id } = req.params;
  const education = await EducationServices.permanentDeleteEducation(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Education permanently deleted successfully",
    data: education,
  });
});

export const EducationControllers = {
  createEducation,
  getAllEducation,
  getDeletedEducation,
  getEducationById,
  updateEducation,
  deleteEducation,
  restoreEducation,
  permanentDeleteEducation,
};
