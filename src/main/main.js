const { app, BrowserWindow, ipcMain, Tray, Menu } = require('electron');
const path = require('path');
const port = require('../../global.config');
let mainWindow;

app.disableHardwareAcceleration();

ipcMain.on('Enter-Home', (event, arg) => {
  mainWindow.close()
  createWindow(arg.width, arg.height);
});

ipcMain.on('close-window', () => {
  app.quit();
});
function createWindow(width, height, event) {
  // Create the browser window.

  mainWindow = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    },
    frame: true,
  });

  //自定义放大缩小托盘功能
  ipcMain.on('changeWindow', (event, arg) => {
    if (arg === 'min') {
      console.log('min');
      mainWindow.minimize();
    } else if (arg === 'max') {
      console.log('max');
      if (mainWindow.isMaximized()) {
        mainWindow.unmaximize();
      } else {
        mainWindow.maximize();
      }
    } else if (arg === 'hide') {
      console.log('hide');
      mainWindow.hide();
    }
  });
  mainWindow.loadURL(`http://localhost:${port}/index.html`);

  mainWindow.on('closed', function() {
    // mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow(400, 600);
});

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  if (mainWindow === null) {
    () => {
      createWindow(400, 600);
    };
  }
});
