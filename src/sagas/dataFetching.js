import { call, put } from 'redux-saga/effects'
import { fetchCryptos } from '../api/cryptosApi'
import { fetchCrypto } from '../api/cryptoApi'
import { fetchCryptoHistory } from '../api/cryptoHistory'
import { fetchSearchNews } from '../api/newsApi'
import { 
  fetchDataSucces, 
  fetchDataLoading, 
  fetchCryptoSucces, 
  fetchCryptoLoading,
  fetchCryptoHistorySucces, 
  fetchCryptoHistoryLoading,
  fetchNewsSucces, 
  fetchNewsLoading,
} from '../redux/actions'

export function* fetchNews({payload}){
  yield put(fetchNewsLoading())
  const data = yield call(fetchSearchNews,payload)
  yield put(fetchNewsSucces(data))
}
  

export function* fetchData({payload}){
  yield put(fetchDataLoading())
  const data = yield call(fetchCryptos,payload)
  yield put(fetchDataSucces(data))
}

export function* fetchCryptoData({payload}){
  yield put(fetchCryptoLoading())
  const data = yield call(fetchCrypto,payload)
  yield put(fetchCryptoSucces(data))
}

export function* fetchCryptoHistoryData({payload}){
  yield put(fetchCryptoHistoryLoading())
  const data = yield call(fetchCryptoHistory,payload)
  yield put(fetchCryptoHistorySucces(data))
}

