"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { useRegister } from "../hooks/useRegister";

export default function RegisterForm() {
    const { form, loading, handleChange, handleRegister } = useRegister();

    return (
        <main className="min-h-screen bg-[#F5F6FA] relative">
        {/* Logo */}
        <h1 className="text-[28px] absolute top-10 left-20 text-[#2F53EB] font-semibold">
            SiRuka
        </h1>

        {/* Content */}
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-sm flex flex-col items-center">

            {/* Title */}
            <h2 className="text-[28px] font-bold text-black">Sign Up</h2>

            <p className="text-[12px] text-gray-600 mt-1 mb-6 text-center">
                Masukkan kredensial untuk daftar akun
            </p>

            <div className="w-full space-y-4">

                {/* Username */}
                <div className="space-y-1">
                <label className="text-[13px] text-gray-700">Username</label>
                <Input
                    value={form.username}
                    onChange={(e) => handleChange("username", e.target.value)}
                    className="h-9 text-sm border-gray-300 focus-visible:ring-1 focus-visible:ring-[#2F53EB]"
                />
                </div>

                {/* Email */}
                <div className="space-y-1">
                <label className="text-[13px] text-gray-700">Email</label>
                <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className="h-9 text-sm border-gray-300 focus-visible:ring-1 focus-visible:ring-[#2F53EB]"
                />
                </div>

                {/* NPM */}
                <div className="space-y-1">
                <label className="text-[13px] text-gray-700">NPM</label>
                <Input
                    value={form.npm}
                    onChange={(e) => handleChange("npm", e.target.value)}
                    className="h-9 text-sm border-gray-300 focus-visible:ring-1 focus-visible:ring-[#2F53EB]"
                />
                </div>
                
                {/* Kelas */}
                <div className="space-y-1">
                <label className="text-[13px] text-gray-700">Kelas</label>
                <Input
                    value={form.kelas}
                    onChange={(e) => handleChange("kelas", e.target.value)}
                    className="h-9 text-sm border-gray-300 focus-visible:ring-1 focus-visible:ring-[#2F53EB]"
                />
                </div>

                {/* Password + Role */}
                <div className="flex flex-col sm:flex-row gap-4">

                {/* Password */}
                <div className="space-y-1 w-full sm:w-1/2">
                    <label className="text-[13px] text-gray-700">Password</label>
                    <Input
                    type="password"
                    value={form.password}
                    onChange={(e) => handleChange("password", e.target.value)}
                    className="h-9 text-sm border-gray-300 focus-visible:ring-1 focus-visible:ring-[#2F53EB]"
                    />
                </div>

                {/* Role */}
                <div className="space-y-1 w-full sm:w-1/2">
                    <label className="text-[13px] text-gray-700">Role</label>

                    <Select
                    value={form.role}
                    onValueChange={(val) => handleChange("role", val)}
                    >
                    <SelectTrigger className="h-9 text-sm border-gray-300 focus-visible:ring-1 focus-visible:ring-[#2F53EB]">
                        <SelectValue placeholder="Pilih role" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="dosen">Dosen</SelectItem>
                        <SelectItem value="mahasiswa">Mahasiswa</SelectItem>
                    </SelectContent>
                    </Select>
                </div>
                </div>


                {/* Button */}
                <Button
                onClick={handleRegister}
                disabled={loading}
                className="w-full h-9 mt-2 bg-[#2F53EB] text-white text-sm"
                >
                {loading ? "Loading..." : "Sign Up"}
                </Button>
            </div>

            {/* Footer */}
            <p className="text-[12px] text-gray-600 mt-6">
                Sudah punya akun?{" "}
                <Link
                    href="/login"
                    className="text-[#2F53EB] hover:underline cursor-pointer">
                    Sign In
                </Link>
            </p>

            </div>
        </div>
        </main>
    );
}