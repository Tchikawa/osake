import { combineReducers } from 'redux'
import OsakeReducer from './OsakeReducer'

export default combineReducers({
  osakeList: OsakeReducer,
})