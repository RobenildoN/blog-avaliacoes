const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const http = require('http');

let mainWindow;
let serverProcess;

// Função para verificar se a porta está disponível
function checkPort(port, callback) {
  const server = http.createServer();
  server.listen(port, () => {
    server.close();
    callback(true);
  });
  server.on('error', () => {
    callback(false);
  });
}

// Função para iniciar o servidor Express
function startServer() {
  return new Promise((resolve, reject) => {
    // Verificar se a porta 3000 está disponível
    checkPort(3000, (available) => {
      if (available) {
        console.log('Iniciando servidor Express...');
        serverProcess = spawn('node', ['src/index.js'], {
          cwd: __dirname,
          stdio: ['pipe', 'pipe', 'pipe']
        });

        // Aguardar um pouco para o servidor iniciar
        setTimeout(() => {
          resolve();
        }, 3000);

        serverProcess.on('error', (error) => {
          console.error('Erro ao iniciar servidor:', error);
          reject(error);
        });

        // Log do servidor
        serverProcess.stdout.on('data', (data) => {
          console.log('Servidor:', data.toString());
        });

        serverProcess.stderr.on('data', (data) => {
          console.error('Erro do servidor:', data.toString());
        });
      } else {
        console.log('Servidor já está rodando na porta 3000');
        resolve();
      }
    });
  });
}

// Função para criar a janela principal
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false
    },
    icon: path.join(__dirname, 'src/public/img/exemplo.jpg'), // Ícone da aplicação
    title: 'Blog de Avaliações',
    show: false // Não mostrar até estar pronto
  });

  // Carregar a aplicação
  mainWindow.loadURL('http://localhost:3000');

  // Mostrar a janela quando estiver pronta
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Evento quando a janela é fechada
  mainWindow.on('closed', () => {
    mainWindow = null;
    // Encerrar o processo do servidor quando a aplicação for fechada
    if (serverProcess) {
      serverProcess.kill();
    }
  });

  // Menu personalizado (remover menu padrão)
  const template = [
    {
      label: 'Arquivo',
      submenu: [
        {
          label: 'Sair',
          accelerator: process.platform === 'darwin' ? 'Cmd+Q' : 'Ctrl+Q',
          click() {
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Editar',
      submenu: [
        { role: 'undo', label: 'Desfazer' },
        { role: 'redo', label: 'Refazer' },
        { type: 'separator' },
        { role: 'cut', label: 'Cortar' },
        { role: 'copy', label: 'Copiar' },
        { role: 'paste', label: 'Colar' }
      ]
    },
    {
      label: 'Visualizar',
      submenu: [
        { role: 'reload', label: 'Recarregar' },
        { role: 'forceReload', label: 'Forçar Recarregamento' },
        { role: 'toggleDevTools', label: 'Ferramentas de Desenvolvedor' },
        { type: 'separator' },
        { role: 'resetZoom', label: 'Zoom Padrão' },
        { role: 'zoomIn', label: 'Aumentar Zoom' },
        { role: 'zoomOut', label: 'Diminuir Zoom' }
      ]
    },
    {
      label: 'Ajuda',
      submenu: [
        {
          label: 'Sobre',
          click() {
            require('electron').dialog.showMessageBox(mainWindow, {
              type: 'info',
              title: 'Sobre',
              message: 'Blog de Avaliações',
              detail: 'Aplicação desktop para gerenciamento de posts de avaliação.\n\nVersão: 1.0.0\nDesenvolvido com Electron e Node.js'
            });
          }
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

// Evento quando o Electron estiver pronto
app.whenReady().then(async () => {
  try {
    // Iniciar o servidor Express
    await startServer();

    // Criar a janela principal
    createWindow();

    // No macOS, recriar a janela quando o ícone do dock for clicado
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
      }
    });
  } catch (error) {
    console.error('Erro ao inicializar aplicação:', error);
    app.quit();
  }
});

// Evento quando todas as janelas são fechadas
app.on('window-all-closed', () => {
  // No macOS, manter a aplicação ativa mesmo com todas as janelas fechadas
  if (process.platform !== 'darwin') {
    app.quit();
  }

  // Encerrar o processo do servidor
  if (serverProcess) {
    serverProcess.kill();
  }
});

// Tratamento de erros não capturados
process.on('uncaughtException', (error) => {
  console.error('Erro não capturado:', error);
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Rejeição não tratada em:', promise, 'razão:', reason);
});