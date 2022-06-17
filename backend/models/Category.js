const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a title to this category'],
    maxlength: [50, "Name can not be more than 50 characters"],
  },
});

module.exports = mongoose.model('Category', CategorySchema);
