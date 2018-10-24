const {app, Menu} = require('electron')
const path = require('path')
const MainWindow = require('./windows/MainWindow')
const {addMenu} = require('./MenuBar');
const { default: installExtension, REACT_DEVELOPER_TOOLS,REDUX_DEVTOOLS } = require('electron-devtools-installer');
process.env.ELECTRON_START_URL='http://localhost:1234'

try {
    require('electron-reloader')(module);
} catch (err) {}
const createWindow=()=>{
     win = new MainWindow()
    win.load()
    addMenu(win)
    
    installExtension([REACT_DEVELOPER_TOOLS,REDUX_DEVTOOLS]).then((name) => {
        console.log(`Added Extension:  ${name}`);
    })
    .catch((err) => {
        console.log('An error occurred: ', err);
    });
    
}
let win 
app.on('ready',createWindow)
// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar to stay active
    // until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    // On macOS it's common to re-create a window in the app when the dock icon is
    // clicked and there are no other windows open.
    if (win === null) {
        createWindow()
    }
})