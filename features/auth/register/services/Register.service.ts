import { api } from "@/lib/axios";
import type { RegisterDto, RegisterResponse } from "../types/register.type";

export const registerService = {
  register: async (data: RegisterDto): Promise<RegisterResponse> => {
    const res = await api.post("/api/register", data);
    return res.data;
  },
};