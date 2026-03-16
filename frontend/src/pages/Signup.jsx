import React from 'react'

const Signup = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-pink-100'>
      <div className='bg-white md:w-[23%] w-full h-[50%] border-[1px] border-orange-300 p-3 rounded-lg'>
       <h1 className='text-orange-600 text-[45px] font-bold p-2'>Velvet Brew</h1>
     
       <div className='flex flex-col m-2 p-[23px]'>
      <label htmlFor="fullname" className='text-[23px] text-gray-400'>Fullname</label>
      <input type="text" placeholder='fullname' className='text-[34px] w-full h-[45px] border-[1px] border-gray-500 p-4' />
       </div>
      </div>
    </div>
  )
}

export default Signup