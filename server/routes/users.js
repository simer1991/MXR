const express = require("express");

const { userDetails } = require("../controller/contactUs.js");
const {
  vitrualreality,
} = require("../controller/projectsController/vitualReality.js");
const { subscribe } = require("../controller/subscribeController/subscribe.js");

const router = express.Router();

router.post("/user/contact", userDetails);

router.post("/services/user/projects", vitrualreality);
router.post("/user/subscribe", subscribe);

module.exports = router;
