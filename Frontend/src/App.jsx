import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Start from './Pages/Start'
import StudentRegister from './Pages/Auth/StudentRegister'
import StudentLogin from './Pages/Auth/StudentLogin'
import InstituteLogin from './Pages/Auth/InstituteLogin'
import AuthLayout from './Components/AuthLayout'
import HomeLayout from './Components/HomeLayout'

const App = () => {
  return (
    <Routes>
      <Route element={<AuthLayout/>} >
        <Route path="/" element={<Start />} />
        <Route path="/student/registration" element={<StudentRegister />} />
        <Route path="/student/login" element={<StudentLogin />} />
        <Route path="/college/login" element={<InstituteLogin />} />
        <Route path="/student/registration" element={<StudentRegister />} />
      </Route>    
      <Route element={<HomeLayout/>} >
        {/* Protected Routes can go here */}
      </Route>
    </Routes>
  )
}

export default App