export const getMovies = state => {
  return state.movies.movies
}

export const getGenres = state => {
  return state.genres.genres
}

export const getChannels = state => {
  return state.channels ? state.channels.channels : null
}

export const getIsOpenModalLogin = state => {
  return state.modals.modalLogin.isOpen
}

export const getIsAppLock = state => {
  return state.modals.isAppLock
}