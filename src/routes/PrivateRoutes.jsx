import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Booking from '../pages/Booking'
import Payment from '../pages/Payment'
import Details from '../pages/Details'
import Home from '../pages/Home'

function PrivateRoutes() {
  let token=localStorage.getItem("token")
  return (
    <div>
      <Routes>
      <Route path='/' element={token&&<Home/>}/>
       <Route path='/booking' element={token&&<Booking/>}/>
       <Route path='/home' element={token&&<Home/>}/>
        <Route path="/booking" element={token&&<Booking/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/details/:id' element={<Details/>}/>
        
      
      </Routes></div>
  )
}

export default PrivateRoutes