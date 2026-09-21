import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { IEducation } from "./education.interface";
import { Education } from "./education.model";

const createEducation = async (payload: Partial<IEducation>) => {
  const education = await Education.create(payload);
  return education;
};

const getAllEducation = async () => {
  const educationList = await Education.find({ isDeleted: false }).sort({
    order: 1,
    startDate: -1,
    createdAt: -1,
  });
  return educationList;
};

const getDeletedEducation = async () => {
  const deletedList = await Education.find({ isDeleted: true }).sort({
    updatedAt: -1,
  });
  return deletedList;
};

const getEducationById = async (id: string) => {
  const education = await Education.findById(id);

  if (!education || education.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Education entry not found");
  }

  return education;
};

const updateEducation = async (id: string, payload: Partial<IEducation>) => {
  const education = await Education.findByIdAndUpdate(id, payload, {
    new: true,
  });

  if (!education || education.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Education entry not found");
  }

  return education;
};

const deleteEducation = async (id: string) => {
  const education = await Education.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  if (!education) {
    throw new AppError(httpStatus.NOT_FOUND, "Education entry not found");
  }

  return education;
};

const restoreEducation = async (id: string) => {
  const education = await Education.findByIdAndUpdate(
    id,
    { isDeleted: false },
    { new: true }
  );

  if (!education) {
    throw new AppError(httpStatus.NOT_FOUND, "Deleted education entry not found");
  }

  return education;
};

const permanentDeleteEducation = async (id: string) => {
  const education = await Education.findByIdAndDelete(id);

  if (!education) {
    throw new AppError(httpStatus.NOT_FOUND, "Education entry not found");
  }

  return education;
};

export const EducationServices = {
  createEducation,
  getAllEducation,
  getDeletedEducation,
  getEducationById,
  updateEducation,
  deleteEducation,
  restoreEducation,
  permanentDeleteEducation,
};
