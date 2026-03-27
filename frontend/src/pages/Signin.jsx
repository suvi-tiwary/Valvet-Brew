import axios from 'axios';
import React, { useState } from 'react'
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import {useNavigate} from "react-router-dom"

const Signin = () => {
    let [showPassword,setShowPassword]=useState(false)
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    const navigate = useNavigate()
    const serverUrl = "http://localhost:3000"

      const SigninHandler = async()=>{
      try {
        let result = await axios.post(`${serverUrl}/api/signin`,{
          email,password})
           console.log(result.data)
      } catch (error) {
          console.log(error)
      }
    }
  return (
         <div  className='w-full min-h-screen flex justify-center items-center bg-[#fff9f6] p-3'>
         <div className='w-full max-w-md bg-white rounded-xl shadow-xl p-6'>
          <h1 className='font-bold text-[27px] text-[#FF4500]'>Velvet</h1>
          <p className='text-gray-500 pb-2'>  ***Signin to get owesome and delicious food delivery**</p>


          {/* email */}
          <div className='flex flex-col mt-3 px-2'>
            <label htmlFor="email">Email</label>
            <input type="text" className='border-[2px] border-gray-300 p-1 hover:border-[#FF4500] focus:outline-none rounded-xl' onChange={(e)=>setEmail(e.target.value)} value={email}/>
          </div>

          {/* password */}
            <div className='relative'>

            {showPassword?<FaRegEye  className='absolute right-5 top-8 cursor-pointer' onClick={()=>setShowPassword(prev=>!prev)}/>:<FaRegEyeSlash className='absolute right-5 top-8 cursor-pointer' onClick={()=>setShowPassword(prev=>!prev)} />}  
            <div className='flex flex-col mt-3 px-2'>
            <label htmlFor="password">Password</label>
            <input type= {showPassword?"text":"password"} className='border-[2px] border-gray-300 p-1 hover:border-[#FF4500] focus:outline-none rounded-xl' onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </div>
            </div>
     
        {/* signup button */}

    
        <div className='px-2'>
          <button className='w-full mt-3 bg-[#FF4500] rounded-xl p-2 text-white hover:bg-[#E03E00]' onClick={SigninHandler}>
            Signin
          </button>
        </div>

       <p className='text-center mt-2'>Want to cretae a new account ? <span className='text-[#FF4500] cursor-pointer'onClick={()=>navigate("/signup")}>Signup</span></p>

        </div>
    </div>
  )
}

export default Signin