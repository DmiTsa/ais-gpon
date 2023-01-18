const sequelize = require('./db.js');
const { DataTypes } = require('sequelize');

const BuildObject = sequelize.define('buildObject', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  codeObject: { type: DataTypes.STRING },
  name: { type: DataTypes.STRING, allowNull: false },
  shortName: { type: DataTypes.STRING },
  beginDate: { type: DataTypes.DATE },
  endDate: { type: DataTypes.DATE },
  //   organization: { type: DataTypes.STRING },
  mainWorker: { type: DataTypes.STRING },
  //   order: { type: DataTypes.STRING },
});

const Workers = sequelize.define('workers', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  nameOrganization: { type: DataTypes.STRING, allowNull: false },
  director: { type: DataTypes.STRING },
});

const Order = sequelize.define('order', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  orderDate: { type: DataTypes.DATE, allowNull: false },
  orderFile: { type: DataTypes.STRING },
});
