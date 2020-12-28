import {useState, useCallback, useEffect} from 'react'
import {loginUser, logoutUser, updateName} from "../redux/auth-reducer";
import {useDispatch} from "react-redux";
import {profileApi} from "../api/api";

const storageName = 'userData'

const useAuth = () => {
  const [token, setToken] = useState()
  const [userId, setUserId] = useState()
  const dispatch = useDispatch()

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken)
    setUserId(id)

    profileApi.getOwnerProfile(jwtToken).then(
      (response) => {
        dispatch(updateName(response.data.name))
      }
    )

    localStorage.setItem(storageName, JSON.stringify({userId: id, token: jwtToken}))
    dispatch(loginUser(jwtToken, id))
  }, [dispatch])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)

    localStorage.removeItem(storageName)
    dispatch(logoutUser())
  }, [dispatch])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))

    if(data && data.token) {
      login(data.token, data.userId)

      profileApi.getOwnerProfile(data.token).then(
        (response) => {
          dispatch(updateName(response.data.name))
        }
      )
    }
  }, [login,dispatch])

  return {login, logout, token, userId}
}

export default useAuth