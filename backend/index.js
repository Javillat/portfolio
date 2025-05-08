const server = require("./src/app.js")
  path = require("path")
  const { port } = process.env || 3001;

server.listen(port, (err) => {
  err
    ? console.log("Error en el puerto", port)
    : console.log("Escuchando en puerto", port);
});
