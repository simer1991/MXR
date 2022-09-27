import * as YUP from "yup";
const validateEmail =
  /^[A-Za-z]{1,}[A_Za-z_.0-9]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
const phoneRegExp = /^\+?[(]?[0-9]{3}[)]?[- .]?[0-9]{3}[- .]?[0-9]{4,6}$/im;
export const contactSchema = YUP.object({
  email: YUP.string()
    .email()
    .matches(validateEmail, "please enter a valid email")
    .required(),
  text: YUP.string().min(8),
  name: YUP.string().min(2).max(25).required(),
  address: YUP.string().min(10).max(50).required(),
  phoneNumber: YUP.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required(),
});

export const projectSchema = YUP.object({
  firstName: YUP.string().required(),
  lastName: YUP.string().required(),
  homePhone: YUP.string().matches(phoneRegExp, "Phone number is not valid"),
  email: YUP.string().email().required(),
  companyName: YUP.string().required(),
  estimatedBudget: YUP.number().required(),
});

export const subscribeSchema = YUP.object({
  email: YUP.string()
    .email()
    .matches(validateEmail, "Please specify a valid email address.")
    .required("Please specify a valid email address."),
});

export const contactUsSchema = YUP.object({
  email: YUP.string()
    .email()
    .matches(validateEmail, "please enter a valid email")
    .required(),
  text: YUP.string().min(8),
  name: YUP.string().min(2).max(25).required(),
  phoneNumber: YUP.string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required(),
});
