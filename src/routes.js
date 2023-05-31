import Favoritos from 'pages/Initial/Favoritos'
import Initial from './pages/Initial'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export default function routes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Initial/>}/>
            <Route path="/favoritos" element={<Favoritos/>}/>

        </Routes>
    </BrowserRouter>
  )
}
