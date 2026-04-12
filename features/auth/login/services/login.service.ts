import { api } from "@/lib/axios";
import type { LoginDto, LoginResponse} from "../types/login.types";

export const loginService = {
  login: async (data: LoginDto): Promise<LoginResponse> => {
    const res = await api.post("/login", data);
    return res.data;
  },
};