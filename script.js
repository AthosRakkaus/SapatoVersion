//Electron Script's

const {app, BrowserWindow, Menu} = require("electron")

let principalJar
const isWin = process.platform === 'win32'

app.on('ready', () =>{
    principalJar = new BrowserWindow({
        width: 860,
        height: 637,
        resizable: true,
        titleBarOverlay: false,
        icon: __dirname + "/spr_logo.png",
        webPreferences: { 
            contextIsolation: true,
            devTools: false,
        }
        
    })
    principalJar.loadURL(`file://${__dirname}/index.html`)
})

const template = [
    // { role: 'appMenu' }
    ...(isWin ? [{
      label: app.name,
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'services' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    }] : []),
    // { role: 'fileMenu' }
    {
      label: 'File',
      submenu: [
        isWin ? { role: 'close' } : { role: 'quit' }
      ]
    },
    // { role: 'viewMenu' }
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    // { role: 'windowMenu' }
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        ...(isWin ? [
          { type: 'separator' },
          { role: 'front' },
          { type: 'separator' },
          { role: 'window' }
        ] : [
          { role: 'close' }
        ])
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: '?',
          click: async () => {
            const { shell } = require('electron')
            await shell.openExternal('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
          }
        }
      ]
    }
  ]
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)