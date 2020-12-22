import {createStore, combineReducers} from 'redux'
import authReducer from "./auth-reducer";

const reducers = combineReducers({
  auth: authReducer
})

const store = createStore(reducers)

export default store