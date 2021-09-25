const { app, BrowserWindow, ipcMain } = require("electron")

app.on('ready', () => {
  // 开发依赖
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule:true,
      contextIsolation:false
    }
  })
  mainWindow.loadFile('./index.html')
  // 开发者工具
  mainWindow.webContents.openDevTools({ mode: 'undocked' });
  ipcMain.on('message', (event,args) => {
    console.log(args)
    // reply message
    event.reply('reply', 'hello from main process')
  })
})