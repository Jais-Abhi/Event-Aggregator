import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const AuthLayout = () => {
  return (
    <div>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AuthLayout