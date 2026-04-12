"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useLogin } from "../hooks/useLogin";
import Link from "next/link";

export default function LoginForm() {
    const { login, loading, errors } = useLogin();
    const [form, setForm] = useState({email: "",password: "",});
    {/*Update Input*/}
    const handleChange = (key: string, value: string) => 
        {setForm((prev) => ({...prev,[key]: value,}));
    };

    {/*Handle Submit*/}
    const handleSubmit = async () => {
        await login(form);
    };

    {/* Styling*/}
    const inputClass = (field: "email" | "password") =>
        `h-9 text-sm border transition-all ${
        errors[field]
            ? "border-red-500 focus-visible:ring-red-500"
            : "border-gray-300"
        } focus-visible:ring-1 focus-visible:ring-[#2F53EB]`;

    return (
        <main className="min-h-screen bg-[#F5F6FA] relative">
        
        {/* Logo */}
        <h1 className="text-[28px] absolute top-10 left-20 text-[#2F53EB] font-semibold">
            SiRuka
        </h1>

        {/* Center Content */}
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-xs flex flex-col items-center">

            {/* Title */}
            <h2 className="text-[28px] font-bold text-black">
                Sign In
            </h2>

            <p className="text-[12px] text-gray-600 mt-1 mb-6 text-center">
                Masukkan kredensial untuk mengakses sistem
            </p>

            {/* Form */}
            <div className="w-full space-y-4">

                {/* Email */}
                <div className="space-y-1">
                <label className="text-[13px] text-gray-700">
                    Email
                </label>
                <Input
                    placeholder="Masukkan email"
                    value={form.email}
                    onChange={(e) =>
                    handleChange("email", e.target.value)
                    }
                    className={inputClass("email")}
                />
                {errors.email && (
                    <p className="text-xs text-red-500">
                    {errors.email}
                    </p>
                )}
                </div>

                {/* Password */}
                <div className="space-y-1">
                <label className="text-[13px] text-gray-700">
                    Password
                </label>
                <Input
                    type="password"
                    placeholder="Masukkan password"
                    value={form.password}
                    onChange={(e) =>
                    handleChange("password", e.target.value)
                    }
                    className={inputClass("password")}
                />
                {errors.password && (
                    <p className="text-xs text-red-500">
                    {errors.password}
                    </p>
                )}
                </div>

                {/* Button */}
                <Button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full h-9 mt-2 bg-[#2F53EB] hover:bg-[#2443c7] text-white text-sm"
                >
                {loading ? "Loading..." : "Sign In"}
                </Button>
            </div>

            {/* Footer */}
            <p className="text-[12px] text-gray-600 mt-6">
                Belum punya akun?{" "}
                <Link
                href="/register"
                className="text-[#2F53EB] hover:underline"
                >
                Sign Up
                </Link>
            </p>

            </div>
        </div>
        </main>
    );
}



