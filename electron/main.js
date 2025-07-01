const path = require('path');
const { app, BrowserWindow, ipcMain, shell } = require('electron');

function createWindow() {
  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
    },
  });

  win.loadURL('http://localhost:4200'); // Dev server

  ipcMain.handle('open-url', async (_event, url) => {
    await shell.openExternal(url);
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
