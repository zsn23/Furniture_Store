// import React from 'react';
// import { Link } from 'react-router-dom';

// const ContactUs = () => {
//   return (
//     <div className="container mt-5">
//       {/* Breadcrumb */}
//       <div className="row">
//         <div className="col-12">
//           <nav aria-label="breadcrumb">
//             <ol className="breadcrumb">
//               <li className="breadcrumb-item">
//                 <Link to="/" className="text-black">Home</Link>
//               </li>
//               <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
//             </ol>
//           </nav>
//         </div>
//       </div>

//       {/* Contact Form */}
//       <div className="row justify-content-center">
//         <div className="col-md-8 col-lg-6">
//           <h2 className="text-center mb-4">CONTACT US</h2>
//           <form>
//             <div className="mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Name"
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email *"
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <input
//                 type="tel"
//                 className="form-control"
//                 placeholder="Phone number"
//               />
//             </div>
//             <div className="mb-3">
//               <textarea
//                 className="form-control"
//                 rows="4"
//                 placeholder="Comment"
//               />
//             </div>
//             <div className="d-grid">
//               <button type="submit" className="button-login">Send</button>
//             </div>
//           </form>
//           <div className='mt-4'>
//              <h4>
// Helpline: +92-321-4697818</h4>
// <h4>Email: sales@heritagehomepk.com</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;

import React from 'react';
import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="container mt-5">
      {/* Breadcrumb */}
      <div className="row">
        <div className="col-12">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="/" className="text-black">Home</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
            </ol>
          </nav>
        </div>
      </div>

      
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <h2 className="text-center mb-4" style={{ fontFamily: 'Old Standard TT' }}>CONTACT US</h2>
          <form>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email *"
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Phone number"
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Comment"
              />
            </div>
            <div className="d-grid">
              <button type="submit" className="button-login">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
