var express = require('express');
var router = express.Router();

const { apply } = require("./controller")

router.get("/", function (req, res, next) {
	res.send("respond with a resource");
});

router.post("/apply", apply)

module.exports = router;