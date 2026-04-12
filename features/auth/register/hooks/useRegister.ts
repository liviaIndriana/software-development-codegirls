"use client";

import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { authService } from "../services/Register.service";


const registerSchema = z.object({
    username: z.string().min(1, "Username wajib diisi"),
    email: z.string().email("Email tidak valid"),
    npm: z.string().min(1, "NPM wajib diisi"),
    password: z.string().min(6, "Password minimal 6 karakter"),
    role: z.enum(["dosen", "mahasiswa"], {
        message: "Role wajib dipilih",
    }),
    kelas: z.string().min(1, "Kelas wajib diisi"),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

export function useRegister() {
    const [form, setForm] = useState<RegisterFormData>({
        username: "",
        email: "",
        npm: "",
        password: "",
        role: "mahasiswa",
        kelas: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (field: keyof RegisterFormData, value: string) => {
        setForm((prev) => ({
        ...prev,
        [field]: value,
        }));
    };

    const handleRegister = async () => {
        // validasi dengan ZOD
        const result = registerSchema.safeParse(form);

        if (!result.success) {
        const message = result.error.issues[0].message;
        toast.error(message);
        return;
        }

        try {
            setLoading(true);

            const res = await authService.register(result.data);

            toast.success(res?.message || "Register berhasil");

            // reset form
            setForm({
                username: "",
                email: "",
                npm: "",
                password: "",
                role: "mahasiswa",
                kelas: "",
            });
        } catch (err: any) {
        toast.error(
            err?.response?.data?.message || "Terjadi kesalahan server"
        );
        } finally {
        setLoading(false);
        }
    };

    return {
        form,
        loading,
        handleChange,
        handleRegister,
    };
}