const express = require("express");
const {registerUser, loginUser, logoutUser} = require("../controllers/AuthController");
const { protect } = require('../middlewares/AuthHandler');
const authRoute = express.Router();

authRoute.post('/register',registerUser);
authRoute.post('/login',loginUser);
authRoute.post('/logout',protect,logoutUser);

module.exports = authRoute;
