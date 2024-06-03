const mongoose = require("mongoose");

const popularSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  id: { type: String, required: true },
  destTitle: { type: String, required: true },
  location: { type: String, required: true },
  grade: { type: String, required: true },
});

module.exports = mongoose.model("Popular", popularSchema);
