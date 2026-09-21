import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { CompanyProjectServices } from "./companyProject.services";

const createCompanyProject = catchAsync(async (req, res) => {
  const project = await CompanyProjectServices.createCompanyProject(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Company project created successfully",
    data: project,
  });
});

const getAllCompanyProjects = catchAsync(async (req, res) => {
  const projects = await CompanyProjectServices.getAllCompanyProjects();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Company projects retrieved successfully",
    data: projects,
  });
});

const getDeletedCompanyProjects = catchAsync(async (req, res) => {
  const projects = await CompanyProjectServices.getDeletedCompanyProjects();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Deleted company projects retrieved successfully",
    data: projects,
  });
});

const getCompanyProjectById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const project = await CompanyProjectServices.getCompanyProjectById(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Company project retrieved successfully",
    data: project,
  });
});

const updateCompanyProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const project = await CompanyProjectServices.updateCompanyProject(
    id,
    req.body
  );

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Company project updated successfully",
    data: project,
  });
});

const deleteCompanyProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const project = await CompanyProjectServices.deleteCompanyProject(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Company project deleted successfully",
    data: project,
  });
});

const restoreCompanyProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const project = await CompanyProjectServices.restoreCompanyProject(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Company project restored successfully",
    data: project,
  });
});

const permanentDeleteCompanyProject = catchAsync(async (req, res) => {
  const { id } = req.params;
  const project =
    await CompanyProjectServices.permanentDeleteCompanyProject(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Company project permanently deleted successfully",
    data: project,
  });
});

export const CompanyProjectControllers = {
  createCompanyProject,
  getAllCompanyProjects,
  getDeletedCompanyProjects,
  getCompanyProjectById,
  updateCompanyProject,
  deleteCompanyProject,
  restoreCompanyProject,
  permanentDeleteCompanyProject,
};
