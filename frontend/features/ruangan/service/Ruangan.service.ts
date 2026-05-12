import { api } from "@/lib/axios"
import { Ruangan } from "../types/Ruangan.type"

// GET ALL
export async function getRuangans(): Promise<Ruangan[]> {
  const res = await api.get("/api/ruangan")
  return res.data.data
}

// UPDATE
export async function updateRuangan(
  id: number,
  payload: Omit<Ruangan, "id_ruangan">
) {
  const res = await api.put(`/api/ruangan/${id}`, payload)
  return res.data
}

// DELETE
export async function deleteRuangan(id: number) {
  const res = await api.delete(`/api/ruangan/${id}`)
  return res.data
}