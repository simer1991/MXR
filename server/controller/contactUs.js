const ContactUs = require("../models/contactUs.js");
const sendEmail = require("../utilits/email");

const userDetails = async (req, res) => {
  let { name, phoneNumber, email, address, text } = req.body;
  const validateMobile =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const validateEmail =
    /^[A-Za-z]{1,}[A_Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  try {
    if (!name || !email || !phoneNumber || !address)
      return res
        .status(400)
        .json({ status: "fails", message: "please fill all the fields" });
    if (!validateMobile.test(phoneNumber)) {
      return res
        .status(400)
        .json({ status: "failed", message: "mobile number is not valid" });
    }
    if (!validateEmail.test(email)) {
      return res
        .status(400)
        .json({ status: "failed", message: "Email is not valid" });
    }
    const user = await ContactUs.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      text: text,
    });

    await sendEmail({
      email: email,
      subject: "thank you for contacting us",
      html: `
    <div style="padding:10px;border-style: ridge">
    <p style="text-transform:capitalize">Hi &nbsp;${name}</p>
    <p>Welcome to  MXR!</p>
    <p>Hope you are doing well. Thank you for contacting us , we will respond to your query within 24 hours.</p>
    <p>Thank you,</p>
    <p>Team MXR</p>
    `,
    });
    await sendEmail({
      email: "mxrsolution@gmail.com",
      subject: " MXR-New User Contacted",
      html: `
    <div style="padding:10px;border-style: ridge">
    
    <h4 style="text-transform:capitalize">New Contact Details</h4>
   
    <p style="text-transform:capitalize">Name:&nbsp;${name}</p>
    <p>Email:&nbsp;${email}</p>
    <p>Mobile Number:&nbsp;${phoneNumber}</p>
    <p>Address:&nbsp;${address}</p>
    <p>Message:&nbsp;${text}</p>
    <p>Thank you,</p>
    <p >Team MXR</p>
    `,
    });

    res.status(201).json({
      sucess: true,
      message: "thank you for contacting us we get back to you soon",
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "something went wrong",
    });
  }
};
module.exports = { userDetails };
