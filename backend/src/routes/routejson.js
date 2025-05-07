const { Router } = require("express");
const json = require("../controller/jsonfn.js");
const routerjson = Router();

routerjson.get("", json.getConfig);

module.exports = routerjson;