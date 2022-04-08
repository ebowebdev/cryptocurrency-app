import { takeEvery, all } from 'redux-saga/effects'
import { FETCH_DATA, FETCH_CRYPTO, FETCH_NEWS } from '../redux/types'
import { fetchData, fetchCryptoData, fetchNews } from './dataFetching'

function* sagaCryptosWatcher(){
  yield takeEvery(FETCH_DATA, fetchData)
}

function* sagaCryptoWatcher(){
  yield takeEvery(FETCH_CRYPTO, fetchCryptoData)
}

function* sagaNewsWatcher(){
  yield takeEvery(FETCH_NEWS, fetchNews)
}

export default  function* rootSaga(){
  yield all([sagaCryptosWatcher(),sagaCryptoWatcher(),sagaNewsWatcher()])
}
