"use strict";

// imports
var express = require("express"),
  router = express.Router(),
  request = require("superagent");

// url
const productServiceHost = process.env.PRODUCT_SERVICE_HOST || "localhost";
const productService = "http://" + productServiceHost + ":9091/api/v1/product/";

// methods
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
router.route("/").get(getAllProducts);
router.route("/:id").get(getProductById);

module.exports = router;
