const { Router } = require('express');
const lng = require('../controller/lng');
const routeres = new Router();

routeres.get('', lng.getEs)

module.exports = routeres;