"use strict";

// imports
var express = require("express"),
  router = express.Router(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  request = require("superagent"),
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

// url
const customerServiceHost = process.env.CUSTOMER_SERVICE_HOST || "localhost";
const customerService =
  "http://" + customerServiceHost + ":9090/api/v1/customer/";

const productServiceHost = process.env.PRODUCT_SERVICE_HOST || "localhost";
const productService = "http://" + productServiceHost + ":9091/api/v1/product/";

// methods
var getAllCustomers = function (req, res, next) {
  request
    .get(customerService)
    .then((resp) => {
      res.status(200).send(resp.body);
    })
    .catch((err) => {
      res
        .status(400)
        .send({ problem: `Customer service responded with issue ${err}` });
    });
};

var getCustomerById = function (req, res, next) {
  request
    .get(customerService + req.params.id)
    .then((resp) => {
      res.status(200).send(resp.body);
    })
    .catch((err) => {
      res
        .status(400)
        .send({ problem: `Customer service responded with issue ${err}` });
    });
};

var getAllProducts = function (req, res, next) {
  request
    .get(productService)
    .then((resp) => {
      res.status(200).send(resp.body);
    })
    .catch((err) => {
      res
        .status(400)
        .send({ problem: `Product service responded with issue ${err}` });
    });
};

var getProductById = function (req, res, next) {
  request
    .get(productService + req.params.id)
    .then((resp) => {
      res.status(200).send(resp.body);
    })
    .catch((err) => {
      res
        .status(400)
        .send({ problem: `Product service responded with issue ${err}` });
    });
};

// route mapping
router.route("/customer").get(getAllCustomers);
router.route("/customer/:id").get(getCustomerById);
router.route("/product").get(getAllProducts);
router.route("/product/:id").get(getProductById);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/order", router);

// process specific
app.listen(9000);
module.exports = app;
