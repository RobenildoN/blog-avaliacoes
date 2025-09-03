const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/db');

class User extends Model { }

User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    // outros campos...
}, {
    sequelize,
    modelName: 'User'
});

module.exports = User;