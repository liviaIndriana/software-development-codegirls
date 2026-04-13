"use client";

import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { registerService } from "../services/Register.service"; 


const schema = z.object({
    username: z.string().min(1, "Username wajib diisi"),
    email: z.string().email("Email tidak valid"),
    kelas: z.string().min(1, "Kelas wajib diisi"),
    npm: z.string().min(1, "NPM wajib diisi"),
    password: z.string().min(6, "Minimal 6 karakter"),
    role: z.enum(["mahasiswa", "dosen"], {
        message: "Role tidak valid",
    }),
    });


    type RegisterDto = z.infer<typeof schema>;

    export const useRegister = () => {
    const [loading, setLoading] = useState(false);

    const [errors, setErrors] = useState<
        Partial<Record<keyof RegisterDto, string>>
    >({});

    const router = useRouter();

    const register = async (data: RegisterDto) => {
        setErrors({});

        const result = schema.safeParse(data);

        if (!result.success) {
        const fieldErrors: Partial<Record<keyof RegisterDto, string>> = {};

        result.error.issues.forEach((err) => {
            const field = err.path[0] as keyof RegisterDto;
            if (!fieldErrors[field]) {
            fieldErrors[field] = err.message;
            }
        });

        setErrors(fieldErrors);
        toast.error("Periksa kembali form");
        return;
        }

        try {
        setLoading(true);

        await registerService.register(result.data);

        toast.success("Registrasi berhasil 🎉");
        router.push("/login");
        } catch (err: any) {
        toast.error(
            err?.response?.data?.message || "Registrasi gagal"
        );
        } finally {
        setLoading(false);
        }
    };

    return {
        register,
        loading,
        errors,
    };
};