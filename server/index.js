const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");
const listingRoutes = require("./routes/ListingsRoute");

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

const app = express();

const FRONTEND_URL = "https://ecommerce-app-eta-five-37.vercel.app";

app.use(
  cors({
    origin: FRONTEND_URL,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/", authRoute);
app.use("/api/listings", listingRoutes);

async function connectDB() {
  try {
    await mongoose.connect(url);
    console.log("db connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
  }
}

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
  connectDB();
});
