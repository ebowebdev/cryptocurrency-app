import { takeEvery, all } from 'redux-saga/effects'
import { FETCH_DATA, FETCH_CRYPTO } from '../redux/types'
import { fetchData, fetchCryptoData } from './dataFetching'

function* sagaCryptosWatcher(){
  yield takeEvery(FETCH_DATA, fetchData)
}

function* sagaCryptoWatcher(){
  yield takeEvery(FETCH_CRYPTO, fetchCryptoData)
}

export default  function* rootSaga(){
  yield all([sagaCryptosWatcher(),sagaCryptoWatcher()])
}
