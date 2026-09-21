import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ResumeServices } from "./resume.service";

const createResume = catchAsync(async (req, res) => {
  const resume = await ResumeServices.createResume(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Resume created successfully",
    data: resume,
  });
});

const getAllResumes = catchAsync(async (req, res) => {
  const resumes = await ResumeServices.getAllResumes();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Resumes retrieved successfully",
    data: resumes,
  });
});

const getActiveResume = catchAsync(async (req, res) => {
  const resume = await ResumeServices.getActiveResume();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Active resume retrieved successfully",
    data: resume,
  });
});

const getDeletedResumes = catchAsync(async (req, res) => {
  const resumes = await ResumeServices.getDeletedResumes();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Deleted resumes retrieved successfully",
    data: resumes,
  });
});

const getResumeById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const resume = await ResumeServices.getResumeById(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Resume retrieved successfully",
    data: resume,
  });
});

const updateResume = catchAsync(async (req, res) => {
  const { id } = req.params;
  const resume = await ResumeServices.updateResume(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Resume updated successfully",
    data: resume,
  });
});

const setActiveResume = catchAsync(async (req, res) => {
  const { id } = req.params;
  const resume = await ResumeServices.setActiveResume(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Resume set as active successfully",
    data: resume,
  });
});

const deleteResume = catchAsync(async (req, res) => {
  const { id } = req.params;
  const resume = await ResumeServices.deleteResume(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Resume deleted successfully",
    data: resume,
  });
});

const restoreResume = catchAsync(async (req, res) => {
  const { id } = req.params;
  const resume = await ResumeServices.restoreResume(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Resume restored successfully",
    data: resume,
  });
});

const permanentDeleteResume = catchAsync(async (req, res) => {
  const { id } = req.params;
  const resume = await ResumeServices.permanentDeleteResume(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Resume permanently deleted successfully",
    data: resume,
  });
});

export const ResumeControllers = {
  createResume,
  getAllResumes,
  getActiveResume,
  getDeletedResumes,
  getResumeById,
  updateResume,
  setActiveResume,
  deleteResume,
  restoreResume,
  permanentDeleteResume,
};
