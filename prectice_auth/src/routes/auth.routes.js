const express = require("express");
const authControllers = require("../controllers/auth.controller");




const router = express.Router();

// Register Api
router.post("/register", authControllers.userRegister);
router.get("/getUsersCookies", authControllers.getUsersCookies);
module.exports = router;
