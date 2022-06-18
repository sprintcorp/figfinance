const asyncHandler = require("express-async-handler")
const Category = require("../models/Category");
const Categories = require("../data/Categories");

exports.getCategories = asyncHandler(async(req,res,next)=>{
  res.status(200).json({data:await Category.find()});
});


exports.createCategory = asyncHandler(async (req,res,next)=>{
  const category = await Category.create(req.body);
  res.status(201).json({ success: true, data: category });
});

exports.importCategories = asyncHandler(async(req,res,next)=>{
  const importCategories = await Category.insertMany(Categories);
  res.send({ importCategories });
});
