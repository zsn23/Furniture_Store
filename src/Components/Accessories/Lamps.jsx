import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import LampPic from "../Picture/LampImage.jpg";

const Lamps = () => {
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [fromPrice, setFromPrice] = useState('');
  const [toPrice, setToPrice] = useState('');
  const [sortOption, setSortOption] = useState('Relevance');

  const filterRef = useRef(null);
  const priceRef = useRef(null);

  const toggleFilterCard = () => {
    setShowFilter((prev) => !prev);
    setShowPrice(false); 
  };

  const togglePrice = () => {
    setShowPrice((prev) => !prev);
    setShowFilter(false); 
  };

  const resetFilters = () => {
    setInStock(false);
    setOutOfStock(false);
  };

  const resetPrice = () => {
    setFromPrice('');
    setToPrice('');
  };

  const inputStyle = {
    padding: '10px',
    borderRadius: '7px',
    border: '1px solid #000',
    fontSize: '16px',
    width: '100px',
    outline: 'none'
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (filterRef.current && !filterRef.current.contains(event.target)) {
        setShowFilter(false);
      }
      if (priceRef.current && !priceRef.current.contains(event.target)) {
        setShowPrice(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
      <h1 className="fontStyling mt-4">Lamps</h1>

      <div className="d-flex align-items-center justify-content-between mt-5 flex-wrap">
        <div className="d-flex align-items-center mb-2">
          <p className="m-0 p-0 text-muted me-2">Filter: </p>
          <p
            className="m-0 p-0 underline_Availabilty text-muted me-3"
            onClick={toggleFilterCard}
            style={{ cursor: "pointer" }}
          >
            Availability <i className="bi bi-caret-down-fill caret"></i>
          </p>
          <p
            className="m-0 p-0 underline_Availabilty text-muted"
            style={{ cursor: "pointer" }}
            onClick={togglePrice}
          >
            Price <i className="bi bi-caret-down-fill caret"></i>
          </p>
        </div>
   
        <div className="d-flex align-items-center">
          <p className="p-0 m-0 text-muted me-2">Sort by:</p>
          <select
            className="form-select custom_input text-muted"
            value={sortOption}
            onChange={handleSortChange}
            style={{ width: '180px' }}
          >
            <option value="Relevance">Relevance</option>
            <option value="PriceLowToHigh">Price: Low to High</option>
            <option value="PriceHighToLow">Price: High to Low</option>
            <option value="Newest">Newest Arrivals</option>
          </select>
        </div>
      </div>

      {showFilter && (
        <div ref={filterRef} className="card mt-3 border-black" style={{ width: "300px" }}>
          <div className="card-body p-3">
            <div className="d-flex justify-content-between align-items-center">
              <p className="card-title m-0 text-muted">0 selected</p>
              <button
                className="btn p-0 underline_Availabilty text-muted"
                onClick={resetFilters}
                style={{ color: "black", border: "none", background: "none" }}
              >
                Reset
              </button>
            </div>
            <hr style={{ border: "1px solid black", width: "100%" }} />
            <div className="form-check mt-2">
              <input
                type="checkbox"
                className="form-check-input custom_input"
                checked={inStock}
                onChange={() => setInStock(!inStock)}
              />
              <label className="form-check-label text-muted">
                In stock (9)
              </label>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input custom_input"
                checked={outOfStock}
                onChange={() => setOutOfStock(!outOfStock)}
              />
              <label className="form-check-label text-muted">
                Out of stock (2)
              </label>
            </div>
          </div>
        </div>
      )}

      {showPrice && (
        <div ref={priceRef} className="card mt-3 border-black" style={{ width: "315px" }}>
          <div className="card-body p-3">
            <div className="d-flex justify-content-between align-items-center">
              <p className="card-title m-0 text-muted me-5">
                The highest price is Rs.3600
              </p>
              <button
                className="btn p-0 underline_Availabilty text-muted"
                onClick={resetPrice}
                style={{ color: "black", border: "none", background: "none" }}
              >
                Reset
              </button>
            </div>
            <hr style={{ border: "1px solid black", width: "100%" }} />
            <div style={{ display: 'flex', gap: '20px'}}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="me-1">Rs</span>
                <input
                  type="number"
                  placeholder="From"
                  value={fromPrice}
                  onChange={(e) => setFromPrice(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'flex', alignItems: 'center' }}>
                <span className="me-1">Rs</span>
                <input
                  type="number"
                  placeholder="To"
                  value={toPrice}
                  onChange={(e) => setToPrice(e.target.value)}
                  style={inputStyle}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="row row-cols-1 row-cols-md-4 g-4 mt-1">
        {[...Array(12)].map((_, index) => (
          <div className="col" key={index}>
            <div className="card card_ h-100 shadow-sm product-card border-1">
              <Link className="text-dark a_" to="/lamp-details">
                <img
                  src={LampPic}
                  className="card-img-top img-fluid border-0"
                  alt="Lamp"
                  style={{ height: "300px", objectFit: "cover", maxWidth: "100%" }}
                />
                <div className="card-body py-4 mt-3 text-start">
                  <h5 className="card-title a_title">Lamp name</h5>
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




/*
-----------Api Code---------------------------
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LampPic from "../Picture/LampImage.jpg"; 

const API_URL = "https://api url";

const Lamps = () => {
  const [lamps, setLamps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
  
    const fetchLamps = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error("Failed to fetch lamps data");
        }
        const data = await response.json();
        setLamps(data); 
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    fetchLamps();
  }, []);

  if (loading) {
    return <div>Loading...</div>; 
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
        {lamps.map((lamp) => (
          <div className="col" key={lamp.id}>
            <div className="card card_ h-100 shadow-sm product-card border-1">
              <Link className="text-dark a_" to={`/lamp-details/${lamp.id}`}>
                <img
                  src={lamp.image ? lamp.image : LampPic} 
                  className="card-img-top img-fluid border-0"
                  alt={lamp.name}
                  style={{ height: "300px", objectFit: "cover" }}
                />
                <div className="card-body py-4 mt-3 text-start">
                  <h5 className="card-title a_title">{lamp.name}</h5>
                  <p className="card-text a_price">Rs.{lamp.price} PKR</p>
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

 */
