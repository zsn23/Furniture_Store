// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
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
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ProductDetail from './Components/products detail/ProductDetail'
import Cart from './Components/Cart/Cart'
import Checkoutform from './Components/checkout/Checkoutform'
import EmailPreferences from './Components/Footer/EmailPreferences'
import Lamps from './Components/Accessories/Lamps'
import Sofas from './Components/Furniture/Sofas';
import Beds from './Components/Furniture/Beds';
import Vases from './Components/Furniture/Vases';
import Rugs from './Components/Furniture/Rugs';
import Table from './Components/Furniture/Table';
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
        <Route path="/product/:id" element={<ProductDetail/>} />
        <Route path="/MyCart" element={<Cart/>} />
        <Route path="/checkoutform" element={<Checkoutform/>} />
        <Route path="/furniture/sofas" element={<Sofas />} /> 
        <Route path="/furniture/beds" element={<Beds />} />
        <Route path="/furniture/tables" element={<Table />} />
     
        <Route path="/accessories/vases" element={<Vases />} />
        <Route path="/accessories/rugs" element={<Rugs />} />
      
        <Route path='/email-preferences' element={<EmailPreferences/>}/>
        <Route path='/accessories/lamps' element={<Lamps/>}/>
    </Routes>

    <Footer/>
    <ToastContainer/>
    </>
  )
}

export default App