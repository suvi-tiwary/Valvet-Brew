import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import ForgetPassword from './pages/ForgetPassword'
import Signin from './pages/Signin'
import OwnerDashboard from './pages/OwnerDashboard'
import Navbar from './components/Navbar'

const App = () => {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/signup' element={!userData?<Signup/>:<OwnerDashboard/>}/>
      <Route path='/signin' element={!userData?<Signin/>:<OwnerDashboard/>}/>
      <Route path='/forget' element={<ForgetPassword/>}/>
      <Route path='/' element={<OwnerDashboard/>}/>
     
    </Routes>
    </>
  )
}

export default App