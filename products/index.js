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

app.get("/process-orders", async (req, res) => {
  const processOrders = async () => {
    for (let order_no = 1; order_no <= 10; order_no++) {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      console.log(`Processing Order ${randomNumber}`);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // 2-second delay
    }
  };

  await processOrders();
  res.send("Order processing completed.");
});

app.listen(port, () => {
  console.log(`Product Service running on http://localhost:${port}`);
});
