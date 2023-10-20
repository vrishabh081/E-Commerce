import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Shop from '../pages/shop'
import SingleOrderPage from '../pages/singleOrderPage';
import Cart from '../pages/cart'
import Dashboard from '../pages/dashboard'
import AddNewProduct from '../components/admin/addNewProduct'
import { AnimatePresence } from 'framer-motion'
import Checkout from '../pages/checkout'
import Profile from '../pages/profile'
import UserOrder from '../pages/userOrder'
import SuccessfullPayment from '../pages/successfullPayment'
import AdminOrder from '../pages/adminOrder'
import { useTranslation } from 'react-i18next'

const AnimatedRoutes = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname} >
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
          <Route path='/shopping' element={<Shop t={t} />} />
          <Route path='/shopping/:_id' element={<SingleOrderPage/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/profile' element={<Profile/>} />
          <Route path='/my-orders' element={<UserOrder/>} />
          <Route path='/successfull-order' element={<SuccessfullPayment/>} />

          {/* admin */}
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/add-new-product' element={<AddNewProduct/>} />
          <Route path='/all-orders' element={<AdminOrder/>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes
