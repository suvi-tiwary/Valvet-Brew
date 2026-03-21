import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import ForgetPassword from './pages/ForgetPassword'



const App = () => {
  return (
    <>
    <Routes>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/forget' element={<ForgetPassword/>}/>
    </Routes>
    </>
  )
}

export default App