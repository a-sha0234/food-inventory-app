//imports
const express = require("express");
const { default: mongoose } = require("mongoose");
const monoogse = require("mongoose");
const food = require("./models/foodItem");
const itemRouters = require("./routes/itemRoutes");
const categoryRouter = require("./routes/categoryRoutes");
const fooditem = require("./models/foodItem");
const app = express();

//================================================
// handle database connection and listen for port
//================================================
const port = process.env.PORT || 3000;
const dbUri =
  "mongodb+srv://a1:test@food-inventory.u0y0n.mongodb.net/foodInventory?retryWrites=true&w=majority";

mongoose
  .connect(dbUri, { useNewUrlParser: true })
  .then((result) => app.listen(port))
  .catch((err) => console.log(err));

//================================================
//
//================================================

app.set("view engine", "ejs"); //set views type
app.use(express.static("public")); //make folder public
app.use(express.urlencoded({ extended: true })); //allows for form data to work

//================================================
// routes- for index and create views
//================================================

app.get("/", (req, res) => {
  res.render("index", { title: "home" });
});

app.get("/create", (req, res) => {
  res.render("createItem", { title: "create your item!" });
});

app.use(itemRouters);
app.use(categoryRouter);

//===============================================
// handle 404 page
//===============================================

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
