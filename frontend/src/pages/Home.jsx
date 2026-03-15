import React from 'react'
import backgroundImg from "/image.jpg"
import menu from '../menu'


const Home = () => {
  return (
    <div className='w-full min-h-screen mt-[65px] bg-gray-50'>

      {/* ── HERO IMAGE ── */}
      <div className='relative w-full h-[70vh] overflow-hidden'>
        <img src={backgroundImg} alt="" className='w-full h-full object-cover' />
        <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent' />
      </div>

      {/* ── WELCOME HEADING ── */}
      <h1 className='flex justify-center md:text-[65px] text-[40px] text-center font-great font-semibold pt-8 px-4 text-gray-800 leading-tight'>
        Welcome to Cafeteria of the House
      </h1>

      {/* ── DECORATIVE DIVIDER ── */}
      <div className='flex items-center justify-center gap-3 mt-3 mb-2'>
        <div className='h-px w-20 bg-green-300' />
        <div className='w-2 h-2 rounded-full bg-green-500' />
        <div className='h-px w-20 bg-green-300' />
      </div>

      {/* ── MENU SECTION ── */}
      <div className='pt-4 text-center font-semibold text-[31px] pb-6 text-green-600 tracking-wide'>
        Menu Eglooo
      </div>

      <div className='flex justify-center items-stretch gap-5 flex-wrap px-4 pb-16'>
        {menu.map((item) => (
          <div
            key={item.id}
            className='w-[230px] border-gray-100 border-2 rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group'
          >
            {/* image */}
            <div className='overflow-hidden h-[155px]'>
              <img
                src={item.image}
                alt=""
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
            </div>

            {/* name + add button */}
            <div className='flex justify-between items-center px-3 pt-3'>
              <div className='pl-1 font-semibold text-gray-800 text-[14px] truncate max-w-[140px]'>
                {item.name}
              </div>
              <button className='w-[41px] h-[29px] bg-green-600 hover:bg-green-500 text-white rounded-lg p-1 text-[12px] font-bold transition-colors'>
                Add
              </button>
            </div>

            {/* prices */}
            <div className='px-3 pt-1.5 pb-3 space-y-0.5'>
              <div className='flex justify-between text-[12px]'>
                <span className='text-gray-400'>Full Plate</span>
                <span className='font-bold text-green-600'>Rs {item.fullPrice}</span>
              </div>
              <div className='flex justify-between text-[12px]'>
                <span className='text-gray-400'>Half Plate</span>
                <span className='font-semibold text-green-500'>Rs {item.halfPrice}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ── DRINKS SECTION ── */}
    <video autoPlay loop muted className="relative w-full h-[100%] object-cover">
    <source src="/output.mp4" type="video/mp4"/>
    <img src="/cocktail-left-leaf.png" alt=""  className='absolute top-5'/>
  </video>
    </div>
  )
}

export default Home
