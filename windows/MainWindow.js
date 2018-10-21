const {BrowserWindow,ipcMain} = require('electron')
const path = require("path")
const url= require('url')
class MainWindow {
    constructor(options) {

        options = options || {
            width: 800,
            height: 600
        }

        this.win = new BrowserWindow(options)
        this.win.on('closed', () => {
            this.win = null
        })
        ipcMain.on('asynchronous-message', (event, arg) => {
           // console.log(arg) // prints "ping"
            event.sender.send('asynchronous-reply', 'pong')
        })
    }

    render() {

        const startUrl = process.env.ELECTRON_START_URL || url.format({
            pathname: path.join(__dirname, './build/index.html'),
            protocol: 'file:',
            slashes: true
        });


        this.win.loadURL(startUrl)
        this.win
            .webContents
            .openDevTools()
    }
}

module.exports = MainWindow