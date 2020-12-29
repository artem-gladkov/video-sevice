const SET_MOVIES = 'video-service/movies/SET_MOVIES'

const initialState = {
  movies: null,
  genres: [
    {
      id: 0,
      title: 'Комедии',
      photo: ''
    },{
      id: 1,
      title: 'Драмы',
      photo: ''
    },{
      id: 2,
      title: 'Фантастика',
      photo: ''
    },{
      id: 3,
      title: 'Ужасы',
      photo: ''
    }
  ]
}

const moviesPageReducer = (state = initialState, action) => {
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

export default moviesPageReducer