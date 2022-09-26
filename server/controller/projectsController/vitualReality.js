import VirtualReality from "../../models/projectModels/virtualReality.js";

export const vitrualreality = async (req, res) => {
  const validateMobile =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const validateEmail =
    /^[A-Za-z]{1,}[A_Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  const {
    firstName,
    lastName,
    email,
    homePhone,
    companyName,
    projectType,
    estimatedBudget,
  } = req.body;
  try {
    if (
      !firstName ||
      !lastName ||
      !homePhone ||
      !projectType ||
      !estimatedBudget ||
      !email ||
      !companyName
    )
      return res
        .status(400)
        .json({ status: "failed", message: "Please fill the required fields" });
    if (!validateMobile.test(homePhone))
      return res
        .status(400)
        .json({ status: "failed", message: "mobile number is not valid" });
    if (!validateEmail.test(email))
      return res
        .status(400)
        .json({ status: "failed", message: "Email is not valid" });
    if (estimatedBudget === "0")
      return res.status(400).json({
        status: "failed",
        message: "EstimatedBudget should be  greater than 0",
      });
    const virtual = await VirtualReality.create({
      firstName: firstName,
      lastName: lastName,
      homePhone: homePhone,
      email: email,
      companyName: companyName,
      projectType: projectType,
      estimatedBudget: estimatedBudget,
    });

    res.status(201).json({
      status: "sucess",
      virtual,
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: "something went wrong",
    });
  }
};
