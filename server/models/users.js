'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  Users.associate = (models) => {
    Users.hasMany(models.Properties, {
      foreignKey: 'userId',
      as: 'Users'
    });
  };;
  return Users;
};
