import { call, put } from 'redux-saga/effects'
import { fetchCryptos } from '../api/cryptosApi'
import { fetchDataSucces, fetchDataLoading } from '../redux/actions'

export function* fetchData({payload}){
  yield put(fetchDataLoading())
  const data = yield call(fetchCryptos,payload)
  yield put(fetchDataSucces(data))
}

