"use strict";

// imports
var express = require("express"),
  router = express.Router(),
  bodyParser = require("body-parser"),
  cors = require("cors"),
  swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json"),
  customerRoutes = require("./routes/customer");

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
app.use("/api/v1/customer", customerRoutes);

module.exports = app;
