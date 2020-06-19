"use strict";

// imports
var express = require("express"),
  router = express.Router(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json"),
  productRoutes = require("./routes/product");

// pre-requisites
var app = express();
app.use(cors());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/api/v1/product", productRoutes);

module.exports = app;
