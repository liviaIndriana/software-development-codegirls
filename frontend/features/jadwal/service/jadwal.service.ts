import { api } from "@/lib/axios";
import type { JadwalDto } from "../types/jadwal.type";

export const jadwalService = {
    create: async (data: JadwalDto) => {
        const res = await api.post("/api/jadwal", data);
        return res.data;
    },
};