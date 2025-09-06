const express = require("express");
const {
  initListings,
  getListings,
  getCategories,
  getListingsByCategory,
} = require("../controllers/ListingController");

const router = express.Router();

router.post("/init-listings", initListings);
router.get("/", getListings);
router.get("/categories", getCategories);
router.get("/category/:name", getListingsByCategory);

module.exports = router;
