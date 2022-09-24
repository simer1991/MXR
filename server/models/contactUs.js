import mongoose from "mongoose";
import validator from "validator";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [2, "name must be grater than 1 characters"],
    maxlength: [25, "name not be greater than 25 characters"],
    required: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    validate: [validator.isEmail],
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  text: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("User", userSchema);
export default User;
