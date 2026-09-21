import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ClientServices } from "./client.service";

const createClient = catchAsync(async (req, res) => {
  const client = await ClientServices.createClient(req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.CREATED,
    message: "Client created successfully",
    data: client,
  });
});

const getAllClients = catchAsync(async (req, res) => {
  const clients = await ClientServices.getAllClients();

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Clients retrieved successfully",
    data: clients,
  });
});

const getClientById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const client = await ClientServices.getClientById(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Client retrieved successfully",
    data: client,
  });
});

const updateClient = catchAsync(async (req, res) => {
  const { id } = req.params;
  const client = await ClientServices.updateClient(id, req.body);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Client updated successfully",
    data: client,
  });
});

const deleteClient = catchAsync(async (req, res) => {
  const { id } = req.params;
  const client = await ClientServices.deleteClient(id);

  sendResponse(res, {
    success: true,
    statusCode: httpStatus.OK,
    message: "Client deleted successfully",
    data: client,
  });
});

export const ClientControllers = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
};
