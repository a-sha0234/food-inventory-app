const express = require("express");
const fooditem = require("../models/foodItem");
const itemController = require("../controllers/itemController");
const router = express.Router();

router.get("/items", itemController.item_itemsPage);

router.post("/items", itemController.item_post);

router.get("/items/:id", itemController.item_get_id);

module.exports = router;
