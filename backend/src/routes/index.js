import { Router } from "express";
// const routejs = require("./routejson.js");
// const routeres = require("./routeres.js")
// const routeren = require("./routeren.js")
import routePost from "./routePosts.js";

const routerMain = Router();

console.log("Route main initialized");

routerMain.use("/api/v1/blog", routePost);
// routerMain.use("/json", routejs);
// routerMain.use("/en.json", routeren);
// routerMain.use("/es.json", routeres);

// module.exports = routerMain;
export default routerMain;
// This file sets up the main router for the application, integrating various routes.