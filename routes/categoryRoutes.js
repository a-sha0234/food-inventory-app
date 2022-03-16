//imports
const express = require("express");
const fooditem = require("../models/foodItem");
const categoryController = require("../controllers/categoryController");
const router = express.Router();

//===============================================
// handle routes for categories
//===============================================

router.get("/categories", categoryController.get_categories);

router.get("/categories/:id", categoryController.get_categoryId);

module.exports = router;
