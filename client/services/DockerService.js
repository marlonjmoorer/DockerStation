
const {sendAction}= require('../Renderer')

export const fetchDockerImages=()=>{
   return sendAction("load_images")
}
 
export const fetchDockerContainers=()=>{
    return sendAction("load_containers")
}
  