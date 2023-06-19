const { Router } = require("express");
const routejs = require("./routejson.js");
const routeres = require("./routeres.js")
const routeren = require("./routeren.js")
const routerMain = Router();

routerMain.use("/json", routejs);
routerMain.use("/en.json", routeren);
routerMain.use("/es.json", routeres);

module.exports = routerMain;