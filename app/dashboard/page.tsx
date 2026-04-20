"use client";
import { useAuth } from "@/features/auth/login/hooks/use-auth";

export default function Home() {
  const { isChecking } = useAuth();
  if (isChecking) return null; 

  return (
    <div className="bg-[#EDEDED] min-h-screen">
      <div className="px-12 pt-8">
        <h1 className="text-2xl font-semibold text-[#2F53EB] mb-8">
          Ruangan
        </h1>
      </div>
    </div>
  );
}