

import { useState } from 'react';
import { Link } from 'react-router-dom';


const MegaMenu = () => {
    const [furnitureDropdown, setFurnitureDropdown] = useState(false);
    const [accessoriesDropdown, setAccessoriesDropdown] = useState(false);

    return (
        <div className='mt-1'>

<nav className="mega-menu border-top border-bottom p-3 navbar__ justify-content-center">
        <ul className="menu-items">
          <li>
            <Link to="/" className="active">Home</Link>
          </li>
          <li 
            className="dropdown"
            onMouseEnter={() => setFurnitureDropdown(true)}
            onMouseLeave={() => setFurnitureDropdown(false)}
          >
            <Link to="/furniture">Furniture <i className="bi bi-caret-up-fill caret"></i></Link>
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
            onMouseEnter={() => setAccessoriesDropdown(true)}
            onMouseLeave={() => setAccessoriesDropdown(false)}
          >
            <Link to="/accessories">Accessories <i className="bi bi-caret-up-fill caret"></i> </Link>
            {accessoriesDropdown && (
              <div className="dropdown-content">
                <Link to="/accessories/lamps">Lamps</Link>
                <Link to="/accessories/vases">Vases</Link>
                <Link to="/accessories/rugs">Rugs</Link>
              </div>
            )}
          </li>
          
          <li><Link to="/stockists">Stockists</Link></li>
          <li><Link to="/about-us">About Us</Link></li>
        </ul>
      </nav>


            {/* Hamburger Button */}
            <button className="btn btn-tranparent fs-2 d-md-none" style={{position: 'relative', top:'-50px' , left:'35px'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#megaMenuOffcanvas" aria-controls="megaMenuOffcanvas">
            <i className="fa fa-thin fa-bars" ></i>
            </button>

            {/* Off-canvas Menu */}
           
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="megaMenuOffcanvas" aria-labelledby="megaMenuOffcanvasLabel">
    <div className="offcanvas-header">
        <h5 className="offcanvas-title fs-1 fw-bolder" id="">Menu</h5>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body p-2">
        <nav className="mega-menu" id="accordionMenu">
            <ul className="menu-items menu-items_ flex-column flex-lg-row">
                <li>
                    <Link to="/" className="active">Home</Link>
                </li>
                <li className="accordion-item">
                    <h2 className="accordion-header" id="headingFurniture">
                        <Link 
                            className="accordion-button" 
                            to="/furniture" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseFurniture" 
                            aria-expanded="true" 
                            aria-controls="collapseFurniture"
                        >
                            Furniture <i className="bi bi-caret-down-fill caret"></i>
                        </Link>
                    </h2>
                    <div id="collapseFurniture" className="accordion-collapse collapse" aria-labelledby="headingFurniture" data-bs-parent="#accordionMenu">
                        <div className="accordion-body">
                            <Link to="/furniture/sofas" className='p-2'  >Sofas</Link><br />
                            <Link to="/furniture/beds"   className='p-2' >Beds</Link><br />
                            <Link to="/furniture/tables" className='p-2' >Tables</Link>
                        </div>
                    </div>
                </li>
                <li className="accordion-item">
                    <h2 className="accordion-header" id="headingAccessories">
                        <Link 
                            className="accordion-button text-decoration-none" 
                            to="/accessories" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#collapseAccessories" 
                            aria-expanded="false" 
                            aria-controls="collapseAccessories"
                        >
                            Accessories <i className="bi-fill bi-caret-down-fill caret"></i>
                        </Link>
                    </h2>
                    <div id="collapseAccessories" className="accordion-collapse collapse" aria-labelledby="headingAccessories" data-bs-parent="#accordionMenu">
                        <div className="accordion-body">
                            <Link to="/accessories/lamps" className='p-2' >Lamps</Link><br />
                            <Link to="/accessories/vases" className='p-2' >Vases</Link><br />
                            <Link to="/accessories/rugs"  className='p-2' >Rugs</Link>
                        </div>
                    </div>
                </li>


                <li><Link to="/stockists">Stockists</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
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
