package utils

import (
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var SECRET_KEY = []byte("secret123") // nanti pindah ke .env

func GenerateToken(userID uint, npmNidn string, role string) (string, error) {
	// contoh pakai jwt
	claims := jwt.MapClaims{
		"user_id":  userID,
		"npm_nidn": npmNidn,
		"role":     role,
		"exp":      time.Now().Add(time.Hour * 24).Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)

	return token.SignedString([]byte("SECRET_KEY"))
}