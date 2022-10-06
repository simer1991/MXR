const Subscribe = require("../../models/subscribeModel/subscribeModel.js");
const sendEmail = require("../../utilits/email");

const subscribe = async (req, res) => {
  const { email } = req.body;
  const validateEmail =
    /^[A-Za-z]{1,}[A_Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

  try {
    if (!email)
      return res
        .status(400)
        .json({ status: "failed", message: "email is a required field" });
    if (!validateEmail.test(email))
      return res.status(400).json({
        status: "failed",
        message: "Please Enter  valid email address.",
      });
    const findSubscriber = await Subscribe.findOne({ email: email });
    if (findSubscriber)
      return res
        .status(400)
        .json({ status: "failed", message: "you have already subscribed" });
    await Subscribe.create({
      email,
    });

    await sendEmail({
      email: email,
      subject: "thank you for contacting us",
      html: `
    <div style="padding:10px;border-style: ridge">
    <p>Welcome to  MXR!</p>
    <p>Hope you are doing well. Thank you for contacting us , we will respond to your query within 24 hours.</p>
    <p>Thank you,</p>
    <p>Team MXR</p>
    `,
    });
    await sendEmail({
      email: "ehmmadaejazz33@gmail.com",
      subject: "MXR-New Subscriber",
      html: `
    <div style="padding:10px;border-style: ridge">
    
    <h4 style="text-transform:capitalize">New Contact Details</h4>
   
   
    <p>Email:&nbsp;${email}</p>
   
   
   
    <p>Thank you,</p>
    <p >Team MXR</p>
    `,
    });
    res.status(201).json({
      status: "sucess",
      message: "you have successfully subscribed ",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = { subscribe };
