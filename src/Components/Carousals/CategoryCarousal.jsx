import React from 'react';
import './ProductCarousel.css';
import m1 from '../Logo/m1.png';
import m2 from '../Logo/m2.png';
import m4 from '../Logo/m4.png';
import { Link } from 'react-router-dom';
import '@fontsource/abril-fatface';
import '@fontsource/old-standard-tt/';

const CategoryCarousel = () => {
  const categories = [
    { id: 1, name: 'BOXES', image: m2 },
    { id: 2, name: 'TRUNKS', image: m1 },
    { id: 3, name: 'TABLES', image: m4 },
    { id: 4, name: 'TRAYS', image: m2 },
    { id: 5, name: 'CHAIRS', image: m4 },
    { id: 6, name: 'LAMPS', image: m4 },
  ];

  const groupedCategories = [];
  for (let i = 0; i < categories.length; i += 3) {
    groupedCategories.push(categories.slice(i, i + 3));
  }
  return (

    <div className="container  my-5 text-center ">
      <h1 className='text-center fs-1 mt-5 fw-lighter custom-font-styling_ border-bottom p-3' style={{ fontFamily: 'Old Standard TT' }}>
        TRENDING CATEGORIES
      </h1>
      <div id="CategoryCarousal" className="carousel slide mt-4" data-bs-ride="carousel" data-bs-interval='2000' >
        <div className="carousel-inner carousel-inner_">
          {groupedCategories.map((group, index) => (
            <div className={`carousel-item carousel-item_ ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row justify-content-center g-0">
                {group.map((category) => (
                  <div className={`col-12  col-md-4`} key={category.id}>
                    <div className="card card_ shadow-sm product-card border-1" key={category.id}>
                      <Link className="text-dark a_" to={`/categoty/${category.id}`}>
                        <img src={category.image} className="card-img-top card-img-top_  border-0" alt={category.name} />
                        <div className="card-body d-flex gap-2 py-2 mt-3 justify-content-center">
                          <h5 className="card-title  ">{category.name}</h5>
                          <i className='bi bi-arrow-right'> </i>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>


        {/* Carousel Controls */}
        <div className="d-flex align-items-center">
          <button className="carousel-control-prev carousel-control-prev_" style={{ fontSize: '30px' }} type="button" data-bs-target="#CategoryCarousal" data-bs-slide="prev">
            <i className="bi bi-chevron-left text-dark" aria-hidden="true"></i>
            <span className="visually-hidden">Previous</span>
          </button>

        </div>

        <button className="carousel-control-next carousel-control-next_" style={{ fontSize: '30px' }} type="button" data-bs-target="#CategoryCarousal" data-bs-slide="next">
          <i className="bi bi-chevron-right text-dark" aria-hidden="true"></i>
          <span className="visually-hidden">Next</span>
        </button>

      </div>


    </div>
  );
};

export default CategoryCarousel;
