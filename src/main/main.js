const { app, BrowserWindow, ipcMain, Tray, Menu } = require('electron');
const path = require('path');
const port = require('../../global.config');
let mainWindow;
app.disableHardwareAcceleration();
// ipcMain.on('sync-message', (event, arg) => {
//   console.log("sync - message")
//   // event.returnValue('message', 'tanjinjie hello')
// })
function createWindow() {
  // Create the browser window.

  mainWindow = new BrowserWindow({
    width: 805,
    height: 500,
    webPreferences: {
      nodeIntegration: true,
    },
    frame: false,
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
  mainWindow.loadURL(`http://localhost:${port}`);

  mainWindow.on('closed', function() {
    mainWindow = null;
    BrowserWindow.removeDevToolsExtension(path.join(__dirname, './src/extensions/react-dev-tool'));
  });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function() {
  if (mainWindow === null) createWindow();
});
