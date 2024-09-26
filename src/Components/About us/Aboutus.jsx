import React from 'react';
import { Link } from 'react-router-dom';
const Aboutus = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to="/" className='text-black'>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
        </div>

        {/* About Us content */}
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <h2 className="text-center my-4">ABOUT US</h2>
            
            <p className="text-justify">
              Furniture HOP home incorporates style and finesse into each piece of furniture, adding sophistication and elegance.
            </p>
            <p className="text-justify">
              With a rich Furniture HOP spanning over a decade, we have earned a reputation for crafting high-quality, stylish, and unique furniture that compliments modern lifestyles and meets the diverse needs of our customers.
            </p>
            <p className="text-justify">
              At Furniture HOP Home, we use only the highest-quality raw materials to showcase each piece of furniture’s natural beauty and durability. Additionally, we focus on the finest craftsmanship as our skilled artisans pay special attention to every detail, ensuring each piece is a worthwhile investment for our customers.
            </p>
            <p className="text-justify">
              Furniture HOP Home is proud of its reputation for quality and puts its classic stamp on all its fine furniture.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;

