const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

//creating the GET CALL
// serve the data from backend to frontend through the api

app.get("/", (req, res) => {
  res.send("API is running...");
});

//fetch api for all notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
});

//fetch api for indivisual note
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => (n._id = req.params.id));
  res.send(note);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server running on PORT ${PORT}`));
