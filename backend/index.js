require('dotenv').config();
const express=require("express");
const app=express();
const mongoose=require("mongoose");
const PORT=process.env.PORT || 3002;
const uri=process.env.MONGO_URL || "mongodb://localhost:27017/zerodha_clone";
const {HoldingsModel}=require('./models/HoldingsModel');
const {PositionsModel}=require('./models/PositionsModel');
const bodyParser=require('body-parser');
const cors=require("cors");
const{OrdersModel}=require('./models/OrdersModel');
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoutes");

app.use(cors({
  origin: [
    "http://localhost:3000"
    "https://zerodha-clone-frontend-rgkn.onrender.com",
    "https://zerodha-clone-dashboard-ce0c.onrender.com"
  ],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Cookie']
}));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());

// app.get('/addHoldings',async(req,res)=>
// {
//     let tempHoldings=[
//         {
//         name: "BHARTIARTL",
//         qty: 2,
//         avg: 538.05,
//         price: 541.15,
//         net: "+0.58%",
//         day: "+2.99%",
//       },
//       {
//         name: "HDFCBANK",
//         qty: 2,
//         avg: 1383.4,
//         price: 1522.35,
//         net: "+10.04%",
//         day: "+0.11%",
//       },
//     ];
//     tempHoldings.forEach((item)=>{
//         let newHolding=new HoldingsModel({
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//         });
//         newHolding.save();

//     });
//     res.send("done");

// });
// app.get('/addPositions',async(req,res)=>
//     {
//         let tempPositions=[
//             {
//                 product: "CNC",
//                 name: "EVEREADY",
//                 qty: 2,
//                 avg: 316.27,
//                 price: 312.35,
//                 net: "+0.58%",
//                 day: "-1.24%",
//                 isLoss: true,
//               },
//               {
//                 product: "CNC",
//                 name: "JUBLFOOD",
//                 qty: 1,
//                 avg: 3124.75,
//                 price: 3082.65,
//                 net: "+10.04%",
//                 day: "-1.35%",
//                 isLoss: true,
//               },
//         ];
//         tempPositions.forEach((item)=>{
//             let newPosition=new PositionsModel({
//                 product:item.product,
//                 name: item.name,
//                 qty: item.qty,
//                 avg: item.avg,
//                 price: item.price,
//                 net: item.net,
//                 day: item.day,
//             });
//             newPosition.save();
    
//         });
//         res.send("done");
    
//     });


app.get('/allHoldings',async(req,res)=>{
    let allHoldings=await HoldingsModel.find({});
    res.json(allHoldings);

});

app.get('/allPositions',async(req,res)=>{
    let allPositions=await PositionsModel.find({});
    res.json(allPositions);

});

app.post('/neworder',async(req,res)=>{
    let newOrder=new OrdersModel({
        name:req.body.name,
        qty:req.body.qty,
        price:req.body.price,
        mode:req.body.mode,
    });
    newOrder.save();
    res.send("order saved");

});
// Add a simple root route for testing
app.get("/", (req, res) => {
  res.json({ message: "Zerodha Clone API is running" });
});

// Mount auth routes at /auth prefix to avoid conflicts
app.use("/auth", authRoute);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!", success: false });
});

app.listen(PORT, async () => {
  try {
    console.log("App started on port", PORT);
    await mongoose.connect(uri);
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error);
    process.exit(1);
  }
});