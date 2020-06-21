"use strict";

// imports
var express = require("express"),
  router = express.Router(),
  request = require("superagent");

// url
const customerServiceHost = process.env.CUSTOMER_SERVICE_HOST || "localhost";
const customerService =
  "http://" + customerServiceHost + ":9090/api/v1/customer/";

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

// route mapping
router.route("/").get(getAllCustomers);
router.route("/:id").get(getCustomerById);

module.exports = router;
