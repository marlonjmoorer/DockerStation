
const {sendAction}= require('../RenderHelpers')

export const fetchDockerImages=()=>{
   return sendAction("load_images")
}
 