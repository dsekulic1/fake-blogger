import { combineReducers } from 'redux'
import blogReducer from './blogReducer'
import userReducer from './userReducer'

const reducers = combineReducers({
  blog: blogReducer,
  user: userReducer,
})

export default reducers
