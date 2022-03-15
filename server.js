const express = require("express");
const { default: mongoose } = require("mongoose");
const monoogse = require("mongoose");

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
  fooditem
    .find()
    .sort({ createAt: -1 })
    .then((result) => {
      res.render("items", { title: "items", food: result });
    });
});

app.get("/categories", (req, res) => {
  // const query1 = { Category: /drink/ }; //regex
  // const query2 = { Category: /snack/ };
  // fooditem.find(query1).then((result) => {
  //   res.render("categories", { title: "categories", Category: result });
  // });
  fooditem
    .find()

    .then((result) => {
      res.render("categories", { title: "categories", categories: result });
    });
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
