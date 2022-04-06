import { 
  FETCH_DATA_SUCCESS, 
  FETCH_DATA_LOADING, 
  FETCH_DATA_FAIL, 
  FETCH_DATA,
  FETCH_CRYPTO_SUCCESS, 
  FETCH_CRYPTO_LOADING, 
  FETCH_CRYPTO_FAIL, 
  FETCH_CRYPTO,
} from './types'

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
