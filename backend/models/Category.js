const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const CategorySchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    required: [true, 'Please add a title to this category'],
    maxlength: [50, "Name can not be more than 50 characters"],
  },
});

CategorySchema.plugin(uniqueValidator);
module.exports = mongoose.model('Category', CategorySchema);
