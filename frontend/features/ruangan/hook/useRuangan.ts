"use client"

import { useEffect, useState } from "react"
import { Ruangan } from "../types/Ruangan.type"
import { getRuangans, updateRuangan, deleteRuangan } from "../service/Ruangan.service"
import { toast } from "sonner"

export function useRuangan() {
    const [data, setData] = useState<Ruangan[]>([])
    const [loading, setLoading] = useState(true)
    const [actionLoading, setActionLoading] = useState<number | null>(null)

    async function fetchData() {
        try {
            const res = await getRuangans()
            setData(res)
        } catch (error: any) {
            toast.error("Gagal mengambil data ruangan")
        } finally {
            setLoading(false)
        }
    }

    async function handleUpdate(
        id: number,
        payload: Omit<Ruangan, "id_ruangan">
    ) {
        setActionLoading(id)
        try {
            await updateRuangan(id, payload)

            setData((prev) =>
                prev.map((item) =>
                    item.id_ruangan === id ? { ...item, ...payload } : item
                )
            )

            toast.success("Data ruangan berhasil diupdate")
        } catch (error: any) {
            toast.error("Gagal update ruangan")
        } finally {
            setActionLoading(null)
        }
    }

    async function handleDelete(id: number) {
        setActionLoading(id)
        try {
            await deleteRuangan(id)

            setData((prev) =>
                prev.filter((item) => item.id_ruangan !== id)
            )

            toast.success("Ruangan berhasil dihapus")
        } catch (error: any) {
            toast.error("Gagal menghapus ruangan")
        } finally {
            setActionLoading(null)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {
        data,
        loading,
        actionLoading,
        handleUpdate,
        handleDelete,
    }
}