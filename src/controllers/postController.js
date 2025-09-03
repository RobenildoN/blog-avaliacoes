// filepath: blog-avaliacoes/blog-avaliacoes/src/controllers/postController.js

const { Op } = require('sequelize');
const Post = require('../models/post');

// Create a new post
exports.createPost = async (req, res) => {
    try {
        const {
            titulo,
            resumo,
            avaliacao,
            lido_ate,
            categoryId
        } = req.body;

        // Validações básicas
        if (!titulo || !resumo || !avaliacao || !categoryId) {
            return res.status(400).json({ message: 'Campos obrigatórios: titulo, resumo, avaliacao, categoryId' });
        }

        if (avaliacao < 1 || avaliacao > 5) {
            return res.status(400).json({ message: 'Avaliação deve ser entre 1 e 5' });
        }

        // Caminho da imagem
        let imagemPath = null;
        if (req.file) {
            imagemPath = '/img/uploads/' + req.file.filename;
        }

        const newPost = await Post.create({
            titulo,
            imagem: imagemPath,
            resumo,
            avaliacao,
            lido_ate,
            categoryId
        });

        res.status(201).json({ message: 'Post criado com sucesso!', post: newPost });
    } catch (error) {
        console.error('Erro ao criar post:', error);
        res.status(500).json({ message: 'Erro ao criar post', error: error.message });
    }
};

// Get all posts with pagination
exports.getAllPosts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 16; // 4x4 = 16 posts por página
        const offset = (page - 1) * limit;

        // Get total count for pagination info
        const totalPosts = await Post.count();

        const posts = await Post.findAll({
            include: ['Category'], // Incluir informações da categoria relacionada
            order: [['data_post', 'DESC']], // Order by date, newest first
            limit: limit,
            offset: offset
        });

        const totalPages = Math.ceil(totalPosts / limit);

        res.status(200).json({
            posts: posts,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalPosts: totalPosts,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts', error });
    }
};

// Get a post by ID
exports.getPostById = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id, {
            include: ['Category'] // Incluir informações da categoria relacionada
        });
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching post', error });
    }
};

// Update a post
exports.updatePost = async (req, res) => {
    try {
        const { titulo, resumo, avaliacao, lido_ate, categoryId } = req.body;
        const post = await Post.findByPk(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }

        // Validações básicas
        if (!titulo || !resumo || !avaliacao || !categoryId) {
            return res.status(400).json({ message: 'Campos obrigatórios: titulo, resumo, avaliacao, categoryId' });
        }

        if (avaliacao < 1 || avaliacao > 5) {
            return res.status(400).json({ message: 'Avaliação deve ser entre 1 e 5' });
        }

        // Caminho da imagem
        let imagemPath = post.imagem; // Mantém a imagem atual se não for enviada uma nova
        if (req.file) {
            imagemPath = '/img/uploads/' + req.file.filename;
        }

        await post.update({
            titulo,
            imagem: imagemPath,
            resumo,
            avaliacao,
            lido_ate,
            categoryId
        });
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: 'Error updating post', error: error.message });
    }
};

// Delete a post
exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByPk(req.params.id);
        if (!post) {
            return res.status(404).json({ message: 'Post not found' });
        }
        await post.destroy();
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: 'Error deleting post', error });
    }
};

// Get posts by category
exports.getPostsByCategory = async (req, res) => {
    try {
        const categoryId = req.params.categoryId;
        const posts = await Post.findAll({
            where: { categoryId: categoryId },
            include: ['Category'], // Incluir informações da categoria relacionada
            order: [['data_post', 'DESC']] // Order by date, newest first
        });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching posts by category', error });
    }
};

// Search posts by term in title and summary
exports.searchPosts = async (req, res) => {
    try {
        const searchTerm = req.query.q || '';
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 16;
        const offset = (page - 1) * limit;

        let whereCondition = {};
        if (searchTerm.trim()) {
            whereCondition = {
                [Op.or]: [
                    { titulo: { [Op.like]: `%${searchTerm}%` } },
                    { resumo: { [Op.like]: `%${searchTerm}%` } }
                ]
            };
        }

        // Get total count for pagination info
        const totalPosts = await Post.count({ where: whereCondition });

        const posts = await Post.findAll({
            where: whereCondition,
            include: ['Category'],
            order: [['data_post', 'DESC']],
            limit: limit,
            offset: offset
        });

        const totalPages = Math.ceil(totalPosts / limit);

        res.status(200).json({
            posts: posts,
            pagination: {
                currentPage: page,
                totalPages: totalPages,
                totalPosts: totalPosts,
                hasNextPage: page < totalPages,
                hasPrevPage: page > 1,
                searchTerm: searchTerm
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error searching posts', error });
    }
};

// Get latest posts
exports.getLatestPosts = async (req, res) => {
    try {
        const limit = req.query.limit || 3; // Default to 3 posts if not specified
        const posts = await Post.findAll({
            include: ['Category'], // Incluir informações da categoria relacionada
            order: [['data_post', 'DESC']], // Order by date, newest first
            limit: parseInt(limit)
        });
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching latest posts', error });
    }
};

module.exports = {
    createPost: exports.createPost,
    listPosts: exports.getAllPosts,
    viewPost: exports.getPostById,
    editPost: exports.updatePost,
    deletePost: exports.deletePost,
    getPostsByCategory: exports.getPostsByCategory,
    searchPosts: exports.searchPosts,
    getLatestPosts: exports.getLatestPosts
};