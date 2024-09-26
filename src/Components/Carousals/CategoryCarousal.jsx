import React from 'react';

const CategoryCarousal = () => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <button className="btn btn-secondary px-2 rounded-start">
        &lt;
      </button>
      <div className="d-flex overflow-auto">
        <div className="d-flex flex-column align-items-center mx-2">
          <img aria-hidden="true" alt="White Mixed Floral Centerpiece in Oval Vase" src="https://openui.fly.dev/openui/150x150.svg?text=🌸" className="img-fluid" />
          <span className="text-muted">White Mixed Floral Centerpiece in Oval Vase</span>
        </div>
        <div className="d-flex flex-column align-items-center mx-2">
          <img aria-hidden="true" alt="Kala Martini Drink Table" src="https://openui.fly.dev/openui/150x150.svg?text=🍸" className="img-fluid" />
          <span className="text-muted">Kala Martini Drink Table</span>
        </div>
        <div className="d-flex flex-column align-items-center mx-2">
          <img aria-hidden="true" alt="FoggyDesert" src="https://openui.fly.dev/openui/150x150.svg?text=🖼️" className="img-fluid" />
          <span className="text-muted">Foggy Desert</span>
        </div>
        <div className="d-flex flex-column align-items-center mx-2">
          <img aria-hidden="true" alt="Lina Metal Oval Nesting Trays, Set of 3" src="https://openui.fly.dev/openui/150x150.svg?text=🍽️" className="img-fluid" />
          <span className="text-muted">Lina Metal Oval Nesting Trays, Set of 3</span>
        </div>
        <div className="d-flex flex-column align-items-end mx-2">
          <img aria-hidden="true" alt="8&quot; Arabesque Porcelain Keep-All Jar" src="https://openui.fly.dev/openui/80x80.svg?text=🏺" className="img-fluid" />
          <span className="text-muted">8" Arabesque Porcelain Keep-All Jar</span>
        </div>
        <div className="d-flex flex-column align-items-center mx-2">
          <img aria-hidden="true" alt="Bridgers Chair" src="https://openui.fly.dev/openui/150x150.svg?text=🪑" className="img-fluid" />
          <span className="text-muted">Bridgers Chair</span>
        </div>
      </div>
      <button className="btn btn-secondary px-2 rounded-end">
        &gt;
      </button>
    </div>
  );
};

export default CategoryCarousal;
