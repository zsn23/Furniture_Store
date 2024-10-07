import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import BedPic from "../../Pictures InstaPage/pic4.jpg";


const Beds = () => {
  const [inStock, setInStock] = useState(false);
  const [outOfStock, setOutOfStock] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [showPrice, setShowPrice] = useState(false);
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");
  const [sortOption, setSortOption] = useState("Relevance");

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const filterRef = useRef(null);
  const priceRef = useRef(null);

  // List of 12 lamps for testing
  const beds = [...Array(12)].map((_, index) => ({
    id: index + 1,
    name: `Bed name ${index + 1}`,
    price: Math.floor(Math.random() * 20000) + 1000,
  }));

  // Calculate the highest price among lamps
  const highestPrice = Math.max(...beds.map((bed) => bed.price));

  const indexOfLastBed = currentPage * itemsPerPage;
  const indexOfFirstBed = indexOfLastBed - itemsPerPage;
  const currentLamps = beds.slice(indexOfFirstBed, indexOfLastBed);

  const totalPages = Math.ceil(beds.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Toggle the Availability filter
  const toggleFilterCard = () => {
    setShowFilter((prev) => !prev);
    setShowPrice(false);
  };

  // Toggle the Price filter
  const togglePrice = () => {
    setShowPrice((prev) => !prev);
    setShowFilter(false);
  };

  const resetFilters = () => {
    setInStock(false);
    setOutOfStock(false);
  };

  const resetPrice = () => {
    setFromPrice("");
    setToPrice("");
  };

  const inputStyle = {
    padding: "10px",
    borderRadius: "7px",
    border: "1px solid #000",
    fontSize: "16px",
    width: "100px",
    outline: "none",
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  // Close the filter cards if clicking outside of them
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

  // Count selected filters
  const selectedCount = Number(inStock) + Number(outOfStock);
  return (
    <>
      <div className="container-fluid">
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
          Furniture &gt;
        </Link>
        <Link
          to="/furniture/beds"
          className="text-decoration-none fs-5 breadcrumb-link"
          style={{ color: "#84754E", fontWeight: "bold" }}
        >
          Beds
        </Link>
      </p>
      <h1 className="fontStyling mt-4">Beds</h1>
      {/* <div className="d-flex align-items-center justify-content-between mt-5 flex-wrap" style={{ position: 'relative', overflow: 'hidden' }}> */}
      {/* <div className="d-flex align-items-center mb-2">
  <p className="m-0 p-0 text-muted me-2 sort-by-filter">Filter: </p>
  <p
    className="m-0 p-0 underline_Availabilty text-muted me-3 availability-filter"
    onClick={toggleFilterCard}
    style={{ cursor: "pointer" }}
  >
    Availability {" "}<i className="bi bi-caret-down-fill caret"></i>
  </p>
  <p
    className="m-0 p-0 underline_Availabilty text-muted price-filter"
    style={{ cursor: "pointer" }}
    onClick={togglePrice}
  >
    Price <i className="bi bi-caret-down-fill caret"></i>
  </p>
</div> */}


<div className="d-flex align-items-center justify-content-end sort-by-filter">
  <p className="p-0 m-0 text-muted me-2">Sort by:</p>
  <select
    className="form-select custom_input text-muted"
    value={sortOption}
    onChange={handleSortChange}
    style={{ width: '180px' }}
  >
 <option value="best-selling" selected>
                      Best selling
                    </option>
                    <option value="Alphabetically-AZ">
                      Alphabetically, A-Z
                    </option>
                    <option value="Alphabetically-ZA">
                      Alphabetically, Z-A
                    </option>
                    <option value="Price-low-to-high">
                      Price, low to high
                    </option>
                    <option value="Price-high-to-low">
                      Price, high to low
                    </option>
  </select>
</div>

      {/* </div> */}
      {/* {showFilter && (
                  <div
                    ref={filterRef}
                    className="card mt-3 border-black"
                    style={{ width: "300px" }}
                    
                  >
                    <div className="card-body p-3  ">
                      <div className="d-flex justify-content-between align-items-center ">
                        <p className="card-title m-0 text-muted">
                          {selectedCount} selected
                        </p>
                        <button
                          className="btn p-0 underline_Availabilty text-muted"
                          onClick={resetFilters}
                          style={{
                            color: "black",
                            border: "none",
                            background: "none",
                          }}
                        >
                          Reset
                        </button>
                      </div>
                      <hr
                        style={{ border: "1px solid black", width: "100%" }}
                      />
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
                  <div
                    ref={priceRef}
                    className="card mt-3 border-black"
                    style={{ width: "325px" }}
                  >
                    <div className="card-body p-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="card-title m-0 text-muted me-5">
                          <span>The highest price is Rs.{highestPrice}</span>
                        </p>
                        <button
                          className="btn p-0 underline_Availabilty text-muted"
                          onClick={resetPrice}
                          style={{
                            color: "black",
                            border: "none",
                            background: "none",
                          }}
                        >
                          Reset
                        </button>
                      </div>
                      <hr
                        style={{ border: "1px solid black", width: "100%" }}
                      />
                      <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span className="me-1">Rs</span>
                          <input
                            type="number"
                            placeholder="From"
                            value={fromPrice}
                            onChange={(e) => setFromPrice(e.target.value)}
                            style={inputStyle}
                          />
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
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
                )} */}

      <div className="row filter_row">
        <div className="col-12 filter_col">
          <button
            className="btn filter_btn svgsetting "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasRight"
            aria-controls="offcanvasRight"
          >
          
            <svg
              className="svgHandle"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="19 01 39 18"
              fill="none"
              style={{ width: "100%", height: "20px", outlineColor: "#FFFFFF"}}
            >
              <path
                fillRule="evenodd"
                d="M4.833 6.5a1.667 1.667 0 1 1 3.334 0 1.667 1.667 0 0 1-3.334 0ZM4.05 7H2.5a.5.5 0 0 1 0-1h1.55a2.5 2.5 0 0 1 4.9 0h8.55a.5.5 0 0 1 0 1H8.95a2.5 2.5 0 0 1-4.9 0Zm11.117 6.5a1.667 1.667 0 1 0-3.334 0 1.667 1.667 0 0 0 3.334 0ZM13.5 11a2.5 2.5 0 0 1 2.45 2h1.55a.5.5 0 0 1 0 1h-1.55a2.5 2.5 0 0 1-4.9 0H2.5a.5.5 0 0 1 0-1h8.55a2.5 2.5 0 0 1 2.45-2Z"
                fill="currentColor"
                
              />
            </svg>
            <span
            className="btn filter_btn underline_Availabilty m-0 p-0 "
            
          >
            Filter
          </span>
          </button>
     

          {/* Filter offcanvas */}
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasRight"
            aria-labelledby="offcanvasRightLabel"
            style={{ backgroundColor: "#eff0f5" }}
          >
            {/* Filter heading */}
            <div
              className="offcanvas-header p-0 pb-2 border-bottom customHeight"
              
            >
              <div>
                <h5
                  className="offcanvas-title  "
                  id="offcanvasRightLabel"
                  style={{
                    fontWeight: "bold",
                    fontSize: "medium",
                    fontFamily: "Questrial, sans-serif",
                    textAlign: "center",
                  }}
                >
                  <span className="underline_Availabilty">Filter</span>
                </h5>
                <span
                  id="TotalProducts"
                  className="Total_products"
                  style={{ fontSize: "small" }}
                >
                  26 products
                </span>
              </div>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                style={{ paddingLeft: "32px" }}
              />
            </div>
            {/* Filter body */}
            <div className="offcanvas-body">
              <div className="filter-item">
                <a
                  className="m-0 p-0 underline_Availabilty mx-3"
                  onClick={toggleFilterCard}
                  style={{ cursor: "pointer" }}
                >
                  Availability{" "}
                  <span className="arrow">
                    <i className="bi bi-arrow-right" />
                  </span>
                </a>
                {showFilter && (
                  <div
                    ref={filterRef}
                    className="card mt-3 border-black"
                    style={{ width: "300px" }}
                  >
                    <div className="card-body p-3  ">
                      <div className="d-flex justify-content-between align-items-center ">
                        <p className="card-title m-0 text-muted">
                          {selectedCount} selected
                        </p>
                        <button
                          className="btn p-0 underline_Availabilty text-muted"
                          onClick={resetFilters}
                          style={{
                            color: "black",
                            border: "none",
                            background: "none",
                          }}
                        >
                          Reset
                        </button>
                      </div>
                      <hr
                        style={{ border: "1px solid black", width: "100%" }}
                      />
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
              </div>
              <div className="filter-item">
                <a
                  className="m-0 p-0 underline_Availabilty  mx-3 "
                  style={{ cursor: "pointer" }}
                  onClick={togglePrice}
                >
                  Price{" "}
                  <span className="arrow">
                    <i className="bi bi-arrow-right" />
                  </span>
                </a>
                {showPrice && (
                  <div
                    ref={priceRef}
                    className="card mt-3 border-black"
                    style={{ width: "325px" }}
                  >
                    <div className="card-body p-3">
                      <div className="d-flex justify-content-between align-items-center">
                        <p className="card-title m-0 text-muted me-5">
                          <span>The highest price is Rs.{highestPrice}</span>
                        </p>
                        <button
                          className="btn p-0 underline_Availabilty text-muted"
                          onClick={resetPrice}
                          style={{
                            color: "black",
                            border: "none",
                            background: "none",
                          }}
                        >
                          Reset
                        </button>
                      </div>
                      <hr
                        style={{ border: "1px solid black", width: "100%" }}
                      />
                      <div style={{ display: "flex", gap: "20px" }}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <span className="me-1">Rs</span>
                          <input
                            type="number"
                            placeholder="From"
                            value={fromPrice}
                            onChange={(e) => setFromPrice(e.target.value)}
                            style={inputStyle}
                          />
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
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
              </div>
              {/* <div className="filter-item  mx-3">
                <a className="m-0 p-0  " style={{ cursor: "pointer" }}>
                  <span className="underline_Availabilty">Sort by:</span>
                  <select
                    name="sort_by"
                    className="form-select custom_input text-muted sortByOptions"
                    value={sortOption}
                    onChange={handleSortChange}
                    style={{ width: "180px" }}
                  >
                    <option value="best-selling" selected>
                      Best selling
                    </option>
                    <option value="Alphabetically-AZ">
                      Alphabetically, A-Z
                    </option>
                    <option value="Alphabetically-ZA">
                      Alphabetically, Z-A
                    </option>
                    <option value="Price-low-to-high">
                      Price, low to high
                    </option>
                    <option value="Price-high-to-low">
                      Price, high to low
                    </option>
                  </select>
                </a>
              </div>  */}
            </div>

            {/* Filter footer */}
            <div className="offcanvas-footer border-bottom">
              <footer>
                <div className="filter_footer p-1">
                  <button className="removeAll">Remove all</button>
                  <span className="button_">
                    <a href="#">
                      <button
                        className="btn btn-outline-dark rounded-pill btn-no-hover"
                        type="submit"
                        style={{
                          borderWidth: "0rem",
                          width: "9.05rem",
                          fontWeight: "lighter",
                          fontFamily: "Questrial, sans-serif",
                          fontSize: "11.5px",
                          height: "36px",
                          color: "#eff0f5",
                          backgroundColor: " #84754e",
                          marginBottom: "7px",
                        }}
                      >
                        Apply
                      </button>
                    </a>
                  </span>
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4 mt-1">
        {currentLamps.length > 0 ? (
          currentLamps.map((bed) => (
            <div className="col" key={bed.id}>
              <div className="card h-100 shadow-sm product-card border-1">
                <Link
                  className="text-dark a_"
                  to={`/accessories/lamps/${bed.id}`}
                >
                  <img
                    src={BedPic}
                    className="card-img-top img-fluid border-0"
                    alt="Lamp"
                    style={{
                      height: "400px",
                      objectFit: "cover",
                      width: "100%",
                    }} // Ensure full width
                  />
                  <div className="card-body py-4 mt-3 text-start">
                    <h5 className="card-title a_title">{bed.name}</h5>
                    <p className="card-text a_price">Rs.{bed.price}.00 PKR</p>
                  </div>
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center mt-4">
            <p className="text-muted">No Beds found matching your criteria.</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-5">
        <nav>
          <ul className="pagination ">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link custom_pagination"
                onClick={() => handlePageChange(currentPage - 1)}
              >
                Previous
              </button>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index + 1}
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
              >
                <button
                  className="page-link custom_pagination text-dark bg-transparent custom_border"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li 
              className={`page-item ${
                currentPage === totalPages ? "disabled" : ""
              }`}
            >
              <button
                className="page-link custom_pagination"
                onClick={() => handlePageChange(currentPage + 1)}
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    </>
  )
}

export default Beds