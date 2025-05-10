import server from './src/app.js';
import { sequelize } from './src/dbpool.js';

const port = process.env.PORT || 3001;

sequelize.sync({ force: true }).then(() => {
  console.log("Base de datos conectada");
  server.listen(port, (err) => {
    err
      ? console.log("Error en el puerto", port)
      : console.log("Escuchando en puerto", port);
  });
}).catch((err) => {
  console.log("Error en la base de datos", err);
});