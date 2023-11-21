import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Booking from '../pages/Booking'
import Payment from '../pages/Payment'
import Details from '../pages/Details'
import Home from '../pages/Home'

function PrivateRoutes() {
  let token=localStorage.getItem("token")
  let otpToken=localStorage.getItem("otpToken")
  return (
    <div>
      <Routes>
      <Route path='*' element={<Home/>}/>
      <Route path='/' element={<Home/>}/>
       <Route path='/booking' element={token||otpToken?<Booking/>:<>Please Sign in</>}/>
       <Route path='/home' element={token||otpToken?<Home/>:<>Please Sign in</>}/>
        <Route path="/booking" element={token||otpToken?<Booking/>:<>Please Sign in</>}/>
        <Route path='/payment' element={token||otpToken?<Payment/>:<>Please Sign in</>}/>
        <Route path='/details/:id/:seat' element={token||otpToken?<Details/>:<>Please Sign in</>}/>

        
      
      </Routes></div>
  )
}

export default PrivateRoutes