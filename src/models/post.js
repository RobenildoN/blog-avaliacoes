const { DataTypes, Model } = require('sequelize');
const { sequelize } = require('../db/db');
const Category = require('./category');

class Post extends Model { }

Post.init({
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: true
    },
    resumo: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    avaliacao: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
            min: 0,
            max: 5
        }
    },
    data_post: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Categories',
            key: 'id'
        }
    },
    lido_ate: {
        type: DataTypes.STRING,
        allowNull: true
    },
    finalizado: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    sequelize,
    modelName: 'Post'
});

// Sincronizando o modelo com o banco de dados
Post.sync();

module.exports = Post;