import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'

const userHooks = () => {

  const dispatch = useDispatch()
  const serverUrl = "http://localhost:3000"

  useEffect(() => {
    const fetchCurrentUser = async () => {
      try {
        const result = await axios.get(`${serverUrl}/api/current`, {
          withCredentials: true
        })

        dispatch(setUserData(result.data))

      } catch (error) {
        console.log(error)
      }
    }

    fetchCurrentUser()
  }, [])

}

export default userHooks