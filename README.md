# Admin-panel-Api
# 🚀 Node Admin Panel

Full Stack Admin Panel built with Node.js (Backend) and React (Frontend)

---

## 📁 Project Structure

- Backend → Express + MongoDB
- Frontend → React + Vite

---

## 🛠 Backend Setup

1️⃣ Go to backend folder

```
cd backend
```

2️⃣ Install dependencies

```
npm install
```

3️⃣ Create `.env` file

```
PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
EMAIL_USER=your_email
EMAIL_PASS=your_password
```

4️⃣ Start server

```
npm run dev
```

Server will run on:
```
http://localhost:5000
```

---

## 🎨 Frontend Setup

1️⃣ Go to frontend folder

```
cd frontend
```

2️⃣ Install dependencies

```
npm install
```

3️⃣ Run project

```
npm run dev
```

Frontend will run on:
```
http://localhost:5173
```

---

## ✨ Features

- User Authentication (Login / Register)
- JWT Based Auth
- OTP Email Verification
- Admin Routes
- Post Management
- Middleware Protection
- Validation Utilities

---

## 📦 Tech Stack

- Node.js
- Express.js
- MongoDB
- React
- Vite
- JWT
- Nodemailer
- nodeAdmin-panel/
│
├── backend/
│   │
│   ├── config/
│   │   └── db.js
│   │
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── postController.js
│   │   └── userController.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── Post.js
│   │   └── User.js
│   │
│   ├── routes/
│   │   ├── adminRoutes.js
│   │   ├── authRoutes.js
│   │   ├── postRoutes.js
│   │   └── userRoutes.js
│   │
│   ├── services/
│   │   └── emailService.js
│   │
│   ├── utils/
│   │   ├── generateOTP.js
│   │   └── validators.js
│   │
│   ├── server.js
│   ├── package.json
│   ├── package-lock.json
│   └── QUICK_START.md
│
├── frontend/
│   │
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── eslint.config.js
│   └── index.html
│
└── README.md
