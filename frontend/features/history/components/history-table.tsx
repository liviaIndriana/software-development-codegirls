"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

import { useHistory } from "../hooks/useHistory"

export default function HistoryTable() {
  const { data, loading, actionLoading, handleApprove, handleReject } =
    useHistory()

  return (
    <div>
      <h1 className="text-2xl font-semibold text-[#30418F] mb-8">
        History
      </h1>

      <Card className="w-full rounded-2xl border border-gray-200 shadow-sm">
        <CardContent className="p-0">
          <div className="w-full overflow-x-auto">
            <div className="max-h-[60vh] overflow-y-auto">
              <Table className="min-w-[1200px]">

                {/* HEADER */}
                <TableHeader className="sticky top-0 bg-white z-10 border-b">
                  <TableRow>
                    <TableHead className="px-6 py-4 text-[#30418F] font-semibold">No</TableHead>
                    <TableHead className="px-6 py-4 text-[#30418F] font-semibold">Nama</TableHead>
                    <TableHead className="px-6 py-4 text-[#30418F] font-semibold">Kelas</TableHead>
                    <TableHead className="px-6 py-4 text-[#30418F] font-semibold">Tanggal</TableHead>
                    <TableHead className="px-6 py-4 text-[#30418F] font-semibold">Mulai</TableHead>
                    <TableHead className="px-6 py-4 text-[#30418F] font-semibold">Selesai</TableHead>
                    <TableHead className="px-6 py-4 text-[#30418F] font-semibold">Proyektor</TableHead>
                    <TableHead className="px-6 py-4 text-[#30418F] font-semibold">Keterangan</TableHead>
                    <TableHead className="px-6 py-4 text-[#30418F] font-semibold">Jenis</TableHead>
                    <TableHead className="px-6 py-4 text-center text-[#30418F] font-semibold">Status</TableHead>
                  </TableRow>
                </TableHeader>

                {/* BODY */}
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-10">
                        Loading...
                      </TableCell>
                    </TableRow>
                  ) : data.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={9} className="text-center py-10">
                        Tidak ada data
                      </TableCell>
                    </TableRow>
                  ) : (
                    data.map((item, i) => (
                      <TableRow
                        key={item.id}
                        className={i % 2 === 0 ? "bg-white" : "bg-[#FAFAFA]"}
                      >
                        <TableCell className="px-6 py-4">{i + 1}</TableCell>
                        <TableCell className="px-6 py-4">{item.nama}</TableCell>
                        <TableCell className="px-6 py-4">{item.kelas}</TableCell>
                        <TableCell className="px-6 py-4">{item.tanggal}</TableCell>
                        <TableCell className="px-6 py-4">{item.waktu_mulai}</TableCell>
                        <TableCell className="px-6 py-4">{item.waktu_berakhir}</TableCell>
                        <TableCell className="px-6 py-4">{item.kode_proyektor}</TableCell>
                        <TableCell className="px-6 py-4">{item.keterangan}</TableCell>

                        <TableCell>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              item.jenis_peminjaman === "TERJADWAL"
                                ? "bg-blue-100 text-blue-700"
                                : "bg-gray-100 text-gray-700"
                            }`}
                          >
                            {item.jenis_peminjaman === "TERJADWAL"
                              ? "Terjadwal"
                              : "Tidak Terjadwal"}
                          </span>
                        </TableCell>

                        <TableCell className="px-6 py-4 text-center">
                          {item.status === "PENDING" ? (
                            <div className="flex justify-center gap-2">
                              <Button
                                size="sm"
                                disabled={actionLoading === item.id}
                                onClick={() => handleReject(item.id)}
                                className="h-8 px-4 rounded-md text-xs font-semibold bg-[#F4721E] text-white hover:bg-[#e46312]"
                              >
                                Tolak
                              </Button>

                              <Button
                                size="sm"
                                disabled={actionLoading === item.id}
                                onClick={() => handleApprove(item.id)}
                                className="h-8 px-4 rounded-md text-xs font-semibold bg-[#30418F] text-white hover:bg-[#23306d]"
                              >
                                ACC
                              </Button>
                            </div>
                          ) : (
                            <span
                              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                                item.status === "APPROVED"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {item.status}
                            </span>
                          )}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>

              </Table>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}