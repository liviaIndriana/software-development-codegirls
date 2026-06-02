"use client"

import { useEffect, useState } from "react"
import { toast } from "sonner"


import { UserRuanganTypes } from "../types/UserRuanganType.type"
import { UserRuanganService } from "../services/UserRuanganService.service"

export function useUserRuangan() {
  const [data, setData] = useState<UserRuanganTypes[]>([])
  const [loading, setLoading] = useState(true)

  async function fetchRuangan() {
    try {
      const result = await UserRuanganService()
      setData(result)
    } catch (error) {
      toast.error("Gagal mengambil data ruangan")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchRuangan()
  }, [])

  return {
    data,
    loading,
    refetch: fetchRuangan,
  }
}