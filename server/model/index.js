const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize('esms00', 'black', 'tikur', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 15,
    min: 0,
    acquire: 300000,
    idle: 100000
  },
  define: {
    timestamps: false,
    freezeTableName: true
  },
  
  logging: true,
});
fs.readdirSync(__dirname)
  .filter(file => file !== 'index.js')
  .forEach(file => {
    // const model = sequelize.import(path.join(__dirname, file));
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);

    db[model.name] = model;
    // console.log(model)
  });

Object.keys(db).forEach(function(modelName) {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
