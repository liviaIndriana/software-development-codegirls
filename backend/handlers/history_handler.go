package handlers

import (
	"backend-codegirls/models"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

type HistoryHandler struct {
	DB *gorm.DB
}

// GetHistory
func (h *HistoryHandler) GetHistory(c *fiber.Ctx) error {
	var data []models.Peminjaman

	if err := h.DB.Find(&data).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{"message": "Server error"})
	}
	var result []fiber.Map

	for _, item := range data {
		result = append(result, fiber.Map{
			"id": item.ID,
			"nama": item.Nama,
			"kelas": item.Kelas,
			"tanggal": item.Tanggal.Format("2006-01-02"),
			"waktu_mulai": item.WaktuMulai,
			"waktu_berakhir": item.WaktuBerakhir,
			"kode_proyektor": item.KodeProyektor,
			"keterangan": item.Keterangan,
			"jenis_peminjaman": item.JenisPeminjaman,
			"status": item.Status,
		})
	}

	return c.JSON(result)
}
//Update
func (h *HistoryHandler) UpdateStatus(c *fiber.Ctx) error {
	id := c.Params("id")

	var body struct {
		Status string `json:"status"`
	}

	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).JSON(fiber.Map{
			"message": "Request tidak valid",
		})
	}

	var data models.Peminjaman
	if err := h.DB.First(&data, id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{
			"message": "Data tidak ditemukan",
		})
	}

	if body.Status != "APPROVED" && body.Status != "REJECTED" {
		return c.Status(400).JSON(fiber.Map{
			"message": "Status tidak valid",
		})
	}

	data.Status = body.Status

	if err := h.DB.Save(&data).Error; err != nil {
		return c.Status(500).JSON(fiber.Map{
			"message": "Gagal update status",
		})
	}

	return c.JSON(fiber.Map{
		"message": "Status berhasil diupdate",
	})
}

func (h *HistoryHandler) Approve(c *fiber.Ctx) error {
	id := c.Params("id")

	var data models.Peminjaman
	if err := h.DB.First(&data, id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"message": "Data tidak ditemukan"})
	}

	data.Status = "APPROVED"
	h.DB.Save(&data)

	return c.JSON(fiber.Map{"message": "Peminjaman disetujui"})
}

func (h *HistoryHandler) Reject(c *fiber.Ctx) error {
	id := c.Params("id")

	var data models.Peminjaman
	if err := h.DB.First(&data, id).Error; err != nil {
		return c.Status(404).JSON(fiber.Map{"message": "Data tidak ditemukan"})
	}

	data.Status = "REJECTED"
	h.DB.Save(&data)

	return c.JSON(fiber.Map{"message": "Peminjaman ditolak"})
}