const express = require("express");
const multer = require("multer");
const { uploadFile } = require("./services/storage.service");
const cors = require("cors");
// models import
const postModel = require("./models/post.model");
const app = express();
app.use(cors());
// middleware - Read JSON formate data
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

// Post Api
app.post("/create-post", upload.single("image"), async (req, res) => {
  const result = await uploadFile(req.file.buffer);
  // Create Document in database
  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption,
  });

  return res.status(201).json({
    massage: `Post created successfully with id ${post._id} and post url ${post.image_url}`,
    post,
  });
});

// Get Api
app.get("/posts", async (req, res) => {
  const posts = await postModel.find();
  res.status(200).json({
    posts,
    massage: "Posts fetched successfully",
  });
});

module.exports = app;
