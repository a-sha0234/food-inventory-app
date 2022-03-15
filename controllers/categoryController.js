const fooditem = require("../models/foodItem");

const get_categories = (req, res) => {
  fooditem
    .find()

    .then((result) => {
      res.render("categories", { title: "categories", categories: result });
    });
};

const get_categoryId = (req, res) => {
  const id = req.params.id; // get the id of the url, this also lets us find this unique id in the database
  // so we can retrive the correct item that was clicked on
  fooditem.findById(id).then((result) => {
    res.render("foodDetails", { title: "details", foodDetails: result });
  });
};

module.exports = { get_categories, get_categoryId };
