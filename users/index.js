const express = require("express");

// Initialize Express app
const app = express();
const PORT = 3000;

// Helper function to generate random order IDs
function getRandomOrderId() {
  return Math.floor(Math.random() * 100000);
}

// Helper function to generate random delay (1-5 seconds)
function getRandomDelay() {
  return Math.floor(Math.random() * 5000) + 1000;
}

// Function to simulate a random GET or POST request
function simulateRequest() {
  const isGetRequest = Math.random() < 0.5; // 50% chance for GET or POST
  const orderId = getRandomOrderId();

  if (isGetRequest) {
    console.log(`GET Request: Retrieving Order ID ${orderId}`);
  } else {
    console.log(`POST Request: Processing Order ID ${orderId}`);
  }

  // Schedule the next simulated request randomly between 1-5 seconds
  setTimeout(simulateRequest, getRandomDelay());
}

// Define routes for the Express server
app.get("/order", (req, res) => {
  const randomOrderId = getRandomOrderId();
  console.log(`GET Request Received: Order ID ${randomOrderId}`);
  res.json({ message: `Order ID ${randomOrderId} retrieved successfully.` });
});

app.post("/order", (req, res) => {
  const randomOrderId = getRandomOrderId();
  console.log(`POST Request Received: Order ID ${randomOrderId}`);
  res.json({ message: `Order ID ${randomOrderId} processed successfully.` });
});

// Start the Express server and the simulated requests
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  simulateRequest(); // Start simulating requests once the server is up
});
