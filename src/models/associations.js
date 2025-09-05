// Arquivo para definir as associações entre os modelos
const Post = require('./post');
const Category = require('./category');

// console.log('DEBUG: Importando modelos - Post:', typeof Post);
// console.log('DEBUG: Importando modelos - Category:', typeof Category);
// console.log('DEBUG: Category.hasMany:', typeof Category.hasMany);

// Definindo a relação entre Category e Post
try {
    Category.hasMany(Post, { foreignKey: 'categoryId' });
    // console.log('DEBUG: Category.hasMany executado com sucesso');
} catch (error) {
    console.error('DEBUG: Erro em Category.hasMany:', error);
}

// Definindo a relação entre Post e Category
try {
    Post.belongsTo(Category, { foreignKey: 'categoryId' });
    // console.log('DEBUG: Post.belongsTo executado com sucesso');
} catch (error) {
    console.error('DEBUG: Erro em Post.belongsTo:', error);
}

module.exports = {
    setupAssociations: () => {
        // console.log('Associações entre modelos configuradas com sucesso!');
    }
};