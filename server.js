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

app.get("/create", (req, res) => {
  res.render("createItem", { title: "create your item!" });
});

app.use(itemRouters);
app.use(categoryRouter);

//===========================================
//404 page
//===========================================

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
