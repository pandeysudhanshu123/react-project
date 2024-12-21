import React from 'react' 
import { Routes,Route } from 'react-router-dom'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Login from '../Pages/Login'
import Products from '../Pages/Products'
import SingleProducts from '../Pages/SingleProducts'
import PageNotFound from '../Pages/PageNotFound'
import Contact from '../Pages/Contact'
const AllRoutes = () => {
  return (
    <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/About' element={<About/>}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/Products' element={<Products/>}></Route>
    <Route path='/Products/:Products_id' element={<SingleProducts/>}></Route>
    <Route path='*' element={<PageNotFound/>}></Route>
    <Route path='/Contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default AllRoutes