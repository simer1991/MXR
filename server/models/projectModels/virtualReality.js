import mongoose from "mongoose";
import validator from "validator";

const virtualRealitySchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  homePhone: {
    type: String,
    required: [true, "phone number is required"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail],
  },
  companyName: {
    type: String,
    required: true,
  },

  projectType: {
    type: String,
    required: true,
  },
  estimatedBudget: {
    type: Number,
    required: true,
  },
});

const VirtualReality = new mongoose.model(
  "VirtualReality",
  virtualRealitySchema
);

export default VirtualReality;
