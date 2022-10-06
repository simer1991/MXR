const nodemailer = require("nodemailer");

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    secure: true,
    service: "gmail",
    port: "587",
    auth: {
      user: "mxrsolution@gmail.com",
      pass: "kaskeuypjixjqdfv",
    },
  });

  const mailOptions = {
    from: "mxrsolution@gmail.com",
    to: options.email,
    subject: options.subject,
    text: "",
    html: options.html,
  };
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages");
    }
  });

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log("Unable to send the mail :", err.message);
    }
    console.log("message sent", info.response);
  });
};
module.exports = sendEmail;
