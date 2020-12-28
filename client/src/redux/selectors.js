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

export const getIsOpenModalRegistration = state => {
  return state.modals.modalRegistration.isOpen
}

export const getIsAppLock = state => {
  return state.modals.isAppLock
}

export const getIsAuth = state => {
  return state.auth.isAuth
}

export const getUserName = state => {
  return state.auth.owner.name
}