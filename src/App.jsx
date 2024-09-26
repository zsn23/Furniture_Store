// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Footer from './Components/Footer/Footer'
import TopNavbar from './Components/Nabar/TopNavbar'
import Login from './Components/Account/Login'
import Signup from './Components/Account/Signup'
import Aboutus from './Components/About us/Aboutus'
import OrderTrack from './Components/Ordertracking/OrderTrack'



const App = () => {
  return (
    <>
      <TopNavbar/>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about-us" element={<Aboutus/>} />
        <Route path="/ordertrack" element={<OrderTrack/>} />
        {/* <Route path="/furniture" element={<Furniture />} />
        <Route path="/furniture/sofas" element={<Sofas />} />
        <Route path="/furniture/beds" element={<Beds />} />
        <Route path="/furniture/tables" element={<Tables />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/accessories/lamps" element={<Lamps />} />
        <Route path="/accessories/vases" element={<Vases />} />
        <Route path="/accessories/rugs" element={<Rugs />} />
        <Route path="/stockists" element={<Stockists />} />
        <Route path="/about-us" element={<AboutUs />} /> */}
    </Routes>

    <Footer/>
    </>
  )
}

export default App