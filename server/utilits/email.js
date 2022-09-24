import nodemailer from "nodemailer";

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    // host: process.env.HOST_NAME,
    // port: process.env.PORT_NAME,
    service: "gmail",
    auth: {
      user: "damlashivani82@gmail.com",
      pass: "ifipzqzeyvucvjwn",
    },
  });

  const mailOptions = {
    from: "damlashivani82@gmail.com",
    to: options.email,
    subject: options.subject,
    text: "",
    html: options.html,
  };
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take our messages", success);
    }
  });

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log("Unable to send the mail :", err.message);
    }
    console.log("message sent", info.messageId);
  });
};
export default sendEmail;
