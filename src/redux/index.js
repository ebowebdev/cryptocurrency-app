import { combineReducers } from 'redux'
import cryptosReducer from './cryptos'
import cryptoReducer from './crypto'
import cryptoHistoryReducer from './cryptoHistory'
import newsReducer from './news'

export default combineReducers({
  cryptos: cryptosReducer,
  crypto: cryptoReducer,
  cryptoHistory: cryptoHistoryReducer,
  news: newsReducer,
})