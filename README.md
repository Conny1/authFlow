# Auth Flow App (Login & Signup)

## 🛠 Tech Stack

- **Frontend**: React with typescript
  - Used for building a responsive and dynamic user interface.
  - React  Redux toolkit to  manage auth state globally.

- **Backend**: Node.js + Express
  - Handles API routes for authentication, session management, and error handling.

- **Database**: MongoDB (with Mongoose)
  - Stores user data securely and allows easy integration with Node.js via Mongoose ODM.

- **Security**:
  - Passwords hashed using **bcrypt** before saving to DB.
  - **JWT (JSON Web Token)** used for session management and securing protected routes.

---

## 📁 Folder Structure

project-root/
│
├── client/ # React frontend
│ ├── src/
│ │ ├── components/ # Reusable UI components (e.g., LoginForm, SignupForm)
│ │ ├── pages/ # Pages (auth, Home)
│ │ ├── App.js
│ │ └── index.js
│
├── api/ # Node.js backend
│ ├── controllers/ # User logic (register, login)
│ ├── models/ # Mongoose User schema
│ ├── routes/ # API routes (user.routes.js)
│ ├── middleware/ # JWT auth middleware
│ ├── config/ # DB connection
| |── app.js # server configs
│ └── index.js # Main entry point
│
└── 


---

## 🚧 Challenges Faced
- The server might take along time to respond since its hosted on free resources. This happens if the site is idle for 15 minutes or first time use.

---

## ✅ Features

- User registration with hashed passwords
- Login with JWT authentication
- Protected routes (both frontend & backend)
- Responsive UI with error handling




