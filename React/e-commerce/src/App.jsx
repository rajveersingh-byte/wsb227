import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import ProductListing from './pages/ProductListing'
import Contact from './pages/Contact'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import Error from './error'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/product' element={<ProductListing />}></Route>
        <Route path='/product-details/:id' element={<ProductDetails/>}></Route>
        <Route path='/cart' element={<Cart />}></Route>
        <Route path='/contact-us' element={<Contact />}></Route>
        <Route path='/not-found' element={<Error/>}></Route>
      </Routes>
    </>
  )
}
