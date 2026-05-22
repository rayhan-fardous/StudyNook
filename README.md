# 📚 StudyNook — Your Ultimate Study Space Finder

### Find • Book • Focus 🚀

StudyNook is a modern full-stack web application that helps students and professionals discover the perfect study environment with ease.

[🌐 Live Demo](https://study-nook-neon.vercel.app) 

---

# 📖 Overview

StudyNook is designed to simplify the process of finding and booking study spaces. Users can browse available rooms, filter by amenities and price, make secure bookings, and manage reservations in a clean and responsive interface.

Whether you're preparing for exams, attending online classes, or working remotely — StudyNook helps you stay productive in the right environment.

---

# ✨ Features

## 🔍 Smart Room Search
- Search rooms by:
  - Room name
  - Amenities
  - Price range
  - Instant filtering experience

## 🔐 Secure Authentication
- JWT-based authentication
- Protected routes and secure user sessions
- Authentication powered by Jose

## 📅 Real-Time Booking System
- Prevents double bookings
- Live booking availability checking
- Seamless booking workflow

## 👤 User Booking Management
- View all bookings
- Check booking status
- Cancel reservations anytime

## 📊 Public Booking Statistics
- Real-time booking counts
- Accessible without authentication

## 🏢 Owner Dashboard
- Manage room listings
- Update room details
- Track bookings and availability

## 📱 Fully Responsive Design
- Optimized for:
  - Mobile
  - Tablet
  - Desktop

---

# 🛠 Tech Stack

<div align="center">

| Frontend | Backend | Database | Authentication |
|---|---|---|---|
| Next.js | Node.js | MongoDB | JWT |
| React | Express.js |  | Jose |
| Tailwind CSS | REST API |  | Better Auth |
| HeroUI |  |  |  |
| React Query |  |  |  |
| React Toastify |  |  |  |

</div>

---

# ⚡ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/rayhan-fardous/StudyNook.git
```

---

## 2️⃣ Navigate to Project Directory

```bash
cd studynook
```

---

## 3️⃣ Install Dependencies

```bash
npm install
```

---

## 4️⃣ Setup Environment Variables

Create a `.env.local` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=your_frontend_url
PORT=5000
JWT_SECRET=your_secret_key
```

---

## 5️⃣ Run the Development Server

```bash
npm run dev
```

---

# 🌐 Live Website

👉 https://study-nook-neon.vercel.app/

---

# 🔒 Authentication Flow

- User registers/logs in
- JWT token generated
- Protected APIs validate token
- Secure session maintained

---

# 📦 Core Dependencies

## Frontend
```json
{
  "next": "latest",
  "react": "latest",
  "tailwindcss": "latest",
  "@heroui/react": "latest",
  "@tanstack/react-query": "latest",
  "react-toastify": "latest"
}
```

## Backend
```json
{
  "express": "latest",
  "mongodb": "latest",
  "jsonwebtoken": "latest",
  "jose": "latest",
  "cors": "latest",
  "dotenv": "latest"
}
```

---
