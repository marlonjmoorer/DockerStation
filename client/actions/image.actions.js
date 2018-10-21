import {fetchDockerImages} from '../services/DockerService'
export const loadImages = () => dispatch => {
    fetchDockerImages().then(images=>{
         dispatch({
            type: 'LOAD_IMAGES',
            payload:images
        })
    })
} 