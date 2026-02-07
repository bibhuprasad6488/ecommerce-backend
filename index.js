const express = require("express");
const cors = require("cors");

const app = express();

// ✅ Allow requests from frontend
app.use(cors());

app.get("/", (req, res) => {
    res.send("Backend running");
});

app.get("/products", (req, res) => {
  res.json([
    { id: 1, name: "Shoes", price: 100 },
    { id: 2, name: "T-Shirt", price: 40 }
  ]);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
