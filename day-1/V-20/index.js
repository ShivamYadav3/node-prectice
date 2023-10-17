const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

//access with html extension
// app.use(express.static(publicPath));

// access without extension

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/home", (req, res) => {
  res.sendFile(`${publicPath}/home.html`);
});
app.get("*", (req, res) => {
  res.sendFile(`${publicPath}/pageNotFound.html`);
});

app.listen(5000);
