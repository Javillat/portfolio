const { Router } = require("express");
const routejs = require("./routejson.js");
const routerMain = Router();

routerMain.use("/json", routejs)

module.exports = routerMain;