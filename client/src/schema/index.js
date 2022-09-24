import * as YUP from "yup";
const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const contactSchema = YUP.object({
  email: YUP.string().email().required(),
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
  // list: YUP.string().required(),
  estimatedBudget: YUP.number().required(),
});
