"use strict";

// imports
var express = require("express"),
  router = express.Router();

// constant data
const customers = [
  {
    id: 1,
    name: "John",
    active: false,
  },
  {
    id: 2,
    name: "David",
    active: false,
  },
  {
    id: 3,
    name: "Cooper",
    active: true,
  },
  {
    id: 4,
    name: "Mike",
    active: false,
  },
  {
    id: 5,
    name: "Steve",
    active: true,
  },
];

// methods
var getAllCustomers = function (req, res, next) {
  res.json(customers);
};

var getCustomerById = function (req, res, next) {
  res.json(customers[req.params.id]);
};

// routing
router.route("/").get(getAllCustomers);
router.route("/:id").get(getCustomerById);

module.exports = router;
