const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String,
  price: String,
  imageUrl: String,
  link: String,
  location: String,
});

mongoose.model('phone', productSchema);
