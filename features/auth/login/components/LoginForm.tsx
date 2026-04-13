"use client";

import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function LoginPage() {
    const { login, loading, errors } = useLogin();

    const [form, setForm] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        login(form);
    };

    return (
        <div className="flex min-h-screen w-full flex-col md:flex-row font-sans overflow-x-hidden bg-white">
        
        {/*SISI KIRI*/}
        <div className="relative flex w-full flex-col justify-start p-8 sm:p-12 md:w-[60%] lg:p-24 pt-12 md:pt-16 lg:pt-20">
            
            {/* Logo SiRuka */}
            <div className="text-xl sm:text-2xl font-bold mb-12 md:mb-20 lg:mb-32" style={{ color: "#30418F" }}>
            SiRuka
            </div>

            <div className="z-10">
            <h1 
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-[900] leading-[1.0] tracking-tighter" 
                style={{ color: "#30418F" }}
            >
                Hello!<br />
                Selamat<br />
                Datang!
            </h1>
            </div>
        </div>

        {/* SISI KANAN*/}
        <div 
            className="flex w-full flex-1 items-center justify-center p-6 sm:p-10 md:w-[40%] md:min-h-screen"
            style={{ backgroundColor: "#30418F" }}
        >
            <div className="w-full max-w-[320px] sm:max-w-[380px] space-y-8 sm:space-y-10 text-center text-white py-10 md:py-0">
            
            {/* Header Login */}
            <div className="space-y-3">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">Login</h2>
                <p className="text-xs sm:text-sm font-light opacity-80 leading-relaxed px-4 sm:px-0">
                Masukkan kredensial Anda untuk mengakses dashboard
                </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 text-left">
                
                {/* Username */}
                <div className="space-y-2">
                <Label htmlFor="username" className="text-base sm:text-lg font-medium ml-1">
                    Username
                </Label>
                <Input
                    id="username"
                    type="text"
                    value={form.username}
                    onChange={(e) =>
                    setForm({ ...form, username: e.target.value })
                    }
                    className="h-12 sm:h-14 w-full bg-white text-black focus-visible:ring-0 rounded-xl sm:rounded-2xl border-[3px]"
                    style={{ borderColor: "#F4B539" }}
                />
                {errors.username && (
                    <p className="text-xs text-red-300 ml-1">{errors.username}</p>
                )}
                </div>

                {/* Password */}
                <div className="space-y-2">
                <Label htmlFor="password" className="text-base sm:text-lg font-medium ml-1">
                    Password
                </Label>
                <Input
                    id="password"
                    type="password"
                    value={form.password}
                    onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                    }
                    className="h-12 sm:h-14 w-full bg-white text-black focus-visible:ring-0 rounded-xl sm:rounded-2xl border-[3px]"
                    style={{ borderColor: "#F4B539" }}
                />
                {errors.password && (
                    <p className="text-xs text-red-300 ml-1">{errors.password}</p>
                )}
                </div>

                {/* Button */}
                <div className="flex justify-center pt-4">
                <Button 
                    type="submit"
                    disabled={loading}
                    className="h-12 w-48 rounded-2xl text-lg font-bold shadow-lg transition-transform hover:scale-105 active:scale-95"
                    style={{ backgroundColor: "#F4721E", color: "white" }}
                >
                    {loading ? "Loading..." : "Login"}
                </Button>
                </div>
            </form>

            {/* Footer */}
            <p className="text-xs sm:text-sm font-light">
                Belum punya akun?{" "}
                <span className="font-bold cursor-pointer hover:underline">
                <Link href="/register">Sign Up</Link>
                </span>
            </p>
            </div>
        </div>
        </div>
    );
}