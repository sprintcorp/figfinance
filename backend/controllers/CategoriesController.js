const asyncHandler = require("express-async-handler")
const Category = require("../models/Category");
const Categories = require("../data/Categories");

exports.getCategories = asyncHandler(async(req,res,next)=>{
  res.status(200).json({data:await Category.find()});
});

exports.importCategories = asyncHandler(async(req,res,next)=>{
  await Category.deleteMany({});
  const importCategories = await Category.insertMany(Categories);
  res.send({ importCategories });
});
