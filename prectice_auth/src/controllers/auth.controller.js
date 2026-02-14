const userModel = require("../models/user.model");

const jwt = require("jsonwebtoken");

// Register User Logic
const userRegister = async (req, res) => {
  try {
    const { userName, email, password } = req.body;

    const emailIsAlreadyExist = await userModel.findOne({ email });
    if (emailIsAlreadyExist) {
      return res.status(409).json({
        message: "Email already exists",
      });
    }
    const user = await userModel.create({
      userName,
      email,
      password,
    });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY);

    res.cookie("token", token);

    res.status(201).json({
      message: "User Created Successfully",
      user,
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    res.status(500).json({
      message: "Server Error",
      error,
    });
  }
};

// Get Api
const getUsersCookies = async (req, res) => {
  console.log(req.cookies);
  res.status(200).json({
    message: "Success",
    cookies: req.cookies,
  });
};

module.exports = { userRegister, getUsersCookies };
