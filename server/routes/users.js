import express from "express";
import { userDetails } from "../controller/contactUs.js";
import { vitrualreality } from "../controller/projectsController/vitualReality.js";
import { subscribe } from "../controller/subscribeController/subscribe.js";

const router = express.Router();

router.post("/user/contact", userDetails);
router.post("/services/user/projects", vitrualreality);
router.post("/user/subscribe", subscribe);

export default router;
