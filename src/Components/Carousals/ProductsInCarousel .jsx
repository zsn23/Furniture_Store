import React from "react";
import { Link } from "react-router-dom";
import './ProductCarousel.css'; // Import custom CSS for additional styling
import p1 from '../Logo/p1.jpeg'; // Import image

const ProductsInCarousel = () => {
  const products = [
    { id: 1, name: "Product 1", description: "Description of Product 1", image: p1 },
    { id: 2, name: "Product 2", description: "Description of Product 2", image: p1 },
    { id: 3, name: "Product 3", description: "Description of Product 3", image: p1 },
    { id: 4, name: "Product 4", description: "Description of Product 4", image: p1 },
    { id: 5, name: "Product 5", description: "Description of Product 5", image: p1 },
    { id: 6, name: "Product 6", description: "Description of Product 6", image: p1 }
  ];

  const groupedProducts = [];
  for (let i = 0; i < products.length; i += 3) {
    groupedProducts.push(products.slice(i, i + 3));
  }

  return (
    <div className="product-carousel-container text-center my-5">
      <h2 className="">Share some #ethanallendesign love</h2>
      <p className="mb-5">Post your images and tag or mention @ethanallen for a chance to be featured on our website!</p>

      <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner carousel-inner_">
          {groupedProducts.map((group, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row justify-content-center">
                {group.map((product) => (
                  <div className="col-md-4 p-1 mb-3" key={product.id}>
                    <div className="card product-card border-1">
                      <Link to={`/product/${product.id}`}>
                        <img src={product.image} className="card-img-top border-0" alt={product.name} />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <p className="card-text">{product.description}</p>
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
        <button className="carousel-control-prev carousel-control-prev_ " type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next carousel-control-next_ " type="button" data-bs-target="#productCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* View More Button */}
      <button className="btn btn-outline-dark mt-4">View more</button>
    </div>
  );
};

export default ProductsInCarousel;
