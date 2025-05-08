import { Sequelize } from 'sequelize';
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'postgres' // or 'postgres', 'sqlite', etc. depending on your database
});

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

