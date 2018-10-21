const {ipcRenderer} =window.require('electron')
export const sendAction=(action,data)=>{
    return new Promise((resolve,reject)=>{
         ipcRenderer.on(`${action}_reply`,(event, arg) => {
             console.log("Ell")
             resolve(arg)
             ipcRenderer.removeAllListeners(`${action}_reply`)
         }).send(action,data)
     })
 }