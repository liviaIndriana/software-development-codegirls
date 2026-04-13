"use client";

import React, { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import Link from "next/link";

export default function SignUpPage() {
    const { register, loading, errors } = useRegister();

    const [form, setForm] = useState({
        username: "",
        email: "",
        kelas: "",
        npm: "",
        password: "",
        role: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        register(form as any);
    };

    return (
        <div className="flex min-h-screen w-full flex-col md:flex-row font-sans overflow-x-hidden bg-white">
        
        {/* SISI KIRI */}
        <div className="relative flex w-full flex-col justify-start p-8 sm:p-12 md:w-[60%] lg:p-24 pt-12 md:pt-16 lg:pt-20">
            
            {/* Logo */}
            <div className="text-xl sm:text-2xl font-bold mb-10 md:mb-16" style={{ color: "#30418F" }}>
            SiRuka
            </div>
            
            <div className="w-full max-w-2xl mx-auto md:mx-0">
            
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-3" style={{ color: "#30418F" }}>
                Sign Up
                </h1>
                <p className="text-xs sm:text-sm font-light opacity-80 leading-relaxed" style={{ color: "#30418F" }}>
                Masukkan kredensial Anda untuk mengakses dashboard
                </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 text-left">
                
                {/* Username */}
                <div className="space-y-2">
                    <Label className="text-base sm:text-lg font-medium ml-1" style={{ color: "#30418F" }}>
                    Username
                    </Label>
                    <Input
                    value={form.username}
                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                    className="h-12 sm:h-14 bg-white text-black border-[3px] rounded-xl sm:rounded-2xl focus-visible:ring-0"
                    style={{ borderColor: "#F4B539" }}
                    />
                    {errors.username && (
                    <p className="text-xs text-red-500 ml-1">{errors.username}</p>
                    )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                    <Label className="text-base sm:text-lg font-medium ml-1" style={{ color: "#30418F" }}>
                    Email
                    </Label>
                    <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="h-12 sm:h-14 bg-white text-black border-[3px] rounded-xl sm:rounded-2xl focus-visible:ring-0"
                    style={{ borderColor: "#F4B539" }}
                    />
                    {errors.email && (
                    <p className="text-xs text-red-500 ml-1">{errors.email}</p>
                    )}
                </div>

                {/* Kelas */}
                <div className="space-y-2">
                    <Label className="text-base sm:text-lg font-medium ml-1" style={{ color: "#30418F" }}>
                    Kelas
                    </Label>
                    <Input
                    value={form.kelas}
                    onChange={(e) => setForm({ ...form, kelas: e.target.value })}
                    className="h-12 sm:h-14 bg-white text-black border-[3px] rounded-xl sm:rounded-2xl focus-visible:ring-0"
                    style={{ borderColor: "#F4B539" }}
                    />
                    {errors.kelas && (
                    <p className="text-xs text-red-500 ml-1">{errors.kelas}</p>
                    )}
                </div>

                {/* NPM */}
                <div className="space-y-2">
                    <Label className="text-base sm:text-lg font-medium ml-1" style={{ color: "#30418F" }}>
                    NPM
                    </Label>
                    <Input
                    value={form.npm}
                    onChange={(e) => setForm({ ...form, npm: e.target.value })}
                    className="h-12 sm:h-14 bg-white text-black border-[3px] rounded-xl sm:rounded-2xl focus-visible:ring-0"
                    style={{ borderColor: "#F4B539" }}
                    />
                    {errors.npm && (
                    <p className="text-xs text-red-500 ml-1">{errors.npm}</p>
                    )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <Label className="text-base sm:text-lg font-medium ml-1" style={{ color: "#30418F" }}>
                    Password
                    </Label>
                    <Input
                    type="password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    className="h-12 sm:h-14 bg-white text-black border-[3px] rounded-xl sm:rounded-2xl focus-visible:ring-0"
                    style={{ borderColor: "#F4B539" }}
                    />
                    {errors.password && (
                    <p className="text-xs text-red-500 ml-1">{errors.password}</p>
                    )}
                </div>

                {/* Role */}
                <div className="space-y-2">
                    <Label className="text-base sm:text-lg font-medium ml-1" style={{ color: "#30418F" }}>
                    Roles
                    </Label>
                    <Select onValueChange={(value) => setForm({ ...form, role: value })}>
                    <SelectTrigger 
                        className="h-12 sm:h-14 bg-white text-black border-[3px] rounded-xl sm:rounded-2xl focus:ring-0 focus:ring-offset-0"
                        style={{ borderColor: "#F4B539" }}
                    >
                        <SelectValue placeholder="Pilih Role" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-[2px]" style={{ borderColor: "#30418F" }}>
                        <SelectItem value="mahasiswa">Mahasiswa</SelectItem>
                        <SelectItem value="dosen">Dosen</SelectItem>
                    </SelectContent>
                    </Select>
                    {errors.role && (
                    <p className="text-xs text-red-500 ml-1">{errors.role}</p>
                    )}
                </div>
                </div>

                {/* Footer */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-6 gap-6 md:gap-0">
                <p className="text-xs sm:text-sm font-light order-2 md:order-1" style={{ color: "#30418F" }}>
                    Sudah punya akun?{" "}
                    <span className="font-bold cursor-pointer hover:underline">
                    <Link href="/login">Sign In</Link>
                    </span>
                </p>
                
                <Button
                    type="submit"
                    disabled={loading}
                    className="h-11 sm:h-12 w-full md:w-48 rounded-2xl text-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95 order-1 md:order-2"
                    style={{ backgroundColor: "#30418F", color: "white" }}
                >
                    {loading ? "Loading..." : "Daftar"}
                </Button>
                </div>
            </form>
            </div>
        </div>

        {/* SISI KANAN */}
        <div className="hidden md:flex w-full items-center justify-center p-12 md:w-[40%] min-h-screen bg-[#30418F]">
            <div className="text-white text-right w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[900] leading-[1.0] tracking-tighter">
                Hello!<br />
                Selamat<br />
                Datang!
            </h1>
            </div>
        </div>
        </div>
    );
}