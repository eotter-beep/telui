const { app, BrowserWindow, Menu } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  createWindow()
})
