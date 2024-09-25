// import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-light py-4">
      <div className="container">
        <div className="row">
          {/* COMPANY Section */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="font-weight-bold">COMPANY</h5>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Social Responsibility</li>
              <li>Press Releases</li>
              <li>Investor Relations</li>
              <li>Career Opportunities</li>
              <li>The Trade</li>
              <li>Hospitality</li>
              <li>Business Development</li>
            </ul>
          </div>
          {/* ONLINE RESOURCES Section */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="font-weight-bold">ONLINE RESOURCES</h5>
            <ul className="list-unstyled">
              <li>Platinum Card</li>
              <li>Catalogs</li>
              <li>Gift Card & Gift Card Balance</li>
              <li>Product Information & Warranties</li>
              <li>Furniture Protection Plans</li>
              <li>Suppliers</li>
            </ul>
          </div>
          {/* CLIENT SERVICES Section */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="font-weight-bold">CLIENT SERVICES</h5>
            <ul className="list-unstyled">
              <li>Order Tracking</li>
              <li>Shipping</li>
              <li>FAQs</li>
              <li>Mailing List Preferences</li>
              <li>Email Preferences</li>
              <li>Product Recalls</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* STAY IN TOUCH Section */}
          <div className="col-md-3 col-12 mb-4">
            <h5 className="font-weight-bold">STAY IN TOUCH</h5>
            <p>For the latest news, enter your email address:</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Your email address" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button">Submit</button>
              </div>
            </div>
            {/* Social Icons */}
            <div className="d-flex justify-content-start">
              <i className="bi bi-facebook mx-2"></i>
              <i className="bi bi-instagram mx-2"></i>
              <i className="bi bi-pinterest mx-2"></i>
              <i className="bi bi-linkedin mx-2"></i>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p className="mb-0">Have a question? Contact us!</p>
            <p>
              <i className="bi bi-telephone-fill"></i> 888.324.3571 &nbsp; 
              <i className="bi bi-envelope-fill"></i> orders@example.com &nbsp; 
              M-F, 8:30am-4:45pm EST
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;