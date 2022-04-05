import { takeLatest, all } from 'redux-saga/effects'
import { FETCH_DATA } from '../redux/types'
import { fetchData } from './dataFetching'

function* sagaCryptosWatcher(){
  yield  takeLatest(FETCH_DATA, fetchData)
}

export default  function* rootSaga(){
  yield all([sagaCryptosWatcher()])
}
