// src/CheckoutForm.jsx
import React, { useState } from 'react';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector , useDispatch } from 'react-redux';
import {  getTotals } from '../../redux/CartSlice';



const Checkoutform = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch(); 
  useEffect(() => {
   dispatch(getTotals());
  },[cart,dispatch]);
  const [selectedPayment, setSelectedPayment] = useState('cod');
  const [useDifferentBillingAddress, setUseDifferentBillingAddress] = useState(false);

  const handlePaymentChange = (e) => {
    setSelectedPayment(e.target.id);
  };

  const handleBillingAddressChange = (e) => {
    setUseDifferentBillingAddress(e.target.id === 'billing-different');
  };

  return (
    <div className="row g-0 bg-color-nav">
      {/* Left Side */}
      <div className="col-md-7 g-0">
        <div className="leftside">
          <div className="container" style={{ padding: '80px', paddingTop: '15px', paddingRight: '3rem' }}>
            <div className="mx-auto">
              <h2 className="headings">Contact</h2>
              <form>
                <div className="mb-1">
                  <input type="email" id="email" className="form-control" placeholder="Email" required />
                </div>
                <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input" id="news-offers" />
                  <label className="form-check-label radioButtons" htmlFor="news-offers">Email me with news and offers</label>
                </div>
                <h2 className="headings">Delivery</h2>
                <p className="paragraphs">This will also be used as your billing address for this order.</p>
                <div className="mb-2">
                  <select id="country" className="form-select">
                    <option value="" className="d-none">Country/Region</option>
                    <option value="1">Pakistan</option>
                  </select>
                </div>
                <div className="row mb-1">
                  <div className="col-sm-6 mb-2">
                    <input type="text" id="first-name" className="form-control" placeholder="First Name" required />
                  </div>
                  <div className="col-sm-6">
                    <input type="text" id="last-name" className="form-control" placeholder="Last name" required />
                  </div>
                </div>
                <div className="mb-2">
                  <input type="text" id="address" className="form-control" placeholder="Address" required />
                </div>
                <div className="row mb-1">
                  <div className="col-sm-6 mb-1">
                    <input type="text" id="apartment" className="form-control" placeholder="Apartment, suite, etc. (optional)" />
                  </div>
                  <div className="col-sm-6">
                    <input type="text" id="city" className="form-control" placeholder="City" required />
                  </div>
                </div>
                <div className="row mb-0">
                  <div className="col-sm-6 mb-3">
                    <input type="text" id="postal-code" className="form-control" placeholder="Postal code (optional)" />
                  </div>
                  <div className="col-sm-6">
                    <input type="tel" id="phone" className="form-control" placeholder="Phone" required />
                  </div>
                </div>
                <div className="mb-4 form-check">
                  <input type="checkbox" className="form-check-input" id="save-info" />
                  <label className="form-check-label radioButtons" htmlFor="save-info">Save this information for next time</label>
                </div>
                <h2 className="headings mb-2" style={{ fontSize: 'medium' }}>Shipping method</h2>
                <div className="mb-4 d-flex justify-content-between align-items-center" style={{ fontSize: '0.9rem', border: '1px solid black', borderRadius: '5px', height: '50px', paddingLeft: '10px', paddingRight: '10px', background: '#F6F6F6' }}>
                  <span className="text-muted">Standard</span>
                  <span style={{ fontWeight: '600' }}>Rs. 3000.00</span>
                </div>

                {/* Payment Section */}
                <h4 className="headings">Payment</h4>
                <p className="paragraphs mb-0">Your payment method’s billing address must match the shipping address. All transactions are secure and encrypted.</p>
                <p className="paragraphs">All transactions are secure and encrypted.</p>
                <div className="mb-4">
                  <div className="container p-0" id="CODMETHOD">
                    <div className="border p-3" style={{ background: 'whitesmoke' }} id="CodContainer">
                      <input className="form-check-input" type="radio" name="payment-method" id="cod" checked={selectedPayment === 'cod'} onChange={handlePaymentChange} />
                      <label className="form-check-label radioButtons" htmlFor="cod">Cash on Delivery (COD)</label>
                    </div>
                    <div id="COD" className="p-3" style={{ background: 'whitesmoke', height: '50px' }}>
                      <p className="text-center mb-0 InSmallscreen_payment__" style={{ fontSize: 'small', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
                        Payment will be collected at the time of delivery
                      </p>
                    </div>
                  </div>
                  <div className="container p-0" id="PAYMENTMETHOD">
                    <div className="border p-3" id="Bank_DepositContainer">
                      <input className="form-check-input" type="radio" name="payment-method" id="bank-deposit" checked={selectedPayment === 'bank-deposit'} onChange={handlePaymentChange} />
                      <label className="form-check-label radioButtons" htmlFor="bank-deposit">Bank Deposit</label>
                    </div>
                    {selectedPayment === 'bank-deposit' && (
                      <div id="bank-details" className="p-3" style={{ background: 'whitesmoke' }}>
                        <p className="mb-0 bank_deposit_radio">Bank Name: Sadapay</p>
                        <p className="mb-0 bank_deposit_radio">Account Title: Faizan Azeem</p>
                        <p className="mb-0 bank_deposit_radio pb-2">Account Number: 03314001202</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Billing Address Section */}
                {useDifferentBillingAddress && (
                  <div className="mb-4" id="billing_addressSection">
                    <h4 className="headings">Billing address</h4>
                    <div id="shipping__address_" className="border p-3" style={{ background: 'whitesmoke' }}>
                      <input className="form-check-input" type="radio" name="billing" id="same-address" checked={!useDifferentBillingAddress} onChange={handleBillingAddressChange} />
                      <label className="form-check-label radioButtons" htmlFor="same-address">Same as shipping address</label>
                    </div>
                    <div className="border p-3" id="different_billing_address">
                      <input className="form-check-input" type="radio" name="billing" id="billing-different" checked={useDifferentBillingAddress} onChange={handleBillingAddressChange} />
                      <label className="form-check-label radioButtons" htmlFor="billing-different">Use a different billing address</label>
                    </div>
                    <div id="billing-address" className="border p-3" style={{ background: 'whitesmoke' }}>
                      <div className="form-group mb-2">
                        <select className="form-select" id="billing-country">
                          <option value="">Country/Region</option>
                          <option value="1">Pakistan</option>
                        </select>
                      </div>
                      <div className="row mb-1">
                        <div className="col-md-6 mb-1">
                          <input type="text" className="form-control" id="billing-first-name" placeholder="First name" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control" id="billing-last-name" placeholder="Last name" />
                        </div>
                      </div>
                      <div className="form-group mb-1">
                        <input type="text" className="form-control" id="billing-address-line" placeholder="Address" />
                      </div>
                      <div className="row mb-1">
                        <div className="col-md-6 mb-1">
                          <input type="text" className="form-control" id="billing-apartment" placeholder="Apartment, suite, etc. (optional)" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control" id="billing-city" placeholder="City" />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-1">
                          <input type="text" className="form-control" id="billing-postal-code" placeholder="Postal code (optional)" />
                        </div>
                        <div className="col-md-6">
                          <input type="text" className="form-control" id="billing-phone" placeholder="Phone" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="col-md-5 g-0">
        <div className="rightside">
          <div className="container p-4">
            <h4 className="mb-4 headings">Order Summary</h4>
            {/* Order Items */}
            <div className="d-flex justify-content-between mb-2">
              <p className="paragraphs mb-0">Subtotal</p>
              <p className="mb-0 paragraphs">Rs. {cart.cartTotalAmount}.00</p>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <p className="paragraphs mb-0">Shipping</p>
              <p className="mb-0 paragraphs">Rs. 3000.00</p>
            </div>
            <div className="d-flex justify-content-between mb-4">
              <h4 className="paragraphs">Total</h4>
              <h4 className="paragraphs">Rs. {cart.cartTotalAmount + 3000}.00</h4>
            </div>
            <button className="btn w-100 py-2 mb-3" style={{color: '#eff0f5',
                backgroundColor: '#84754E'}}>Place Order</button>
            <Link to="/MyCart" className="text-muted paragraphs text-center d-block"><button className="btn w-100 py-2 mb-3" style={{color: '#eff0f5',
               backgroundColor: '#84754E'}}>Return to cart</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkoutform;
