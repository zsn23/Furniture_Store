// import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-light py-4">
      <div className="container">
        <hr />
        <div className="row">
          {/* COMPANY Section */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="font-weight-bold">COMPANY</h5>
            <ul className="list-unstyled anchor">
              <li><a href="#"className='text-decoration-none'>About Us</a></li>
              <li><a href="#"className='text-decoration-none'>Social Responsibility</a></li>
              <li><a href="#"className='text-decoration-none'>Press Releases</a></li>
              <li><a href="#"className='text-decoration-none'>Investor Relations</a></li>
              <li><a href="#"className='text-decoration-none'>Career Opportunities</a></li>
              <li><a href="#"className='text-decoration-none'>The Trade</a></li>
              <li><a href="#"className='text-decoration-none'>Hospitality</a></li>
              <li><a href="#"className='text-decoration-none'>Business Development</a></li>
            </ul>
          </div>
          {/* ONLINE RESOURCES Section */}
          <div className="col-md-3 col-6 mb-4  Online-resources">
            <h5 className="font-weight-bold">ONLINE RESOURCES</h5>
            <ul className="list-unstyled anchor">
              <li><a href="#"className='text-decoration-none'>Platinum Card</a></li>
              <li><a href="#"className='text-decoration-none'>Catalogs</a></li>
              <li><a href="#"className='text-decoration-none'>Gift Card & Gift Card Balance</a></li>
              <li><a href="#"className='text-decoration-none'>Product Information & Warranties</a></li>
              <li><a href="#"className='text-decoration-none'>Furniture Protection Plans</a></li>
              <li><a href="#"className='text-decoration-none'>Suppliers</a></li>
            </ul>
          </div>
          {/* CLIENT SERVICES Section */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="font-weight-bold">CLIENT SERVICES</h5>
            <ul className="list-unstyled anchor text-decoration-none">
              <li><a href="#"className='text-decoration-none'>Order Tracking</a></li>
              <li><a href="#"className='text-decoration-none'>Shipping</a></li>
              <li><a href="#"className='text-decoration-none'>FAQs</a></li>
              <li><a href="#"className='text-decoration-none'>Mailing List Preferences</a></li>
              <li><a href="#"className='text-decoration-none'>Email Preferences</a></li>
              <li><a href="#"className='text-decoration-none'>Product Recalls</a></li>
              <li><a href="#"className='text-decoration-none'>Contact Us</a></li>
            </ul>
          </div>
          {/* STAY IN TOUCH Section */}
          <div className="col-md-3 col-12 mb-4 text-center">
            <h2 className="font-weight-bold ">STAY IN TOUCH</h2>
            <p>For the latest news, enter your email address:</p>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Your email address" />
              <div className="input-group-append">
              </div>
            </div>
            {/* Social Icons */}
            <div className="d-flex justify-content-center">
              <i className="bi bi-facebook mx-2"></i>
              <i className="bi bi-instagram mx-2"></i>
              <i className="bi bi-pinterest mx-2"></i>
              <i className="bi bi-linkedin mx-2"></i>
            </div>
          </div>
        </div>
        {/* Footer Bottom */}
        <div className="feedback d-flex justify-content-center align-items-center">
          <a href="#">
          <button className='btn btn-dark text-white '>Feedback</button>
          </a>
          <h6 className='fw-bold mx-2'>We're always looking for ways to improve. Let us know what you think!</h6>
        </div>
        <div className="row mt-4 ">
          <hr />
          
           <div className="col-lg-3 col-md-6 col-12 text-center">
           <h6 className="mb-0 fw-bold">HAVE A QUESTION ? CONTACT US</h6>
           </div>
           <div className="col-lg-3 col-md-6 col-12 text-center">
           <p>
           <i className="bi bi-telephone-fill"></i> 03328721429 &nbsp; </p>
           </div>
           <div className="col-lg-3 col-md-6 col-12 text-center">
           <p><i className="bi bi-envelope-fill"></i> Noumankhalil08@gmail.com &nbsp; </p>
           </div>
           <div className="col-lg-3 col-md-6 col-12 text-center">
           <p><i className="bi bi-clock-fill"></i> 
           M-F, 8:30am-4:45pm PST</p>
           </div>
          <hr />
        </div>
       
        <div className="mt-3 privacy-policy text-center ">
          <a href="#"className='text-decoration-none' ><i>Privacy Policy |</i></a>
          <a href="#"className='text-decoration-none'><i> Accessibility |</i></a>
          <a href="#"className='text-decoration-none'><i>Do Not Sell or Share My Personal Information (CA residents only) |</i></a>
          <a href="#"className='text-decoration-none'><i> CA Transparency in Supply Chains Act |</i></a>
          <a href="#"className='text-decoration-none'><i> Terms & Conditions | Cookie Settings |</i></a>
          <a href="#"className='text-decoration-none'><i>Site Map</i></a>
       
        </div>

        <div className=" text-center mt-4 copyright">
            <p className="mb-0"><i>&copy; {new Date().getFullYear()} HOP FURNITURE , Inc.</i></p>
          </div>
      </div>

    </footer>
  );
};

export default Footer;