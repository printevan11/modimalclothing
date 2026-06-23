import React, { useState } from 'react';

export default function App() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && agreed) {
      alert(`Thank you for joining! 15% discount code sent to: ${email}`);
      setEmail('');
    }
  };

  return (
    <div className="w-full bg-[#1C1C1C] text-white flex flex-col justify-between font-sans antialiased min-h-[500px]">
      {/* Visual background wrapper to simulate the dark presentation canvas from image_baa1fc.png */}
      <div className="w-full bg-[#333333] px-6 py-16 md:px-12 lg:px-20 relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* LEFT COLUMN: Newsletter Sign Up & Socials */}
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-between space-y-10 lg:space-y-16">
            <div className="space-y-6">
              {/* Title with exact casing & typography weight */}
              <h2 className="text-lg md:text-xl font-semibold tracking-wide text-white/95">
                Join Our Club, Get 15% Off For Your Birthday
              </h2>
              
              {/* Email Input Form with thin border and clean transition */}
              <form onSubmit={handleSubmit} className="max-w-md space-y-4">
                <div className="relative border border-neutral-500/80 bg-transparent flex items-center transition-all focus-within:border-white">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                    className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 text-neutral-400 hover:text-white transition-colors"
                    aria-label="Submit Email"
                  >
                    {/* Exact Right Arrow Vector */}
                    <svg className="w-4 h-4 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>

                {/* Checkbox with Exact Verbatim Label Text (preserving the literal typo 'Submittng') */}
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-neutral-500 bg-transparent text-[#5D6E55] focus:ring-0 focus:ring-offset-0 focus:outline-none cursor-pointer"
                  />
                  <span className="text-[11px] text-neutral-400 leading-relaxed font-light">
                    By Submittng your email, you agree to receive advertising emails from Modimal.
                  </span>
                </label>
              </form>
            </div>

            {/* Social Icons (White vector shapes matching image_baa1fc.png) */}
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a href="#instagram" className="text-white hover:text-neutral-400 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>

              {/* Facebook */}
              <a href="#facebook" className="text-white hover:text-neutral-400 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              {/* Pinterest */}
              <a href="#pinterest" className="text-white hover:text-neutral-400 transition-colors" aria-label="Pinterest">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.906 2.17-2.906 1.024 0 1.517.769 1.517 1.689 0 1.029-.656 2.57-.996 3.996-.283 1.195.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.493 0-2.873-2.065-4.882-5.013-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.104.127.119.24.088.363-.097.4-.312 1.27-.354 1.442-.054.22-.18.267-.415.158-1.547-.72-2.512-2.987-2.512-4.814 0-3.921 2.85-7.522 8.216-7.522 4.312 0 7.663 3.073 7.663 7.18 0 4.283-2.699 7.732-6.446 7.732-1.258 0-2.443-.654-2.846-1.424l-.774 2.948c-.28 1.066-1.037 2.403-1.544 3.235C10.133 23.865 11.06 24 12.017 24c6.622 0 11.983-5.36 11.983-11.983C24 5.367 18.639 0 12.017 0z"/>
                </svg>
              </a>

              {/* TikTok */}
              <a href="#tiktok" className="text-white hover:text-neutral-400 transition-colors" aria-label="TikTok">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74a7.22 7.22 0 01-1.15-1.37v7.41c.05 3.72-2.5 7.13-6.15 7.72-3.79.74-7.72-1.48-8.87-5.18-1.28-3.77.67-8.15 4.43-9.37 1.15-.4 2.39-.46 3.56-.18v4.3a4.01 4.01 0 00-2.38.77c-1.34 1-1.8 2.91-1.02 4.43.71 1.51 2.52 2.41 4.17 2.09 1.62-.22 2.92-1.64 3.01-3.29V0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMNS: Clean structured Navigation Links */}
          <div className="col-span-12 lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* About Modimal */}
            <div className="space-y-5">
              <h3 className="text-sm font-bold tracking-wider text-white uppercase sm:normal-case sm:font-semibold">
                About Modimal
              </h3>
              <ul className="space-y-3.5 text-xs text-neutral-400">
                <li><a href="#collection" className="hover:text-white transition-colors">Collection</a></li>
                <li><a href="#sustainability" className="hover:text-white transition-colors">Sustainability</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#support" className="hover:text-white transition-colors">Support System</a></li>
                <li><a href="#terms" className="hover:text-white transition-colors">Terms & Condition</a></li>
                <li><a href="#copyright-notice" className="hover:text-white transition-colors">Copyright Notice</a></li>
              </ul>
            </div>

            {/* Help & Support */}
            <div className="space-y-5">
              <h3 className="text-sm font-bold tracking-wider text-white uppercase sm:normal-case sm:font-semibold">
                Help & Support
              </h3>
              <ul className="space-y-3.5 text-xs text-neutral-400">
                <li><a href="#orders" className="hover:text-white transition-colors">Orders & Shipping</a></li>
                <li><a href="#returns" className="hover:text-white transition-colors">Returns & Refunds</a></li>
                <li><a href="#faqs" className="hover:text-white transition-colors">FAQs</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>

            {/* Join Up */}
            <div className="space-y-5 col-span-2 sm:col-span-1">
              <h3 className="text-sm font-bold tracking-wider text-white uppercase sm:normal-case sm:font-semibold">
                Join Up
              </h3>
              <ul className="space-y-3.5 text-xs text-neutral-400">
                <li><a href="#club" className="hover:text-white transition-colors">Modimal Club</a></li>
                <li><a href="#careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#visit" className="hover:text-white transition-colors">Visit Us</a></li>
              </ul>
            </div>

          </div>

        </div>

        {/* BOTTOM METADATA BAR */}
        <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-neutral-700/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          {/* Copyright Tag */}
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span>©</span>
            <span>2023 Modimal. All Rights Reserved.</span>
          </div>

          {/* Brand Green Floating Chat/Help Badge on the bottom right */}
          <div className="relative group">
            <button
              onClick={() => alert("Connecting to Customer Support Support...")}
              className="bg-[#5D6E55] hover:bg-[#4d5b46] text-white border border-white/25 p-3 rounded-md shadow-lg flex items-center justify-center transition-all active:scale-95 duration-150"
              title="Customer Support"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.8"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}