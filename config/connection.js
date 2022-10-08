const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE_NAME,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
    dialect: process.env.MYSQL_DIALECT,
    host: process.env.MYSQL_HOST,
  }
);

module.exports = sequelize;




// const Sequelize = require('sequelize');
// require('dotenv').config();

// // create connection to our db
// let sequelize;
// if (process.env.JAWSDB_URL) {
//     sequelize = new Sequelize(process.env.JAWSDB_URL);
// } else {
//     sequelize = new Sequelize(process.env.MYSQL_DBNAME, process.env.MYSQL_USER, process.env.MYSQL_KEY, {
//         host: process.env.MYSQL_HOST,
//         dialect: 'mysql',
//         port: 3306
//     });
// }
// module.exports = sequelize;
