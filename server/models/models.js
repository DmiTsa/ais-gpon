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

const InventaryCable = sequelize.define('inventaryCable', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const InventaryEquip = sequelize.define('inventaryEquip', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
});

const Pol = sequelize.define('pol', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  info: { type: DataTypes.STRING },
});

const CableSection = sequelize.define('cableSection', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  length: { type: DataTypes.INTEGER },
  lengthCanal: { type: DataTypes.INTEGER },
  lengthWall: { type: DataTypes.INTEGER },
  lengthGround: { type: DataTypes.INTEGER },
});

const Adress = sequelize.define('adress', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  street: { type: DataTypes.STRING, allowNull: false },
  house: { type: DataTypes.STRING, allowNull: false },
  apartment: { type: DataTypes.STRING },
  building: { type: DataTypes.STRING },
});

const Cables = sequelize.define('cables', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  name: { type: DataTypes.STRING, allowNull: false },
  capacity: { type: DataTypes.INTEGER, allowNull: false },
  descr: { type: DataTypes.STRING },
});

const CableUnit = sequelize.define('cableUnit', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  type: { type: DataTypes.STRING, allowNull: false },
  name: { type: DataTypes.STRING, allowNull: false },
});