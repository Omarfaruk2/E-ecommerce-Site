import React from 'react'
import { Route, Routes } from 'react-router'
import "./App.css"
import Home from './Pages/Home/Home'
import Footer from './Pages/Share/Footer'
import Navbar from './Pages/Share/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />

      </Routes>

      <Footer />

    </div>
  )
}

export default App