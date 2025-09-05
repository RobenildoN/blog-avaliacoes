const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const { connectDB } = require('./db/db');
const { setupAssociations } = require('./models/associations');

const authRoutes = require('./routes/authRoutes');
const postRoutes = require('./routes/postRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração de sessão
app.use(session({
    secret: 'seu_segredo_aqui', // Em produção, use uma variável de ambiente
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Em produção, defina como true se usar HTTPS
}));
app.use(express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/img', express.static(__dirname + '/public/img'));
app.use(express.static(__dirname + '/views'));

// Log para requests de arquivos estáticos
app.use((req, res, next) => {
  if (req.url.match(/\.(css|js|png|jpg|jpeg|gif|ico|svg)$/)) {
    // console.log('Request para arquivo estático:', req.url);
  }
  next();
});

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);
app.use('/categories', categoryRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login.html', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/:page.html', (req, res) => {
    const page = req.params.page;
    res.sendFile(__dirname + `/views/${page}.html`);
});

// Conectar ao banco de dados e configurar associações
connectDB();

// Configurar associações entre modelos
setupAssociations();

app.listen(PORT, () => {
    // console.log(`Servidor rodando na porta ${PORT}`);
});

