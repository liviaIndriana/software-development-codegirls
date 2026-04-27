
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import clsx from "clsx"
import { Menu, X } from "lucide-react"

const menus = [
    { name: "Home", href: "/dashboard/admin" },
    { name: "History", href: "/dashboard/admin/history" },
    { name: "Ruangan", href: "/dashboard/admin/ruangan" },
    { name: "Jadwal", href: "/dashboard/admin/jadwal" },
    { name: "Manajemen User", href: "/dashboard/admin/manajemen-user" },
]

export default function Navbar() {
    const pathname = usePathname()
    const [open, setOpen] = useState(false)

    return (
        <div className="border-b bg-white">
        
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-4 flex items-center justify-between">

            {/* LOGO */}
            <h1 className="text-lg sm:text-xl font-semibold text-[#30418F]">
            SiRuka
            </h1>

            {/* DESKTOP */}
            <div className="hidden md:flex gap-8">
            {menus.map((menu) => {
                const isActive = pathname === menu.href

                return (
                <Link
                    key={menu.href}
                    href={menu.href}
                    className={clsx(
                    "text-base lg:text-lg font-semibold transition-colors duration-200",
                    isActive
                        ? "text-[#F4721E]"
                        : "text-[#30418F] hover:text-[#F4721E]"
                    )}
                >
                    {menu.name}
                </Link>
                )
            })}
            </div>

            {/* MOBILE BUTTON */}
            <button
            className="md:hidden text-[#30418F]"
            onClick={() => setOpen(!open)}
            >
            {open ? <X size={26} /> : <Menu size={26} />}
            </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
            <div className="md:hidden max-w-[1400px] mx-auto px-6 lg:px-12 pb-4 space-y-3">
            {menus.map((menu) => {
                const isActive = pathname === menu.href

                return (
                <Link
                    key={menu.href}
                    href={menu.href}
                    onClick={() => setOpen(false)}
                    className={clsx(
                    "block text-base font-semibold px-3 py-2 rounded-lg transition",
                    isActive
                        ? "bg-[#F4721E]/10 text-[#F4721E]"
                        : "text-[#30418F] hover:bg-gray-100"
                    )}
                >
                    {menu.name}
                </Link>
                )
            })}
            </div>
        )}
        </div>
    )
}