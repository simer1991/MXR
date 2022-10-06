const mongoose = require("mongoose");
const validator = require("validator");
const subscribeSchema = new mongoose.Schema({
  email: {
    type: String,
    validate: {
      validator: function (v) {
        return /^[A-Za-z]{1,}[A_Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/.test(
          v
        );
      },
      message: `{v} is not a valid Email`,
    },
    required: [true, "User phone number required"],
  },
});

const Subscribe = new mongoose.model("Subscribe", subscribeSchema);

module.exports = Subscribe;
