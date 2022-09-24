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
    validate: {
      validator: function (v) {
        return /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/.test(
          v
        );
      },
      message: `${v} is not a valid phone number!`,
    },
    required: [true, "User phone number required"],
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
