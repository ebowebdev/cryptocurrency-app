import { takeEvery, all } from 'redux-saga/effects'
import { FETCH_DATA } from '../redux/types'
import { fetchData } from './dataFetching'

function* sagaCryptosWatcher(){
  yield takeEvery(FETCH_DATA, fetchData)
}

export default  function* rootSaga(){
  yield all([sagaCryptosWatcher()])
}
