import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Sidebar from '../components/sidebar'
import Signup from '../pages/signup'

export default function Routing() {
  return (
    <>
    <Routes>
        <Route path='*'/>
        <Route path='/' element={<Sidebar/>}/>
        <Route path='/signup' element={<Signup/>}/>
    </Routes>
    </>
  )
}
