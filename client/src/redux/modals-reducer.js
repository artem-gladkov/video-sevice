const OPEN_MODAL = 'video-service/modals/OPEN_MODAL'
const CLOSE_MODAL = 'video-service/modals/CLOSE_MODAL'

const initialState = {
  modalLogin: {
    isOpen: false
  },
  modalRegistration: {
    isOpen: false
  },
  isAppLock: false
}

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        [action.modal]: {
          isOpen: true
        },
        isAppLock: true
      }
    case CLOSE_MODAL: {
      return {
        ...state,
        [action.modal]: {
          isOpen: false
        },
        isAppLock: false
      }
    }
    default :
      return state
  }
}

export const openModal = (modal) => ({type: OPEN_MODAL, modal})
export const closeModal = (modal) => ({type: CLOSE_MODAL, modal})

export default modalsReducer