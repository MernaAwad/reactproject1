import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserRoute from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
const app = express();
app.use(express.json());
dotenv.config();
mongoose
  .connect(process.env.REACT_MONGO)
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/user", UserRoute);
app.use("/api/auth", authRoutes);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(4000, () => {
  console.log("server is running on port 4000");
});
