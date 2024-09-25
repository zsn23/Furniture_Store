// import  { useState } from 'react';
// import { Link } from 'react-router-dom';


// const MegaMenu = () => {
//     const [furnitureDropdown, setFurnitureDropdown] = useState(false);
//     const [accessoriesDropdown, setAccessoriesDropdown] = useState(false);
  
//     return (
    //   <nav className="mega-menu border-top border-bottom p-2">
    //     <ul className="menu-items">
    //       <li>
    //         <Link to="/" className="active">Home</Link>
    //       </li>
    //       <li 
    //         className="dropdown"
    //         onMouseEnter={() => setFurnitureDropdown(true)}
    //         onMouseLeave={() => setFurnitureDropdown(false)}
    //       >
    //         <Link to="/furniture">Furniture <i className="bi bi-caret-down-fill caret"></i></Link>
    //         {furnitureDropdown && (
    //           <div className="dropdown-content">
    //             <Link to="/furniture/sofas">Sofas</Link>
    //             <Link to="/furniture/beds">Beds</Link>
    //             <Link to="/furniture/tables">Tables</Link>
    //           </div>
    //         )}
    //       </li>
          
    //       <li 
    //         className="dropdown"
    //         onMouseEnter={() => setAccessoriesDropdown(true)}
    //         onMouseLeave={() => setAccessoriesDropdown(false)}
    //       >
    //         <Link to="/accessories">Accessories <i className="bi bi-caret-down-fill caret"></i> </Link>
    //         {accessoriesDropdown && (
    //           <div className="dropdown-content">
    //             <Link to="/accessories/lamps">Lamps</Link>
    //             <Link to="/accessories/vases">Vases</Link>
    //             <Link to="/accessories/rugs">Rugs</Link>
    //           </div>
    //         )}
    //       </li>
          
    //       <li><Link to="/stockists">Stockists</Link></li>
    //       <li><Link to="/about-us">About Us</Link></li>
    //     </ul>
    //   </nav>
//     );
//   };

// export default MegaMenu;



import { useState } from 'react';
import { Link } from 'react-router-dom';


const MegaMenu = () => {
    const [furnitureDropdown, setFurnitureDropdown] = useState(false);
    const [accessoriesDropdown, setAccessoriesDropdown] = useState(false);

    return (
        <>

<nav className="mega-menu border-top border-bottom p-2 navbar__ justify-content-center">
        <ul className="menu-items">
          <li>
            <Link to="/" className="active">Home</Link>
          </li>
          <li 
            className="dropdown"
            onMouseEnter={() => setFurnitureDropdown(true)}
            onMouseLeave={() => setFurnitureDropdown(false)}
          >
            <Link to="/furniture">Furniture <i className="bi bi-caret-down-fill caret"></i></Link>
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
            <Link to="/accessories">Accessories <i className="bi bi-caret-down-fill caret"></i> </Link>
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
            <button className="btn btn-tranparent fs-2 d-md-none" style={{position: 'relative', top:'-20px' , left:'10px'}} type="button" data-bs-toggle="offcanvas" data-bs-target="#megaMenuOffcanvas" aria-controls="megaMenuOffcanvas">
            <i className="fa fa-thin fa-bars" ></i>
            </button>

            {/* Off-canvas Menu */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="megaMenuOffcanvas" aria-labelledby="megaMenuOffcanvasLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="megaMenuOffcanvasLabel">Menu</h5>
                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <nav className="mega-menu  p-2">
                        <ul className="menu-items menu-items_ flex-column flex-lg-row">
                            <li>
                                <Link to="/" className="active">Home</Link>
                            </li>
                            <li
                                className="dropdown"
                                onMouseEnter={() => setFurnitureDropdown(true)}
                                onMouseLeave={() => setFurnitureDropdown(false)}
                            >
                                <Link to="/furniture">Furniture <i className="bi bi-caret-down-fill caret"></i></Link>
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
                                <Link to="/accessories">Accessories <i className="bi bi-caret-down-fill caret"></i></Link>
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
                </div>
            </div>
        </>
    );
};

export default MegaMenu;
