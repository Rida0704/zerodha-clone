require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require('./models/HoldingsModel');
const { PositionsModel } = require('./models/PositionsModel');
const { OrdersModel } = require('./models/OrdersModel');
const authRoute = require("./Routes/AuthRoutes");

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL || "mongodb://localhost:27017/zerodha_clone";

// ✅ CORS Setup (must be at top)
app.use(cors({
  origin: [
    "http://localhost:3000", 
    "http://localhost:3001",
    "https://zerodha-clone-frontend-rgkn.onrender.com",
    "https://zerodha-clone-dashboard-ce0c.onrender.com"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ✅ Handle preflight requests
app.options("*", cors());

// ✅ Middlewares
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// ✅ Root test route
app.get("/", (req, res) => {
  res.json({ message: "Zerodha Clone API is running" });
});

// ✅ Get all holdings
app.get('/allHoldings', async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch holdings", error: err });
  }
});

// ✅ Get all positions
app.get('/allPositions', async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch positions", error: err });
  }
});

// ✅ Save new order
app.post('/neworder', async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;
    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();
    res.send("Order saved");
  } catch (err) {
    res.status(500).json({ message: "Failed to save order", error: err });
  }
});

// ✅ Auth Routes
app.use("/auth", authRoute);

// ✅ Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", success: false });
});

// ✅ Start server and connect to MongoDB
app.listen(PORT, async () => {
  try {
    console.log("App started on port", PORT);
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
});
