const User = require("../models/User");
const asyncHandler = require("express-async-handler");

exports.registerUser = asyncHandler(async(req, res, next) => {
  const { email, password} = req.body;
  //Create user
  const user = await User.create({ email, password});
  sendTokenResponse(user, 200, res);

});

exports.loginUser = asyncHandler(async(req, res, next) => {
  const { email, password } = req.body;

  //Validate email and password
  if (!email || !password) {
    return next(new Error('please provide an email and password', 400))
  }
  //Check for user
  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return next(new Error('Invalid credentials', 401))
  }
  //Check if password match
  const isMatch = await user.matchPassword(password);
  if (!isMatch) {
    return next(new Error('Invalid credentials', 401))
  }
  sendTokenResponse(user, 200, res);
});

exports.logoutUser = asyncHandler(async(req, res, next) => {
  res.cookie('token', null, {
    expires: new Date(Date.now()),
    httpOnly: true
  })

  res.status(200).json({
    success: true,
    message: 'Logged out'
  })
});

// Get currently logged in user details   =>   /api/v1/me
exports.getUserProfile = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
      success: true,
      user
  })
};


// Get token from model and send response
const sendTokenResponse = (user, statusCode, res) => {
  //Create token
  const token = user.getSignedJwtToken();

  const options = {
    expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000),
    httpOnly: true
  };
  if (process.env.NODE_ENV === 'production') {
    options.secure = true;
  }
  res.status(statusCode).cookie('token', token, options).json({
      success: true,
      token,
      email: user.email,
      id: user._id,
    })
}
