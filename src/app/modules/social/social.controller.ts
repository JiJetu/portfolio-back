import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { SocialServices } from "./social.service";

const createSocial = catchAsync(async (req, res) => {
  const social = await SocialServices.createSocial(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Social link created successfully",
    data: social,
  });
});

const getAllSocials = catchAsync(async (req, res) => {
  // If request has query public=true, only active links are returned
  const publicOnly = req.query.public === "true";
  const socials = await SocialServices.getAllSocials(publicOnly);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Social links retrieved successfully",
    data: socials,
  });
});

const getSocialById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const social = await SocialServices.getSocialById(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Social link retrieved successfully",
    data: social,
  });
});

const updateSocial = catchAsync(async (req, res) => {
  const { id } = req.params;
  const social = await SocialServices.updateSocial(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Social link updated successfully",
    data: social,
  });
});

const deleteSocial = catchAsync(async (req, res) => {
  const { id } = req.params;
  const social = await SocialServices.deleteSocial(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Social link deleted successfully",
    data: social,
  });
});

export const SocialControllers = {
  createSocial,
  getAllSocials,
  getSocialById,
  updateSocial,
  deleteSocial,
};
