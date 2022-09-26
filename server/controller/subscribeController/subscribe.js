import Subscribe from "../../models/subscribeModel/subscribeModel.js";

export const subscribe = async (req, res) => {
  const { email } = req.body;
  const validateEmail =
    /^[A-Za-z]{1,}[A_Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;

  try {
    if (!email)
      return res
        .status(400)
        .json({ status: "failed", message: "please enter your Email" });
    if (!validateEmail.test(email))
      return res
        .status(400)
        .json({ status: "failed", message: "please Enter a valid email" });
    const subscribeUser = await Subscribe.create({
      email,
    });

    res
      .status(201)
      .json({ status: "sucess", message: "you have successfully subscribed " });
  } catch (error) {}
};
