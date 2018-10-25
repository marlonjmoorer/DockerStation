const {BrowserWindow,ipcMain} = require('electron')
const path = require("path")
const url= require('url')
const Docker = require('dockerode')
const fs = require('fs')

class MainWindow extends BrowserWindow {
    constructor(options) {
        options = options || {
            width: 800,
            height: 600,
            show:false
        }
        super(options)
        this.docker= new Docker() 
        this.on('ready-to-show',()=> { 
            this.show(); 
            this.focus(); 
        });

    
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
        this.setListeners()
    }
    setListeners(){
        ipcMain.on('load_images', (event, arg) => {
            this.docker.listImages().then(images=>{
                event.sender.send('load_images', images)
            })
        })
        ipcMain.on('load_containers', (event, arg) => {
            this.docker.listContainers().then(containers=>{
                event.sender.send('load_containers', containers)
            })
        })
        ipcMain.on('open_container', (event, {id}) => {
            const container=this.docker.getContainer(id)
            container.inspect().then(info=>{
                console.log('object')
            })
            container.logs().then(s=>{
                var log_file = fs.createWriteStream(__dirname + '/debug.log');
                s.pipe(log_file)
                s.on('data', (chunk) => {
                    log_file.write(chunk);
                  });
                s.on('end', () => {
                    log_file.end();
                });
                s.on("error",err=>{
                    console.log(err)
                })
                log_file.on("error",err=>{
                    console.log(err)
                })
               
            }).catch(err=>{
                console.log(err)
            })
            new BrowserWindow({ width: 300, height: 400 });
        })
    }
    
}

module.exports = MainWindow