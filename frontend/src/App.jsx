import React from 'react'
import Home from './pages/Home'
import {Routes, Route} from "react-router-dom"
import Navbar from './componenets/Navbar'
import Signup from './pages/Signup'
const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/signup" element={<Signup/>}/>
    </Routes>
    </>
  )
}

export default App