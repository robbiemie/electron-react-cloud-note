const { ipcRenderer } = require('electron')

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('send').addEventListener('click', () => {
    ipcRenderer.send('message', 'hello from renderer')
  })
  ipcRenderer.on('reply', (event,arg) => {
    document.getElementById('reply').innerHTML = arg
  })
})