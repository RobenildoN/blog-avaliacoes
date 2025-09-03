const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    },
    title: 'Blog de Avaliações'
  });

  // Carregar a aplicação web
  mainWindow.loadURL('http://localhost:3000');

  // Mostrar mensagem se não conseguir conectar
  mainWindow.webContents.on('did-fail-load', (event, errorCode, errorDescription) => {
    console.log('Erro ao carregar página:', errorCode, errorDescription);
    dialog.showErrorBox(
      'Erro de Conexão',
      'Não foi possível conectar ao servidor. Certifique-se de que o servidor está rodando na porta 3000.\n\nExecute: npm start'
    );
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});