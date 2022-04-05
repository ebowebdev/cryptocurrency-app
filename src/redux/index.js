import { combineReducers } from 'redux'
import cryptosReducer from './cryptos'

export default combineReducers({
  cryptos: cryptosReducer
})