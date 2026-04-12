"use client";

import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { loginService } from "../services/login.service";
import { authService } from "../services/auth.service";
import { useRouter } from "next/navigation";

const schema = z.object({
    email: z.string().email("Email tidak valid"),
    password: z.string().min(1, "Password wajib diisi"),
});

type LoginDto = z.infer<typeof schema>;

export const useLogin = () => {
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState<Partial<Record<keyof LoginDto, string>>>({});
    const router = useRouter();

    const login = async (data: LoginDto) => {
        setErrors({});

        const result = schema.safeParse(data);
        if (!result.success) {
            const fieldErrors: typeof errors = {};
            result.error.issues.forEach((err) => {
                const field = err.path[0] as keyof LoginDto;
                fieldErrors[field] = err.message;
            });
            setErrors(fieldErrors);
            toast.error("Periksa kembali form");
            return;
        }

        try {
            setLoading(true);
            const res = await loginService.login(result.data);
            authService.setToken(res.accessToken);
            toast.success("Login berhasil");
            router.push("/dashboard");
        } catch (err: any) {
        toast.error(
            err?.response?.data?.message || "Login gagal"
        );
        } finally {
        setLoading(false);
        }
    };

    return { login, loading, errors };
};