const express = require("express");
const multer = require("multer");
const cors = require("cors");
const app = express();

// Service's
const { uploadImage } = require("./services/imagekit_storage.service");

const fatwaModel = require("./models/fatwa.model");
app.use(cors());
app.use(express.json());
module.exports = app;

// form data readability by multer
const upload = multer({ storage: multer.memoryStorage() });

// post Api

app.post("/create-fatwa", upload.single("image_url"), async (req, res) => {
  console.log(req.body);
  const buffer = req.file.buffer;
  const result = await uploadImage(buffer);
  // Create fatwa in DB
  await fatwaModel.create({
    image_url: result.url,
    title: req.body.title,
    asker: req.body.asker,
    question: req.body.question,
    answer: req.body.answer,
    short_description: req.body.short_description,
    mufti: req.body.mufti,
    category: req.body.category,
  });
  res.status(200).json({ message: "Fatwa created successfully" });
});

// Get Api

app.get("/fatwas", async (req, res) => {
  await fatwaModel.find().then((fatwas) => res.status(200).json(fatwas));
});
