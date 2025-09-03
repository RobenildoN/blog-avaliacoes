const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/db');

class Category extends Model { }

Category.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Category'
});

// A relação inversa (hasMany) será definida após a importação do modelo Post
// para evitar referência circular

// Sincronizando o modelo com o banco de dados
Category.sync();

module.exports = Category;