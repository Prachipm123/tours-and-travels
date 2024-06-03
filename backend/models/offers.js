const mongoose = require("mongoose");

const offersSchema = new mongoose.Schema({
  imgSrc: { type: String, required: true },
  destTitle: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: String, required: true },
});

module.exports = mongoose.model("Offers", offersSchema);
