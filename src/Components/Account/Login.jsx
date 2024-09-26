

import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
            
          <div className="col-lg-6 col-md-12 col-12 ">
            <div className="login-box p-4 border rounded">
              <h3 className="mb-3">Sign In</h3>
              <p>If you are a registered user, please enter your email and password.</p>
              <form>
                <div className="form-group mb-3">
                  <label htmlFor="email" className='fw-bold'>Email Address <span className="text-danger">*</span></label>
                  <input type="email" className="form-control mt-2" id="email" placeholder="Enter your email" />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="password" className='fw-bold'>Password <span className="text-danger">*</span></label>
                  <input type="password" className="form-control mt-2" id="password" placeholder="Enter your password" />
                </div>
                <div className="d-flex justify-content-between align-items-center ">
                  <a href="#" className="textBlack ">Forgot Password?</a>
                  <p className='fw-bold'>* Required</p>
                </div>
                <button type="submit" className="button-login  w-100 mt-3">SIGN IN</button>
              </form>
            </div>
          </div>

        


          <div className="col-lg-6 col-md-12 col-12  mt-4 mt-lg-0">
            <div className="create-account-box p-4 border rounded">
              <h3 className="mb-3">Create an Account</h3>
              <p>Want a more personalized experience? Create an account today for all these benefits and more:</p>
              <ul className="list-unstyled">
                <li className="mb-2"><i className="bi bi-cart-fill"></i> Check out faster</li>
                <li className="mb-2"><i className="bi bi-box-fill"></i> Track your order</li>
                <li className="mb-2"><i className="bi bi-clock-history"></i> View your history</li>
              </ul>
              <i>

              <p className="mt-4">Already working with a designer? </p>
              <div>Make sure to select them as your preferred designer.</div>
              </i>
              <Link to='/signup' >
              <button className="button-login w-100 mt-4">CREATE AN ACCOUNT</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
