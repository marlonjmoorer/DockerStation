import { createStore, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './reducers';
import containerSaga from './sagas/container.saga';


const devtools=window.devToolsExtension ? window.devToolsExtension() : f => f;

const sagaMiddleware = createSagaMiddleware()
export default function configureStore() {
 const store= createStore(
   rootReducer,
   compose(applyMiddleware(thunk,sagaMiddleware),devtools)
 );

 sagaMiddleware.run(containerSaga)
 return store

}

