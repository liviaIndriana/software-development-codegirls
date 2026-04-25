# SiRuka : Rancang Bangun Sistem Informasi Peminjaman Ruangan Kuliah Berbasis Web pada Program Studi Teknik Informatika

* Frontend: Next.js (UI)
* Backend: Golang (Fiber)

---

## 👥 Tim

* Project Manager: Livia Indriana Sari
* Frontend: Risma Tri Shatya
* Backend: Diah Aulya Robbi


---

## 📁 Struktur Project

```bash
project-name/
├── frontend/   # Next.js
├── backend/    # Golang (Fiber)
├── docs/       # Dokumentasi
```

---

# 🚀 FRONTEND (Next.js)

## ⚙️ Prerequisites

* Node.js 20+
* npm / yarn
* Podman (optional)

## ▶️ Menjalankan Frontend

```bash
cd frontend
npm install
npm run dev
```

Akses di: http://localhost:3000

## 📜 Scripts

* npm run dev → run development
* npm run build → build production
* npm run start → run production
* npm run lint → cek code

---

# 🚀 BACKEND (Golang)

## ▶️ Menjalankan Backend (Untuk User)

```bash
cd backend
go mod tidy
go run main.go
```

Default: http://localhost:30001 (sesuaikan)

---

## 🛠️ Setup Backend (Developer Only - Dari Nol)

### 1. Inisialisasi Module

```bash
go mod init backend-codegirls
```

### 2. Install Dependency

```bash
go get github.com/gofiber/fiber/v2
go get gorm.io/gorm
go get gorm.io/driver/mysql
go get golang.org/x/crypto/bcrypt
go get github.com/golang-jwt/jwt/v5
go get github.com/joho/godotenv
go get github.com/go-playground/validator/v10
```

### 3. Rapikan Dependency

```bash
go mod tidy
```

---

## 🐳 Docker (Optional)

```bash
podman build -t backend-codegirls-img -f .devcontainer/Dockerfile .
```

---

## 📌 Fitur

* Autentikasi pengguna (login & registrasi)
* Melihat jadwal dan ketersediaan ruangan
* Pengajuan peminjaman ruangan (jadwal & non-jadwal)
* Manajemen status & riwayat peminjaman
* Persetujuan peminjaman oleh admin
* Pengelolaan data pengguna, ruangan, dan jadwal
* Integrasi jadwal dan peminjaman untuk mencegah bentrok

---

## 📄 Dokumentasi

Lihat folder `docs/`

---

## 🔄 Workflow Git

* feature/*
* develop
* main
