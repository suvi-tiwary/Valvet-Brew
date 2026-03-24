import React, { useState } from 'react'
import { FaArrowLeft } from "react-icons/fa";

const ForgetPassword = () => {
  let [step, setStep] = useState(3)
  return (
    <div className='w-full min-h-screen bg-[#fff9f6] flex justify-center items-center'>
      {step == 1 && <div className='shadow-xl p-3 bg-white max-w-sm font-bold w-full pb-3'>
        <div className='flex gap-[34px]'>
          <FaArrowLeft size={20} className='text-[#FF4500] cursor-pointer' />
          <h1 className='text-[#FF4500]'>Forget Password </h1>
        </div>

        {/* email */}
        <div className='flex flex-col mt-3 px-2'>
          <label htmlFor="email">Email</label>
          <input type="text" className='border-[2px] border-gray-300 p-1 hover:border-[#FF4500] focus:outline-none rounded-xl' />
        </div>

        <div className='px-2'>
          <button className='w-full mt-3 bg-[#FF4500] rounded-xl p-2 text-white hover:bg-[#E03E00]'>
            Confirm Email
          </button>
        </div>
      </div>}


     {step == 2 && <div className='shadow-xl p-3 bg-white max-w-sm font-bold w-full pb-3'>
        <div className='flex gap-[34px]'>
          <FaArrowLeft size={20} className='text-[#FF4500] cursor-pointer' />
          <h1 className='text-[#FF4500]'>Forget Password </h1>
        </div>

        {/* Otp */}
        <div className='flex flex-col mt-3 px-2'>
          <label htmlFor="otp">Otp</label>
          <input type="text" className='border-[2px] border-gray-300 p-1 hover:border-[#FF4500] focus:outline-none rounded-xl' />
        </div>

        <div className='px-2'>
          <button className='w-full mt-3 bg-[#FF4500] rounded-xl p-2 text-white hover:bg-[#E03E00]'>
            Verify Otp
          </button>
        </div>
      </div>}

 {step == 3 && <div className='shadow-xl p-3 bg-white max-w-sm font-bold w-full pb-3'>
        <div className='flex gap-[34px]'>
          <FaArrowLeft size={20} className='text-[#FF4500] cursor-pointer' />
          <h1 className='text-[#FF4500]'>Forget Password </h1>
        </div>

        {/* confirm password */}
        <div className='flex flex-col mt-3 px-2'>
          <label htmlFor="new password">New Password</label>
          <input type="text" className='border-[2px] border-gray-300 p-1 hover:border-[#FF4500] focus:outline-none rounded-xl' />
        </div>

        <div className='flex flex-col mt-3 px-2'>
          <label htmlFor="new password">confirm password</label>
          <input type="text" className='border-[2px] border-gray-300 p-1 hover:border-[#FF4500] focus:outline-none rounded-xl' />
        </div>

        <div className='px-2'>
          <button className='w-full mt-3 bg-[#FF4500] rounded-xl p-2 text-white hover:bg-[#E03E00]'>
            Reset Password
          </button>
        </div>
      </div>}


    </div>
  )
}

export default ForgetPassword