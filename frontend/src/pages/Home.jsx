import React from 'react'
import backgroundImg from "/image.jpg"
import menu from '../menu'


const Home = () => {
  return (
    <div className='w-full min-h-screen mt-[65px]'>
       <img src={backgroundImg} alt="" className='w-full h-[70vh]' />
       <h1 className='flex justify-center md:text-[65px] text-[40px] text-center font-great font-semibold'>Welcome to Cafeteria of the House</h1>

        {/* menu section */}
         <div className='pt-2 text-center font-semibold text-[31px] pb-2 text-green-600'>Menu Eglooo</div>
       <div className='flex justify-center items-center gap-3'>
       {menu.map((item)=>(
        <div className='w-[230px] h-[250px] border-gray-600 border-[2px] rounded-xl overflow-hidden'>
          <img src={item.image} alt="" className='w-full h-[67%] object-cover'/>
          <div className='flex justify-between px-2 pt-1'>
  <div className='pl-1'>{item.name}</div>
  <button className='w-[41px] h-[29px] bg-green-600 text-white rounded-lg p-1'>Add</button>
          </div>
        
        </div>
       ))}
       </div>
    </div>
  )
}

export default Home