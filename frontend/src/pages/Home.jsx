import React from 'react'
import { FaPizzaSlice } from "react-icons/fa";
import backgroundImg from "/image.jpg"

const Home = () => {
  return (
    <div className='w-full min-h-screen mt-[65px]'>
       <img src={backgroundImg} alt="" className='w-full h-[70vh]' />
       <h1 className='flex justify-center md:text-[65px] text-[40px] text-center font-great font-semibold'>Welcome to Cafeteria of the House</h1>
       <div className='flex justify-center items-center gap-2'>
       {menu.map((item)=>(
        <div className='w-[200px] h-[230px] border-gray-600'></div>
       ))}
       </div>
    </div>
  )
}

export default Home