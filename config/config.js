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
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DBUSER,
    "password": process.env.DBPASS,
    "database": process.env.DBNAME,
    "host":  process.env.DBHOST,
    "dialect": "postgres",
    "dialectOptions": {
      encrypt: true
    }
  }
}
