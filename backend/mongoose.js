const mongoose = require("mongoose");

const Popular = require("./models/popular");
const Offers = require("./models/offers");
const Blog = require("./models/blog");

mongoose
  .connect(
    "your mongodb connection string"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

const createPopular = async (req, res, next) => {
  const createdPopular = new Popular({
    imgSrc: req.body.imgSrc,
    destTitle: req.body.destTitle,
    location: req.body.location,
    grade: req.body.grade,
    id: req.body.id,
  });

  const result = await createdPopular.save();
  console.log(typeof createdPopular._id);
  res.json(result);
};

const getPopular = async (req, res, next) => {
  const popular_data = await Popular.find().exec();
  res.json(popular_data);
};

const createOffers = async (req, res, next) => {
  const createdOffers = new Offers({
    imgSrc: req.body.imgSrc,
    destTitle: req.body.destTitle,
    location: req.body.location,
    price: req.body.price,
  });

  const result = await createdOffers.save();
  console.log(typeof createdOffers._id);
  res.json(result);
};

const getOffers = async (req, res, next) => {
  const offers_data = await Offers.find().exec();
  res.json(offers_data);
};

const createBlog = async (req, res, next) => {
  const createdBlog = new Blog({
    postImage: req.body.postImage,
    title: req.body.title,
    desc: req.body.desc,
  });

  const result = await createdBlog.save();
  console.log(typeof createdBlog._id);
  res.json(result);
};

const getBlog = async (req, res, next) => {
  const blog_data = await Blog.find().exec();
  res.json(blog_data);
};

exports.createPopular = createPopular;
exports.getPopular = getPopular;
exports.createOffers = createOffers;
exports.getOffers = getOffers;
exports.createBlog = createBlog;
exports.getBlog = getBlog;
