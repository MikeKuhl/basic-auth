'use strict';

require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const UserModel = require('./user');
const bcrypt = require('bcrypt');

const options =
  process.env.NODE_ENV === 'production'
    ? {
        dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false,
          },
        },
      }
    : {};

let DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory';

const sequelize = new Sequelize(DATABASE_URL, options);

const users = UserModel(sequelize, DataTypes);

// users.beforeCreate(async (user) => {
//   user.password = await bcrypt.hash(user.password, 11);
// });

module.exports = {
  db: sequelize,
  user: users,
};
