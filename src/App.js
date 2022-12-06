import React from 'react'
import { Route, Routes } from 'react-router'
import "./App.css"
import Login from './Pages/Authentication/Login'
import RequireAuth from './Pages/Authentication/RequireAuth'
import SellerLogin from './Pages/Authentication/SellerLogin'
import SignUp from './Pages/Authentication/SignUp'
import AddCategories from './Pages/Dashboard/AddCategories'
import AddProducts from './Pages/Dashboard/AddProducts'
import AllProdcts from './Pages/Dashboard/AllProdcts'
import AllUser from './Pages/Dashboard/AllUser'
import Dashboard from './Pages/Dashboard/Dashboard'
import GetAllOrder from './Pages/Dashboard/GetAllOrder'
import ManageAllCatagori from './Pages/Dashboard/ManageAllCatagori'
import MyAddingProducts from './Pages/Dashboard/MyAddingProducts'
import MyOrder from './Pages/Dashboard/MyOrder'
import SellerOwnCustomerOrdersList from './Pages/Dashboard/SellerOwnCustomerOrdersList'
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
          <Route path='myorder' element={<MyOrder />}></Route>
          <Route path='allorder' element={<GetAllOrder />}></Route>
          <Route path='addProducts' element={<AddProducts />}></Route>
          <Route path='allProducts' element={<AllProdcts />}></Route>
          <Route path='myaddingProducts' element={<MyAddingProducts />}></Route>
          <Route path='addCatagori' element={<AddCategories />}></Route>
          <Route path='manageCatagori' element={<ManageAllCatagori />}></Route>
          <Route path='myCustomerOrder' element={<SellerOwnCustomerOrdersList />}></Route>

        </Route>

        <Route path='/items/:categoryName' element={
          <RequireAuth>
            <Item />
          </RequireAuth>
        } />
        <Route path='/items/:categoryName/:id' element={<SingleShipItems />} />

      </Routes>

      <Footer />

    </div>
  )
}

export default App