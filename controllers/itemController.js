const fooditem = require("../models/foodItem");
const item_itemsPage = (req, res) => {
  fooditem
    .find()
    .sort({ createAt: -1 })
    .then((result) => {
      res.render("items", { title: "items", food: result });
    });
};

const item_post = (req, res) => {
  const item = new fooditem(req.body);

  item
    .save()
    .then((result) => {
      res.redirect("/items");
    })
    .catch((err) => {
      console.log(err);
    });
};

const item_get_id = () => {
  const id = req.params.id; // get the id of the url, this also lets us find this unique id in the database
  // so we can retrive the correct item that was clicked on
  fooditem.findById(id).then((result) => {
    res.render("foodDetails", { title: "details", foodDetails: result });
  });
};

module.exports = { item_itemsPage, item_post, item_get_id };
