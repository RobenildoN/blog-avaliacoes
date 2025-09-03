# Blog de Avaliações 📚🎬📖

Um blog moderno e responsivo dedicado à avaliação e compartilhamento de opiniões sobre mangas, livros, filmes, séries e cursos. Construído com Node.js, Express e MySQL, oferecendo uma experiência completa de gerenciamento de conteúdo.

## ✨ Funcionalidades

### 🔐 Sistema de Autenticação
- **Login/Logout**: Sistema seguro de autenticação com sessões
- **Proteção de Rotas**: Área administrativa restrita apenas para usuários logados
- **Verificação de Status**: Botão dinâmico que muda entre "Logar" e "Deslogar"

### 📝 Gerenciamento de Posts
- **Criar Posts**: Interface intuitiva para criação de novos posts
- **Editar Posts**: Modal completo para edição de posts existentes
- **Deletar Posts**: Confirmação de segurança antes da exclusão
- **Upload de Imagens**: Suporte a upload de imagens para posts

### 🏷️ Sistema de Categorias
- **Organização**: Posts organizados por categorias (Mangas, Livros, Filmes, Séries, Cursos)
- **Filtragem**: Navegação por categoria com atualização dinâmica
- **Seleção**: Dropdown dinâmico populado do banco de dados

### ⭐ Sistema de Avaliação
- **Classificação**: Avaliação de 1 a 5 estrelas
- **Visual**: Exibição de estrelas preenchidas/vazias
- **Persistência**: Avaliações salvas no banco de dados

### 🔍 Busca Avançada
- **Busca por Texto**: Pesquisa em títulos e resumos dos posts
- **Busca em Tempo Real**: Resultados instantâneos
- **Limpeza de Busca**: Botão para limpar filtros e voltar aos posts normais
- **Busca com Enter**: Atalho de teclado para pesquisa rápida

### 📄 Paginação Inteligente
- **16 Posts por Página**: Layout em grid 4x4
- **Navegação**: Botões Anterior/Próximo
- **Informações**: Indicador de página atual/total
- **Estado Persistente**: Mantém filtros durante navegação

### 🎨 Interface Responsiva
- **Design Moderno**: Interface limpa e intuitiva
- **Responsividade**: Funciona em desktop, tablet e mobile
- **Feedback Visual**: Estados de carregamento e confirmações
- **Acessibilidade**: Navegação por teclado e leitores de tela

### 🖥️ Versões Desktop (Electron)

#### Versão Conectada (Recomendada)
- **Aplicativo Nativo**: Executável .exe para Windows
- **Menu Nativo**: Menus do Windows (Arquivo, Editar, Visualizar, Ajuda)
- **Atalhos de Teclado**: Suporte completo a atalhos
- **Janela Redimensionável**: Interface adaptável
- **Ícone na Barra**: Identificação visual na barra de tarefas
- **Mensagens de Erro**: Tratamento elegante de conexões
- **Servidor Externo**: Requer Node.js + MySQL rodando

#### 🆕 Versão Autônoma (Nova!)
- **Completamente Offline**: Funciona sem servidor externo
- **Armazenamento Local**: Dados salvos em arquivos JSON
- **Imagens Locais**: Uploads salvos na pasta do usuário
- **Portabilidade Total**: Execute em qualquer PC Windows
- **Privacidade Máxima**: Dados ficam apenas no seu computador
- **Zero Dependências**: Não requer MySQL ou configurações
- **📁 Pasta**: `blog-avaliacoes-standalone/`
- **📄 Documentação**: `STANDALONE-README.md`

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js**: Runtime JavaScript para servidor
- **Express.js**: Framework web para Node.js
- **Sequelize**: ORM para MySQL
- **MySQL**: Banco de dados relacional
- **Multer**: Middleware para upload de arquivos
- **express-session**: Gerenciamento de sessões
- **bcrypt**: Hashing de senhas
- **CORS**: Suporte a requisições cross-origin

### Frontend
- **HTML5**: Estrutura semântica
- **CSS3**: Estilização moderna e responsiva
- **JavaScript (ES6+)**: Interatividade e manipulação DOM
- **Fetch API**: Requisições HTTP assíncronas

### Ferramentas de Desenvolvimento
- **Nodemon**: Reinicialização automática do servidor
- **Swagger**: Documentação interativa da API
- **Electron**: Empacotamento para aplicativo desktop
- **electron-builder**: Build de executáveis multiplataforma
- **Git**: Controle de versão
- **VS Code**: Ambiente de desenvolvimento

## 📁 Estrutura do Projeto

```
blog-avaliacoes/
├── src/
│   ├── controllers/         # Controladores da aplicação
│   │   ├── authController.js    # Autenticação e autorização
│   │   ├── postController.js    # CRUD de posts
│   │   └── categoryController.js # Gerenciamento de categorias
│   ├── models/              # Modelos de dados Sequelize
│   │   ├── user.js             # Modelo de usuário
│   │   ├── post.js             # Modelo de post
│   │   ├── category.js         # Modelo de categoria
│   │   └── associations.js     # Relacionamentos entre modelos
│   ├── routes/              # Definição das rotas da API
│   │   ├── authRoutes.js       # Rotas de autenticação
│   │   ├── postRoutes.js       # Rotas de posts
│   │   └── categoryRoutes.js   # Rotas de categorias
│   ├── views/               # Templates HTML
│   │   ├── index.html          # Página inicial
│   │   ├── post.html           # Página individual do post
│   │   ├── admin.html          # Área administrativa
│   │   ├── login.html          # Página de login
│   │   ├── categoria.html      # Página de categoria
│   │   └── categorias.html     # Lista de categorias
│   ├── public/              # Arquivos estáticos
│   │   ├── css/
│   │   │   └── style.css       # Estilos da aplicação
│   │   ├── js/
│   │   │   └── script.js       # Scripts do frontend
│   │   └── img/
│   │       ├── exemplo.jpg     # Imagem de exemplo
│   │       └── uploads/        # Imagens enviadas pelos usuários
│   ├── db/                  # Configuração do banco de dados
│   │   └── db.js               # Conexão e configuração Sequelize
│   ├── swagger.js          # Configuração do Swagger
│   └── index.js            # Arquivo principal da aplicação
├── main.js                 # Arquivo principal do Electron (versão conectada)
├── ELECTRON-README.md      # Documentação específica da versão desktop
├── dist/                   # Arquivos de build da versão conectada
│   └── win-unpacked/       # Aplicação desktop descompactada
│       └── Blog de Avaliações.exe
├── blog-avaliacoes-standalone/  # 🆕 Versão autônoma completa
│   ├── main.js             # Arquivo principal do Electron autônomo
│   ├── src/                # Código fonte da versão autônoma
│   ├── dist/               # Build da versão autônoma
│   │   └── win-unpacked/
│   │       └── Blog de Avaliações - Autônomo.exe
│   ├── STANDALONE-README.md # Documentação específica da versão autônoma
│   └── package.json        # Configurações da versão autônoma
├── .env                    # Variáveis de ambiente
├── .gitignore             # Arquivos ignorados pelo Git
├── package.json           # Dependências e scripts
├── README.md              # Esta documentação
└── .env.example           # Exemplo de variáveis de ambiente
```

## 🚀 Instalação e Configuração

### Pré-requisitos
- **Node.js** (versão 14 ou superior)
- **MySQL** (versão 5.7 ou superior)
- **Git** (para controle de versão)

### 📱 Versões Desktop (Opcional)
Para usar como aplicativo desktop:

#### Versão Conectada
- **Electron** (incluído nas dependências de desenvolvimento)
- **Windows 10/11** (para versão .exe)
- **MySQL** rodando localmente
- Executável: `dist/win-unpacked/Blog de Avaliações.exe`

#### Versão Autônoma
- **Zero dependências externas**
- **Dados salvos localmente**
- **Executável independente**
- Localização: `blog-avaliacoes-standalone/dist/win-unpacked/Blog de Avaliações - Autônomo.exe`

### Passos de Instalação

1. **Clone o repositório:**
    ```bash
    git clone <URL do repositório>
    cd blog-avaliacoes
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Configure o banco de dados:**
    - Crie um banco de dados MySQL chamado `avaliacoes_db`
    - Configure as credenciais no arquivo `.env`

4. **Arquivo .env:**
    ```env
    # Configurações do Banco de Dados
    DB_HOST=localhost
    DB_USER=seu_usuario
    DB_PASSWORD=sua_senha
    DB_NAME=avaliacoes_db
    DB_PORT=3306

    # Configurações da Aplicação
    PORT=3000
    SESSION_SECRET=sua_chave_secreta_para_sessoes

    # Ambiente
    NODE_ENV=development
    ```

5. **Execute as migrações do banco de dados:**
    ```bash
    # O Sequelize criará automaticamente as tabelas na primeira execução
    npm start
    ```

6. **Acesse a aplicação:**
    - **Frontend**: http://localhost:3000
    - **Documentação API**: http://localhost:3000/api-docs

## 📖 Como Usar

### 🌐 Versão Web (Padrão)

1. **Navegação:**
   - Acesse a página inicial para ver todos os posts
   - Use os filtros por categoria na navegação
   - Utilize a barra de pesquisa para buscar posts específicos

2. **Sistema de Autenticação:**
   - Clique em "Logar" para acessar a página de login
   - Após login, o botão mudará para "Deslogar"
   - Usuários logados podem acessar a área administrativa

3. **Área Administrativa:**
   - Acesse `/admin.html` para gerenciar posts
   - Crie novos posts com título, resumo, avaliação e imagem
   - Edite posts existentes através do modal de edição
   - Delete posts com confirmação de segurança

### 🖥️ Versão Desktop (Electron)

#### Versão Conectada
1. **Pré-requisitos:**
   - Servidor deve estar rodando: `npm start`
   - MySQL configurado e rodando
   - Executável: `dist/win-unpacked/Blog de Avaliações.exe`

2. **Executar:**
   ```bash
   # Opção 1: Executar diretamente
   ./dist/win-unpacked/Blog\ de\ Avaliações.exe

   # Opção 2: Usar npm script
   npm run electron
   ```

3. **Recursos:**
   - Menu nativo do Windows (Arquivo, Editar, Visualizar, Ajuda)
   - Atalhos de teclado completos
   - Janela redimensionável
   - Ícone na barra de tarefas
   - Mensagens de erro aprimoradas

#### 🆕 Versão Autônoma
1. **Pré-requisitos:**
   - Nenhum! Funciona completamente offline
   - Executável: `blog-avaliacoes-standalone/dist/win-unpacked/Blog de Avaliações - Autônomo.exe`

2. **Executar:**
   ```bash
   # Entrar na pasta da versão autônoma
   cd blog-avaliacoes-standalone

   # Executar diretamente
   ./dist/win-unpacked/Blog\ de\ Avaliações\ -\ Autônomo.exe

   # Ou usar npm script
   npm run electron
   ```

3. **Recursos Exclusivos:**
   - **Completamente Offline** - Não precisa de servidor
   - **Dados Locais** - Tudo salvo no seu computador
   - **Portabilidade Total** - Execute em qualquer PC
   - **Privacidade Máxima** - Dados ficam apenas localmente
   - **Zero Configuração** - Funciona imediatamente

4. **Primeiro Uso:**
   - **Usuário padrão**: `admin`
   - **Senha padrão**: `admin123`
   - **Acesse**: `http://localhost:3001` (aberto automaticamente)

### Para Desenvolvedores

1. **Estrutura de Dados:**
   - **Usuários**: username, password (hash)
   - **Posts**: titulo, resumo, avaliacao (1-5), imagem, categoria
   - **Categorias**: name (Mangas, Livros, Filmes, Séries, Cursos)

2. **API Endpoints Principais:**
   - `GET /posts` - Lista todos os posts com paginação
   - `GET /posts/search?q=termo` - Busca posts por termo
   - `POST /posts` - Cria novo post (autenticado)
   - `PUT /posts/:id` - Atualiza post (autenticado)
   - `DELETE /posts/:id` - Remove post (autenticado)
   - `POST /auth/login` - Autenticação de usuário
   - `GET /auth/check` - Verifica status de login

## 🔧 Scripts Disponíveis

### Servidor Web
```bash
# Iniciar servidor em modo produção
npm start

# Iniciar servidor em modo desenvolvimento (com nodemon)
npm run dev
```

### Aplicação Desktop (Electron)

#### Versão Conectada
```bash
# Executar aplicação Electron (desenvolvimento)
npm run electron

# Executar aplicação Electron (modo desenvolvimento)
npm run electron-dev

# Build da aplicação para Windows
npm run build-win

# Build da aplicação para macOS
npm run build-mac

# Build da aplicação para Linux
npm run build-linux

# Build completo para todas as plataformas
npm run dist
```

#### Versão Autônoma
```bash
# Entrar na pasta da versão autônoma
cd blog-avaliacoes-standalone

# Executar aplicação autônoma (desenvolvimento)
npm run electron

# Build da versão autônoma para Windows
npm run build-win

# Executar versão já compilada
./dist/win-unpacked/Blog\ de\ Avaliações\ -\ Autônomo.exe
```

### Desenvolvimento
```bash
# Executar testes (se configurados)
npm test

# Gerar documentação
npm run docs
```

## 📊 Funcionalidades Detalhadas

### Sistema de Busca
- **Busca em Tempo Real**: Resultados instantâneos
- **Busca por Título**: Encontra posts pelo título
- **Busca por Resumo**: Encontra posts pelo conteúdo do resumo
- **Busca Combinada**: Busca simultânea em título e resumo
- **Limpeza de Busca**: Botão para remover filtros

### Sistema de Paginação
- **16 Posts por Página**: Layout otimizado em grid
- **Navegação Intuitiva**: Botões Anterior/Próximo
- **Informações de Página**: "Página X de Y"
- **Estado Persistente**: Mantém filtros entre páginas
- **Responsividade**: Funciona em todos os dispositivos

### Sistema de Autenticação
- **Sessões Seguras**: Gerenciamento de sessão com express-session
- **Proteção CSRF**: Prevenção de ataques cross-site
- **Logout Seguro**: Limpeza completa da sessão
- **Verificação de Status**: API para verificar login ativo

### Upload de Imagens
- **Suporte a Múltiplos Formatos**: JPG, PNG, GIF, WebP
- **Limite de Tamanho**: 5MB por arquivo
- **Organização**: Arquivos salvos em `/public/img/uploads/`
- **Nomes Únicos**: Timestamps para evitar conflitos

## 🤝 Contribuições

Contribuições são muito bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### Diretrizes de Contribuição
- Siga os padrões de código existentes
- Adicione testes para novas funcionalidades
- Atualize a documentação quando necessário
- Use commits descritivos

## 📝 Licença

Este projeto está licenciado sob a **MIT License** - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte ou dúvidas:
- Abra uma **issue** no GitHub
- Entre em contato via email
- Consulte a documentação da API em `/api-docs`

---

**Desenvolvido com ❤️ para a comunidade de avaliação de conteúdo**