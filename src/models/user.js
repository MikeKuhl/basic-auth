'use strict';

const { Sequelize, DataTypes } = require('sequelize');

const UsersModel = (Sequelize, DataTypes) => {
  const Users = Sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = UsersModel;
