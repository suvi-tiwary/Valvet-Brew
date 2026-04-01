import React from 'react'
import userHooks from '../hooks/userHooks'
import { useSelector } from 'react-redux'

const Navbar = () => {
  let {userData}=useSelector(state=>state.user)
  return (
    <>
    {userData?.role=="User" && <div className='w-full h-[60px] flex justify-between z-[10] shadow-xl'>
    
    </div>}
    </>
   
  )
}

export default Navbar 