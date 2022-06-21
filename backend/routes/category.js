const express = require("express");
const{getCategories,createCategory,importCategories} = require('../controllers/CategoriesController');

const categoryRoute = express.Router();

categoryRoute.route('/').get(getCategories).post(createCategory);
categoryRoute.post('/import',importCategories)
module.exports = categoryRoute;
