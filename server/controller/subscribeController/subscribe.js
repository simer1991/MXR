import Subscribe from "../../models/subscribeModel/subscribeModel.js";
import SendEmail from "../../utilits/email.js";

export const subscribe = async (req, res) => {
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
        message: "Please specify a valid email address.",
      });
    const findSubscriber = await Subscribe.findOne({ email: email });
    if (findSubscriber)
      return res.status(400).json({ status: "failed", message: "user exist" });
    await Subscribe.create({
      email,
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
    res.status(201).json({
      status: "sucess",
      message: "you have successfully subscribed ",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong",
    });
  }
};
