import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Dashboard from '../pages/dashboard'
import Employees from '../pages/Employees'
import Signup from '../pages/signup'

export default function Routing() {
  return (
    <>
    <Routes>
        <Route path='*'/>
        <Route path='/' element={<Sidebar/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/employees' element={<Employees/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
    </Routes>
    </>
  )
}
