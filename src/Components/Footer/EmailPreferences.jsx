import React from 'react'
import ChairPic from '../Picture/ChairPic.jpg';
const EmailPreferences = () => {
    return (
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <img
                src={ChairPic}
                alt="Room Decor"
                className="img-fluid rounded"
              />
            </div>
            <div className="col-md-6 " style={{ marginTop: '-15px' }}>
              <p className='fs-3 m-0 p-0'>UPDATE PREFERENCES</p>
              <p className="text-muted"><i>*required fields</i></p>
              <form className='mt-5'>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email*</label>
                  <input
                    className='mx-5 w-50'
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <button type="submit" className=" rounded-pill px-2 py-1 border border-none text-white " style={{backgroundColor:  '#84754E'}}>SUBMIT</button>
              </form>

              <p className="text-muted mt-3">
                You may still receive emails from your local designer and/or Design Center regarding  special in-store only events.
              </p>
            </div>
          </div>
        </div>
      );
}

export default EmailPreferences