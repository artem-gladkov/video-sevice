//auth
export const getIsAuth = state => {
  return state.auth.isAuth
}

export const getOwnerName = state => {
  return state.auth.owner.name
}

export const getIsStateInitialized = state => {
  return state.auth.isStateInitialized
}

//moviesPage
export const getMovies = state => {
  return state.moviesPage.movies
}

export const getGenres = state => {
  return state.moviesPage.genres
}

//channelsPage
export const getChannels = state => {
  return state.channelsPage ? state.channelsPage.channels : null
}

//modals
export const getIsOpenModalLogin = state => {
  return state.modals.modalLogin.isOpen
}

export const getIsOpenModalRegistration = state => {
  return state.modals.modalRegistration.isOpen
}

export const getModalLoginErrors = state => {
  return state.modals.modalLogin.errors
}

export const getIsLoadingModalLogin = state => {
  return state.modals.modalLogin.isLoading
}

export const getIsAppLock = state => {
  return state.modals.isAppLock
}
