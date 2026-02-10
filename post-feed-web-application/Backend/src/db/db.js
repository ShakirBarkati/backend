const mongoose = require("mongoose");
async function connectDb() {
  mongoose.connect(process.env.MONGO_URI);
  console.log("Connected to DB");
}

module.exports = connectDb;
