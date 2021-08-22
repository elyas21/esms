// const Sequelize = require("sequelize");

// module.exports = new Sequelize("kiotSys37", "root", null, {
//     host: 'localhost',
//     dialect: 'mysql',
//     pool: {
//         max: 5,
//         min: 0,
//         acquire: 30000,
//         idle: 10000
//     }, define: {
//         timestamps: false,
//         freezeTableName: true,
//     }
// });
const path = require('path');

module.exports = {
  port: process.env.PORT || 3306,
  db: {
    database: process.env.DB_NAME || 'schoolNew',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '',
    options: {
      dialect: process.env.DIALECT || 'mysql',
      host: process.env.HOST || 'localhost'
      //   storage: path.resolve(__dirname, '../../tabtracker.sqlite')
    },
    define: {
      timestamps: false,
      freezeTableName: true
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
};
