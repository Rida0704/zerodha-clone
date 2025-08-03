const User = require("../models/Usermodels");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createSecretToken } = require("../util/secretToken");

module.exports.Signup = async (req, res, next) => {
  try {
    console.log("Signup request received:", req.body);
    const { email, password, username } = req.body;
    
    if (!email || !password || !username) {
      return res.status(400).json({ message: "All fields are required", success: false });
    }
    
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists", success: false });
    }
    
    const user = await User.create({ email, password, username });
    const token = createSecretToken(user._id);
    
    res.cookie("token", token, {
      withCredentials: true,
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production', // Secure in production
      sameSite: 'lax'
    });
    
    console.log("User created successfully:", user.email);
    res.status(201).json({ message: "User signed in successfully", success: true, user: { email: user.email, username: user.username } });
  } catch (error) {
    console.error("Signup error:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
}

module.exports.verifyUser = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    console.log("Verifying token:", token ? "Token exists" : "No token");
    if (!token) {
      return res.json({ status: false, message: "No token found" });
    }
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "your-secret-key");
    const user = await User.findById(decoded.id);
    
    if (!user) {
      return res.json({ status: false, message: "User not found" });
    }
    
    res.json({ status: true, user: user.username });
  } catch (error) {
    console.error(error);
    res.json({ status: false, message: "Invalid token" });
  }
};

module.exports.Login = async (req, res, next) => {
  try {
    console.log("Login request received:", req.body);
    const { email, password } = req.body;
    
    if(!email || !password ){
      console.log("Missing email or password");
      return res.status(400).json({message:'All fields are required', success: false})
    }
    
    console.log("Looking for user with email:", email);
    const user = await User.findOne({ email });
    if(!user){
      console.log("User not found for email:", email);
      return res.status(400).json({message:'Incorrect password or email', success: false }) 
    }
    
    console.log("User found, comparing passwords...");
    const auth = await bcrypt.compare(password,user.password)
    if (!auth) {
      console.log("Password mismatch for user:", email);
      return res.status(400).json({message:'Incorrect password or email', success: false }) 
    }
    
     const token = createSecretToken(user._id);
     console.log("Token created:", token ? "Token exists" : "No token");
     
     res.cookie("token", token, {
       withCredentials: true,
       httpOnly: false,
       secure: process.env.NODE_ENV === 'production', // Secure in production
       sameSite: 'lax'
     });
    
     console.log("Cookie set successfully");
    console.log("User logged in successfully:", user.email);
    res.status(200).json({ message: "User logged in successfully", success: true });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
}

module.exports.Logout = async (req, res, next) => {
  try {
    res.cookie("token", "", {
      httpOnly: true,
      expires: new Date(0),
    });
    res.status(200).json({ message: "Logged out successfully", success: true });
  } catch (error) {
    console.error("Logout error:", error);
    res.status(500).json({ message: "Internal server error", success: false });
  }
};