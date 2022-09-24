import express from "express";
import { userDetails } from "../controller/contactUs.js";
import { vitrualreality } from "../controller/projectsController/vitualReality.js";

const router = express.Router();

router.post("/user/contact", userDetails);
router.post("/services/user/projects", vitrualreality);

export default router;
