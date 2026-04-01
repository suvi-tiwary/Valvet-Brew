import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import userHooks from '../hooks/userHooks';
import { useDispatch } from 'react-redux';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../../firebase';

const Signup = () => { 
    let [role,setRole]=useState("User")
    let [showPassword,setShowPassword]=useState(false)
    const navigate = useNavigate()
    let [fullname,setFullname]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    const serverUrl = "http://localhost:3000"
    let dispatch = useDispatch()
    const SignupHandler = async()=>{
      try {
        let result = await axios.post(`${serverUrl}/api/signup`,{
          fullname,email,password,role})
           console.log(result.data)
           dispatch(setUserData(result.data))
           navigate("/")
      } catch (error) {
          console.log("ERROR DATA:", error.response?.data)
      }
    }

    const handleGoogleAuth= async()=>{
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth,provider)
      console.log(result)
      try {
        const {data}= await axios.post(`${serverUrl}/api/google-auth`,{
          fullname:result.user.displayName,
          email:result.user.email,
          role
        },{withCredentials:true})
      } catch (error) {
        console.log(error)
      }
  
    }
  return (
         <div  className='w-full min-h-screen flex justify-center items-center bg-[#fff9f6] p-3'>
         <div className='w-full max-w-md bg-white rounded-xl shadow-xl p-6'>
          <h1 className='font-bold text-[27px] text-[#FF4500]'>Velvet</h1>
          <p className='text-gray-500 pb-2'>  ***Signup to get owesome and delicious food delivery**</p>

          {/* Fullname */}
          <div className='flex flex-col mt-3 px-2'>
            <label htmlFor="Fullname">Fullname</label>
            <input type="text" className='border-[2px] border-gray-300 p-1 hover:border-[#FF4500] focus:outline-none rounded-xl' onChange={(e)=>setFullname(e.target.value)} value={fullname}/>
          </div>

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
            <input type= {showPassword?"text":"password"} className='border-[2px] border-gray-300 p-1 hover:border-[#FF4500] focus:outline-none rounded-xl'onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </div>
            </div>
        


          {/* role */}
           <div className='mt-4 px-3'>Role</div>
           <div className='flex justify-center items-center gap-3 mt-1'>
                 {["User", "Owner", "Delivery Boy"].map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
            value={role}
            className={`w-[109px] h-[45px] rounded-xl transition
              ${
                role === r
                  ? "bg-[#FF4500] text-white"
                  : "bg-[#E5E7EB] text-gray-700"
              }`}
          >
            {r}
          </button>
        ))}

           </div>
     
        {/* signup button */}

        <button className='md:w-[90%] w-full mx-auto block mt-3 bg-[#FF4500] hover:bg-[#E03E00] border-[1px] border-[#CC3700] rounded-xl p-2 text-white' onClick={SignupHandler}>Signup</button>

    
        {/* google authentication */}

        <button className="md:w-[90%] w-full mx-auto block mt-3 bg-[#F3F4F6] hover:bg-[#E5E7EB] border border-[#D1D5DB] rounded-xl p-2 text-[#374151] flex items-center justify-center gap-2 transition" onClick={handleGoogleAuth}>
  
        <FcGoogle size={20} />
        Continue with Google
         </button>

       <p className='text-center mt-2'>Already have an account ? <span className='text-[#FF4500] cursor-pointer' onClick={()=>navigate("/signin")}>SignIn</span></p>

        </div>
    </div>
  )
}

export default Signup