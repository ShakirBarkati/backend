const mongoose = require("mongoose");

async function connectDB() {
  mongoose.connect(process.env.MONGODB_URL);
  console.log("DB connected");
}

module.exports = connectDB;
