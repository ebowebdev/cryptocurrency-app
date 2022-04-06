const initialState = {
  isLoading: false,
  error: ''
}

const cryptoReducer = (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_CRYPTO_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      }
    case 'FETCH_CRYPTO_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_CRYPTO_FAIL':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default cryptoReducer