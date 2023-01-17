import dotenv from 'dotenv';
import express from 'express';
import sequelize from './db.js';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(`ERROR: ${error}`);
  }
};

start();
