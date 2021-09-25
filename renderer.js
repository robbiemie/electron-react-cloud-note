const { ipcRenderer } = require('electron')
const { BrowserWindow } = require('@electron/remote')
window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('send').addEventListener('click', () => {
    ipcRenderer.send('message', 'hello from renderer')

    let win = new BrowserWindow({ width: 800, height: 600 })
    win.loadURL('https://www.baidu.com')
  })
  ipcRenderer.on('reply', (event,arg) => {
    document.getElementById('reply').innerHTML = arg
  })
})