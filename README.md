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

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/paytm-clone.git
   cd paytm-clone
   ```

2. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

3. **Frontend Setup**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Variables**
   
   Create `.env` file in the backend directory:
   ```env
   MONGODB_URL=mongodb+srv://username:password@cluster.mongodb.net/paytm_wallet
   JWT_SECRET=your_super_secret_jwt_key_here
   PORT=3000
   ```

5. **Run the Application**
   
   **Backend (Terminal 1):**
   ```bash
   cd backend
   npm start
   ```
   
   **Frontend (Terminal 2):**
   ```bash
   cd frontend
   npm run dev
   ```

6. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3000`

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

## 🚀 Deployment

### Backend Deployment (Railway/Render)
1. Connect your GitHub repository
2. Set environment variables in the platform
3. Deploy the backend service

### Frontend Deployment (Vercel/Netlify)
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `dist`
4. Deploy the frontend

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
# Database
MONGODB_URL=your_mongodb_connection_string

# JWT Secret
JWT_SECRET=your_jwt_secret_key

# Server Port
PORT=3000
```

## 🐛 Known Issues

- Balance updates might take a moment to reflect in the UI
- User search is case-sensitive
- No email verification for signup

## 🔮 Future Enhancements

- [ ] Email verification
- [ ] Transaction history
- [ ] Profile picture upload
- [ ] Push notifications
- [ ] Two-factor authentication
- [ ] Transaction receipts
- [ ] Admin dashboard

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourlinkedin](https://linkedin.com/in/yourlinkedin)
- Email: your.email@example.com

## 🙏 Acknowledgments

- Inspired by PayTM's user interface
- Thanks to the open-source community
- Built as a learning project for full-stack development

---

⭐ **Star this repository if you found it helpful!**