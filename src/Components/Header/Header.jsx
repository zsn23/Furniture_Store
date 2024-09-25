
// import React from 'react';

const Header = () => {
  return (
    <div className="container-fluid mt-4">
      <div className="row align-items-center">
        <div className="col-12 col-md-6 d-flex justify-content-md-start justify-content-center mb-3 mb-md-0">
          <h1 className="fontStyling02 text-center text-md-left">FURNITUREHOP</h1>
        </div>

        {/* Location, My Account, My Cart */}
        <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center">
          <div className="d-flex align-items-center">
            {/* Location */}
            <div className="d-flex align-items-center px-1">
              <small className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="21px" fill="#000000">
                  <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                </svg>
                Locations |
              </small>
            </div>

            {/* My Account */}
            <div className="d-flex align-items-center px-1">
              <small className="d-flex align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="22px" fill="#000000">
                  <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                </svg>
                My Account |
              </small>
            </div>

            {/* My Cart */}
            <div className="d-flex align-items-center px-1">
              <small className="d-flex justify-content-center align-items-center bg-black text-white px-2 py-1 rounded">
                MY CART
              </small>
            </div>
          </div>
        </div>
      </div>

      {/* Row for Navigation Links and Search */}
      <div className="row align-items-center mt-3">
        {/* Navigation Links */}
        <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start">
          <h6 className="text-center text-md-left">Our Story | Craftsmanship | Interior Design | Inspiration</h6>
        </div>

        {/* Drop-down Menu */}
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <h6>Drop down menu</h6>
        </div>

        {/* Search Bar */}
        <div className="col-12 col-md-4 d-flex justify-content-end">
          <div className="input-group w-75">
            <input
              type="text"
              placeholder="What can we help you find?"
              className="form-control fw-semibold fs-6"
            />
            <span className="bg-transparent border-0" >
              <svg xmlns="http://www.w3.org/2000/svg" style={{position: 'relative' , right : '25px' , top:'4px'}} width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </span>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Header;