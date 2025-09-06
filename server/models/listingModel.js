const mongoose = require("mongoose");
const listingSchema = mongoose.Schema({
  title: String,
  description: String,
  category: String,
  image: String,
  price: Number,
});
const Listings = mongoose.model("Listings", listingSchema);
module.exports = Listings;
