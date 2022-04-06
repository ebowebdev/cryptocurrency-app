import { FETCH_DATA_SUCCESS, FETCH_DATA_LOADING, FETCH_DATA_FAIL, FETCH_DATA } from './types'

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
