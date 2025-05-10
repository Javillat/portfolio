import { Sequelize } from 'sequelize';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres',
  logging: false,
});

const models = {};
const modelsPath = path.join(__dirname, 'models');

const loadModels = async () => {
  const files = fs.readdirSync(modelsPath)
    .filter((file) => file.indexOf('.') !== 0 && file.slice(-3) === '.js');

  for (const file of files) {
    const modelPath = pathToFileURL(path.join(modelsPath, file)).href; // Convertir a URL válida
    const model = (await import(modelPath)).default(sequelize, Sequelize.DataTypes);
    models[model.name] = model;
  }

  Object.keys(models).forEach((modelName) => {
    if (models[modelName].associate) {
      models[modelName].associate(models);
    }
  });

  sequelize.models = models;
  console.log('Models:', sequelize.models);
};

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
  await loadModels();
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

export default sequelize;