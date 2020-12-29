import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {profileApi} from "../api/api";
import {setOwner} from "../redux/authReducer";

const useAuth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      const userToken = localStorage.getItem('userToken')
      if (userToken) {
        profileApi.getOwnerProfile().then(response => {
          dispatch(setOwner(response.data._id, response.data.name))
        })
      }
    }, [dispatch]
  )
}

export default useAuth