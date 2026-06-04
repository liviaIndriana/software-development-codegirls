"use client"
import { useAuth } from "@/features/auth/login/hooks/use-auth"
import Image from "next/image"

export default function HomePage() {
    const { isChecking } = useAuth()
    if (isChecking) return null
    return (
        <div className="h-[calc(100vh-64px)] relative overflow-hidden">
        <div className="absolute inset-0 md:static md:w-[65%] md:h-full">
            <Image
            src="/kampus3.png"
            alt="Kampus"
            fill
            priority
            className="object-cover"
            />
            <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#1a2660]/90 via-[#1a2660]/30 to-transparent" />
        </div>

        {/* DESKTOP */}
        <div className="hidden md:flex absolute right-0 top-0 h-full w-[35%] bg-[#F7F8FC] items-center pl-20">
            <div>
            <h1 className="text-[72px] font-extrabold text-[#2F3E8F] leading-tight">
                Hello!
                <br />
                Welcome
                <br />
                Back!
            </h1>
            <p className="mt-10 text-[40px] text-[#2F3E8F] [font-family:var(--font-inria)]">
                MinRuka
            </p>
            </div>
        </div>

        {/* MOBILE */}
        <div className="
            md:hidden
            absolute
            bottom-0
            left-0
            w-full
            px-7
            pt-8
            pb-10
        ">
            <h1 className="text-[38px] font-extrabold text-white leading-[1.1] tracking-tight drop-shadow-md">
            Hello!<br />
            Welcome<br />
            Back!
            </h1>

            <div className="mt-4 flex items-center gap-3">
            <div className="h-px w-8 bg-white/50" />
            <p className="text-[20px] text-white/80 [font-family:var(--font-inria)]">
                MinRuka
            </p>
            </div>

        </div>

        </div>
    )
}