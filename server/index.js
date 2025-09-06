const express = require("express");
require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/AuthRoute");

const port = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

const app = express();

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/", authRoute);

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
