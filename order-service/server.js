"use strict";

// imports
var express = require("express"),
  router = express.Router(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  request = require("request"),
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
const customerService = "http://35.189.92.101:9090/api/v1/customer";

// methods
var getAllCustomers = function (req, res) {
  request.get(
    {
      url: `${customerService}`,
    },
    (err, customerResponse, body) => {
      if (!err) {
        res.status(200).send(body);
      } else {
        res
          .status(400)
          .send({ problem: `Customer service responded with issue ${err}` });
      }
    }
  );
};

var getCustomerById = function (req, res) {
  request.get(
    {
      url: `${customerService}/${req.params.id}`,
    },
    (err, customerResponse, body) => {
      if (!err) {
        res.status(200).send(body);
      } else {
        res
          .status(400)
          .send({ problem: `Customer service responded with issue ${err}` });
      }
    }
  );
};

// route mapping
router.route("/").get(getAllCustomers);
router.route("/:id").get(getCustomerById);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/order", router);

// process specific
app.listen(9000);
module.exports = app;