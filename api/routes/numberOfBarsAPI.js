var express = require("express");
var router = express.Router();

let numberOfBars = 0;

router.get("/", function(req, res, next) {
  res.send(`${numberOfBars}`);
});

router.get("/inc", function(req, res, next) {
  numberOfBars++;
  res.send(`${numberOfBars}`);
});

router.get("/dec", function(req, res, next) {
  numberOfBars--;
  res.send(`${numberOfBars}`);
});

module.exports = router;
