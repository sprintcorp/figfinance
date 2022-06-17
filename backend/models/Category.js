const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
  title: {
    type: name,
    required: [true, 'Please add a title to this category'],
    maxlength: [50, "Name can not be more than 50 characters"],
  },
});
CategorySchema.virtual('event', {
  ref: 'Event',
  localField: '_id',
  foreignField: 'category',
  justOne: false
});
module.exports = mongoose.model('Category', CategorySchema);
