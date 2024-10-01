




// import React, { useEffect } from 'react';
import './ProductCarousel.css'; // Import custom CSS for additional styling
import m1 from '../Logo/m1.png'; // Import image
import m2 from '../Logo/m2.png'; // Import image
import m3 from '../Logo/m3.png'; // Import image
import m4 from '../Logo/m4.png'; // Import image
import { Link } from 'react-router-dom';
import '@fontsource/abril-fatface'; // Default weight 400
import '@fontsource/old-standard-tt/';

const CategoryCarousel = () => {

  const categories = [
    { id: 1, name: 'BOXES', image: m3 },
    { id: 2, name: 'TRUNKS', image: m1 },
    { id: 3, name: 'TABLES', image: m4 },
    { id: 4, name: 'TRAYS', image: m2 },
  ];

  return (
    <div className='container'>
      <h1 className='text-center fs-1 mt-5 fw-lighter custom-font-styling_ border-bottom  p-3' style={{ fontFamily: 'Old Standard TT' }}>TRENDING CATEGORIES</h1>

      <div className="row">
        {categories.map((category) => (
          <div className="col-md-6 my-4" key={category.id}>
            <div className='card card_ h-100  m-2'>
              <img src={category.image} className="card-img-top card-img-top_ h-100" alt={category.name} />
              <div className='card-body  card-body_'>
                <Link className='d-flex align-items-center gap-2 icon-link-hover text-decoration-none' to={`/categories/${category.id}`}>
                  <h5 className="px-1 pt-1 ">{category.name}</h5>
                  <i className='bi bi-arrow-right'> </i>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryCarousel;

