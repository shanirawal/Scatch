# Scatch

A simple Node.js + Express backend project with user authentication, session management, and EJS templating.

## 🚀 Features

* User registration and login with bcrypt password hashing

* Session & cookie-based authentication

* MongoDB integration with Mongoose

* EJS-based server-side rendering

* Flash messages for feedback

* Clean project structure: MVC-inspired with separate controllers, routes, middlewares, and utilities

* .env configuration for environment variables

## 🛠 Tech Stack

* [Node.js](https://nodejs.org/)
* [Express](https://expressjs.com/)
* [MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)
* [EJS](https://ejs.co/) (Embedded JavaScript templates)
* [bcrypt](https://www.npmjs.com/package/bcrypt) for password hashing
* [express-session](https://www.npmjs.com/package/express-session) for session management
* [connect-flash](https://www.npmjs.com/package/connect-flash) for flash messages

## 📂 Setup Instructions

### Prerequisites

* Node.js & npm installed
* MongoDB running locally or in the cloud

### Steps

```bash
# Clone the repo
git clone https://github.com/shanirawal/Scatch.git
cd Scatch

# Install dependencies
npm install

# Set up your MongoDB connection in `db.js` if needed
# Default: mongodb://127.0.0.1:27017/scatch

# Start the app
npm start
```

The app will run at:
🌐 [http://localhost:3000](http://localhost:3000)

---

## 📁 Folder Structure

```
Scatch/
├── config/           # Configuration (e.g., DB connection, keys)
├── controllers/      # Route handler logic
├── middlewares/      # Authentication & other middlewares
├── models/           # Mongoose schemas/models
├── public/           # Static assets (CSS, JS, Images)
├── routes/           # Route definitions
├── utils/            # Helper functions
├── views/            # EJS templates
├── .env              # Environment variables
├── .gitignore
├── app.js            # Entry point
├── package.json

```

---

## 🙏 Acknowledgements

This project was created as part of the **Sheriyans Coding School - Backend Series** on YouTube.
Check out their channel: [Sheriyans Coding School](https://www.youtube.com/@sheryians)

---

## 📜 License

This project is for learning purposes. Feel free to fork & modify it!

---

If you’d like, I can also help you add a **badges section** (like build status, license, etc.) or improve the formatting even further. Let me know!
