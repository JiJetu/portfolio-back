import { z } from "zod";

const createClientSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Client name is required" }).min(1),
    email: z.string().email().optional().or(z.literal("")),
    company: z.string().optional().or(z.literal("")),
    phone: z.string().optional().or(z.literal("")),
    address: z.string().optional().or(z.literal("")),
  }),
});

const updateClientSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    email: z.string().email().optional().or(z.literal("")),
    company: z.string().optional().or(z.literal("")),
    phone: z.string().optional().or(z.literal("")),
    address: z.string().optional().or(z.literal("")),
  }),
});

export const ClientValidation = {
  createClientSchema,
  updateClientSchema,
};
