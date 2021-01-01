import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {profileApi} from "../api/api";
import {initializeState, setOwner} from "../redux/authReducer";

const useAuth = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const userToken = localStorage.getItem('userToken')

    if (userToken) {
      profileApi.getOwnerProfile()
        .then(response => {
          if (response.status === 200) {
            dispatch(setOwner(response.data._id, response.data.name))
          } else {
            dispatch(initializeState())
          }
        })
    } else {
      dispatch(initializeState())
    }




  }, [dispatch])


}

export default useAuth