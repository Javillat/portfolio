const { Router } = require('express');
const lng =require('../controller/lng');
const routeren = new Router();

routeren.get('', lng.getEn)

module.exports = routeren;