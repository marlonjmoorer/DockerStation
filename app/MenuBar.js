const {Menu, app, BrowserWindow} = require('electron')

module.exports.addMenu = (win) => {
   const menu= Menu.buildFromTemplate([
        {
            label: 'Menu'
        }, {
            label: 'Menu',
            submenu: [
                {
                    label: 'Reload',
                    click() {
                        win.reload()
                    }
                }, {
                    label: 'Exit',
                    click() {
                        app.quit()
                    }
                }
            ]
        }
    ])
    Menu.setApplicationMenu(menu)
}