const initialState = {
  isLoading: false,
  error: ''
}

const cryptosReducer = (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_DATA_SUCCESS':
      return {
        ...state,
        ...action.payload,
        isLoading: false
      }
    case 'FETCH_DATA_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_DATA_FAIL':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default cryptosReducer