const express = require("express");
const bodyParser = require("body-parser");
const mongoPractice = require("./mongoose");

const app = express();

app.use(bodyParser.json());

app.post("/popular", mongoPractice.createPopular);

app.get("/popular", mongoPractice.getPopular);

app.post("/offers", mongoPractice.createOffers);

app.get("/offers", mongoPractice.getOffers);

app.post("/blog", mongoPractice.createBlog);

app.get("/blog", mongoPractice.getBlog);

app.listen(4000);


