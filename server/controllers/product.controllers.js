const { Product } = require("../models");

const createProduct = async (req, res) => {
  const { name, description, image, price } = req.body;
  try {
    const newProduct = await Product.create({
      name,
      description,
      image,
      price,
    });
    res.status(201).send(newProduct);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
};

module.exports = { createProduct };
