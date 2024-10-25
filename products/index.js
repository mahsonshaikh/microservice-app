const express = require("express");

// Initialize Express app
const app = express();
const PORT = 3000;

function getRandomOrderId() {
  return Math.floor(Math.random() * 100000); // Generate a random number between 0 and 99999
}

function getRandomDelay() {
  return Math.floor(Math.random() * 5000) + 1000; // Random delay between 1000ms and 5000ms
}

function processOrder() {
  const orderId = getRandomOrderId();
  console.log(`Processing Order ID: ${orderId}`);

  const nextDelay = getRandomDelay();
  setTimeout(processOrder, nextDelay); // Schedule the next order processing
}

// Start processing orders
processOrder();

// Define a simple route to test the server
app.get("/", (req, res) => {
  res.send(
    "Express server is running! Random orders are being processed in the background."
  );
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
