import {fetchDockerContainers,openContainer} from '../services/DockerService'
import { put, takeEvery} from 'redux-saga/effects'

export function* getContainers() {
   let containers = yield fetchDockerContainers()
    yield put({
               type: 'LOADED_CONTAINERS',
               payload:containers
    })
}
function* getContainerById(id) {
    let container =yield openContainer(id)
    //  yield put({
    //             type: 'GOT_CONTAINER',
    //             payload:container
    //  })
 }

export default function* root() {
    yield [
        takeEvery('LOAD_CONTAINERS', getContainers),
        takeEvery('OPEN_CONTAINER',getContainerById)
    ]
}