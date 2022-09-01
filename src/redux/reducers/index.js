import { combineReducers } from 'redux'
import users from './users'
import global from './global'

const rootReducer = combineReducers({
  global: global,
  users: users,
})

export default rootReducer
