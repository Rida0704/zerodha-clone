# 📈 Full Stack Trading Platform

A comprehensive full-stack web application that replicates the core functionality of Zerodha, India's largest stock broker. This project demonstrates modern web development practices with a complete trading platform ecosystem.

## 🌐 Live Demo

- **Frontend (Landing Page)**: [https://zerodha-clone-frontend-rgkn.onrender.com](https://zerodha-clone-frontend-rgkn.onrender.com)
- **Trading Dashboard**: [https://zerodha-clone-dashboard-ce0c.onrender.com](https://zerodha-clone-dashboard-ce0c.onrender.com)
- **Backend API**: [https://zerodha-clone-backend-ob79.onrender.com](https://zerodha-clone-backend-ob79.onrender.com)

## ✨ Features

### 🎯 Core Functionality
- **User Authentication**: Secure login/signup with JWT tokens
- **Trading Dashboard**: Real-time portfolio management interface
- **Holdings & Positions**: View and manage stock holdings and positions
- **Order Management**: Place and track buy/sell orders
- **Responsive Design**: Mobile-first approach with Bootstrap styling

### 🔐 Security Features
- JWT-based authentication
- Secure cookie handling for cross-domain requests
- CORS configuration for production deployment
- Input validation and sanitization

### 🚀 Performance & Deployment
- Deployed on Render with automatic CI/CD
- Optimized build process for production
- Environment-based configuration
- Cross-domain cookie sharing between services

## 🛠️ Tech Stack

### Frontend
- **React.js** - Modern UI library with hooks
- **React Router** - Client-side routing
- **Bootstrap** - Responsive CSS framework
- **Axios** - HTTP client for API calls
- **React Toastify** - User notifications
- **React Cookie** - Cookie management

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

### Deployment & DevOps
- **Render** - Cloud platform for deployment
- **Git** - Version control
- **Environment Variables** - Configuration management

## 📁 Project Structure

```
zerodha-clone/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── landing_page/     # Landing page components
│   │   │   ├── home/        # Homepage components
│   │   │   ├── login/       # Authentication pages
│   │   │   └── signup/      # User registration
│   │   └── config.js        # API configuration
│   └── public/              # Static assets
├── backend/                 # Node.js backend API
│   ├── Controllers/         # Route controllers
│   ├── models/             # Database models
│   ├── Routes/             # API routes
│   ├── Middlewares/        # Custom middleware
│   └── util/               # Utility functions
├── dashboard/              # Trading dashboard React app
│   ├── src/
│   │   ├── components/     # Dashboard components
│   │   └── config.js       # Dashboard configuration
│   └── public/             # Dashboard assets
└── render.yaml            # Deployment configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Rida0704/zerodha-clone.git
   cd zerodha-clone
   ```

2. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install Frontend Dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Install Dashboard Dependencies**
   ```bash
   cd ../dashboard
   npm install
   ```

### Environment Configuration

1. **Backend Environment Variables**
   Create `.env` file in the backend directory:
   ```env
   MONGO_URL=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=development
   PORT=3002
   ```

2. **Frontend Environment Variables**
   Create `.env` file in the frontend directory:
   ```env
   REACT_APP_API_URL=http://localhost:3002
   REACT_APP_DASHBOARD_URL=http://localhost:3001
   ```

3. **Dashboard Environment Variables**
   Create `.env` file in the dashboard directory:
   ```env
   REACT_APP_API_URL=http://localhost:3002
   REACT_APP_FRONTEND_URL=http://localhost:3000
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   npm start
   ```

2. **Start the Frontend Application**
   ```bash
   cd frontend
   npm start
   ```

3. **Start the Dashboard Application**
   ```bash
   cd dashboard
   npm start
   ```

### Access the Application
- Frontend: `http://localhost:3000`
- Dashboard: `http://localhost:3001`
- Backend API: `http://localhost:3002`

## 🔧 API Endpoints

### Authentication
- `POST /auth/signup` - User registration
- `POST /auth/login` - User login
- `POST /auth/verify` - Token verification
- `POST /auth/logout` - User logout

### Trading Data
- `GET /allHoldings` - Get user holdings
- `GET /allPositions` - Get user positions
- `POST /neworder` - Place new order

## 🌟 Key Achievements

- **Full-Stack Development**: Built complete frontend, backend, and dashboard applications
- **Authentication System**: Implemented secure JWT-based authentication with cross-domain support
- **Production Deployment**: Successfully deployed all services on Render with proper CORS configuration
- **Responsive Design**: Created mobile-friendly interface matching Zerodha's design language
- **Real-time Features**: Integrated real-time data updates and notifications
- **Code Organization**: Maintained clean, modular code structure with proper separation of concerns

## 🚀 Deployment

The application is deployed on Render with the following configuration:

- **Frontend**: Static site deployment with build optimization
- **Backend**: Node.js service with environment variables
- **Dashboard**: Separate static site for trading interface
- **Database**: MongoDB Atlas for production data storage

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Rida Khuraishi**
- GitHub: [@Rida0704](https://github.com/Rida0704)
- LinkedIn: [Connect with me](https://linkedin.com/in/rida-khuraishi)

## 🙏 Acknowledgments

- Inspired by Zerodha's clean and intuitive design
- Built as part of web development learning journey
- Thanks to the open-source community for amazing tools and libraries

---

⭐ **If you found this project helpful, please give it a star!** ⭐
