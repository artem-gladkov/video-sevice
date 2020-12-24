const SET_MOVIES = 'video-service/movies/SET_MOVIES'

const initialState = {
  movies: null
}

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: [...action.movies]
      }
    default :
      return state
  }
}

export const setMovies = movies => ({type: SET_MOVIES, movies})

export default moviesReducer