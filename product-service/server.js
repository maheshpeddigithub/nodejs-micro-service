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
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/product", router);

// process specific
app.listen(9091);
module.exports = app;
