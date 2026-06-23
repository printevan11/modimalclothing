import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BRAND_GREEN = '#5D6E55';

export default function SignUp() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('register');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  const triggerToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !password) {
      triggerToast('Please complete all fields to sign up.', 'error');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      triggerToast(`Welcome to Modimal, ${firstName}! Your account is now active.`, 'success');
      setTimeout(() => navigate('/'), 800);
    }, 1500);
  };

  const handleSocialAuth = (provider) => {
    triggerToast(`Connecting to secure ${provider} authentication network...`, 'success');
  };

  return (
    <div className="w-full bg-[#FCFAF7] text-[#1C1C1C] font-sans antialiased">
      <Navbar />

      {/* Toast */}
      {toast.show && (
        <div className={`fixed top-6 right-6 z-50 max-w-sm p-4 rounded shadow-2xl transition-all duration-300 border text-xs font-semibold uppercase tracking-wider ${
          toast.type === 'success'
            ? 'bg-[#5D6E55] text-white border-emerald-600'
            : 'bg-red-800 text-white border-red-900'
        }`}>
          <div className="flex items-center gap-2.5">
            {toast.type === 'success' ? (
              <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            )}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Two Column Layout - Image Left, Form Right */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-0 py-12">
        {/* Left - Square Image */}
        <div className="aspect-square max-w-md mx-auto w-full bg-neutral-100">
          <img
            src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80"
            alt="Modimal Lifestyle"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right - Form Section */}
        <div className="flex items-center justify-center px-6 py-12">
          <div className="w-full max-w-md space-y-8">

            {/* VIEW A: REGISTER FORM */}
            {currentView === 'register' && (
              <div className="space-y-6">
                <div className="text-center">
                  <h1 className="text-3xl font-normal tracking-wide text-neutral-900 select-none">
                    Create Account
                  </h1>
                </div>

                <form onSubmit={handleRegisterSubmit} className="space-y-3.5">
                  {/* First Name */}
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-400 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                    />
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-400 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-400 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                    />
                  </div>

                  {/* Password */}
                  <div className="relative flex items-center">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 pr-12 border border-neutral-400 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-neutral-400 hover:text-neutral-700 focus:outline-none transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-4.5 h-4.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.6">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      ) : (
                        <svg className="w-4.5 h-4.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.6">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      style={{ backgroundColor: BRAND_GREEN }}
                      className="w-full text-white text-sm font-light tracking-[0.16em] py-3.5 shadow-sm active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <span>Register Now</span>
                      )}
                    </button>
                  </div>
                </form>

                {/* Login Link */}
                <div className="text-center pt-1.5 text-xs text-neutral-500 font-light tracking-wide">
                  <span>Already Have An Account?</span>
                  <button
                    type="button"
                    onClick={() => navigate('/login')}
                    className="text-neutral-600 hover:text-black font-semibold hover:underline transition-colors ml-1"
                  >
                    Log In
                  </button>
                </div>

                {/* Divider */}
                <div className="relative flex py-2 items-center justify-center select-none">
                  <div className="flex-grow border-t border-neutral-200"></div>
                  <span className="flex-shrink mx-4 text-xs text-neutral-400 font-light uppercase tracking-widest">Or</span>
                  <div className="flex-grow border-t border-neutral-200"></div>
                </div>

                {/* Social Login */}
                <div className="flex items-center justify-center gap-4">
                  <button onClick={() => handleSocialAuth('Apple')} className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-500 bg-black flex items-center justify-center text-white transition-all hover:scale-105">
                    <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94.1.08.2.12.3.12.87 0 1.96-.54 2.51-1.45z"/>
                    </svg>
                  </button>
                  <button onClick={() => handleSocialAuth('Google')} className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-500 bg-white flex items-center justify-center transition-all hover:scale-105 shadow-sm">
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.11-.3-.11-.53-.11-.82-.01.01-.01-.05-.08-.01z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </button>
                  <button onClick={() => handleSocialAuth('Facebook')} className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-500 bg-[#1877F2] flex items-center justify-center text-white transition-all hover:scale-105">
                    <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                </div>

              </div>
            )}

            {/* VIEW B: SUCCESS */}
            {currentView === 'success' && (
              <div className="space-y-6 text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#EBF0E9] text-[#5D6E55] mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2.5xl font-semibold tracking-wide text-neutral-900">
                  Account Ready!
                </h2>
                <p className="text-sm text-neutral-500 leading-relaxed max-w-sm mx-auto font-light">
                  Thank you for joining Modimal Club. Discover your customized elegant closet options today.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => navigate('/login')}
                    style={{ backgroundColor: BRAND_GREEN }}
                    className="text-white text-xs font-semibold uppercase tracking-widest px-6 py-3 transition-all"
                  >
                    Log In
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}