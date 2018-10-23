const {ipcRenderer} =window.require('electron')
export const sendAction=(action="",data)=>{
    return new Promise((resolve,reject)=>{
         ipcRenderer.on(action,(event, arg) => {
             resolve(arg)
             ipcRenderer.removeAllListeners(action)
         }).send(action,data)
     })
 }