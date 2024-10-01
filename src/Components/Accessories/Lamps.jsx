import React from "react";
import { Link } from "react-router-dom";
import LampPic from '../Picture/LampImage.jpg';

const Lamps = () => {
  return (
    <div className="container">
      <p className="mt-4">
        <Link
          to="/"
          className="text-decoration-none fs-5 text-muted me-2 breadcrumb-link"
        >
          Home &gt;
        </Link>
        <Link
          to="/"
          className="text-decoration-none fs-5 text-muted me-2 breadcrumb-link"
        >
          Accessories &gt;
        </Link>
        <Link
          to="/accessories/lamps"
          className="text-decoration-none fs-5 breadcrumb-link"
          style={{ color: "#84754E", fontWeight: "bold" }}
        >
          Lamps
        </Link>
      </p>
      <h2 className="fontStyling text-center">Lamps</h2>
      <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
       
        
       
        {[...Array(12)].map((_, index) => (
            <div className="col" key={index}>
          <div className="card card_ h-100 shadow-sm product-card border-1">
            <Link className="text-dark a_" to='/lamp-details'>
              <img 
                src={LampPic} 
                className="card-img-top img-fluid border-0" 
                alt="Lamp" 
                style={{ height: "300px", objectFit: "cover" }} 
              />
                 <div className="card-body py-4 mt-3 text-start">
                          <h5 className="card-title a_title ">Lamp name</h5>
                          <p className="card-text a_price">Rs.15,000.00 PKR</p>
                        </div>
            </Link>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Lamps;
