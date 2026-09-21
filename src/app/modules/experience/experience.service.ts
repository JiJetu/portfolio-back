import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { IExperience } from "./experience.interface";
import { Experience } from "./experience.model";

const createExperience = async (payload: Partial<IExperience>) => {
  const experience = await Experience.create(payload);
  return experience;
};

const getAllExperience = async () => {
  const experienceList = await Experience.find({ isDeleted: false }).sort({
    order: 1,
    startDate: -1,
    createdAt: -1,
  });
  return experienceList;
};

const getDeletedExperience = async () => {
  const deletedList = await Experience.find({ isDeleted: true }).sort({
    updatedAt: -1,
  });
  return deletedList;
};

const getExperienceById = async (id: string) => {
  const experience = await Experience.findById(id);

  if (!experience || experience.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Experience entry not found");
  }

  return experience;
};

const updateExperience = async (id: string, payload: Partial<IExperience>) => {
  const experience = await Experience.findByIdAndUpdate(id, payload, {
    new: true,
  });

  if (!experience || experience.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Experience entry not found");
  }

  return experience;
};

const deleteExperience = async (id: string) => {
  const experience = await Experience.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  if (!experience) {
    throw new AppError(httpStatus.NOT_FOUND, "Experience entry not found");
  }

  return experience;
};

const restoreExperience = async (id: string) => {
  const experience = await Experience.findByIdAndUpdate(
    id,
    { isDeleted: false },
    { new: true }
  );

  if (!experience) {
    throw new AppError(httpStatus.NOT_FOUND, "Deleted experience entry not found");
  }

  return experience;
};

const permanentDeleteExperience = async (id: string) => {
  const experience = await Experience.findByIdAndDelete(id);

  if (!experience) {
    throw new AppError(httpStatus.NOT_FOUND, "Experience entry not found");
  }

  return experience;
};

export const ExperienceServices = {
  createExperience,
  getAllExperience,
  getDeletedExperience,
  getExperienceById,
  updateExperience,
  deleteExperience,
  restoreExperience,
  permanentDeleteExperience,
};
