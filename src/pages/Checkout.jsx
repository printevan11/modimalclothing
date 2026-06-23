import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

export default function Checkout({ cart = [], setCart = () => {}, triggerToast = () => {}, wishlist = [], cartCount = 0 }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(1); // 1: info, 2: payment, 3: result
  const [paymentStatus, setPaymentStatus] = useState(null); // 'success' or 'failed'

  const [contactInfo, setContactInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    state: '',
    zip: ''
  });

  const [paymentMethod, setPaymentMethod] = useState('card');

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!contactInfo.firstName || !contactInfo.lastName || !contactInfo.email || !contactInfo.phone) {
      triggerToast('Please fill in all contact fields');
      return;
    }
    if (!shippingAddress.address || !shippingAddress.city || !shippingAddress.state || !shippingAddress.zip) {
      triggerToast('Please fill in all shipping address fields');
      return;
    }
    setStep(2);
  };

  const handlePayment = () => {
    // Simulate payment - random success/failure for demo
    const isSuccess = Math.random() > 0.3; // 70% success rate
    setPaymentStatus(isSuccess ? 'success' : 'failed');
    setStep(3);

    if (isSuccess) {
      setCart([]); // Clear cart on success
      triggerToast('Payment successful!');
    }
  };

  const handleContinueShopping = () => {
    navigate('/');
  };

  const handleBackToOrders = () => {
    navigate('/shopping');
  };

  // Result Screen
  if (step === 3) {
    return (
      <div className="w-full bg-[#FCFAF7] text-[#1C1C1C] font-sans antialiased min-h-screen">
        <Navbar
          cartCount={cartCount}
          wishlist={wishlist}
          triggerToast={triggerToast}
        />
        <div className="flex items-center justify-center py-20">
        <div className="max-w-lg mx-auto p-8 text-center">
          {paymentStatus === 'success' ? (
            <>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold tracking-wide mb-2">Payment Successful</h1>
              <p className="text-neutral-500 mb-2">Thank you for choosing Modimal</p>
              <p className="text-neutral-500 mb-6">Your order will be generated based on your delivery request.</p>

              <div className="bg-neutral-50 p-4 rounded-sm mb-6 text-sm text-left">
                <p className="font-semibold mb-2">Order Details:</p>
                <p>Items: {cart.length}</p>
                <p>Total: ${calculateTotal().toFixed(2)}</p>
                <p className="mt-2 text-neutral-500">The Receipt has been sent to your email.</p>
              </div>

              <p className="text-sm text-neutral-500 mb-2">Please Contact us for any query</p>
              <p className="text-sm font-semibold mb-6">+1(929)460-3208</p>
              <p className="text-sm mb-6">OR</p>
              <p className="text-sm font-semibold mb-6">Hello @ modimal.com</p>

              <button
                onClick={handleContinueShopping}
                className="bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3"
              >
                Continue Shopping
              </button>
            </>
          ) : (
            <>
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h1 className="text-2xl font-bold tracking-wide mb-2">Sorry, Payment failed</h1>
              <p className="text-neutral-500 mb-6">Unfortunately, your order Cannot Be Completed.</p>

              <div className="bg-neutral-50 p-4 rounded-sm mb-6 text-sm text-left">
                <p className="text-neutral-500">Please ensure that the billing address you provided is the same one where your debit/credit card is registered.</p>
                <p className="text-neutral-500 mt-2">Alternatively, please try a different payment method.</p>
              </div>

              <button
                onClick={() => setStep(2)}
                className="w-full bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-[0.2em] py-3.5 hover:bg-neutral-800 transition-colors rounded-sm mb-3"
              >
                Pay Now
              </button>
              <button
                onClick={handleBackToOrders}
                className="w-full border border-neutral-300 text-neutral-600 text-xs font-bold uppercase tracking-[0.2em] py-3.5 hover:bg-neutral-50 transition-colors rounded-sm"
              >
                Back to My Orders
              </button>
            </>
          )}
        </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="w-full bg-[#FCFAF7] text-[#1C1C1C] font-sans antialiased">
      <Navbar
        cartCount={cartCount}
        wishlist={wishlist}
        triggerToast={triggerToast}
      />
      {/* Hero Section */}
      <div className="relative w-full aspect-[16/10] min-h-[250px] bg-neutral-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1441984904996-e0b6bbc8abf7?auto=format&fit=crop&w=1920&q=80"
          alt="Checkout"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Checkout
          </h1>
        </div>
      </div>
      <div className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-2xl font-bold tracking-wide mb-8">Checkout</h1>

        {/* Progress Steps */}
        <div className="flex items-center mb-8">
          <div className={`flex items-center ${step >= 1 ? 'text-[#5D6E56]' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= 1 ? 'bg-[#5D6E56] text-white' : 'bg-neutral-200'}`}>1</div>
            <span className="ml-2 text-sm">Info</span>
          </div>
          <div className="flex-1 h-px bg-neutral-200 mx-4"></div>
          <div className={`flex items-center ${step >= 2 ? 'text-[#5D6E56]' : 'text-neutral-400'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ${step >= 2 ? 'bg-[#5D6E56] text-white' : 'bg-neutral-200'}`}>2</div>
            <span className="ml-2 text-sm">Payment</span>
          </div>
        </div>

        {step === 1 && (
          <form onSubmit={handleContactSubmit} className="space-y-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-sm font-bold tracking-wide mb-4">Contact Information</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-neutral-500 mb-1">First Name</label>
                  <input
                    type="text"
                    value={contactInfo.firstName}
                    onChange={(e) => setContactInfo({ ...contactInfo, firstName: e.target.value })}
                    className="w-full border border-neutral-200 p-3 text-sm focus:outline-none focus:border-[#5D6E56]"
                    placeholder="First Name"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 mb-1">Last Name</label>
                  <input
                    type="text"
                    value={contactInfo.lastName}
                    onChange={(e) => setContactInfo({ ...contactInfo, lastName: e.target.value })}
                    className="w-full border border-neutral-200 p-3 text-sm focus:outline-none focus:border-[#5D6E56]"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs text-neutral-500 mb-1">Email</label>
                <input
                  type="email"
                  value={contactInfo.email}
                  onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                  className="w-full border border-neutral-200 p-3 text-sm focus:outline-none focus:border-[#5D6E56]"
                  placeholder="email@example.com"
                />
              </div>
              <div className="mt-4">
                <label className="block text-xs text-neutral-500 mb-1">Phone Number</label>
                <input
                  type="tel"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                  className="w-full border border-neutral-200 p-3 text-sm focus:outline-none focus:border-[#5D6E56]"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div>
              <h2 className="text-sm font-bold tracking-wide mb-4">Shipping Address</h2>
              <div className="mt-4">
                <label className="block text-xs text-neutral-500 mb-1">Address</label>
                <input
                  type="text"
                  value={shippingAddress.address}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                  className="w-full border border-neutral-200 p-3 text-sm focus:outline-none focus:border-[#5D6E56]"
                  placeholder="Street Address"
                />
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label className="block text-xs text-neutral-500 mb-1">City</label>
                  <input
                    type="text"
                    value={shippingAddress.city}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                    className="w-full border border-neutral-200 p-3 text-sm focus:outline-none focus:border-[#5D6E56]"
                    placeholder="City"
                  />
                </div>
                <div>
                  <label className="block text-xs text-neutral-500 mb-1">State</label>
                  <input
                    type="text"
                    value={shippingAddress.state}
                    onChange={(e) => setShippingAddress({ ...shippingAddress, state: e.target.value })}
                    className="w-full border border-neutral-200 p-3 text-sm focus:outline-none focus:border-[#5D6E56]"
                    placeholder="State"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-xs text-neutral-500 mb-1">ZIP Code</label>
                <input
                  type="text"
                  value={shippingAddress.zip}
                  onChange={(e) => setShippingAddress({ ...shippingAddress, zip: e.target.value })}
                  className="w-full border border-neutral-200 p-3 text-sm focus:outline-none focus:border-[#5D6E56]"
                  placeholder="00000"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-[0.2em] py-3.5 hover:bg-neutral-800 transition-colors rounded-sm"
            >
              Continue to Payment
            </button>
          </form>
        )}

        {step === 2 && (
          <div className="space-y-8">
            {/* Order Summary */}
            <div>
              <h2 className="text-sm font-bold tracking-wide mb-4">Order Summary</h2>
              <div className="bg-neutral-50 p-4 rounded-sm">
                {cart.map((item, index) => (
                  <div key={index} className="flex justify-between py-2 border-b border-neutral-100 last:border-0">
                    <span className="text-sm">{item.title}</span>
                    <span className="text-sm font-medium">{item.price}</span>
                  </div>
                ))}
                <div className="flex justify-between pt-4 mt-4 border-t border-neutral-200">
                  <span className="font-bold">Total</span>
                  <span className="font-bold">${calculateTotal().toFixed(2)}</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div>
              <h2 className="text-sm font-bold tracking-wide mb-4">Payment Method</h2>
              <div className="space-y-3">
                <label className={`flex items-center p-4 border rounded-sm cursor-pointer ${paymentMethod === 'card' ? 'border-[#5D6E56] bg-neutral-50' : 'border-neutral-200'}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={() => setPaymentMethod('card')}
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Credit/Debit Card</p>
                    <p className="text-xs text-neutral-500">Pay with Visa, Mastercard, Amex</p>
                  </div>
                </label>
                <label className={`flex items-center p-4 border rounded-sm cursor-pointer ${paymentMethod === 'paypal' ? 'border-[#5D6E56] bg-neutral-50' : 'border-neutral-200'}`}>
                  <input
                    type="radio"
                    name="payment"
                    value="paypal"
                    checked={paymentMethod === 'paypal'}
                    onChange={() => setPaymentMethod('paypal')}
                    className="mr-3"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">PayPal</p>
                    <p className="text-xs text-neutral-500">Pay with your PayPal account</p>
                  </div>
                </label>
              </div>

              {/* Card Details (if card selected) */}
              {paymentMethod === 'card' && (
                <div className="mt-4 space-y-4 p-4 bg-neutral-50 rounded-sm">
                  <div>
                    <label className="block text-xs text-neutral-500 mb-1">Card Number</label>
                    <input
                      type="text"
                      className="w-full border border-neutral-200 p-3 text-sm focus:outline-none focus:border-[#5D6E56]"
                      placeholder="1234 5678 9012 3456"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-neutral-500 mb-1">Expiry Date</label>
                      <input
                        type="text"
                        className="w-full border border-neutral-200 p-3 text-sm focus:outline-none focus:border-[#5D6E56]"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-neutral-500 mb-1">CVV</label>
                      <input
                        type="text"
                        className="w-full border border-neutral-200 p-3 text-sm focus:outline-none focus:border-[#5D6E56]"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={handlePayment}
              className="w-full bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-[0.2em] py-3.5 hover:bg-neutral-800 transition-colors rounded-sm"
            >
              Pay ${calculateTotal().toFixed(2)}
            </button>

            <button
              onClick={() => setStep(1)}
              className="w-full border border-neutral-300 text-neutral-600 text-xs font-bold uppercase tracking-[0.2em] py-3.5 hover:bg-neutral-50 transition-colors rounded-sm"
            >
              Back
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}