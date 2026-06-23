import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BRAND_GREEN = '#5D6E55'; // Modimal olive green theme

export default function App() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('login'); // 'login' | 'register' | 'forgot'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [feedback, setFeedback] = useState({ show: false, message: '', type: 'success' });

  // Custom function to show inline feedback alerts
  const showFeedback = (message, type = 'success') => {
    setFeedback({ show: true, message, type });
    setTimeout(() => {
      setFeedback({ show: false, message: '', type: 'success' });
    }, 4500);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      showFeedback('Please fill in both your Email and Password.', 'error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showFeedback(`Successfully logged in as ${email}! Welcome back to Modimal.`, 'success');
      setTimeout(() => navigate('/'), 800);
    }, 1200);
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      showFeedback('Please fill in all the required signup fields.', 'error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showFeedback('Account created successfully! Please log in now.', 'success');
      setCurrentView('login');
    }, 1200);
  };

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      showFeedback('Please provide your registered Email Address.', 'error');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      showFeedback(`Reset instructions have been dispatched to: ${email}`, 'success');
      setCurrentView('login');
    }, 1200);
  };

  return (
    <div className="w-full bg-[#FCFAF7] text-[#1C1C1C] font-sans antialiased">
      <Navbar />

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
        {feedback.show && (
          <div className={`fixed top-6 right-6 z-50 max-w-sm p-4 rounded shadow-2xl transition-all duration-300 transform translate-y-0 border text-xs font-semibold uppercase tracking-wider ${
            feedback.type === 'success'
              ? 'bg-[#5D6E56] text-white'
              : 'bg-red-800 text-white'
          }`}>
            <div className="flex items-center gap-2.5">
              {feedback.type === 'success' ? (
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              )}
              <span>{feedback.message}</span>
            </div>
          </div>
        )}

        <div className="w-full max-w-md space-y-8 pt-8">
            
            {/* VIEW A: LOG IN VIEW */}
            {currentView === 'login' && (
              <div className="space-y-6">
                
                {/* Heading */}
                <div className="text-center">
                  <h1 className="text-3xl font-normal tracking-wide text-neutral-900 select-none">
                    Log In
                  </h1>
                </div>

                {/* Form fields mirroring the thin-bordered inputs in image_c5f7c5.jpg */}
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  
                  {/* Email Input */}
                  <div className="relative">
                    <input 
                      type="email"
                      required
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 border border-neutral-400 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                    />
                  </div>

                  {/* Password Input with interactive visibility toggle button */}
                  <div className="relative flex items-center">
                    <input 
                      type={showPassword ? 'text' : 'password'}
                      required
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3.5 pr-12 border border-neutral-400 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-neutral-500 hover:text-neutral-800 focus:outline-none transition-colors"
                      title={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? (
                        /* Open Eye Icon */
                        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                          <circle cx="12" cy="12" r="3" />
                        </svg>
                      ) : (
                        /* Slash Eye Icon matching image_c5f7c5.jpg directly */
                        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                          <line x1="1" y1="1" x2="23" y2="23" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Forgot Password trigger link */}
                  <div className="text-left pt-1">
                    <button 
                      type="button"
                      onClick={() => { setCurrentView('forgot'); setFeedback({ show: false, message: '', type: 'success' }); }}
                      className="text-xs text-neutral-500 hover:text-[#5D6E55] transition-colors font-light tracking-wider"
                    >
                      Forgot Your Password?
                    </button>
                  </div>

                  {/* Primary Olive Submit Button */}
                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={loading}
                      style={{ backgroundColor: BRAND_GREEN }}
                      className="w-full text-white text-sm font-light tracking-[0.18em] py-4 uppercase shadow-sm hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <span>Log In</span>
                      )}
                    </button>
                  </div>

                </form>

                {/* Divider Line */}
                <div className="relative flex py-2 items-center justify-center select-none">
                  <div className="flex-grow border-t border-neutral-200"></div>
                  <span className="flex-shrink mx-4 text-xs text-neutral-500 font-light tracking-widest uppercase">Or</span>
                  <div className="flex-grow border-t border-neutral-200"></div>
                </div>

                {/* Social Login Options exactly mirroring the Apple, Google, Facebook layout */}
                <div className="flex items-center justify-center gap-5">
                  
                  {/* Apple Authentication Button */}
                  <button 
                    onClick={() => triggerSocialAuth('Apple')}
                    className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-500 bg-black flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
                    title="Sign in with Apple"
                  >
                    <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-.96.04-2.13.64-2.82 1.45-.6.69-1.12 1.83-.98 2.94.1.08.2.12.3.12.87 0 1.96-.54 2.51-1.45z"/>
                    </svg>
                  </button>

                  {/* Google Authentication Button */}
                  <button 
                    onClick={() => triggerSocialAuth('Google')}
                    className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-500 bg-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-sm"
                    title="Sign in with Google"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.11-.3-.11-.53-.11-.82-.01.01-.01-.05-.08-.01z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                    </svg>
                  </button>

                  {/* Facebook Authentication Button */}
                  <button 
                    onClick={() => triggerSocialAuth('Facebook')}
                    className="w-10 h-10 rounded-full border border-neutral-300 hover:border-neutral-500 bg-[#1877F2] flex items-center justify-center text-white transition-all hover:scale-105 active:scale-95"
                    title="Sign in with Facebook"
                  >
                    <svg className="w-5.5 h-5.5 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>

                </div>

                {/* Footer Switcher Label matching image_c5f7c5.jpg spacing */}
                <div className="text-center pt-4">
                  <p className="text-xs text-neutral-500 font-light tracking-wide">
                    New To Modimal?{' '}
                    <button
                      type="button"
                      onClick={() => navigate('/signup')}
                      className="text-neutral-500 hover:text-black font-normal underline underline-offset-4 transition-colors"
                    >
                      Create An Account
                    </button>
                  </p>
                </div>

              </div>
            )}

            {/* VIEW B: CREATE ACCOUNT VIEW */}
            {currentView === 'register' && (
              <div className="space-y-6">
                
                <div className="text-center">
                  <h1 className="text-3xl font-normal tracking-wide text-neutral-900 select-none">
                    Create Account
                  </h1>
                  <p className="text-xs text-neutral-400 font-light mt-1.5 tracking-wider uppercase">Join Modimal Club</p>
                </div>

                <form onSubmit={handleRegisterSubmit} className="space-y-4">
                  
                  {/* Full Name */}
                  <div className="relative">
                    <input 
                      type="text"
                      required
                      placeholder="Full Name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full px-4 py-3.5 border border-neutral-400 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <input 
                      type="email"
                      required
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 border border-neutral-400 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
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
                      className="w-full px-4 py-3.5 pr-12 border border-neutral-400 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                    />
                    <button 
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 text-neutral-500 hover:text-neutral-800 focus:outline-none transition-colors"
                    >
                      {showPassword ? (
                        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="1.6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 5.656m0 0a4 4 0 015.656-5.656m-5.656 5.656L3 3m1.414-1.414L21 21" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Marketing terms tickbox matching footer styling */}
                  <label className="flex items-start gap-3 pt-1 select-none cursor-pointer">
                    <input 
                      type="checkbox"
                      required
                      className="mt-1 w-4 h-4 rounded border-neutral-400 bg-transparent text-[#5D6E55] focus:ring-0 focus:outline-none cursor-pointer"
                    />
                    <span className="text-[11px] text-neutral-400 leading-normal font-light">
                      I agree to receive organic trends updates, promotions, and new arrivals info via email.
                    </span>
                  </label>

                  {/* Register Submit */}
                  <div className="pt-2">
                    <button 
                      type="submit"
                      disabled={loading}
                      style={{ backgroundColor: BRAND_GREEN }}
                      className="w-full text-white text-sm font-light tracking-[0.18em] py-4 uppercase shadow-sm hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <span>Sign Up</span>
                      )}
                    </button>
                  </div>

                </form>

                {/* Back to Login Switcher */}
                <div className="text-center pt-2">
                  <button 
                    type="button" 
                    onClick={() => { setCurrentView('login'); setFeedback({ show: false, message: '', type: 'success' }); }}
                    className="text-xs text-neutral-500 hover:text-black font-light tracking-wider"
                  >
                    Already have an account? <span className="font-normal underline underline-offset-4">Log In</span>
                  </button>
                </div>

              </div>
            )}

            {/* VIEW C: FORGOT PASSWORD VIEW */}
            {currentView === 'forgot' && (
              <div className="space-y-6">
                
                <div className="text-center">
                  <h1 className="text-3xl font-normal tracking-wide text-neutral-900 select-none">
                    Reset Password
                  </h1>
                  <p className="text-xs text-neutral-400 font-light mt-1.5 tracking-wider leading-relaxed">
                    Provide your email address below, and we'll send you dynamic links to securely reset your credentials.
                  </p>
                </div>

                <form onSubmit={handleForgotPasswordSubmit} className="space-y-5">
                  
                  {/* Email */}
                  <div className="relative">
                    <input 
                      type="email"
                      required
                      placeholder="Enter Your Registered Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3.5 border border-neutral-400 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                    />
                  </div>

                  {/* Submit Reset */}
                  <div>
                    <button 
                      type="submit"
                      disabled={loading}
                      style={{ backgroundColor: BRAND_GREEN }}
                      className="w-full text-white text-sm font-light tracking-[0.18em] py-4 uppercase shadow-sm hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <span>Send Instructions</span>
                      )}
                    </button>
                  </div>

                </form>

                {/* Back to Login */}
                <div className="text-center pt-2">
                  <button 
                    type="button" 
                    onClick={() => { setCurrentView('login'); setFeedback({ show: false, message: '', type: 'success' }); }}
                    className="text-xs text-neutral-500 hover:text-black font-light tracking-wider"
                  >
                    ← Back to <span className="font-normal underline underline-offset-4">Log In</span>
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

  // Helper trigger for showing simulated third party social sign ins
  function triggerSocialAuth(platform) {
    showFeedback(`Initializing secure ${platform} OAuth credentials framework...`, 'success');
  }
}