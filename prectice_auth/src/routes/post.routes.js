const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/post-create", async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      massage: "Unauthorized",
    });
  }
  try {
    const deCoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    res.status(200).json({
      message: "Success",
      deCoded,
    });

    const user = await userModel.findById(deCoded.id);
    console.log(user);
  } catch (err) {
    return res.status(401).json({
      message: "Token Invalid",
    });
  }
});

module.exports = router;
