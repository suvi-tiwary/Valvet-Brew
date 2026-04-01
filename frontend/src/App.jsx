import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import ForgetPassword from './pages/ForgetPassword'
import Signin from './pages/Signin'
import OwnerDashboard from './pages/OwnerDashboard'
import userHooks from './hooks/userHooks'
import Navbar from './components/Navbar'
import { useSelector } from 'react-redux'

const App = () => {
  userHooks()
  let {userData}=useSelector(state=>state.user)
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/signup' element={!userData?<Signup/>:<OwnerDashboard/>}/>
      <Route path='/signin' element={<Signin/>}/>
      <Route path='/forget' element={<ForgetPassword/>}/>
      <Route path='/' element={<OwnerDashboard/>}/>
     
    </Routes>
    </>
  )
}

export default App