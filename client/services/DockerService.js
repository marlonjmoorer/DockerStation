
const {sendAction}= require('../Renderer')

export const fetchDockerImages=()=>{
   return sendAction("load_images")
}
 
export const fetchDockerContainers=()=>{
    return sendAction("load_containers")
}

export const openContainer=(id)=>{
    return sendAction("open_container",id)
}
  