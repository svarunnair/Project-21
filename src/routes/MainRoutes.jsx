import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Booking from '../pages/Booking'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import Payment from '../pages/Payment'

function MainRoutes() {
  let token=localStorage.getItem('token');
  return (
    <div>

      <Routes>

        <Route path='/' element={<Signup/>}/>
        <Route path='/booking' element={<Booking/>}/>
        <Route path='/home' element={token&&<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/booking" element={token&&<Booking/>}/>
        <Route path='/payment' element={<Payment/>}/>



      </Routes>


    </div>
  )
}

export default MainRoutes