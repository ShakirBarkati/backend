const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(
    "mongodb+srv://Salman:XdcBrKtpw5urokpg@luxurystay.vqnzjsn.mongodb.net/first",
  );
  console.log("Database connected");
}

module.exports = connectDB;
