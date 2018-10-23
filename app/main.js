const {app, Menu} = require('electron')
const path = require('path')
const MainWindow = require('./windows/MainWindow')
const MenuBar = require('./MenuBar');

try {
	require('electron-reloader')(module);
} catch (err) {}

app.on('ready',()=> {
    const win= new MainWindow()
    win.load()
    Menu.setApplicationMenu(MenuBar); 
})