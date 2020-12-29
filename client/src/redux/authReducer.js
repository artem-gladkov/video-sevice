import {authApi, profileApi} from "../api/api";
import {closeModal, setModalErrors} from "./modalsReducer";

const SET_OWNER = 'video-service/auth/SET_OWNER'
const DELETE_OWNER = 'video-service/auth/DELETE_OWNER'
const UPDATE_NAME = 'video-service/auth/UPDATE_NAME'

const initialState = {
  owner: {
    id: '',
    name: ''
  },
  isAuth: false,
  stateInitialized: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case UPDATE_NAME:
      return {
        ...state,
        owner: {
          ...state.owner,
          name: action.newName
        }
      }
    case SET_OWNER:
      return {
        ...state,
        owner: {
          name: action.name,
          id: action.id
        },
        isAuth: true
      }
    case DELETE_OWNER:
      return {
        ...state,
        owner: {},
        isAuth: false
      }
    default :
      return state
  }
}

export const setOwner = (id, name) => ({type: SET_OWNER, id, name})
export const deleteOwner = () => ({type: DELETE_OWNER})
export const updateName = (newName) => ({type: UPDATE_NAME, newName})

export const login = (email, password) => async dispatch => {
  try {
    await authApi.login(email, password)

    const response = await profileApi.getOwnerProfile()
    dispatch(setOwner(response.data._id, response.data.name))
    dispatch(closeModal('modalLogin'))
  } catch (e) {

    if(e.response.data.errors){
      const errors = e.response.data.errors.map(error => error.msg)
      dispatch(setModalErrors('modalLogin', errors))
      return
    }

    dispatch(setModalErrors('modalLogin', e.response.data.message))
  }
}

export const logout = () => async dispatch => {
  await authApi.logout()
  dispatch(deleteOwner())
}


export default authReducer