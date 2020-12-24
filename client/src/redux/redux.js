import {createStore, combineReducers} from 'redux'
import authReducer from "./auth-reducer";
import moviesReducer from "./movies-reducer";
import genresReducer from "./genres-reducer";
import channelsReducer from "./channels-reducer";

const reducers = combineReducers({
  auth: authReducer,
  movies: moviesReducer,
  genres: genresReducer,
  channels: channelsReducer
})

const store = createStore(reducers)

window.state = store.getState()

export default store