export const getMovies = state => {
  return state.moviesPage.movies
}

export const getGenres = state => {
  return state.moviesPage.genres
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

export const getOwnerName = state => {
  return state.auth.owner.name
}

export const getModalLoginErrors = state => {
  return state.modals.modalLogin.errors
}

export const getIsLoadingModalLogin = state => {
  return state.modals.modalLogin.isLoading
}