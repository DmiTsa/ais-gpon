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

const Worker = sequelize.define('worker', {
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

const Cable = sequelize.define('cable', {
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

//table of users
const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoincrement: true },
  name: { type: DataTypes.STRING, unique: true, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  role: { type: DataTypes.STRING, allowNull: false },
});

Pol.hasMany(CableSection);
CableSection.belongsTo(Pol);

InventaryCable.hasMany(CableSection);
CableSection.belongsTo(InventaryCable);

BuildObject.hasMany(InventaryCable);
InventaryCable.belongsTo(BuildObject);

BuildObject.hasMany(InventaryEquip);
InventaryEquip.belongsTo(BuildObject);

BuildObject.hasOne(Worker);
Worker.belongsTo(BuildObject);

BuildObject.hasOne(Order);
Order.belongsTo(BuildObject);

CableSection.hasOne(Cable);
Cable.belongsTo(CableSection);

CableSection.hasOne(CableUnit);
CableUnit.belongsTo(CableSection);

Adress.hasMany(CableUnit);
CableUnit.belongsTo(Adress);

InventaryEquip.hasMany(CableUnit);
CableUnit.belongsTo(InventaryEquip);

module.exports = {
  BuildObject,
  Worker,
  Order,
  InventaryCable,
  InventaryEquip,
  Pol,
  CableSection,
  Adress,
  Cable,
  CableUnit,
  User,
};
