const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { title: "home" });
});

app.get("/items", (req, res) => {
  res.render("items", { title: "items" });
});

app.get("/categories", (req, res) => {
  res.render("items", { title: "categories" });
});

app.listen(3000);
