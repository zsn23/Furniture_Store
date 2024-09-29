import React from 'react'

const OrderTrack = () => {
    return (
        <>
            <div className="container mt-5">
                <div className="row justify-content-center">

                    <div className="col-lg-9 col-md-12 col-12 ">
                        <div className="login-box p-4 border rounded">
                            <h3 className="mb-3" style={{ fontFamily: 'Old Standard TT' }}>Check an Order</h3>
                            <p>Whether you ordered online or in the Design Center, you can check your order status here.</p>
                            <form>
                                <div className="form-group mb-3">
                                    <label htmlFor="email" className='fw-bold'>Order / Reference Number<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control mt-2" id="email" placeholder="Enter your order Number" />
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password" className='fw-bold'>Order Email<span className="text-danger">*</span></label>
                                    <input type="email" className="form-control mt-2" id="password" placeholder="Enter your Email" required/>
                                </div>
                                <div className="form-group mb-3">
                                    <label htmlFor="password" className='fw-bold'>Billing Zip Code<span className="text-danger">*</span></label>
                                    <input type="text" className="form-control mt-2" id="password" placeholder="Enter your Zip Code"  required/>
                                </div>

                                <button type="submit" className="button-login  w-100 mt-3">Check Status</button>
                            </form>
                        </div>
                    </div>




                    <div className="col-lg-3 col-md-12 col-12 ">
                        <h6 className="mt-5 fw-bold">HAVE A QUESTION? CONTACT US</h6>
                        <div className="contact-details ">
                            <p className='mt-5'><i className="bi bi-telephone-fill"></i> 03328721429</p>
                            <p className='mt-5'><i className="bi bi-envelope-fill"></i> Noumankhalil08@gmail.com</p>
                            <p className='mt-5'><i className="bi bi-clock-fill"></i> M-F, 8:30am-4:45pm PST</p>
                            <p className='mt-5'><i className="bi bi-chat-dots-fill"></i> Chat live with us anytime</p>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default OrderTrack
