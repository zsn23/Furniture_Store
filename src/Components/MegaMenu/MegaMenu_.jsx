import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const MegaMenu = () => {
    const [furnitureDropdown, setFurnitureDropdown] = useState(false);
    const [accessoriesDropdown, setAccessoriesDropdown] = useState(false);
    const [CustomizefurnitureDropdown, setCustomizeFurnitureDropdown] = useState(false);

    const [activeAccordion, setActiveAccordion] = useState(null); // Track active accordion
    const location = useLocation(); // Get the current location

    const isActive = (path) => location.pathname === path; // Check if the link is active

    const closeAllAccordions = () => {
        setActiveAccordion(null); // Close all accordions
    };

    const handleAccordionToggle = (accordion) => {
        setActiveAccordion(activeAccordion === accordion ? null : accordion); // Toggle accordion
    };

    return (
        <div className='mt-1 MegaMainDiv h-0' onClick={closeAllAccordions}>
            <nav className="mega-menu border-top border-bottom navbar__ p-3 justify-content-center">
                <ul className="menu-items">
                    <li>
                        <Link to="/" className={isActive("/") ? "active" : ""}>HOME</Link>
                    </li>
                    <li 
                        className="dropdown"
                        onMouseEnter={() => setFurnitureDropdown(true)}
                        onMouseLeave={() => setFurnitureDropdown(false)}
                    >
                        <Link>FURNITURE <i className="bi bi-caret-up-fill caret"></i></Link>
                        {furnitureDropdown && (
                            <div className="dropdown-content">
                                <Link to="/furniture/sofas">Sofas</Link>
                                <Link to="/furniture/beds">Beds</Link>
                                <Link to="/furniture/tables">Tables</Link>
                            </div>
                        )}
                    </li>
                    <li 
                        className="dropdown"
                        onMouseEnter={() => setCustomizeFurnitureDropdown(true)}
                        onMouseLeave={() => setCustomizeFurnitureDropdown(false)}
                    >
                        <Link >CUSTOMIZE FURNITURE <i className="bi bi-caret-up-fill caret"></i></Link>
                        {CustomizefurnitureDropdown && (
                            <div className="dropdown-content">
                                <Link to="/furniture/sofas">Sofas</Link>
                                <Link to="/furniture/beds">Beds</Link>
                                <Link to="/furniture/tables">Tables</Link>
                            </div>
                        )}
                    </li>
                    <li 
                        className="dropdown"
                        onMouseEnter={() => setAccessoriesDropdown(true)}
                        onMouseLeave={() => setAccessoriesDropdown(false)}
                    >
                        <Link >ACCESSORIES <i className="bi bi-caret-up-fill caret"></i></Link>
                        {accessoriesDropdown && (
                            <div className="dropdown-content">
                                <Link to="/accessories/lamps" >Lamps</Link>
                                <Link to="/accessories/vases">Vases</Link>
                                <Link to="/accessories/rugs">Rugs</Link>
                            </div>
                        )}
                    </li>
                    <li><Link to="/contact-us" className={isActive("/contact-us") ? "active" : ""}>CONTACT US</Link></li>
                    <li><Link to="/about-us" className={isActive("/about-us") ? "active" : ""}>ABOUT US</Link></li>
                </ul>
            </nav>

            {/* Hamburger Button */}
            <button className="btn btn-transparent fs-2 d-md-none" style={{ position: 'relative', top: '-183px', left: '0px' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#megaMenuOffcanvas" aria-controls="megaMenuOffcanvas">
                <i className="fa fa-thin fa-bars"></i>
            </button>

            {/* Off-canvas Menu */}
            <div className="offcanvas offcanvas-start d-md-none" tabIndex="-1" id="megaMenuOffcanvas" aria-labelledby="megaMenuOffcanvasLabel" onClick={(e) => e.stopPropagation()}>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fs-1 fw-bolder" id="">Menu</h5>
                    <button type="button" className="btn-close text-reset " data-bs-dismiss="offcanvas" aria-label="Close" onClick={closeAllAccordions}></button>
                </div>
                <div className="offcanvas-body p-2">
                    <nav className="mega-menu" id="accordionMenu">
                        <ul className="menu-items menu-items_ flex-column ">
                            <li data-bs-dismiss="offcanvas">
                                <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
                            </li>


                            
                            <li className="accordion-item">
                                <h2 className="accordion-header" id="headingFurniture">
                                    <Link 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAccordionToggle('furniture');
                                        }}
                                        className='accordion-button text-decoration-none' 
                                        style={{display:'flex' , alignItems:'center' ,justifyContent:'center'}} 

                                    >
                                        Furniture <i className="bi bi-caret-down-fill caret"></i>
                                    </Link>
                                </h2>

                                <div id="collapseFurniture" className={`accordion-collapse collapse ${activeAccordion === 'furniture' ? 'show' : ''}`} aria-labelledby="headingFurniture" data-bs-parent="#accordionMenu">
                                    <div className="accordion-body">
                                        <Link to="/furniture/sofas" data-bs-dismiss="offcanvas" className='p-2'>Sofas</Link><br />
                                        <Link to="/furniture/beds" data-bs-dismiss="offcanvas" className='p-2'>Beds</Link><br />
                                        <Link to="/furniture/tables" data-bs-dismiss="offcanvas" className='p-2'>Tables</Link>
                                    </div>
                                </div>
                            </li>



                            <li className="accordion-item">
                                <h2 className="accordion-header" id="headingCustomizeFurniture">
                                    <Link 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAccordionToggle('customizeFurniture');
                                        }}
                                        className='accordion-button text-decoration-none'
                                        style={{display:'flex' , alignItems:'center' ,justifyContent:'center'}} 
                                    >
                                        Customize Furniture <i className="bi-fill bi-caret-down-fill caret"></i>
                                    </Link>

                                </h2>
                                <div id="collapseCustomizeFurniture" className={`accordion-collapse collapse ${activeAccordion === 'customizeFurniture' ? 'show' : ''}`} aria-labelledby="headingCustomizeFurniture" data-bs-parent="#accordionMenu">
                                    <div className="accordion-body">
                                        <Link to="/accessories/lamps" data-bs-dismiss="offcanvas" className='p-2'>Lamps</Link><br />
                                        <Link to="/furniture/vases" data-bs-dismiss="offcanvas" className='p-2'>Vases</Link><br />
                                        <Link to="/furniture/rugs" data-bs-dismiss="offcanvas" className='p-2'>Rugs</Link>
                                    </div>
                                </div>
                            </li>
                            <li className="accordion-item">
                                <h2 className="accordion-header" id="headingAccessories">
                                    <Link 
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleAccordionToggle('accessories');
                                        }}
                                        className='accordion-button text-decoration-none' 
                                        style={{display:'flex' , alignItems:'center' , justifyContent:'center'}} 

                                    >
                                        Accessories <i className="bi-fill bi-caret-down-fill caret"></i>
                                    </Link>
                                </h2>
                                <div id="collapseAccessories" className={`accordion-collapse collapse ${activeAccordion === 'accessories' ? 'show' : ''}`} aria-labelledby="headingAccessories" data-bs-parent="#accordionMenu">
                                    <div className="accordion-body">
                                        <Link to="/accessories/lamps" data-bs-dismiss="offcanvas" className='p-2'>Lamps</Link><br />
                                        <Link to="/accessories/vases" data-bs-dismiss="offcanvas" className='p-2'>Vases</Link><br />
                                        <Link to="/accessories/rugs" data-bs-dismiss="offcanvas" className='p-2'>Rugs</Link>
                                    </div>
                                </div>
                            </li>
                            <li data-bs-dismiss="offcanvas"><Link to="/contact-us" className={isActive("/contact-us") ? "active" : ""}>Contact Us</Link></li>
                            <li data-bs-dismiss="offcanvas"><Link to="/about-us" className={isActive("/about-us") ? "active" : ""}>About Us</Link></li>
                        </ul>
                    </nav>
                </div>

                <div className='offcanvas-footer border-top p-3' style={{ backgroundColor: '#555B4A' }}>
                    <div className="d-flex justify-content-start">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-facebook mx-2 text-light"></i>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram mx-2 text-light"></i>
                        </a>
                        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-pinterest mx-2 text-light"></i>
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-linkedin mx-2 text-light"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MegaMenu;
// import { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';

// const MegaMenu = () => {
//     const [furnitureDropdown, setFurnitureDropdown] = useState(false);
//     const [accessoriesDropdown, setAccessoriesDropdown] = useState(false);
//     const [CustomizefurnitureDropdown, setCustomizeFurnitureDropdown] = useState(false);
//     const [activeAccordion, setActiveAccordion] = useState(null); // Track active accordion

//     const location = useLocation(); // Get the current location
//     const isActive = (path) => location.pathname === path; // Check if the link is active

//     const closeAllAccordions = () => {
//         setActiveAccordion(null); // Close all accordions
//     };

//     const handleAccordionToggle = (accordion) => {
//         setActiveAccordion(activeAccordion === accordion ? null : accordion); // Toggle accordion
//     };

//     // Function to programmatically close the off-canvas
//     const closeOffcanvas = () => {
//         const offcanvasElement = document.getElementById('megaMenuOffcanvas');
//         const offcanvas = new window.bootstrap.Offcanvas(offcanvasElement);
//         offcanvas.hide();
//     };

//     const handleLinkClick = (path) => {
//         closeAllAccordions();
//         closeOffcanvas(); // Close the sidebar when clicking any link
//     };

//     return (
//         <div className='mt-1 MegaMainDiv h-0' onClick={closeAllAccordions}>
//             <nav className="mega-menu border-top border-bottom navbar__ p-3 justify-content-center">
//                 <ul className="menu-items">
//                     <li>
//                         <Link to="/" className={isActive("/") ? "active" : ""}>HOME</Link>
//                     </li>
//                     <li 
//                         className="dropdown"
//                         onMouseEnter={() => setFurnitureDropdown(true)}
//                         onMouseLeave={() => setFurnitureDropdown(false)}
//                     >
//                         <Link>FURNITURE <i className="bi bi-caret-up-fill caret"></i></Link>
//                         {furnitureDropdown && (
//                             <div className="dropdown-content">
//                                 <Link to="/furniture/sofas" onClick={() => handleLinkClick('/furniture/sofas')}>Sofas</Link>
//                                 <Link to="/furniture/beds" onClick={() => handleLinkClick('/furniture/beds')}>Beds</Link>
//                                 <Link to="/furniture/tables" onClick={() => handleLinkClick('/furniture/tables')}>Tables</Link>
//                             </div>
//                         )}
//                     </li>
//                     <li 
//                         className="dropdown"
//                         onMouseEnter={() => setCustomizeFurnitureDropdown(true)}
//                         onMouseLeave={() => setCustomizeFurnitureDropdown(false)}
//                     >
//                         <Link >CUSTOMIZE FURNITURE <i className="bi bi-caret-up-fill caret"></i></Link>
//                         {CustomizefurnitureDropdown && (
//                             <div className="dropdown-content">
//                                 <Link to="/furniture/sofas" onClick={() => handleLinkClick('/furniture/sofas')}>Sofas</Link>
//                                 <Link to="/furniture/beds" onClick={() => handleLinkClick('/furniture/beds')}>Beds</Link>
//                                 <Link to="/furniture/tables" onClick={() => handleLinkClick('/furniture/tables')}>Tables</Link>
//                             </div>
//                         )}
//                     </li>
//                     <li 
//                         className="dropdown"
//                         onMouseEnter={() => setAccessoriesDropdown(true)}
//                         onMouseLeave={() => setAccessoriesDropdown(false)}
//                     >
//                         <Link >ACCESSORIES <i className="bi bi-caret-up-fill caret"></i></Link>
//                         {accessoriesDropdown && (
//                             <div className="dropdown-content">
//                                 <Link to="/accessories/lamps" onClick={() => handleLinkClick('/accessories/lamps')}>Lamps</Link>
//                                 <Link to="/accessories/vases" onClick={() => handleLinkClick('/accessories/vases')}>Vases</Link>
//                                 <Link to="/accessories/rugs" onClick={() => handleLinkClick('/accessories/rugs')}>Rugs</Link>
//                             </div>
//                         )}
//                     </li>
//                     <li><Link to="/contact-us" className={isActive("/contact-us") ? "active" : ""} onClick={() => handleLinkClick('/contact-us')}>CONTACT US</Link></li>
//                     <li><Link to="/about-us" className={isActive("/about-us") ? "active" : ""} onClick={() => handleLinkClick('/about-us')}>ABOUT US</Link></li>
//                 </ul>
//             </nav>

//             {/* Hamburger Button */}
//             <button className="btn btn-transparent fs-2 d-md-none" style={{ position: 'relative', top: '-183px', left: '0px' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#megaMenuOffcanvas" aria-controls="megaMenuOffcanvas">
//                 <i className="fa fa-thin fa-bars"></i>
//             </button>

//             {/* Off-canvas Menu */}
//             <div className="offcanvas offcanvas-start d-md-none" tabIndex="-1" id="megaMenuOffcanvas" aria-labelledby="megaMenuOffcanvasLabel" onClick={(e) => e.stopPropagation()}>
//                 <div className="offcanvas-header">
//                     <h5 className="offcanvas-title fs-1 fw-bolder" id="">Menu</h5>
//                     <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={closeAllAccordions}></button>
//                 </div>
//                 <div className="offcanvas-body p-2">
//                     <nav className="mega-menu" id="accordionMenu">
//                         <ul className="menu-items menu-items_ flex-column ">
//                             <li>
//                                 <Link to="/" className={isActive("/") ? "active" : ""} onClick={() => handleLinkClick('/')}>Home</Link>
//                             </li>

//                             <li className="accordion-item">
//                                 <h2 className="accordion-header" id="headingFurniture">
//                                     <Link 
//                                         onClick={(e) => {
//                                             e.stopPropagation();
//                                             handleAccordionToggle('furniture');
//                                         }}
//                                         className='accordion-button text-decoration-none' 
//                                         style={{display:'flex' , alignItems:'center' ,justifyContent:'center'}} 
//                                     >
//                                         Furniture <i className="bi bi-caret-down-fill caret"></i>
//                                     </Link>
//                                 </h2>

//                                 <div id="collapseFurniture" className={`accordion-collapse collapse ${activeAccordion === 'furniture' ? 'show' : ''}`} aria-labelledby="headingFurniture" data-bs-parent="#accordionMenu">
//                                     <div className="accordion-body">
//                                         <Link to="/furniture/sofas" onClick={() => handleLinkClick('/furniture/sofas')} className='p-2'>Sofas</Link><br />
//                                         <Link to="/furniture/beds" onClick={() => handleLinkClick('/furniture/beds')} className='p-2'>Beds</Link><br />
//                                         <Link to="/furniture/tables" onClick={() => handleLinkClick('/furniture/tables')} className='p-2'>Tables</Link>
//                                     </div>
//                                 </div>
//                             </li>

//                             <li className="accordion-item">
//                                 <h2 className="accordion-header" id="headingCustomizeFurniture">
//                                     <Link 
//                                         onClick={(e) => {
//                                             e.stopPropagation();
//                                             handleAccordionToggle('customizeFurniture');
//                                         }}
//                                         className='accordion-button text-decoration-none'
//                                         style={{display:'flex' , alignItems:'center' ,justifyContent:'center'}} 
//                                     >
//                                         Customize Furniture <i className="bi-fill bi-caret-down-fill caret"></i>
//                                     </Link>
//                                 </h2>

//                                 <div id="collapseCustomizeFurniture" className={`accordion-collapse collapse ${activeAccordion === 'customizeFurniture' ? 'show' : ''}`} aria-labelledby="headingCustomizeFurniture" data-bs-parent="#accordionMenu">
//                                     <div className="accordion-body">
//                                         <Link to="/furniture/sofas" onClick={() => handleLinkClick('/furniture/sofas')} className='p-2'>Sofas</Link><br />
//                                         <Link to="/furniture/beds" onClick={() => handleLinkClick('/furniture/beds')} className='p-2'>Beds</Link><br />
//                                         <Link to="/furniture/tables" onClick={() => handleLinkClick('/furniture/tables')} className='p-2'>Tables</Link>
//                                     </div>
//                                 </div>
//                             </li>

//                             <li className="accordion-item">
//                                 <h2 className="accordion-header" id="headingAccessories">
//                                     <Link 
//                                         onClick={(e) => {
//                                             e.stopPropagation();
//                                             handleAccordionToggle('accessories');
//                                         }}
//                                         className='accordion-button text-decoration-none' 
//                                         style={{display:'flex' , alignItems:'center' , justifyContent:'center'}} 
//                                     >
//                                         Accessories <i className="bi-fill bi-caret-down-fill caret"></i>
//                                     </Link>
//                                 </h2>
//                                 <div id="collapseAccessories" className={`accordion-collapse collapse ${activeAccordion === 'accessories' ? 'show' : ''}`} aria-labelledby="headingAccessories" data-bs-parent="#accordionMenu">
//                                     <div className="accordion-body">
//                                         <Link to="/accessories/lamps" onClick={() => handleLinkClick('/accessories/lamps')} className='p-2'>Lamps</Link><br />
//                                         <Link to="/accessories/vases" onClick={() => handleLinkClick('/accessories/vases')} className='p-2'>Vases</Link><br />
//                                         <Link to="/accessories/rugs" onClick={() => handleLinkClick('/accessories/rugs')} className='p-2'>Rugs</Link>
//                                     </div>
//                                 </div>
//                             </li>

//                             <li>
//                                 <Link to="/contact-us" className={isActive("/contact-us") ? "active" : ""} onClick={() => handleLinkClick('/contact-us')}>Contact Us</Link>
//                             </li>
//                             <li>
//                                 <Link to="/about-us" className={isActive("/about-us") ? "active" : ""} onClick={() => handleLinkClick('/about-us')}>About Us</Link>
//                             </li>
//                         </ul>
//                     </nav>
//                 </div>

//                 <div className='offcanvas-footer border-top p-3' style={{ backgroundColor: '#555B4A' }}>
//                     <div className="d-flex justify-content-start">
//                         <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//                             <i className="bi bi-facebook mx-2 text-light"></i>
//                         </a>
//                         <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//                             <i className="bi bi-instagram mx-2 text-light"></i>
//                         </a>
//                         <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
//                             <i className="bi bi-pinterest mx-2 text-light"></i>
//                         </a>
//                         <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//                             <i className="bi bi-linkedin mx-2 text-light"></i>
//                         </a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default MegaMenu;

