const {Menu,app}= require('electron')

module.exports = Menu.buildFromTemplate([
    {
        label: 'Menu',
        
    },
    {
        label: 'Menu',
        submenu: [
            {
                label:'Reload',
                click(){
                    require('electron').BrowserWindow.getAllWindows()[0].reload()
                }
            },
            {
                label:'Exit',
                click(){
                    app.quit()
                }
            }
        ]
    }
])