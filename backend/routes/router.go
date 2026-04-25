package routes

import (
	"backend-codegirls/handlers"

	"github.com/gofiber/fiber/v2"
	"gorm.io/gorm"
)

func SetupRoutes(app *fiber.App, db *gorm.DB) {
	api := app.Group("/api")

	api.Post("/register", handlers.Register(db))
	api.Post("/login", handlers.Login(db))
}