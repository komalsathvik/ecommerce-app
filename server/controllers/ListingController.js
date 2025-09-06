const Listings = require("../models/listingModel");
module.exports.initListings = async (req, res) => {
  try {
    const sampleListings = [
      {
        title: "iPhone 14 Pro",
        description: "Latest Apple smartphone with A16 Bionic chip.",
        category: "Electronics",
        image: "https://via.placeholder.com/200x200.png?text=iPhone+14+Pro",
        price: 1200,
      },
      {
        title: "Nike Running Shoes",
        description: "Comfortable and lightweight shoes for daily runs.",
        category: "Footwear",
        image: "https://via.placeholder.com/200x200.png?text=Nike+Shoes",
        price: 90,
      },
      {
        title: "Wooden Dining Table",
        description: "6-seater wooden dining table for modern homes.",
        category: "Furniture",
        image: "https://via.placeholder.com/200x200.png?text=Dining+Table",
        price: 350,
      },
      {
        title: "Organic Bananas",
        description: "Fresh and organic bananas from local farms.",
        category: "Groceries",
        image: "https://via.placeholder.com/200x200.png?text=Bananas",
        price: 2.5,
      },
      {
        title: "Harry Potter Box Set",
        description: "Complete 7-book collection of Harry Potter series.",
        category: "Books",
        image: "https://via.placeholder.com/200x200.png?text=Harry+Potter",
        price: 70,
      },
      {
        title: 'Samsung 55" 4K TV',
        description: "Smart TV with HDR and streaming apps built-in.",
        category: "Electronics",
        image: "https://via.placeholder.com/200x200.png?text=Samsung+TV",
        price: 600,
      },
      {
        title: "Levi’s Denim Jacket",
        description: "Classic blue denim jacket for all seasons.",
        category: "Clothing",
        image: "https://via.placeholder.com/200x200.png?text=Denim+Jacket",
        price: 75,
      },
      {
        title: "Gaming Laptop",
        description: "High-performance laptop with RTX graphics.",
        category: "Electronics",
        image: "https://via.placeholder.com/200x200.png?text=Gaming+Laptop",
        price: 1500,
      },
    ];

    await Listings.insertMany(sampleListings);

    res.status(201).json({ message: "Sample listings added successfully!" });
  } catch (error) {
    console.error("Error seeding listings:", error);
    res.status(500).json({ message: "Failed to add listings" });
  }
};

module.exports.getListings = async (req, res) => {
  try {
    const products = await Listings.find();
    res.status(200).json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
module.exports.getCategories = async (req, res) => {
  try {
    const categories = await Listings.distinct("category");
    res.status(200).json({ success: true, categories });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

module.exports.getListingsByCategory = async (req, res) => {
  try {
    const category = req.params.name;
    const products = await Listings.find({ category });
    res.status(200).json({ success: true, products });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};
