const express = require("express");
const { default: mongoose } = require("mongoose");
const monoogse = require("mongoose");
const food = require("./models/foodItem");
const fooditem = require("./models/foodItem");
const app = express();

const dbUri =
  "mongodb+srv://a1:test@food-inventory.u0y0n.mongodb.net/foodInventory?retryWrites=true&w=majority";

mongoose
  .connect(dbUri, { useNewUrlParser: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index", { title: "home" });
});

app.get("/items", (req, res) => {
  res.render("items", { title: "items" });
});

app.get("/categories", (req, res) => {
  res.render("items", { title: "categories" });
});

app.get("/create", (req, res) => {
  res.render("createItem", { title: "create your item!" });
});

//===========================================
//POST routes
//===========================================

app.post("/items", (req, res) => {
  const item = new fooditem(req.body);

  item
    .save()
    .then((result) => {
      res.redirect("/items");
    })
    .catch((err) => {
      console.log(err);
    });
});

//===========================================
//404 page
//===========================================

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

//a1 ,test
