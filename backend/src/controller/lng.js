const es = require('../config/es.json');
const en = require('../config/en.json');

getEs = async(req, res) => {
    try {
        const getes = (es);
        return await res.status(201).send(getes)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

getEn = async(req, res) => {
    try {
        const geten = (en);
        return await res.status(201).send(geten)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    getEs,
    getEn,
}