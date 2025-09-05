const { Sequelize } = require('sequelize');
require('dotenv').config({ path: './src/.env' });

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: process.env.DB_PORT,
        logging: false, // Desabilitar logs de queries SQL
    }
);

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        // console.log('Conexão com o MySQL estabelecida com sucesso!');
    } catch (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        process.exit(1);
    }
};

module.exports = {
    connectDB,
    sequelize,
};