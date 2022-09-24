import express from "express";
import { userDetails } from "../controller/contactUs.js";
import { vitrualreality } from "../controller/projectsController/vitualReality.js";

const router = express.Router();

router.post("/contact/user", userDetails);
router.post("/services/user/projects",vitrualreality)

export default router;
