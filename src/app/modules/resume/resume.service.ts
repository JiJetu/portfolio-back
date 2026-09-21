import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { IResume } from "./resume.interface";
import { Resume } from "./resume.model";

const createResume = async (payload: Partial<IResume>) => {
  // If new resume is marked active (or first resume), deactivate existing ones
  if (payload.isActive !== false) {
    await Resume.updateMany({ isDeleted: false }, { isActive: false });
    payload.isActive = true;
  }

  const resume = await Resume.create(payload);
  return resume;
};

const getAllResumes = async () => {
  const resumes = await Resume.find({ isDeleted: false }).sort({
    isActive: -1,
    createdAt: -1,
  });
  return resumes;
};

const getActiveResume = async () => {
  // Try to find the one marked active
  let resume = await Resume.findOne({ isActive: true, isDeleted: false });

  // If none explicitly marked active, grab the latest non-deleted
  if (!resume) {
    resume = await Resume.findOne({ isDeleted: false }).sort({ createdAt: -1 });
  }

  return resume;
};

const getDeletedResumes = async () => {
  const resumes = await Resume.find({ isDeleted: true }).sort({ updatedAt: -1 });
  return resumes;
};

const getResumeById = async (id: string) => {
  const resume = await Resume.findById(id);

  if (!resume || resume.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Resume not found");
  }

  return resume;
};

const updateResume = async (id: string, payload: Partial<IResume>) => {
  if (payload.isActive) {
    // Deactivate all others first
    await Resume.updateMany({ _id: { $ne: id }, isDeleted: false }, { isActive: false });
  }

  const resume = await Resume.findByIdAndUpdate(id, payload, { new: true });

  if (!resume || resume.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Resume not found");
  }

  return resume;
};

const setActiveResume = async (id: string) => {
  const target = await Resume.findById(id);
  if (!target || target.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Resume not found");
  }

  // Deactivate all others
  await Resume.updateMany({ isDeleted: false }, { isActive: false });

  target.isActive = true;
  await target.save();

  return target;
};

const deleteResume = async (id: string) => {
  const target = await Resume.findById(id);
  if (!target) {
    throw new AppError(httpStatus.NOT_FOUND, "Resume not found");
  }

  const wasActive = target.isActive;
  target.isDeleted = true;
  target.isActive = false;
  await target.save();

  // If the deleted resume was active, activate the newest remaining non-deleted resume if any
  if (wasActive) {
    const nextActive = await Resume.findOne({ isDeleted: false }).sort({ createdAt: -1 });
    if (nextActive) {
      nextActive.isActive = true;
      await nextActive.save();
    }
  }

  return target;
};

const restoreResume = async (id: string) => {
  const target = await Resume.findById(id);
  if (!target) {
    throw new AppError(httpStatus.NOT_FOUND, "Deleted resume not found");
  }

  target.isDeleted = false;
  await target.save();

  return target;
};

const permanentDeleteResume = async (id: string) => {
  const target = await Resume.findByIdAndDelete(id);
  if (!target) {
    throw new AppError(httpStatus.NOT_FOUND, "Resume not found");
  }

  return target;
};

export const ResumeServices = {
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
