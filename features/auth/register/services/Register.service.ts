import { RegisterDto } from "../types/register.type";
import { api } from "@/lib/axios";


export const authService = {
  register: async (data: RegisterDto) => {
    const res = await api.post("/register", data);
    return res.data;
  },
};
