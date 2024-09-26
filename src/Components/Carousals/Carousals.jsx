// import React from 'react';
// import carosal_img1 from '../Logo/sept2024_touchscreen.jpg'
import carosal_img4 from '../Logo/c1 (2).jpg'
import ProductsInCarousel from './ProductsInCarousel ';


const Carousals = () => {
  return (
    <div>
    <div id="carouselExampleControlsNoTouching" className="carousel slide" data-bs-touch="false" data-bs-ride="carousel" data-bs-interval="1000">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={carosal_img4} className="d-block w-100" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img src={carosal_img4} className="d-block w-100" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img src={carosal_img4} className="d-block w-100" alt="Third slide" />
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>

<ProductsInCarousel />

  </div>


  );
};

export default Carousals;


































