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

	admin := api.Group("/admin", middleware.AdminOnly())

	admin.Get("/dashboard", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Welcome Admin",
		})
	})
}