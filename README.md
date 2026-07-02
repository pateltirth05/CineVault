# 🎬 CineVault

<p align="center">
  <img src="./assets/logo.png" alt="CineVault Logo" width="120"/>
</p>

<p align="center">
  <strong>A modern full-stack movie discovery platform built with the MERN Stack.</strong>
</p>

<p align="center">
Discover movies • Build your watchlist • Track your favorites • Explore cinematic details
</p>

---

## 📖 Overview

CineVault is a full-stack movie discovery web application that allows users to explore trending movies, search for titles, view detailed information, and maintain their own personalized watchlist.

The application integrates with **The Movie Database (TMDB)** API while securely managing user authentication and personal movie collections using a custom backend.

This project was built to demonstrate production-style MERN development, including authentication, REST APIs, database design, protected routes, and responsive UI development.

---

# 📸 Screenshots

## Landing Page

![Landing Page](./screenshots/landing-page.png)

---

## Login Page

![Login](./screenshots/login.png)

---

## Register Page

![Register](./screenshots/register.png)

---

## Home Page

![Home](./screenshots/home.png)

---

## Movie Details

![Movie Details](./screenshots/movie-details.png)

---

## Watchlist

![Watchlist](./screenshots/watchlist.png)

---

# ✨ Features

### Authentication

* User Registration
* Secure Login
* JWT Authentication
* Password Encryption using bcrypt
* Protected Routes
* Persistent Login

### Movie Discovery

* Trending Movies
* Popular Movies
* Top Rated Movies
* Upcoming Movies
* Search Movies
* Movie Details
* Cast Information
* Ratings
* Genres
* Release Date
* Runtime

### Personalized Experience

* Add Movies to Watchlist
* Remove Movies from Watchlist
* Favorite Movies
* User Profile

### UI & UX

* Modern Cinematic Design
* Fully Responsive Layout
* Beautiful Movie Cards
* Smooth Navigation
* Dark Theme
* Mobile Friendly

---

# 🛠 Tech Stack

## Frontend

* React
* React Router DOM
* Axios
* CSS3
* Context API

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## Authentication

* JWT
* bcrypt

## External API

* TMDB API

---

# 🏗 Project Structure

```
CineVault
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── utils
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── routes
│   │   ├── services
│   │   ├── styles
│   │   ├── App.jsx
│   │   └── main.jsx
│
└── README.md
```

---

# ⚙ Installation

## Clone the Repository

```bash
git clone https://github.com/pateltirth05/CineVault.git
```

```bash
cd cinevault
```

---

## Backend Setup

```bash
cd backend
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

TMDB_API_KEY=your_tmdb_api_key
```

Start the backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd frontend
```

Install dependencies

```bash
npm install
```

Start development server

```bash
npm run dev
```

---

# 🔐 Authentication Flow

```
User Registers
        │
        ▼
Password Encrypted
        │
        ▼
Stored in MongoDB
        │
        ▼
User Login
        │
        ▼
JWT Generated
        │
        ▼
Token Stored
        │
        ▼
Protected Routes Accessible
```

---

# 🌐 API Endpoints

## Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register User |
| POST   | /api/auth/login    | Login User    |

---

## Watchlist

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| GET    | /api/watchlist     | Get Watchlist |
| POST   | /api/watchlist     | Add Movie     |
| DELETE | /api/watchlist/:id | Remove Movie  |

---

# 💡 What I Learned

While building CineVault, I gained practical experience in:

* Building scalable MERN applications
* Designing RESTful APIs
* JWT Authentication
* Password Security
* MongoDB Data Modeling
* React Context API
* API Integration
* Protected Routing
* State Management
* Responsive UI Design

---

# 🚀 Future Improvements

* User Reviews
* Movie Ratings
* Personalized Recommendations
* Infinite Scrolling
* Skeleton Loading
* Advanced Filters
* Profile Editing
* OAuth Login (Google/GitHub)
* Unit Testing
* Docker Deployment

---

# 📦 Deployment

Frontend

```
Coming Soon
```

Backend

```
Coming Soon
```

---

# 🤝 Contributing

Contributions, ideas, and suggestions are welcome.

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

---

# 📄 License

This project is licensed under the MIT License.

---

# 👨‍💻 Author

**Tirth Patel**


<p align="center">
Made with ❤️ using React, Node.js, Express, MongoDB, and TMDB API.
</p>
