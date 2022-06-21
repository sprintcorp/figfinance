const jwt = require("jsonwebtoken");
const User = require("../models/User");
const asyncHandler = require("express-async-handler");

//Protect routes
exports.protect = asyncHandler(async(req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    //Set token from header
    token = req.headers.authorization.split(" ")[1];
  }else if(req.cookies.token){
    token = req.cookies.token;
  }

  //make sure token exists
  if (!token) {
    return next(new Error("Not authorized to access this route", 401));
  }
  try {
    //Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id);
    next();
  } catch (err) {
    return next(new Error("Not authorized to access this route", 401));
  }
});

