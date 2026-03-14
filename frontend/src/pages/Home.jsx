import React from 'react'
import { FaPizzaSlice } from "react-icons/fa";
import backgroundImg from "/image.jpg"

const Home = () => {
  return (
    <div className='bg-green-100 w-full min-h-screen mt-[65px]'>
       <img src={backgroundImg} alt="" className='w-full h-[70vh]' />
       <h1 className='flex justify-center text-[45px]'>Welcome to Cafeteria of the House</h1>
       
    </div>
  )
}

export default Home