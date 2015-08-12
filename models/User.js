"use strict";
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    login: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    items: DataTypes.STRING
  },
      {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};