import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <>
      <div className="container mt-5 px-5">
        <div className="col-lg-12 col-md-12 col-12 mt-4 mt-lg-0">
          <div className="create-account-box">
            <h3 className="mb-3">Create an Account</h3>
            
            {/* First Name */}
            <div className="form-group mb-3">
              <label htmlFor="firstName" className='fw-bold'>First Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control mt-2" id="firstName"/>
            </div>

            {/* Last Name */}
            <div className="form-group mb-3">
              <label htmlFor="lastName" className='fw-bold'>Last Name <span className="text-danger">*</span></label>
              <input type="text" className="form-control mt-2" id="lastName" />
            </div>

            {/* Email */}
            <div className="form-group mb-3">
              <label htmlFor="email" className='fw-bold'>Email <span className="text-danger">*</span></label>
              <input type="email" className="form-control mt-2" id="email" />
            </div>

            {/* Confirm Email */}
            <div className="form-group mb-3">
              <label htmlFor="confirmEmail" className='fw-bold'>Confirm Email <span className="text-danger">*</span></label>
              <input type="email" className="form-control mt-2" id="confirmEmail" />
            </div>

            {/* Password */}
            <div className="form-group mb-3">
              <label htmlFor="password" className='fw-bold'>Password <span className="text-danger">*</span></label>
              <input type="password" className="form-control mt-2" id="password" />
            </div>

            {/* Confirm Password */}
            <div className="form-group mb-3">
              <label htmlFor="confirmPassword" className='fw-bold'>Confirm Password <span className="text-danger">*</span></label>
              <input type="password" className="form-control mt-2" id="confirmPassword" />
            </div>

            {/* Zip Code */}
            <div className="form-group mb-3">
              <label htmlFor="zipCode" className='fw-bold'>Zip Code <span className="text-danger">*</span></label>
              <input type="text" className="form-control mt-2" id="zipCode" />
            </div>

            {/* Country Dropdown */}
            <div className="form-group mb-3">
              <label htmlFor="country" className='fw-bold' placeholder=' Select a Country'>Please Select a Country</label>
              <select className="form-control mt-2" id="country" name="country">
                <option value="" >Please select a country</option>
                <option value="pakistan" >Pakistan</option>

              </select>
            </div>

            {/* State Dropdown */}
            <div className="form-group mb-3">
              <label htmlFor="state" className='fw-bold'>Please Select a State</label>
              <select className="form-control mt-2" id="state" name="state">
                <option value="">Select State</option>
                <option value="Punjab">Punjab</option>
                <option value="Sindh">Sindh</option>
                <option value="KPK">KPK</option>
                <option value="Balochistan">Balochistan</option>
                <option value="Kashmir">Kashmir</option>
              
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="designCenter" className='fw-bold'>Please Select a Design Center</label>
              <select className="form-control mt-2" id="designCenter" name="designCenter">
                <option value="">Select Design Center</option>
              </select>
            </div>

            <div className="form-group mb-3">
              <label htmlFor="designer" className='fw-bold'>Please Select a Designer</label>
              <select className="form-control mt-2" id="designer" name="designer">
                <option value="">Select Preferred Designer</option>
               
              </select>
            </div>
            <div>
            <div >
      <input type="checkbox"  id="vehicle1" name="vehicle1" value="Bike" />
      <label htmlFor="vehicle1" className='checkbox'>Please add me to the FURNITURE HOP's email list. FURNITURE HOP does not share or sell personal info.</label>
      <a href="" className='textBlack fw-bold checkbox'> See Privacy Policy</a>
    </div>
            </div>
           
            <Link to='/signup'>
              <button className="button-login w-100 mt-4">CREATE AN ACCOUNT</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
