import mongoose from "mongoose";
import validator from "validator";
const contactSchema = new mongoose.Schema({
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
        return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(
          v
        );
      },
      message: `{v} is not a valid phone number!`,
    },
    required: [true, "User phone number required"],
  },
  text: {
    type: String,
  },
});

const Contact = new mongoose.model("Contact", contactSchema);
export default Contact;
