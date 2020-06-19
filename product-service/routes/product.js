"use strict";

// imports
var express = require("express"),
  router = express.Router();

// constant data
const products = [
  {
    id: 1,
    name: "Peroni"
  },
  {
    id: 2,
    name: "Stella"
  },
  {
    id: 3,
    name: "Guinness"
  },
  {
    id: 4,
    name: "Strongbow"
  },
  {
    id: 5,
    name: "Budweiser"
  },
];

// methods
var getAllProducts = function (req, res) {
  res.status(200).json(products);
};

var getProductById = function (req, res) {
  // console.log(req.params.id);
  res.status(200).json(products[req.params.id]);
};

// routing
router.route("/").get(getAllProducts);
router.route("/:id").get(getProductById);

module.exports = router;
