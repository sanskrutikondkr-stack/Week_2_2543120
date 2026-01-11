const express = require("express");
const app = express();
app.use(express.json());

let products = [];

app.get("/products", (req, res) => res.json(products));
app.post("/products", (req, res) => {
  products.push(req.body);
  res.json(req.body);
});
app.put("/products/:id", (req, res) => {
  const id = req.params.id;
  products = products.map(p => p.productId === id ? req.body : p);
  res.json(req.body);
});
app.delete("/products/:id", (req, res) => {
  const id = req.params.id;
  products = products.filter(p => p.productId !== id);
  res.sendStatus(200);
});

app.listen(5000, () => console.log("Server running on port 5000"));