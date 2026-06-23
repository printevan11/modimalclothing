import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Shopping({ cart = [], setCart = () => {}, triggerToast = () => {} }) {
  const navigate = useNavigate();
  // Calculate total
  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('$', ''));
      return total + price;
    }, 0);
  };

  const handleRemoveFromCart = (index) => {
    const item = cart[index];
    setCart(cart.filter((_, i) => i !== index));
    triggerToast(`Removed "${item.title}" from bag`);
  };

  return (
    <div className="w-full bg-[#FCFAF7] text-[#1C1C1C] font-sans antialiased">
      <div className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-normal tracking-wide mb-2">Shopping Bag</h1>
        <p className="text-sm text-neutral-400 mb-8">{cart.length} {cart.length === 1 ? 'item' : 'items'} in your bag</p>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <p className="text-neutral-500 mb-4">Your bag is empty</p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item, index) => (
                <div key={index} className="flex gap-6 border-b border-neutral-100 pb-6">
                  <div className="w-32 h-40 bg-neutral-100 overflow-hidden rounded-sm flex-shrink-0">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-sm font-bold text-[#1C1C1C] tracking-wide">{item.title}</h3>
                      <p className="text-xs text-neutral-500 font-medium">{item.category}</p>
                      <p className="text-xs text-neutral-500 mt-1">Color: {item.color}</p>
                      <p className="text-xs text-neutral-500">Size: {item.size}</p>
                    </div>
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-bold text-neutral-800">{item.price}</span>
                      <button
                        onClick={() => handleRemoveFromCart(index)}
                        className="text-xs text-neutral-400 hover:text-black transition-colors underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-neutral-50 p-6 rounded-sm">
                <h3 className="text-sm font-bold tracking-wide mb-4">Order Summary</h3>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-neutral-600">Subtotal</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-neutral-600">Shipping</span>
                  <span className="text-neutral-400">Calculated at checkout</span>
                </div>
                <div className="border-t border-neutral-200 pt-4 flex justify-between text-base font-bold mb-6">
                  <span>Total</span>
                  <span>${calculateTotal().toFixed(2)}</span>
                </div>
                <button onClick={() => navigate('/checkout')} className="w-full bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-[0.2em] py-3.5 hover:bg-neutral-800 transition-colors rounded-sm">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}