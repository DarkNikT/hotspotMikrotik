const dotenv = require('dotenv').config();

module.exports = {

  NODE_ENV: process.env.NODE_ENV || 'development',
  HOST: process.env.HOST || '127.0.0.1',
  PORT: process.env.PORT || 5000,
  USER_MONGO: process.env.USER_DATABASE || "user-pruebas",
  PASS_MONGO:  process.env.PASS_DATABASE || "WviaeBXWOMn5zMEg"
}