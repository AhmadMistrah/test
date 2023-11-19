import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Shop from '../pages/Shop/Shop'
import Car from '../pages/Car/Car'

const ScreenRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/car' element={<Car/>} />
    </Routes>
  )
}

export default ScreenRoutes