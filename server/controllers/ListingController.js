const Listings = require("../models/listingModel");
module.exports.initListings = async (req, res) => {
  try {
    const sampleListings = [
      {
        title: "MacBook Air M2",
        description: "Lightweight laptop with Apple’s M2 chip.",
        category: "Electronics",
        image:
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-m2-2022?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1653493200200",
        price: 1300,
      },
      {
        title: "Sony WH-1000XM5",
        description: "Noise-cancelling wireless headphones.",
        category: "Electronics",
        image:
          "https://m.media-amazon.com/images/I/61Id6p-m3oL._AC_SL1500_.jpg",
        price: 400,
      },
      {
        title: "Fresh Apples (1kg)",
        description: "Crisp and juicy red apples.",
        category: "Groceries",
        image: "https://m.media-amazon.com/images/I/71l1yCK1RHL._SL1500_.jpg",
        price: 3.5,
      },
      {
        title: "Whole Wheat Bread",
        description: "Soft and healthy bread made with whole grains.",
        category: "Groceries",
        image: "https://m.media-amazon.com/images/I/81VBbwYB9cL._SL1500_.jpg",
        price: 2,
      },
      {
        title: "Coca-Cola Pack (6 bottles)",
        description: "Refreshing soft drink multipack.",
        category: "Groceries",
        image: "https://m.media-amazon.com/images/I/71y5n7LQ2fL._SL1500_.jpg",
        price: 5,
      },
      {
        title: "The Alchemist",
        description: "Best-selling novel by Paulo Coelho.",
        category: "Books",
        image: "https://m.media-amazon.com/images/I/71aFt4+OTOL.jpg",
        price: 15,
      },
      {
        title: "Rich Dad Poor Dad",
        description: "Personal finance book by Robert Kiyosaki.",
        category: "Books",
        image: "https://m.media-amazon.com/images/I/81bsw6fnUiL.jpg",
        price: 12,
      },
      {
        title: "Kindle Paperwhite",
        description: "E-reader with high-resolution display and backlight.",
        category: "Electronics",
        image:
          "https://m.media-amazon.com/images/I/61f2PZ1r9rL._AC_SL1000_.jpg",
        price: 140,
      },
      {
        title: "Bluetooth Speaker",
        description: "Portable speaker with powerful sound.",
        category: "Electronics",
        image: "https://m.media-amazon.com/images/I/71QqkPUZz7L._SL1500_.jpg",
        price: 60,
      },
      {
        title: "Adidas Ultraboost Shoes",
        description: "High-performance running shoes with energy return.",
        category: "Footwear",
        image: "https://m.media-amazon.com/images/I/81cHB2lFlkL._SL1500_.jpg",
        price: 180,
      },
      {
        title: "Samsung Galaxy S23",
        description: "Flagship Android smartphone with powerful camera.",
        category: "Electronics",
        image: "https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg",
        price: 999,
      },
      {
        title: "Instant Pot Duo 7-in-1",
        description: "Electric pressure cooker, rice cooker, and steamer.",
        category: "Home Appliances",
        image:
          "https://m.media-amazon.com/images/I/71agq8A6tML._AC_SL1500_.jpg",
        price: 120,
      },
      {
        title: "Office Chair Ergonomic",
        description: "Mesh back, lumbar support, and adjustable height.",
        category: "Furniture",
        image:
          "https://m.media-amazon.com/images/I/71IJiSUnfIL._AC_SL1500_.jpg",
        price: 220,
      },
      {
        title: "Basketball Spalding NBA",
        description: "Official size and weight, suitable for indoor/outdoor.",
        category: "Sports",
        image:
          "https://m.media-amazon.com/images/I/91ktcpV+b6L._AC_SL1500_.jpg",
        price: 30,
      },
      {
        title: "Canon EOS Rebel T7",
        description: "DSLR camera with 18-55mm lens kit.",
        category: "Electronics",
        image:
          "https://m.media-amazon.com/images/I/914hFeTU2-L._AC_SL1500_.jpg",
        price: 450,
      },
      {
        title: "Air Fryer 5.8QT",
        description: "Healthy oil-free cooking with digital controls.",
        category: "Home Appliances",
        image:
          "https://m.media-amazon.com/images/I/71k+F4I54sL._AC_SL1500_.jpg",
        price: 110,
      },
      {
        title: "Yoga Mat Non-Slip",
        description: "Thick exercise mat for yoga and workouts.",
        category: "Sports",
        image:
          "https://m.media-amazon.com/images/I/81wFjmDXHvL._AC_SL1500_.jpg",
        price: 25,
      },
      {
        title: "Ray-Ban Sunglasses",
        description: "Classic aviator sunglasses with UV protection.",
        category: "Accessories",
        image:
          "https://m.media-amazon.com/images/I/61tB9k13uFL._AC_SL1500_.jpg",
        price: 150,
      },
      {
        title: "Apple Watch Series 9",
        description: "Smartwatch with fitness tracking and notifications.",
        category: "Electronics",
        image:
          "https://m.media-amazon.com/images/I/71vCuRn5UQL._AC_SL1500_.jpg",
        price: 399,
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
