import { createStore, applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducers from '../redux'
import sagas from '../sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(sagas)

export default store