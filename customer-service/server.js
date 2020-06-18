"use strict";

// imports
var express = require("express"),
  router = express.Router(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");

// pre-requisites
var app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

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
var getAllCustomers = function (req, res) {
  res.status(200).json(customers);
};

var getCustomerById = function (req, res) {
  // console.log(req.params.id);
  res.status(200).json(customers[req.params.id]);
};

// routing
router.route("/").get(getAllCustomers);
router.route("/:id").get(getCustomerById);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/customer", router);

// process specific
app.listen(9090);
module.exports = app;
