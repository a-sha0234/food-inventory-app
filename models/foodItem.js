const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//===============================================
// create schema, export it
//===============================================

const foodSchema = new Schema({
  name: { type: String, required: true },
  Category: { type: String, required: true },
  imageUrl: { type: String, required: true },
  foodDescription: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const food = mongoose.model("fooditem", foodSchema);

module.exports = food;
