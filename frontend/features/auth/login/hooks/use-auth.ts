"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "../services/auth.service";

// useAuth itu adalah custom hook (ViewModel) yang dipakai untuk 
// melindungi halaman (route protection) 
// dengan cara mengecek apakah user sudah login atau belum.
export const useAuth = () => {
    const router = useRouter();
    //menandakan bahwa proses pengecekan login sedang berlangsung
    const [isChecking, setIsChecking] = useState(true);
    //mengambil token (biasanya dari localStorage / cookie)
    useEffect(() => {
        const token = authService.getToken();
        //❌ Tidak ada token → user belum login → paksa ke /login
        // ✔️ Ada token → user dianggap login → lanju
        if (!token) {
        router.replace("/login");
        } else {
        setIsChecking(false);
        }
    }, [router]);

    return { isChecking };
};