import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'
import WelcomePage from '../pages/WelcomePage'
import Phone from '../pages/PhoneAuth/Phone'

function PublicRoutes() {
  return (
    <div>

        <Routes>
        <Route path='*' element={<WelcomePage/>}/>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/welcome' element={<WelcomePage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path='/phone' element={<Phone/>}/>
        



        </Routes>
    </div>
  )
}

export default PublicRoutes
