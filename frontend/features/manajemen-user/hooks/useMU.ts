"use client"

import { useEffect, useState } from "react"

import {
  getUsers,
  deleteUser,
  resetPassword,
} from "../services/MU.service"

import { User } from "../types/MU.type"

import { toast } from "sonner"

export function useUsers() {

  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  const [actionLoading, setActionLoading] =
    useState<string | null>(null)

  // GET USERS
  async function fetchUsers() {
    try {

      const res = await getUsers()

      setUsers(res)

    } catch (error: any) {

      console.error(error)

      toast.error("Gagal mengambil data user", {
        description:
          error?.response?.data?.message ||
          "Terjadi kesalahan",
      })

    } finally {
      setLoading(false)
    }
  }

  // DELETE USER
  async function handleDelete(id: string) {

    setActionLoading(id)

    try {

      const res = await deleteUser(id)

      if (res.message === "User berhasil dihapus") {

        setUsers((prev) =>
          prev.filter(
            (item) => item.id_user !== id
          )
        )

        toast.success("User berhasil dihapus")
      }

    } catch (error: any) {

      console.error(error)

      toast.error("Gagal menghapus user", {
        description:
          error?.response?.data?.message ||
          "Terjadi kesalahan",
      })

    } finally {
      setActionLoading(null)
    }
  }

  // RESET PASSWORD
  async function handleResetPassword(
    id: string
  ) {

    setActionLoading(id)

    try {

      const res =
        await resetPassword(id)

      toast.success(
        "Password berhasil direset",
        {
          description:
            "Password direset menjadi NPM/NIDN",
        }
      )

    } catch (error: any) {

      console.error(error)

      toast.error(
        "Gagal reset password",
        {
          description:
            error?.response?.data?.message ||
            "Terjadi kesalahan",
        }
      )

    } finally {
      setActionLoading(null)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return {
    users,
    loading,
    actionLoading,

    handleDelete,
    handleResetPassword,
  }
}