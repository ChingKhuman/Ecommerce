const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
} = require("../controller/porductControllers");

//@desc  GET all products from db
//@route GET /api/products
//@access Public
router.get("/", getAllProducts);

//@desc  GET all products from db
//@route GET /api/products/:id
//@access Public
router.get("/:id", getProductById);

module.exports = router;
