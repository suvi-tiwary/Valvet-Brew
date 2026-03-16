import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
    let [role,setRole]=useState("")
  return (
         <div  className='w-full min-h-screen flex justify-center items-center bg-[#fff9f6] p-3'>
         <div className='w-full max-w-md bg-white rounded-xl shadow-xl p-6'>
          <h1 className='font-bold text-[23px] text-[#FF4500]'>Velvet</h1>
          <p className='text-gray-500 pb-2'>  ***Signup to get owesome and delicious food delivery**</p>

          {/* Fullname */}
          <div className='flex flex-col mt-3 px-2'>
            <label htmlFor="Fullname">Fullname</label>
            <input type="text" className='border-[2px] border-gray-300 p-1 hover:border-[#FF4500] focus:outline-none rounded-xl'/>
          </div>

          {/* email */}
          <div className='flex flex-col mt-3 px-2'>
            <label htmlFor="email">Email</label>
            <input type="text" className='border-[2px] border-gray-300 p-1 hover:border-[#FF4500] focus:outline-none rounded-xl'/>
          </div>

          {/* password */}

            <div className='flex flex-col mt-3 px-2'>
            <label htmlFor="password">Password</label>
            <input type="text" className='border-[2px] border-gray-300 p-1 hover:border-[#FF4500] focus:outline-none rounded-xl'/>
          </div>


          {/* role */}
           <div className='mt-4 px-3'>Role</div>
           <div className='flex justify-center items-center gap-3 mt-1'>
                 {["User", "Owner", "Delivery Boy"].map((r) => (
          <button
            key={r}
            onClick={() => setRole(r)}
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

        <button className='w-[90%] mx-auto block mt-3 bg-[#FF4500] hover:bg-[#E03E00] border-[1px] border-[#CC3700] rounded-xl p-2 text-white'>Signup</button>

    
        {/* google authentication */}

        <button className="w-[90%] mx-auto block mt-3 bg-[#F3F4F6] hover:bg-[#E5E7EB] border border-[#D1D5DB] rounded-xl p-2 text-[#374151] flex items-center justify-center gap-2 transition">
  
        <FcGoogle size={20} />
        Continue with Google
         </button>

       <p className='text-center mt-2'>Already have an account ? <span className='text-[#FF4500] cursor-pointer'>SignIn</span></p>

        </div>
    </div>
  )
}

export default Signup