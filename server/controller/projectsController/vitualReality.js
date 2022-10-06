const VirtualReality = require("../../models/projectModels/virtualReality.js");
const sendEmail = require("../../utilits/email");

const vitrualreality = async (req, res) => {
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
        message: "Estimated Budget should be  greater than 0",
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

    await sendEmail({
      email: email,
      subject: "thank you for contacting us",
      html: `
    <div style="padding:10px;border-style: ridge">
    <p style="text-transform:capitalize">Hi &nbsp; ${firstName}&nbsp;${lastName}</p>
    <p>Welcome to  MXR!</p>
    <p>Hope you are doing well. Thank you for contacting us , we will respond to your query within 24 hours.</p>
    <p>Thank you,</p>
    <p>Team MXR</p>
    `,
    });
    await sendEmail({
      email: "mxrsolution@gmail.com",
      subject: "MXR-New Project Details",
      html: `
    <div style="padding:10px;border-style: ridge">
    
    <h4 style="text-transform:capitalize">New Contact Details</h4>
   
    <p style="text-transform:capitalize">Name: &nbsp;${firstName}&nbsp;${lastName}</p>
    <p>Email:&nbsp;${email}</p>
    <p>Mobile Number:&nbsp;${homePhone}</p>
    <p style="text-transform:capitalize">Project:&nbsp;${projectType}</p>
    <p style="text-transform:capitalize">Company Name:&nbsp;${companyName}</p>
    <p  style="text-transform:capitalize">Estimated Budget:&nbsp;${estimatedBudget}</p>
    <p>Thank you,</p>
    <p >Team MXR</p>
    `,
    });
    res.status(201).json({
      status: "sucess",
      message: "thankyou we will get back you soon",
    });
  } catch (error) {
    res.status(500).json({
      status: "failed",
      message: error.message,
    });
  }
};

module.exports = { vitrualreality };
