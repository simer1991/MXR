import User from "../models/contactUs.js";
import SendEmail from "../utilits/email.js";

export const userDetails = async (req, res) => {
  let { name, phoneNumber, email, address, text } = req.body;
  try {
    if (!name || !email || !phoneNumber || !address)
      return res
        .status(400)
        .json({ status: "fails", message: "please fill all the fields" });
    const user = await User.create({
      name: name,
      email: email,
      phoneNumber: phoneNumber,
      address: address,
      text: text,
    });

    await SendEmail({
      email: email,
      subject: "thank you for contacting us we will get back to you soon",
      message: "thank you for contacting",
      html: `
    <div style="padding:10px;border-style: ridge">
    <p>Hello</p>
    <p>Welcome to our newsletter!</>
    <p>Please confirm your subscription to our list by clicking the link below:</p>
    <p>Click <a href="https://www.mxr.ai/?mailpoet_page=subscriptions&mailpoet_router&endpoint=subscription&action=confirm&data=eyJ0b2tlbiI6IjQwMThlYWU2NTkzZGZjYmM3NGQ0Yjc5ODc4MDFmNzI4IiwiZW1haWwiOiJkYW1sYXNoaXZhbmk4MkBnbWFpbC5jb20ifQ' + recovery_token + '">I confirm my subscription!</a></p>
    <p>Thank you,</p>
    <p>The Team</p>
    `,
    });
    await SendEmail({
      email: "ehmmadaejazz33@gmail.com",
      subject: "user contact details",
      html: `
    <div style="padding:10px;border-style: ridge">
    <p>Hello</p>
    <p>user Details!</>
    <p>userName:${name}</p>
    <p>Email:${email}</p>
    <p>Mobile Number:${phoneNumber}</p>
    <p>address:${address}</p>
    <p>Click <a href="https://www.mxr.ai/?mailpoet_page=subscriptions&mailpoet_router&endpoint=subscription&action=confirm&data=eyJ0b2tlbiI6IjQwMThlYWU2NTkzZGZjYmM3NGQ0Yjc5ODc4MDFmNzI4IiwiZW1haWwiOiJkYW1sYXNoaXZhbmk4MkBnbWFpbC5jb20ifQ' + recovery_token + '">I confirm my subscription!</a></p>
    <p>Thank you,</p>
    <p>The MXR</p>
    `,
    });

    res.status(201).json({
      sucess: true,
      message: "thank you for contacting us we get back to you soon",
      data: {
        user,
      },
    });
  } catch (error) {
    res.status(500).json({
      sucess: false,
      message: "something went wrong",
    });
  }
};