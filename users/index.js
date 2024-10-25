// user-service/index.js
const express = require("express");
const app = express();
const axios = require("axios");
const port = 3001;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

app.listen(port, () => {
  console.log(`User Service running on http://gs-users:${port}`);
});

const user_request = async () => {
  for (let order_no = 1; order_no <= 10; order_no++) {
    const response = await axios.get("http://gs-products:3002/process-orders");
    console.log(`Processing order batch ${order_no}`);
    await new Promise((resolve) => setTimeout(resolve, 2000));
  }
};

user_request();
