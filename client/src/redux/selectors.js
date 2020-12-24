export const getMovies = state => {
  return state.movies.movies
}

export const getGenres = state => {
  return state.genres.genres
}

export const getChannels = state => {
  return state.channels ? state.channels.channels : null
}