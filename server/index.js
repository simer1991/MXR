const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const userRouter = require("./routes/users.js");
const app = express();
const PORT = process.env.PORT || 5000;

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

app.use(cors());
app.use(express.json());
app.use("/", userRouter);
app.all("*", (req, res, next) => {
  res.status(404).json({
    status: "fails",
    message: `can't find the ${req.originalUrl} on this server`,
  });
});
app.listen(PORT, () => {
  DBconnect();
  console.log("connection sucessfull ");
});
