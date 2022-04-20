import { 
  FETCH_DATA_SUCCESS, 
  FETCH_DATA_LOADING, 
  FETCH_DATA_FAIL, 
  FETCH_DATA,
  FETCH_CRYPTO_SUCCESS, 
  FETCH_CRYPTO_LOADING, 
  FETCH_CRYPTO_FAIL, 
  FETCH_CRYPTO_HISTORY,
  FETCH_CRYPTO_HISTORY_SUCCESS, 
  FETCH_CRYPTO_HISTORY_LOADING, 
  FETCH_CRYPTO_HISTORY_FAIL, 
  FETCH_CRYPTO,
  FETCH_NEWS_SUCCESS, 
  FETCH_NEWS_LOADING, 
  FETCH_NEWS_FAIL, 
  FETCH_NEWS
} from './types'

export const fetchNewsAction = (payload) => ({
  type: FETCH_NEWS,
  payload
})

export const fetchNewsSucces = (payload) => ({
  type: FETCH_NEWS_SUCCESS,
  payload
})

export const fetchNewsLoading = () => ({
  type: FETCH_NEWS_LOADING
})


export const fetchNewsFail = (payload) => ({
  type: FETCH_NEWS_FAIL,
  payload
})

export const fetchDataAction = (payload) => ({
  type: FETCH_DATA,
  payload
})

export const fetchDataSucces = (payload) => ({
  type: FETCH_DATA_SUCCESS,
  payload
})

export const fetchDataLoading = () => ({
  type: FETCH_DATA_LOADING
})


export const fetchDataFail = (payload) => ({
  type: FETCH_DATA_FAIL,
  payload
})

export const fetchCryptoAction = (payload) => ({
  type: FETCH_CRYPTO,
  payload
})

export const fetchCryptoSucces = (payload) => ({
  type: FETCH_CRYPTO_SUCCESS,
  payload
})

export const fetchCryptoLoading = () => ({
  type: FETCH_CRYPTO_LOADING
})


export const fetchCyptoFail = (payload) => ({
  type: FETCH_CRYPTO_FAIL,
  payload
})

export const fetchCryptoHistory = (payload) => ({
  type: FETCH_CRYPTO_HISTORY,
  payload
})

export const fetchCryptoHistorySucces = (payload) => ({
  type: FETCH_CRYPTO_HISTORY_SUCCESS,
  payload
})

export const fetchCryptoHistoryLoading = () => ({
  type: FETCH_CRYPTO_HISTORY_LOADING
})


export const fetchCyptoHistoryFail = (payload) => ({
  type: FETCH_CRYPTO_HISTORY_FAIL,
  payload
})


