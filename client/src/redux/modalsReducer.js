const OPEN_MODAL = 'video-service/modals/OPEN_MODAL'
const CLOSE_MODAL = 'video-service/modals/CLOSE_MODAL'
const SET_ERRORS = 'video-service/modals/SET_ERRORS'

const initialState = {
  modalLogin: {
    isOpen: false,
    errors: []
  },
  modalRegistration: {
    isOpen: false,
    errors: []
  },
  isAppLock: false
}

const modalsReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        [action.modal]: {
          ...state[action.modal],
          isOpen: true
        },
        isAppLock: true
      }
    case CLOSE_MODAL: {
      return {
        ...state,
        [action.modal]: {
          ...state[action.modal],
          isOpen: false
        },
        isAppLock: false
      }
    }
    case SET_ERRORS: {
      return {
        ...state,
        [action.modal]: {
          ...state[action.modal],
          errors: [...action.errors]
        }
      }
    }
    default :
      return state
  }
}

export const openModal = (modal) => ({type: OPEN_MODAL, modal})
export const closeModal = (modal) => ({type: CLOSE_MODAL, modal})
export const setModalErrors = (modal, errors) => ({type: SET_ERRORS, modal, errors})

export default modalsReducer