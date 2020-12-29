import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import authReducer from "./authReducer";
import moviesPageReducer from "./moviesPageReducer";
import channelsPageReducer from "./channelsPageReducer";
import modalsReducer from "./modalsReducer";

const reducers = combineReducers({
  auth: authReducer,
  moviesPage: moviesPageReducer,
  channelsPage: channelsPageReducer,
  modals: modalsReducer
})


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers,composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store

window.store = store