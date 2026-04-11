# 🛒 E-Commerce Web Application

A full-stack **E-Commerce Application** built using **MERN Stack (MongoDB, Express, React, Node.js)** with separate **Client (User)** and **Admin Panel**.

---

## 🚀 Live Demo

* 🌐 User Website:  https://ecommerce-app-sooty-theta.vercel.app
* 🛠 Admin Panel:  https://ecommerce-app-i6fn.vercel.app
* 🔗 Backend API: https://ecommerce-app-yc1o.onrender.com

---

## 📌 Features

### 👤 User Side

* User Registration & Login (JWT Authentication)
* Browse Products
* Add to Cart
* Place Orders
* Online Payment (Stripe Integration)
* Order History

### 🛠 Admin Panel

* Admin Login
* Add / Delete Products
* Manage Orders
* Update Order Status
* Upload Product Images

---

## 🧰 Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* React Router

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication
* Multer (Image Upload)
* Cloudinary

---

## 📂 Project Structure

```
ECOMMERCE-APP/
│
├── frontend/        # User Website
├── admin/           # Admin Panel
├── backend/         # API Server
│
└── README.md
```

---

## ⚙️ Environment Variables

### 📄 Backend (.env)

```
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_SECRET_KEY=your_secret
STRIPE_SECRET_KEY=your_stripe_key
```

---

### 📄 Frontend / Admin (.env)

```
VITE_API_URL=https://ecommerce-app-yc1o.onrender.com
```

---

## 🛠 Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/ECOMMERCE-APP.git
cd ECOMMERCE-APP
```

---

### 2️⃣ Install Dependencies

#### Backend

```
cd backend
npm install
```

#### Frontend

```
cd frontend
npm install
```

#### Admin Panel

```
cd admin
npm install
```

---

### 3️⃣ Run Project

#### Backend

```
npm run server
```

#### Frontend

```
npm run dev
```

#### Admin

```
npm run dev
```

---

## 🚀 Deployment

* Frontend & Admin → Vercel
* Backend → Render

---

## 🔒 Authentication

* JWT-based authentication
* Password hashing using bcrypt
* Role-based access (Admin/User)

---

## 📸 Screenshots

* Login Page
* Product Page
* Cart Page
* Admin Dashboard

---

## 🧪 Testing

* Protected Routes tested with and without token
* API testing using Postman
* Role-based access verified

---

## 👨‍💻 Author

**Sanjay Kumar**

* GitHub: https://github.com/sanjay-k-alt
* LinkedIn: (Add your profile)

---

## ⭐ Acknowledgements

* MongoDB Atlas
* Cloudinary
* Stripe
* Vercel & Render

---

## 📜 License

This project is for educational purposes.

---
