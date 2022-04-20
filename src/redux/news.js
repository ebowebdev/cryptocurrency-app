const initialState = {
  newsLoading: false,
  error: ''
}

const newsReducer = (state = initialState, action) => {
  switch(action.type){
    case 'FETCH_NEWS_SUCCESS':
      return {
        ...state,
        data : action.payload,
        newsLoading: false
      }
    case 'FETCH_NEWS_LOADING':
      return {
        ...state,
        newsLoading: true
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