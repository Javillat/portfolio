const particles = require("./particles.json"); 
const getConfig = (req, res) => {
   try {
       res.status(200).json(particles);
    
   } catch (error) {
    console.log(error.message);
   }
}

module.exports = {
    getConfig,
}