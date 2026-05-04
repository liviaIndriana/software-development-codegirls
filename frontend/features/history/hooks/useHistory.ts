"use client"

import { useEffect, useState } from "react"
import { History } from "../types/history.type"
import {
    getHistories,
    updateHistoryStatus,
} from "../services/history.service"
import { toast } from "sonner"

export function useHistory() {
    const [data, setData] = useState<History[]>([])
    const [loading, setLoading] = useState(true)
    const [actionLoading, setActionLoading] = useState<number | null>(null)

    async function fetchData() {
        try {
            const res = await getHistories()
            setData(res)
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message || "Gagal mengambil data history"
            )
        } finally {
            setLoading(false)
        }
    }

    async function handleApprove(id: number) {
        setActionLoading(id)
        try {
            await updateHistoryStatus(id, "APPROVED")

            setData((prev) =>
                prev.map((item) =>
                    item.id === id ? { ...item, status: "APPROVED" } : item
                )
            )

            toast.success("History berhasil di-approve")
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message || "Gagal approve history"
            )
        } finally {
            setActionLoading(null)
        }
    }

    async function handleReject(id: number) {
        setActionLoading(id)
        try {
            await updateHistoryStatus(id, "REJECTED")

            setData((prev) =>
                prev.map((item) =>
                    item.id === id ? { ...item, status: "REJECTED" } : item
                )
            )

            toast.success("History berhasil di-reject")
        } catch (error: any) {
            toast.error(
                error?.response?.data?.message || "Gagal reject history"
            )
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
        handleApprove,
        handleReject,
    }
}