




// // import React, { useEffect } from 'react';
// import './ProductCarousel.css'; // Import custom CSS for additional styling
// import m1 from '../Logo/m1.png'; // Import image
// import m2 from '../Logo/m2.png'; // Import image
// import m3 from '../Logo/m3.png'; // Import image
// import m4 from '../Logo/m4.png'; // Import image
// import { Link } from 'react-router-dom';
// import '@fontsource/abril-fatface'; // Default weight 400
// import '@fontsource/old-standard-tt/';

// const CategoryCarousel = () => {

//   const categories = [
//     { id: 1, name: 'BOXES', image: m2 },
//     { id: 2, name: 'TRUNKS', image: m1 },
//     { id: 3, name: 'TABLES', image: m4 },
//     { id: 4, name: 'TRAYS', image: m2 },
//   ];

//   return (
//     <div className='container'>
//       <h1 className='text-center fs-1 mt-5 fw-lighter custom-font-styling_ border-bottom  p-3' style={{ fontFamily: 'Old Standard TT' }}>TRENDING CATEGORIES</h1>

//       <div className="row">
//         {categories.map((category) => (
//           <div className="col-md-6 my-4" key={category.id}>
//             <div className='card card_ h-100  m-2'>
//               <img src={category.image} className="card-img-top card-img-top_ " alt={category.name} />
//               <div className='card-body  card-body_'>
//                 <Link className='d-flex align-items-center gap-2 icon-link-hover text-decoration-none' to={`/categories/${category.id}`}>
//                   <h5 className="px-1 pt-1 ">{category.name}</h5>
//                   <i className='bi bi-arrow-right'> </i>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoryCarousel;



import React from 'react';
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
    { id: 1, name: 'BOXES', image: m2 },
    { id: 2, name: 'TRUNKS', image: m1 },
    { id: 3, name: 'TABLES', image: m4 },
    { id: 4, name: 'TRAYS', image: m2 },
  ];

  return (
    <div className='container'>
      <h1 className='text-center fs-1 mt-5 fw-lighter custom-font-styling_ border-bottom p-3' style={{ fontFamily: 'Old Standard TT' }}>TRENDING CATEGORIES</h1>

      <div id="categoryCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              {categories.slice(0, 2).map((category) => (
                <div className="col-md-6 my-4 d-flex justify-content-center" key={category.id}>
                  <div className='card card_ h-100 m-2'>
                    <img src={category.image} className="card-img-top card-img-top_" alt={category.name} />
                    <div className='card-body card-body_'>
                      <Link className='d-flex align-items-center gap-2 justify-content-center icon-link-hover text-decoration-none' to={`/categories/${category.id}`}>
                        <h5 className="px-1 pt-1">{category.name}</h5>
                        <i className='bi bi-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="carousel-item">
            <div className="row w-80">
              {categories.slice(2, 4).map((category) => (
                <div className="col-md-6 my-4 d-flex justify-content-center gap-0" key={category.id}>
                  <div className='card card_ h-100 m-2'>
                    <img src={category.image} className="card-img-top card-img-top_" alt={category.name} />
                    <div className='card-body card-body_'>
                      <Link className='d-flex align-items-center gap-2 justify-content-center icon-link-hover text-decoration-none' to={`/categories/${category.id}`}>
                        <h5 className="px-1 pt-1">{category.name}</h5>
                        <i className='bi bi-arrow-right'></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <button className="carousel-control-prev " type="button" data-bs-target="#categoryCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon carousel-control-prev-icon____2" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#categoryCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon carousel-control-next-icon____2" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default CategoryCarousel;
