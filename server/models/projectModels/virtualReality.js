const mongoose = require("mongoose");
const validator = require("validator");

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

module.exports = VirtualReality;
