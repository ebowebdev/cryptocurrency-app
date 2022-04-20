import { takeLatest,all } from 'redux-saga/effects'
import { FETCH_DATA, FETCH_CRYPTO, FETCH_NEWS, FETCH_CRYPTO_HISTORY } from '../redux/types'
import { fetchData, fetchCryptoData, fetchNews, fetchCryptoHistoryData } from './dataFetching'

function* sagaCryptosWatcher(){
  yield takeLatest(FETCH_DATA, fetchData)
}

function* sagaCryptoWatcher(){
  yield takeLatest(FETCH_CRYPTO, fetchCryptoData)
}

function* sagaCryptoHistoryWatcher(){
  yield takeLatest(FETCH_CRYPTO_HISTORY, fetchCryptoHistoryData)
}

function* sagaNewsWatcher(){
  yield takeLatest(FETCH_NEWS, fetchNews)
}

export default  function* rootSaga(){
  yield all([
    sagaCryptosWatcher(),
    sagaCryptoWatcher(),
    sagaNewsWatcher(),
    sagaCryptoHistoryWatcher()
  ])
}
