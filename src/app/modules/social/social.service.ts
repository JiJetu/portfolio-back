import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { ISocial } from "./social.interface";
import { Social } from "./social.model";

const createSocial = async (payload: Partial<ISocial>) => {
  const social = await Social.create(payload);
  return social;
};

const getAllSocials = async (publicOnly: boolean = false) => {
  const filter: Record<string, unknown> = { isDeleted: false };
  if (publicOnly) {
    filter.isActive = true;
  }
  const socials = await Social.find(filter).sort({ order: 1, createdAt: -1 });
  return socials;
};

const getSocialById = async (id: string) => {
  const social = await Social.findById(id);

  if (!social || social.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Social link not found");
  }

  return social;
};

const updateSocial = async (id: string, payload: Partial<ISocial>) => {
  const social = await Social.findByIdAndUpdate(id, payload, { new: true });

  if (!social || social.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Social link not found");
  }

  return social;
};

const deleteSocial = async (id: string) => {
  const social = await Social.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );

  if (!social) {
    throw new AppError(httpStatus.NOT_FOUND, "Social link not found");
  }

  return social;
};

export const SocialServices = {
  createSocial,
  getAllSocials,
  getSocialById,
  updateSocial,
  deleteSocial,
};
