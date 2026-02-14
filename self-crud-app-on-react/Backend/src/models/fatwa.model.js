const mongoose = require("mongoose");
const fatwaSchema = new mongoose.Schema({
  image_url: String,
  title: String,
  asker: String,
  question: String,
  answer: String,
  short_description: String,
  mufti: String,
  category: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const fatwa = mongoose.model("fatwa", fatwaSchema);
module.exports = fatwa;
