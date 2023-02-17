import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutOne } from './About/AboutOne'
import { AboutTwo } from './About/AboutTwo'
import { Home } from './Home/Home'
// import App from './App'

import './index.css'

// L'application possede deux routes, je defini les chemins ainsi que les composants associes (/ => Home, /about/:index => About)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/:index' element={<AboutTwo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
