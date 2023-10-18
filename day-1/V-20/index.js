const express = require("express");
const path = require("path");

const app = express();
const publicPath = path.join(__dirname, "public");

//access with html extension
// app.use(express.static(publicPath));

// access without extension

// app.get("/", (req, res) => {
//   res.sendFile(`${publicPath}/index.html`);
// });
// app.get("/about", (req, res) => {
//   res.sendFile(`${publicPath}/about.html`);
// });
// app.get("/home", (req, res) => {
//   res.sendFile(`${publicPath}/home.html`);
// });
// app.get("*", (req, res) => {
//   res.sendFile(`${publicPath}/pageNotFound.html`);
// });

// v-24
//Ejs template engine used for dynamic pages

// app.set("view engine", "ejs");

// app.get("/profile", (req, res) => {
//   const user = {
//     name: "shivam",
//     batch: "c8",
//     skills: ["html", "css", "js", "react", "redux"],
//   };
//   res.render("profile", { user });
// });

// app.get("/login", (req, res) => {
//   res.render("login");
// });

// v-25 middle ware for routing

const reqFilter = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please provide age");
  } else if (req.query.age < 18) {
    res.send("You can not access this page");
  } else {
    next();
  }
};

app.use(reqFilter);

app.get("/", (req, res) => {
  res.sendFile(`${publicPath}/index.html`);
});
app.get("/about", (req, res) => {
  res.sendFile(`${publicPath}/about.html`);
});
app.get("/home", (req, res) => {
  res.sendFile(`${publicPath}/home.html`);
});

app.listen(5000);
