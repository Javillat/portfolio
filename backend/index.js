const server = require("./src/app.js"),
  path = require("path"),
  puerto = 3001;

server.listen(puerto, (err) => {
  err
    ? console.log("Error en el puerto ", puerto)
    : console.log("Escuchando en puerto ", puerto);
});
