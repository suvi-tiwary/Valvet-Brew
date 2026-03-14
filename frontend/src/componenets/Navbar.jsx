import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-[65px] flex justify-between items-center px-5 backdrop-blur-md bg-white/20 border-white/30 shadow-lg fixed top-0'>
        <div className='font-extrabold cursor-pointer text-[25px] bg-gradient-to-r from-green-500 via-orange-500 to-pink-600 bg-clip-text text-transparent'>Velvet Brew</div>
        <div className='flex justify-center items-center gap-5 pr-5'>
            <div className='cursor-pointer hover:text-green-600 transition-all'>Home</div>
            <div className='cursor-pointer hover:text-green-600 transition-all'>Menu</div>
            <div className='cursor-pointer hover:text-green-600 transition-all'>Drinks</div>
            <div className='cursor-pointer hover:text-green-600 transition-all'>Bookings</div>
          
        </div>
    </div>
  )
}

export default Navbar