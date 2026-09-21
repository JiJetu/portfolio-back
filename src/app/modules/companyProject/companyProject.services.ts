import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { ICompanyProject } from "./companyProject.interface";
import { CompanyProjects } from "./companyProject.model";

const createCompanyProject = async (payload: ICompanyProject) => {
  const projectExists = await CompanyProjects.findOne({
    title: { $regex: new RegExp(`^${payload.title.trim()}$`, "i") },
    isDeleted: false,
  });

  if (projectExists) {
    throw new AppError(
      httpStatus.CONFLICT,
      "A company project with this title already exists"
    );
  }

  const project = await CompanyProjects.create(payload);
  return project;
};

const getAllCompanyProjects = async () => {
  const projects = await CompanyProjects.find({ isDeleted: false }).sort({
    createdAt: -1,
  });
  return projects;
};

const getDeletedCompanyProjects = async () => {
  const projects = await CompanyProjects.find({ isDeleted: true }).sort({
    updatedAt: -1,
  });
  return projects;
};

const getCompanyProjectById = async (projectId: string) => {
  const project = await CompanyProjects.findById(projectId);

  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, "Company project not found");
  }

  return project;
};

const updateCompanyProject = async (
  id: string,
  payload: Partial<ICompanyProject>
) => {
  const project = await CompanyProjects.findByIdAndUpdate(id, payload, {
    new: true,
  });

  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, "Company project not found");
  }

  return project;
};

const deleteCompanyProject = async (id: string) => {
  const project = await CompanyProjects.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { isDeleted: true },
    { new: true }
  );

  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, "Company project not found");
  }

  return project;
};

const restoreCompanyProject = async (id: string) => {
  const project = await CompanyProjects.findOneAndUpdate(
    { _id: id, isDeleted: true },
    { isDeleted: false },
    { new: true }
  );

  if (!project) {
    throw new AppError(
      httpStatus.NOT_FOUND,
      "Deleted company project not found"
    );
  }

  return project;
};

const permanentDeleteCompanyProject = async (id: string) => {
  const project = await CompanyProjects.findByIdAndDelete(id);

  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, "Company project not found");
  }

  return project;
};

export const CompanyProjectServices = {
  createCompanyProject,
  getAllCompanyProjects,
  getDeletedCompanyProjects,
  getCompanyProjectById,
  updateCompanyProject,
  deleteCompanyProject,
  restoreCompanyProject,
  permanentDeleteCompanyProject,
};
