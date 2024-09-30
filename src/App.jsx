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
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Location from './Pages/Location'
import ContactUs from './Components/Contactus/Contactus'
import TermsofServices from './Components/termsofservice/TermsofServices'
import RefundPolicy from './Components/refundPolicy/RefundPolicy'
import EmailPreferences from './Components/Footer/EmailPreferences'
import Lamps from './Components/Accessories/Lamps'

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
        <Route path='/location' element={<Location/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/terms&conditions' element={<TermsofServices/>}/>
        <Route path='/refundpolicy' element={<RefundPolicy/>}/>
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
        <Route path='/email-preferences' element={<EmailPreferences/>}/>
        <Route path='/accessories/lamps' element={<Lamps/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App