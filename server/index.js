import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./routes/users.js";
const app = express();
const PORT = process.env.PORT || 5001;

const DBconnect = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connction sucessful");
  } catch (error) {
    console.log(`no connection ${error}`);
    process.exit(1);
  }
};

//MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use("/mxr", userRouter);
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fails",
    message: `can't find the ${req.originalUrl} on this server`,
  });
});
app.listen(PORT, () => {
  DBconnect();
  console.log("connection sucessfull");
});
