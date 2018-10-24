import {fetchDockerContainers} from '../services/DockerService'
export const getContainers = () => dispatch => {
    fetchDockerContainers().then(containers=>{
         dispatch({
            type: 'LOAD_CONTAINERS',
            payload:containers
        })
    })
} 