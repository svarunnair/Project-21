import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../pages/Signup'
import Signin from '../pages/Signin'

function PublicRoutes() {
  return (
    <div>

        <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>

        </Routes>
    </div>
  )
}

export default PublicRoutes
