require('dotenv').config();
module.exports = {
  "development": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": process.env.DBNAME,
    "host":  process.env.DBHOST,
    "dialect": "postgres"
  },
  "test": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": process.env.DBNAME,
    "host":  process.env.DBHOST,
    "dialect": "postgres",
    "logging": false
  },
  "production": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": process.env.DBNAME,
    "host":  process.env.DBHOST,
    "dialect": "postgres",
    "dialectOptions": {
      "ssl": {
        "require": true
      }
    }
  }
}
