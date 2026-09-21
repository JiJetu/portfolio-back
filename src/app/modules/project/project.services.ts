import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { IProject } from "./project.interface";
import { Projects } from "./project.model";
import { CompanyProjects } from "../companyProject/companyProject.model";

const createProject = async (payload: IProject) => {
  const projectExists = await Projects.findOne({
    title: { $regex: new RegExp(`^${payload.title.trim()}$`, "i") },
    isDeleted: false,
  });

  if (projectExists) {
    throw new AppError(
      httpStatus.CONFLICT,
      "A project with this title already exists"
    );
  }

  const project = await Projects.create(payload);
  return project;
};

const getAllProjects = async () => {
  const projects = await Projects.find({ isDeleted: false });
  return projects;
};

const getDeletedProjects = async () => {
  const projects = await Projects.find({ isDeleted: true });
  return projects;
};

const getCombinedStats = async () => {
  const [personalProjects, companyProjects] = await Promise.all([
    Projects.countDocuments({ isDeleted: false }),
    CompanyProjects.countDocuments({ isDeleted: false }),
  ]);

  return {
    personalProjects,
    companyProjects,
    totalCompletedProjects: personalProjects + companyProjects,
  };
};

const getProjectById = async (projectId: string) => {
  const project = await Projects.findById(projectId);

  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }

  return project;
};

const updateProject = async (id: string, payload: Partial<IProject>) => {
  const project = await Projects.findByIdAndUpdate(id, payload, { new: true });

  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }

  return project;
};

const deleteProject = async (id: string) => {
  const project = await Projects.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { isDeleted: true },
    { new: true }
  );

  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }

  return project;
};

const restoreProject = async (id: string) => {
  const project = await Projects.findOneAndUpdate(
    { _id: id, isDeleted: true },
    { isDeleted: false },
    { new: true }
  );

  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, "Deleted project not found");
  }

  return project;
};

const permanentDeleteProject = async (id: string) => {
  const project = await Projects.findByIdAndDelete(id);

  if (!project) {
    throw new AppError(httpStatus.NOT_FOUND, "Project not found");
  }

  return project;
};

export const ProjectServices = {
  createProject,
  getAllProjects,
  getDeletedProjects,
  getCombinedStats,
  getProjectById,
  updateProject,
  deleteProject,
  restoreProject,
  permanentDeleteProject,
};


