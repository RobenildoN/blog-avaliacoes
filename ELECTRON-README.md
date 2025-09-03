# Blog de Avaliações - Aplicação Desktop

Este documento explica como usar a versão desktop (Electron) do Blog de Avaliações.

## 📦 Executável Gerado

Após o build, o executável foi criado em:
```
dist/win-unpacked/Blog de Avaliações.exe
```

## 🚀 Como Usar

### Pré-requisitos
- **Windows 10/11**
- **Servidor rodando**: O executável precisa do servidor Express rodando na porta 3000

### Passos para Execução

1. **Iniciar o Servidor:**
   ```bash
   npm start
   ```
   Isso iniciará o servidor na porta 3000.

2. **Executar a Aplicação:**
   - Navegue até `dist/win-unpacked/`
   - Execute o arquivo `Blog de Avaliações.exe`
   - OU use o comando: `npm run electron`

3. **Usar a Aplicação:**
   - A aplicação abrirá uma janela do navegador
   - Todas as funcionalidades do site estarão disponíveis
   - Interface nativa do Windows com menus personalizados

## 🔧 Funcionalidades da Versão Desktop

### ✅ Recursos Mantidos
- ✅ Todas as funcionalidades do site web
- ✅ Sistema de autenticação completo
- ✅ Gerenciamento de posts
- ✅ Upload de imagens
- ✅ Sistema de categorias
- ✅ Busca avançada
- ✅ Paginação

### 🆕 Recursos Adicionais
- **Menu Nativo**: Menus do Windows (Arquivo, Editar, Visualizar, Ajuda)
- **Atalhos de Teclado**: Suporte completo a atalhos
- **Janela Redimensionável**: Interface adaptável
- **Ícone na Barra de Tarefas**: Identificação visual
- **Mensagens de Erro**: Tratamento elegante de erros de conexão

## 🛠️ Desenvolvimento

### Scripts Disponíveis

```bash
# Executar aplicação em modo desenvolvimento
npm run electron

# Build da aplicação
npm run build-win

# Build para outras plataformas
npm run build-mac      # macOS
npm run build-linux    # Linux
```

### Estrutura do Projeto Electron

```
blog-avaliacoes/
├── main.js              # Arquivo principal do Electron
├── package.json         # Configurações do Electron
├── dist/                # Arquivos de build
│   └── win-unpacked/    # Aplicação descompactada
│       └── Blog de Avaliações.exe
├── src/                 # Código fonte do servidor
└── ELECTRON-README.md   # Esta documentação
```

## ⚠️ Importante

### Dependências
- **Servidor Express**: Deve estar rodando na porta 3000
- **Banco de Dados**: MySQL deve estar configurado e acessível
- **Arquivos Estáticos**: Todas as imagens e CSS devem estar disponíveis

### Limitações
- **Conexão Local**: A aplicação conecta ao servidor local (localhost:3000)
- **Sem Servidor Embutido**: Não inclui o servidor Express no executável
- **Dependência de Rede**: Requer conexão com o servidor local

## 🔧 Solução de Problemas

### Erro de Conexão
Se aparecer "Erro de Conexão":
1. Verifique se o servidor está rodando: `npm start`
2. Confirme que a porta 3000 está livre
3. Verifique as configurações do banco de dados

### Aplicação Não Abre
1. Execute como administrador
2. Verifique se há antivírus bloqueando
3. Confirme que todos os arquivos estão na pasta correta

### Performance
- Feche outras aplicações para melhor performance
- Certifique-se de ter pelo menos 4GB de RAM disponível

## 📋 Requisitos do Sistema

- **SO**: Windows 10 ou superior
- **Memória RAM**: 4GB mínimo, 8GB recomendado
- **Espaço em Disco**: 200MB para a aplicação + espaço para banco de dados
- **Processador**: Dual-core 2.0GHz ou superior

## 🎯 Benefícios da Versão Desktop

1. **Experiência Nativa**: Interface que se integra ao Windows
2. **Performance**: Melhor performance que navegador web
3. **Offline Capable**: Pode funcionar sem internet (se servidor local)
4. **Atalhos**: Suporte completo a atalhos de teclado
5. **Menu Nativo**: Menus familiares do Windows
6. **Ícone na Barra**: Identificação visual clara

## 📞 Suporte

Para problemas específicos da versão desktop:
1. Verifique os logs do console (Ferramentas de Desenvolvedor)
2. Confirme que o servidor está funcionando corretamente
3. Verifique as configurações de rede e firewall

---

**Versão Desktop**: 1.0.0
**Electron**: 11.5.0
**Plataforma**: Windows x64