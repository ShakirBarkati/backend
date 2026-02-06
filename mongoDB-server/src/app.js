const express = require("express");
const app = express();
app.use(express.json());
// Model import

// Note Model import
const noteModel = require("./models/note.model");
// Post Api
app.post("/notes", async (req, res) => {
  const data = req.body;

  //   Add a note
  await noteModel.create({
    title: data.title,
    description: data.description,
  });
  //   send a msg
  res.status(201).json({
    message: "Note added successfully",
  });
});

// Get Api - Read Api
app.get("/notes", async (req, res) => {
  //   const data = await noteModel.find(); // Array []
  const data = await noteModel.find(); // Array []
  res.status(201).json({
    massage: "notes fetched successfully",
    notes: data,
  });
});

// Delete API
app.delete("/notes/:id", async (req, res) => {
  const id = req.params.id;
  await noteModel.findByIdAndDelete({
    _id: id,
  });
  res.status(200).json({
    massage: "note deleted successfully",
    idNumber: id,
  });
});

// Update API

app.patch("/notes/:id", async (req, res) => {
  const id = req.params.id;
  const description = req.body.description;
  await noteModel.findByIdAndUpdate(
    { _id: id },
    {
      description: description,
    },
    {
      new: true,
    },
  );

  const document = await noteModel.findById(id);
  res.status(200).json({
    massage: "note updated successfully",
    document: document,
  });
});
module.exports = app;
