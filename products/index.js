// product-service/index.js
const express = require("express");
const app = express();
const port = 3002;

const products = [
  { id: 1, name: "Product A" },
  { id: 2, name: "Product B" },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.get("/products/:id", (req, res) => {
  const product = products.find((p) => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});

app.listen(port, () => {
  console.log(`Product Service running on http://localhost:${port}`);
});
