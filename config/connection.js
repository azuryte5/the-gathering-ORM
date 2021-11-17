require('dotenv').config();

// This is importing the tech, the library
const Sequelize = require('sequelize');
// To make sure it works on heroku, or work on our local host for screenvideo
// This lowercase is being connected to uppercase tech.
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
