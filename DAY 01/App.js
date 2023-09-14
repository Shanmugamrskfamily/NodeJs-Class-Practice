const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
  res.send("Hello, This is My First Node.js App");
});
app.get("/about", (req, res) => {
  res.send("This is the About Page");
});
app.get("/user/:id", (req, res) => {
  const userId = req.params.id;
  res.send(`Given User ID: ${userId}`);
});
app.post("/post-example", (req, res) => {
  res.send("Received a POST request");
});
app.put("/put-example", (req, res) => {
  res.send("Received a PUT request");
});
app.delete("/delete-example", (req, res) => {
  res.send("Received a DELETE request");
});
app.listen(PORT, () => {
  console.log(`Server is Running on http://localhost:${PORT}`);
});
