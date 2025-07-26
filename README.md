# 💳 PayTM Clone - Digital Wallet Application

A full-stack digital payment application built with React.js, Node.js, Express.js, and MongoDB. Users can create accounts, transfer money, and manage their digital wallet seamlessly.

## 🚀 Features

- **User Authentication**: Secure signup and signin with JWT tokens
- **Digital Wallet**: Check account balance in real-time
- **Money Transfer**: Send money to other users instantly
- **User Search**: Find users by name or username
- **Responsive Design**: Works on desktop and mobile devices
- **Security**: Protected routes with middleware authentication
- **Modern UI**: Clean and intuitive user interface

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library
- **Tailwind CSS** - Styling framework
- **Axios** - HTTP client
- **React Router** - Navigation
- **Vite** - Build tool

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Zod** - Input validation
- **dotenv** - Environment variables

## 📁 Project Structure

```
Paytm/
├── README.md
├── .gitignore
├── backend/
│   ├── package.json
│   ├── index.js
│   ├── config.js
│   ├── db.js
│   ├── middleware.js
│   └── routers/
│       ├── index.js
│       ├── user.js
│       └── account.js
└── frontend/
    ├── package.json
    ├── index.html
    ├── vite.config.js
    └── src/
        ├── App.jsx
        ├── main.jsx
        ├── components/
        │   ├── Heading.jsx
        │   ├── SubHeading.jsx
        │   ├── InputBox.jsx
        │   ├── Button.jsx
        │   ├── BottomWarning.jsx
        │   └── UserMoneySending.jsx
        └── pages/
            ├── LandingPage.jsx
            ├── Signup.jsx
            ├── Signin.jsx
            ├── Dashboard.jsx
            └── Send.jsx
```









## 📱 API Endpoints

### Authentication
- `POST /api/v1/user/signup` - User registration
- `POST /api/v1/user/signin` - User login

### User Management
- `GET /api/v1/user/me` - Get current user info
- `GET /api/v1/user/bulk` - Search users
- `PUT /api/v1/user` - Update user info

### Account Management
- `GET /api/v1/account/balance` - Get account balance
- `POST /api/v1/account/transfer` - Transfer money

## 🔐 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Passwords are securely stored
- **Input Validation**: Using Zod for request validation
- **Protected Routes**: Middleware authentication for sensitive endpoints
- **Environment Variables**: Sensitive data stored securely

## 🎯 Usage

### Creating an Account
1. Visit the landing page
2. Click "Sign Up"
3. Fill in your details (username, password, first name, last name)
4. Your account will be created with a random initial balance

### Transferring Money
1. Sign in to your account
2. Go to Dashboard
3. Search for a user
4. Click "Send Money"
5. Enter the amount and confirm

### Checking Balance
- Your current balance is displayed on the Dashboard
- Updates in real-time after transactions




