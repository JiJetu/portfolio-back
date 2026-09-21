import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { IClient } from "./client.interface";
import { Client } from "./client.model";

const createClient = async (payload: Partial<IClient>) => {
  const client = await Client.create(payload);
  return client;
};

const getAllClients = async () => {
  const clients = await Client.find({ isDeleted: false }).sort({ createdAt: -1 });
  return clients;
};

const getClientById = async (id: string) => {
  const client = await Client.findById(id);
  if (!client || client.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Client not found");
  }
  return client;
};

const updateClient = async (id: string, payload: Partial<IClient>) => {
  const client = await Client.findByIdAndUpdate(id, payload, { new: true });
  if (!client || client.isDeleted) {
    throw new AppError(httpStatus.NOT_FOUND, "Client not found");
  }
  return client;
};

const deleteClient = async (id: string) => {
  const client = await Client.findByIdAndUpdate(
    id,
    { isDeleted: true },
    { new: true }
  );
  if (!client) {
    throw new AppError(httpStatus.NOT_FOUND, "Client not found");
  }
  return client;
};

export const ClientServices = {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
};
