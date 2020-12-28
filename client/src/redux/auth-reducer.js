const LOGIN = 'video-service/auth/LOGIN'
const LOGOUT = 'video-service/auth/LOGOUT'
const UPDATE_NAME = 'video-service/auth/UPDATE_NAME'

const initialState = {
  owner: {},
  isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type){
    case UPDATE_NAME:
      return {
        ...state,
        owner:{
          ...state.owner,
          name: action.newName
        }
      }
    case LOGIN:
      return {
        ...state,
        owner: {
          token: action.token,
          id: action.id
        },
        isAuth: true
      }
    case LOGOUT:
      return {
        ...state,
        owner: {},
        isAuth: false
      }
    default :
      return state
  }
}

export const loginUser = (token, id) => ({type: LOGIN, token, id})
export const logoutUser = () => ({type: LOGOUT})
export const updateName = (newName) => ({type: UPDATE_NAME, newName})

export default authReducer