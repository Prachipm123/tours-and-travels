const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  postImage: { type: String, required: true },
  title: { type: String, required: true },
  desc: { type: String },
});

module.exports = mongoose.model("Blog", blogSchema);
