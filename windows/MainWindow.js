const {BrowserWindow,ipcMain} = require('electron')
const path = require("path")
const url= require('url')
const Docker = require('dockerode')
class MainWindow extends BrowserWindow {
    constructor(options) {
        options = options || {
            width: 800,
            height: 600,
            show:false
        }
        super(options)
        this.on('ready-to-show',()=> { 
            this.show(); 
            this.focus(); 
        });
        this.on('closed', () => {
            this.win = null
        })
        ipcMain.on('load_images', (event, arg) => {
            this.docker.listImages().then(images=>{
                event.sender.send('load_images_reply', images)
            })
        })
        this.docker= new Docker() 
    }

    load() {

        const startUrl = process.env.ELECTRON_START_URL || url.format({
            pathname: path.join(__dirname, './build/index.html'),
            protocol: 'file:',
            slashes: true
        });
        this.loadURL(startUrl)
        this.webContents
            .openDevTools()
    }
}

module.exports = MainWindow