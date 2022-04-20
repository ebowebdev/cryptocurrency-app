const initialState = {
  isLoading: false,
  error: ''
}

const cryptoHistoryReducer = (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_CRYPTO_HISTORY_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      }
    case 'FETCH_CRYPTO_HISTORY_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_CRYPTO_HISTORY_FAIL':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default cryptoHistoryReducer