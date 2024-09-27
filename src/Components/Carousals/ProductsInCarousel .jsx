import React from "react";
import { Link } from "react-router-dom";
import './ProductCarousel.css'; // Import custom CSS for additional styling
import p1 from '../Logo/p3.jpg'; // Import image

const ProductsInCarousel = () => {
  const products = [
    { id: 1, name: "Cobalt Elephent Trunk", description: "Rs.85,000.00 PKR", image: p1 },
    { id: 2, name: "Striped Parquetry Mini Trunk", description: "Rs.85,000.00 PKR", image: p1 },
    { id: 3, name: "Aarsi Tall Table", description: "Rs.85,000.00 PKR ", image: p1 },
    { id: 4, name: "Striped Parquetry Mini Trunk", description: "Rs.85,000.00 PKR", image: p1 },
    { id: 5, name: "Aarsi Tall Table", description: "Rs.85,000.00 PKR", image: p1 },
    { id: 6, name: "Cobalt Elephent Trunk", description: "Rs.85,000.00 PKR", image: p1 }
  ];

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 3) {
    groupedProducts.push(products.slice(i, i + 3));
  }

  return (
    <div className="product-carousel-container   text-center ">
      <h2 className="fw-lighter text-center  my-5 " style={{ fontFamily: 'Old Standard TT' }}>FEATURED PRODUCTS</h2>
      <div id="productCarousel" className="carousel slide" data-bs-ride="carousel"  >
        <div className="carousel-inner carousel-inner_">
          {groupedProducts.map((group, index) => (
            <div className={`carousel-item carousel-item_ ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row justify-content-center g-0">
                {group.map((product) => (


                  <div className={`col-12  col-md-4`} key={product.id}>
                    <div className="card card_ h-100 shadow-sm product-card border-1" key={product.id}>
                      <Link className="text-dark a_" to={`/product/${product.id}`}>
                        <img src={product.image} className="card-img-top border-0" alt={product.name} />
                        <div className="card-body py-4 mt-3 text-start">
                          <h5 className="card-title a_title ">{product.name}</h5>
                          <p className="card-text a_price">{product.description}</p>
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
          <button className="carousel-control-prev carousel-control-prev_" style={{ fontSize: '30px' }} type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
            <i className="bi bi-chevron-left text-dark" aria-hidden="true"></i>
            <span className="visually-hidden">Previous</span>
          </button>

        </div>

        <button className="carousel-control-next carousel-control-next_" style={{ fontSize: '30px' }} type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <i className="bi bi-chevron-right text-dark" aria-hidden="true"></i>
          <span className="visually-hidden">Next</span>
        </button>

      </div>

      {/* View More Button */}
      <button className="btn btn-outline-dark btn-outline-dark_ rounded-pill mt-4 fontStyling02">EXPLORE MORE</button>
    </div>
  );
};

export default ProductsInCarousel;
