import axios from "axios";

// Base URL from environment variables (Vite)
const BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:4000/api";

// Axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// -------------------- Types --------------------

export interface Client {
  id: string;
  companyName: string;
  website?: string;
  logoUrl?: string;
  brandColors?: Record<string, string>;
  modulesEnabled: string[];
  contactName?: string;
  contactNumber?: string;
  address?: string;
  password: string;
  passwordChanged: boolean;
  createdAt: string;
  updatedAt: string;
  blogs?: { id: string; title: string; createdAt: string }[];
  news?: { id: string; title: string; createdAt: string }[];
  images?: { id: string; title: string; createdAt: string }[];
  videos?: { id: string; title: string; createdAt: string }[];
}

// -------------------- API Functions --------------------

// Get all clients
export const getClients = async (): Promise<Client[]> => {
  const response = await api.get("/all-clients");
  return response.data;
};

// Get single client by ID
export const getClientById = async (id: string): Promise<Client> => {
  const response = await api.get(`/all-clients/${id}`);
  return response.data;
};

// Create a new client
export const createClient = async (
  clientData: Partial<Client>
): Promise<Client> => {
  const response = await api.post("/all-clients", clientData);
  return response.data;
};

// Update an existing client
export const updateClient = async (
  id: string,
  clientData: Partial<Client>
): Promise<Client> => {
  const response = await api.put(`/all-clients/${id}`, clientData);
  return response.data;
};

// Delete a client
export const deleteClient = async (id: string): Promise<void> => {
  await api.delete(`/all-clients/${id}`);
};

export default api;
