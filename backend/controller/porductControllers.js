const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});

    res.json(products);
  } catch (error) {
    console.log(500).json({ message: "Server Error" });
  }
};

const getProductById = async (req, res) => {
  try {
    const products = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.log(500).json({ message: "Server Error" });
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
};
