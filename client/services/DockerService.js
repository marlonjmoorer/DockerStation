
const {sendAction}= require('../Renderer')

export const fetchDockerImages=()=>{
   return sendAction("load_images")
}
 