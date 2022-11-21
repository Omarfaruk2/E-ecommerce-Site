import React from 'react'
import { Route, Routes } from 'react-router'
import "./App.css"
import Login from './Pages/Authentication/Login'
import RequireAuth from './Pages/Authentication/RequireAuth'
import SellerLogin from './Pages/Authentication/SellerLogin'
import SignUp from './Pages/Authentication/SignUp'
import AllUser from './Pages/Dashboard/AllUser'
import Dashboard from './Pages/Dashboard/Dashboard'
import Home from './Pages/Home/Home'
import Item from './Pages/Items/Item'
import SingleShipItems from './Pages/Items/SingleShipItems'
import Footer from './Pages/Share/Footer'
import Navbar from './Pages/Share/Navbar'

const App = () => {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />

        <Route path='/singup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sellerlogin' element={<SellerLogin />} />


        <Route path="dashboard" element={<RequireAuth><Dashboard /></RequireAuth>} >
          {/* <Route index element={<Myprofile />}></Route> */}
          <Route path='alluser' element={<AllUser />}></Route>

        </Route>






        <Route path='/items/:item' element={
          <RequireAuth>
            <Item />
          </RequireAuth>
        } />
        <Route path='/items/:item/:id' element={<SingleShipItems />} />

      </Routes>

      <Footer />

    </div>
  )
}

export default App