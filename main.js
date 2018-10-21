const {app, BrowserWindow} = require('electron')
const path = require('path')
const MainWindow = require('./windows/MainWindow')
try {
	require('electron-reloader')(module);
} catch (err) {}
  
app.on('ready',()=> new MainWindow().render())