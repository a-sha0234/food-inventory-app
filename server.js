const express = require("express");
const { default: mongoose } = require("mongoose");
const monoogse = require("mongoose");
const food = require("./models/foodItem");
const itemRouters = require("./routes/itemRoutes");
const categoryRouter = require("./routes/categoryRoutes");
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

// app.get("/items", (req, res) => {
//   fooditem
//     .find()
//     .sort({ createAt: -1 })
//     .then((result) => {
//       res.render("items", { title: "items", food: result });
//     });
// });

// app.get("/categories", (req, res) => {
//   fooditem
//     .find()

//     .then((result) => {
//       res.render("categories", { title: "categories", categories: result });
//     });
// });

app.get("/create", (req, res) => {
  res.render("createItem", { title: "create your item!" });
});

app.use(itemRouters);
app.use(categoryRouter);
//===========================================
//POST routes
//===========================================

// app.post("/items", (req, res) => {
//   const item = new fooditem(req.body);

//   item
//     .save()
//     .then((result) => {
//       res.redirect("/items");
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

//===========================================
//url params
//===========================================

// app.get("/items/:id", (req, res) => {
//   const id = req.params.id; // get the id of the url, this also lets us find this unique id in the database
//   // so we can retrive the correct item that was clicked on
//   fooditem.findById(id).then((result) => {
//     res.render("foodDetails", { title: "details", foodDetails: result });
//   });
// });

// app.get("/categories/:id", (req, res) => {
//   const id = req.params.id; // get the id of the url, this also lets us find this unique id in the database
//   // so we can retrive the correct item that was clicked on
//   fooditem.findById(id).then((result) => {
//     res.render("foodDetails", { title: "details", foodDetails: result });
//   });
// });

//===========================================
//404 page
//===========================================

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});

//a1 ,test
