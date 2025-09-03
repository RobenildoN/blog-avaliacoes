console.log('Testando Electron...');

const electron = require('electron');
console.log('Electron carregado:', typeof electron);

if (electron && electron.app) {
  console.log('App disponível');
} else {
  console.log('App não disponível');
}