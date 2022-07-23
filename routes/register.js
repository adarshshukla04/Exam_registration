var express = require("express");
var router = express.Router();

const{viewRegForm} = require("../controllers/register.js");

router.get("/viewRegForm", viewRegForm);

module.exports = router;