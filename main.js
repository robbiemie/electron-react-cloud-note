require('@electron/remote/main').initialize()
const { app, BrowserWindow, ipcMain } = require("electron")

app.on('ready', () => {
  // 开发依赖
  let mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true, // 允许 render process 使用 nodejs
      enableRemoteModule:true,
      contextIsolation:false
    }
  })
  const urlLocation = 'http://localhost:3000'
  mainWindow.loadURL(urlLocation)
  // 开发者工具
  mainWindow.webContents.openDevTools({ mode: 'undocked' });
  ipcMain.on('message', (event,args) => {
    console.log(args)
    // reply message
    event.reply('reply', 'hello from main process')
  })
})