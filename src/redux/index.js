import { combineReducers } from 'redux'
import cryptosReducer from './cryptos'
import cryptoReducer from './crypto'

export default combineReducers({
  cryptos: cryptosReducer,
  crypto: cryptoReducer
})