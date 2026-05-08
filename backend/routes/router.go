package routes

import (
	"backend-codegirls/handlers"
	"backend-codegirls/middleware"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func SetupRoutes(app *fiber.App, db *gorm.DB) {
	api := app.Group("/api")

	// auth
	api.Post("/register", handlers.Register(db))
	api.Post("/login", handlers.Login(db))

	// ADMIN GROUP
	admin := api.Group("/admin", middleware.AdminOnly())

	// dashboard
	admin.Get("/dashboard", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Welcome Admin",
		})
	})

	// HISTORY
	historyHandler := &handlers.HistoryHandler{DB: db}
	app.Get("/history", middleware.AdminOnly(), historyHandler.GetHistory)
	app.Patch("/history/:id", middleware.AdminOnly(), historyHandler.UpdateStatus)
	admin.Put("/history/:id/approve", historyHandler.Approve)
	admin.Put("/history/:id/reject", historyHandler.Reject)
}
