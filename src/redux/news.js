const initialState = {
  isLoading: false,
  error: ''
}

const newsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        data : action.payload,
        isLoading: false
      }
    case 'FETCH_NEWS_LOADING':
      return {
        ...state,
        isLoading: true
      }
    case 'FETCH_NEWS_FAIL':
      return {
        ...state,
        error: action.payload
      }
    default:
      return state
  }
}

export default newsReducer