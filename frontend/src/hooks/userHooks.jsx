import axios from 'axios'
import React, { useEffect, useState } from 'react'

const userHooks = () => {

 const serverUrl = "http://localhost:3000"
 const [userData,setUserData]=useState(null)
    useEffect(()=>{
        const fetchCurrentUser = async()=>{
            try {
                let result = await axios.get(`${serverUrl}/api/current,{withCredential:true}`)
                
            } catch (error) {
                
            }
        }
    },[])
  return (
    <div>userHooks</div>
  )
}

export default userHooks