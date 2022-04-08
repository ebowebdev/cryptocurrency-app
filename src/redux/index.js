import { combineReducers } from 'redux'
import cryptosReducer from './cryptos'
import cryptoReducer from './crypto'
import newsReducer from './news'

export default combineReducers({
  cryptos: cryptosReducer,
  crypto: cryptoReducer,
  news: newsReducer,
})