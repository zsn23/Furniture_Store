// import { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '../../Pages/LanguageContext';

// const Header = () => {
//   const { language, changeLanguage } = useLanguage();
//   const [isHovered, setIsHovered] = useState(false);
//   const [accountHovered, setAccountHovered] = useState(false);
//   const [hoveredLink, setHoveredLink] = useState('');
//   const [flagBorder, setFlagBorder] = useState('');

//   const handleLanguageChange = (newLanguage) => {
//     changeLanguage(newLanguage);
//     setFlagBorder((prev) => (prev === 'border-black' ? '' : 'border-black'));
//   };

//   const handleFlagClick = () => {
//     setFlagBorder((prev) => (prev === 'border-black' ? '' : 'border-black'));
//   };

//   const getFlagUrl = (language) => {
//     switch (language) {
//       case 'English (UK)':
//         return 'https://flagcdn.com/gb.svg';
//       case 'Español':
//         return 'https://flagcdn.com/es.svg';
//       default:
//         return 'https://flagcdn.com/us.svg';
//     }
//   };

//   return (
//     <div className="container-fluid mt-4">
//       {/* Logo and Navigation Row */}
//       <div className="row align-items-center">
//         <div className="col-12 col-md-6 d-flex justify-content-md-start justify-content-center mb-3 mb-md-0">
//           <Link to='/' className='text-decoration-none'>
//             <h2 className="fontStyling02 text-center text-md-left">FURNITURE HOP</h2>
//           </Link>
//         </div>

//         {/* Location, My Account, My Cart */}
//         <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center">
//           <div className="d-flex align-items-center">
//             {/* Location */}
//             <div className="d-flex align-items-center px-1">
//               <small className="d-flex align-items-center">
//                 <Link to='/location' className='text-decoration-none'>
//                   <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="21px" fill="#000000">
//                     <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
//                   </svg>
//                   Locations |
//                 </Link>
//               </small>
//             </div>

//             {/* My Account */}
//             <div className="d-flex align-items-center px-1">
//               <small className="d-flex align-items-center">
//                 <div
//                   className="dropdown"
//                   onMouseEnter={() => setAccountHovered(true)}
//                   onMouseLeave={() => setAccountHovered(false)}
//                 >
//                   <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="22px" fill="#000000">
//                     <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
//                   </svg>
//                   My Account |
//                   {/* Account dropdown */}
//                   {accountHovered && (
//                     <div className="dropdown-menu show account-dropdown">
//                       <ul>
//                         <li><Link to="/login" className="dropdown-item hover-underline">Sign In or Create Account</Link></li>
//                         <li><Link to="/ordertrack" className="dropdown-item hover-underline">Check an Order</Link></li>
//                       </ul>
//                     </div>
//                   )}
//                 </div>

//               </small>
//             </div>

//             {/* My Cart */}
//             <div className="d-flex align-items-center px-1 ">
//               <Link to='/MyCart' className='text-decoration-none'>
//                 <small className="d-flex justify-content-center align-items-center bg-black text-white px-2 py-1 rounded hover-underline">
//                   MY CART
//                 </small>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Row for Navigation Links and Search */}
//       <div className="row align-items-center">
//         {/* Navigation Links */}
//         <div className="col-12 col-md-6 d-flex flex-wrap justify-content-center justify-content-md-start text-nowrap">
//         <div
//             className="dropdown"
//             onMouseEnter={() => setHoveredLink('Our Story')}
//             onMouseLeave={() => setHoveredLink('')}
//           >
//             <h6>Our Story</h6>
//             {hoveredLink === 'Our Story' && (
//               <div className="dropdown-menu show hover-card">
//                 <div className="container">
//                   <div className="row">
//                     <div className="col-7">
//                       <ul className="list-unstyled">
//                         <li className=' hover-underline'><Link to="/message-from-chairman" className='text-decoration-none'><small><strong>MESSAGE FROM THE CHAIRMAN</strong></small></Link></li>
//                         <li className=' hover-underline'><Link to="/about-us" className='text-decoration-none'><small><strong>ABOUT US</strong></small></Link></li>
//                         <li className=' hover-underline'><Link to="/ceo-chairman-president" className='text-decoration-none'><small><strong>OUR CEO, CHAIRMAN & PRESIDENT</strong></small></Link></li>
//                         <li className=' hover-underline'><Link to="/leadership-principles" className='text-decoration-none'><small><strong>LEADERSHIP PRINCIPLES</strong></small></Link></li>
//                         <li className=' hover-underline'><Link to="/corporate-responsibility" className='text-decoration-none'><small><strong>CORPORATE RESPONSIBILITY</strong></small></Link></li>
//                         <li className=' hover-underline'><Link to="/social-responsibility" className='text-decoration-none'><small><strong>SOCIAL RESPONSIBILITY</strong></small></Link></li>
//                         <li className=' hover-underline'><Link to="/sustainability" className='text-decoration-none'><small><strong>SUSTAINABILITY</strong></small></Link></li>
//                       </ul>
//                     </div>
//                     <div className="col-5">
//                       <div className="meet-our-people">
//                         {/* <img src="/path-to-your-image.jpg" alt="Craftsman working" className="img-fluid" /> */}
//                         {/* <h5>MEET OUR PEOPLE.br LEARN OUR VALUES.</h5> */}
//                         {/* <Link to="/our-people">Read on &gt;</Link> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           <h6 className="mx-1">|</h6>

//           <div
//             className="dropdown"
//             onMouseEnter={() => setHoveredLink('Craftsmanship')}
//             onMouseLeave={() => setHoveredLink('')}
//           >
//             <h6>Craftsmanship</h6>
//             {hoveredLink === 'Craftsmanship' && (
//               <div className="dropdown-menu show hover-card">
//                 <h3>Craftsmanship</h3>
//                 <p>Explore the art and dedication that goes into each piece.</p>
//               </div>
//             )}
//           </div>
//           <h6 className="mx-1">|</h6>

//           <div
//             className="dropdown"
//             onMouseEnter={() => setHoveredLink('Interior Design')}
//             onMouseLeave={() => setHoveredLink('')}
//           >
//             <h6>Interior Design</h6>
//             {hoveredLink === 'Interior Design' && (
//               <div className="dropdown-menu show hover-card">
//                 <h3>Interior Design</h3>
//                 <p>Learn how our designs transform spaces into homes.</p>
//               </div>
//             )}
//           </div>
//           <h6 className="mx-1">|</h6>

//           <div
//             className="dropdown"
//             onMouseEnter={() => setHoveredLink('Inspiration')}
//             onMouseLeave={() => setHoveredLink('')}
//           >
//             <h6>Inspiration</h6>
//             {hoveredLink === 'Inspiration' && (
//               <div className="dropdown-menu show hover-card">
//                 <h3>Inspiration</h3>
//                 <p>Find inspiration for your next design project with us.</p>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Country Dropdown */}
//         <div className="col-12 col-md-2 d-flex justify-content-center">
//           <div
//             className="dropdown"
//             onMouseEnter={() => setIsHovered(true)}
//             onMouseLeave={() => setIsHovered(false)}
//           >
//             <button
//               className={`btn dropdown-toggle ${flagBorder}`}
//               type="button"
//               id="dropdownMenuButton"
//               aria-expanded="false"
//               onClick={handleFlagClick}
//             >
//               <img src={getFlagUrl(language)} alt="Flag" width="20" />
//             </button>
//             {/* Show dropdown menu on hover */}
//             {isHovered && (
//               <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
//                 <li>
//                   <Link
//                     className="dropdown-item hover-underline"
//                     to="#"
//                     onClick={() => handleLanguageChange("English (UK)")}
//                   >
//                     English (UK)
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     className="dropdown-item hover-underline"
//                     to="#"
//                     onClick={() => handleLanguageChange("Español")}
//                   >
//                     Español
//                   </Link>
//                 </li>
//               </ul>
//             )}
//           </div>
//         </div>

    
//         {/* Search Bar */}
//         <div className="col-12 col-md-4 d-flex justify-content-end">
//           <div className="input-group w-100 searchInput" >
//             <input
//               type="text"
//               placeholder="What can we help you find?"
//               className="form-control fw-semibold fs-6"
//             />
//             <span className="bg-transparent border-0" >
//               <svg xmlns="http://www.w3.org/2000/svg" style={{position: 'relative' , right : '25px' , top:'4px'}} width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
//                 <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
//               </svg>
//             </span>
//           </div>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default Header;



import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../Pages/LanguageContext';
import MegaMenu from '../MegaMenu/MegaMenu_'


const Header = () => {
  const { language, changeLanguage } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [accountHovered, setAccountHovered] = useState(false);
  const [flagBorder, setFlagBorder] = useState('');
  const [isSticky, setIsSticky] = useState(false);

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage);
    setFlagBorder((prev) => (prev === 'border-black' ? '' : 'border-black'));
  };

  const handleFlagClick = () => {
    setFlagBorder((prev) => (prev === 'border-black' ? '' : 'border-black'));
  };

  const getFlagUrl = (language) => {
    
switch (language) {
  case 'English (UK)':
    return 'https://flagcdn.com/gb.svg';
  case 'Pakistan':
    return 'https://flagcdn.com/pk.svg';
  default:
    return 'https://flagcdn.com/us.svg';
}
  };
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY ;
      if (offset > 50) { 
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`container-fluid mt-4 ${isSticky ? 'sticky-header' : ''}`}>
      {/* Logo and Navigation Row */}
      <div className="row  align-items-center">
        <div className="col-12 col-md-6 d-flex justify-content-md-start justify-content-center mb-3 mb-md-0">
          <Link to='/' className='text-decoration-none'>
            <h2 className="fontStyling02 text-center mt-3 text-md-left">FURNITURE HOP</h2>
          </Link>
        </div>

        {/* Location, My Account, My Cart */}
        <div className="col-12 col-md-6 d-flex justify-content-md-end justify-content-center">
          <div className='d-flex align-items-center mx-1 '>
            {/* Location */}
            <div className="d-flex align-items-center px-1">
              <small className="d-flex align-items-center">
                <Link to='/location' className='text-decoration-none'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="21px" fill="#000000">
                    <path d="M480-480q33 0 56.5-23.5T560-560q0-33-23.5-56.5T480-640q-33 0-56.5 23.5T400-560q0 33 23.5 56.5T480-480Zm0 294q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                  </svg>
                  Location |
                </Link>
              </small>
            </div>

            {/* My Account */}
            <div className="d-flex align-items-center mx-1">
              <small className="d-flex align-items-center">
                <div
                  className="dropdown"
                  onMouseEnter={() => setAccountHovered(true)}
                  onMouseLeave={() => setAccountHovered(false)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="22px" fill="#000000">
                    <path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z" />
                  </svg>
                  My Account |
                  {accountHovered && (
                    <div className="dropdown-menu show account-dropdown">
                      <ul>
                        <li><Link to="/login" className="dropdown-item hover-underline">Sign In or Create Account</Link></li>
                        <li><Link to="/ordertrack" className="dropdown-item hover-underline">Check an Order</Link></li>
                      </ul>
                    </div>
                  )}
                </div>
              </small>
            </div>

            {/* My Cart */}
            <div className="d-flex align-items-center mx-1">
              <Link to='/MyCart' className='text-decoration-none'>
                <small className="d-flex justify-content-center align-items-center bg-black text-white px-2 py-1 rounded hover-underline">
                  MY CART
                </small>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Row for Navigation Links and Search */}
      <div className="row align-items-center">
        {/* Country Dropdown */}
        <div className="col-12 col-md-6 d-flex justify-content-start">
          <div 
            className="dropdown"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <button
              className={`btn dropdown-toggle ${flagBorder}`}
              type="button"
              id="dropdownMenuButton"
              aria-expanded="false"
              onClick={handleFlagClick}
            >
              <img src={getFlagUrl(language)} alt="Flag" width="20" />
            </button>
            {isHovered && (
              <ul className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
                <li>
                  <Link
                    className="dropdown-item hover-underline"
                    to="#"
                    onClick={() => handleLanguageChange("English (UK)")}
                  >
                    English (UK)
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item hover-underline"
                    to="#"
                    onClick={() => handleLanguageChange("Pakistan")}
                  >
                    Pakistan
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Search Input */}
            
                <div className="col-12 col-md-6 d-flex justify-content-end">
        <div className="input-group search-container">
  <input
    type="text"
    placeholder="Search items"
    className="form-control fw-semibold fs-6 searchInput"
  />
  <span className="bg-transparent border-0">
    <svg
      style={{ position: 'absolute', right: '15px', top: '10px' }}
      width="16"
      height="16"
    >
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
    </svg>
  </span>
</div>

        </div>


      </div>
      <MegaMenu />

    </div>
  );
};

export default Header;