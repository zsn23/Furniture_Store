// import React from 'react'
import Header from '../Header/Header'
import MegaMenu from '../MegaMenu/MegaMenu_'
import { Link } from 'react-router-dom'
const NavbarTop = () => {
  return (
   <>
      <div className="container-fluid d-flex justify-content-center "  style={{ backgroundColor: '#555B4A',height: '27px' }}>
        <div className="row satrting_msg m-0 p-0">
          <div id="carouselExampleSlidesOnly" className="carousel slide w-100 " data-bs-ride="carousel" data-bs-interval="3000">
            <div className="carousel-inner text-white ">
              <div className="carousel-item active fontStyling">
                <span>
                <strong>SAVE UP TO 20%</strong> 
                <span className='hover-underline'>
                <Link to='/details' className='text-decoration-none '> details&gt; </Link>
                </span>
                </span>
              </div>
              <div className="carousel-item fontStyling hover-underline">
              <Link to='/make-appointment' className='text-decoration-none'>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" height="15px" viewBox="0 -960 960 960" width="16px" fill="white" style={{marginRight:'5px',marginBottom:'2px'}}><path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z"/></svg>
                <strong>MAKE AN APPOINTMENT</strong> AT YOUR LOCAL DESIGN CENTER </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Header/>
      <MegaMenu/>
   </>
  )
}

export default NavbarTop