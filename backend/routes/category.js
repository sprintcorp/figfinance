const express = require("express");
const{getCategories,importCategories} = require('../controllers/CategoriesController')

const categoryRoute = express.Router();

categoryRoute.route('/').get(getCategories).post(importCategories);

module.exports = categoryRoute;
