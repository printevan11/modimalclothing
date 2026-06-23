import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BRAND_GREEN = '#5D6E55';

export default function Account() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('profile'); // 'profile' | 'password' | 'orders'
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });

  // Mock user data
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@email.com',
    phone: '+63 912 345 6789',
    birthDate: '1995-06-15'
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const triggerToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    triggerToast('Profile updated successfully!', 'success');
  };

  const handleUpdatePassword = (e) => {
    e.preventDefault();
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      triggerToast('New passwords do not match.', 'error');
      return;
    }
    if (passwordData.newPassword.length < 6) {
      triggerToast('Password must be at least 6 characters.', 'error');
      return;
    }
    triggerToast('Password updated successfully!', 'success');
    setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
  };

  const handleLogout = () => {
    triggerToast('Logged out successfully!', 'success');
    setTimeout(() => navigate('/login'), 800);
  };

  return (
    <div className="w-full bg-[#FCFAF7] text-[#1C1C1C] font-sans antialiased">
      <Navbar />
      {/* Hero Section */}
      <div className="relative w-full aspect-[16/10] min-h-[250px] bg-neutral-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1618932260643-2a8938b75fcd?auto=format&fit=crop&w=1920&q=80"
          alt="My Account"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            My Account
          </h1>
        </div>
      </div>

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

      <div className="max-w-5xl mx-auto py-12 px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-normal tracking-wide text-neutral-900 select-none">
            My Account
          </h1>
          <p className="text-xs text-neutral-400 font-light mt-2 tracking-wider uppercase">
            Manage your account settings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-white border border-neutral-200 rounded-sm p-4">
              <nav className="space-y-1">
                <button
                  onClick={() => setCurrentView('profile')}
                  className={`w-full text-left px-4 py-3 text-sm font-light tracking-wide rounded-sm transition-colors ${
                    currentView === 'profile'
                      ? 'bg-[#5D6E55] text-white'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  Profile
                </button>
                <button
                  onClick={() => setCurrentView('password')}
                  className={`w-full text-left px-4 py-3 text-sm font-light tracking-wide rounded-sm transition-colors ${
                    currentView === 'password'
                      ? 'bg-[#5D6E55] text-white'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  Change Password
                </button>
                <button
                  onClick={() => setCurrentView('orders')}
                  className={`w-full text-left px-4 py-3 text-sm font-light tracking-wide rounded-sm transition-colors ${
                    currentView === 'orders'
                      ? 'bg-[#5D6E55] text-white'
                      : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900'
                  }`}
                >
                  My Orders
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-3 text-sm font-light tracking-wide rounded-sm transition-colors text-red-700 hover:bg-red-50"
                >
                  Log Out
                </button>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-white border border-neutral-200 rounded-sm p-6 md:p-8">
              {/* Profile View */}
              {currentView === 'profile' && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-normal tracking-wide text-neutral-900">
                      Profile Information
                    </h2>
                  </div>

                  <form onSubmit={handleUpdateProfile} className="space-y-4 max-w-md">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs text-neutral-500 font-light tracking-wide mb-2">
                          First Name
                        </label>
                        <input
                          type="text"
                          value={userData.firstName}
                          onChange={(e) => setUserData({ ...userData, firstName: e.target.value })}
                          className="w-full px-4 py-3 border border-neutral-300 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-neutral-500 font-light tracking-wide mb-2">
                          Last Name
                        </label>
                        <input
                          type="text"
                          value={userData.lastName}
                          onChange={(e) => setUserData({ ...userData, lastName: e.target.value })}
                          className="w-full px-4 py-3 border border-neutral-300 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-500 font-light tracking-wide mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={userData.email}
                        onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-500 font-light tracking-wide mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={userData.phone}
                        onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-500 font-light tracking-wide mb-2">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        value={userData.birthDate}
                        onChange={(e) => setUserData({ ...userData, birthDate: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        style={{ backgroundColor: BRAND_GREEN }}
                        className="w-full text-white text-sm font-light tracking-[0.16em] py-3.5 shadow-sm active:scale-[0.99] transition-all"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Password View */}
              {currentView === 'password' && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-normal tracking-wide text-neutral-900">
                      Change Password
                    </h2>
                  </div>

                  <form onSubmit={handleUpdatePassword} className="space-y-4 max-w-md">
                    <div>
                      <label className="block text-xs text-neutral-500 font-light tracking-wide mb-2">
                        Current Password
                      </label>
                      <input
                        type="password"
                        value={passwordData.currentPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, currentPassword: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-500 font-light tracking-wide mb-2">
                        New Password
                      </label>
                      <input
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs text-neutral-500 font-light tracking-wide mb-2">
                        Confirm New Password
                      </label>
                      <input
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                        className="w-full px-4 py-3 border border-neutral-300 focus:border-[#5D6E55] outline-none text-sm placeholder-neutral-400 font-light tracking-wide bg-transparent transition-colors"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        style={{ backgroundColor: BRAND_GREEN }}
                        className="w-full text-white text-sm font-light tracking-[0.16em] py-3.5 shadow-sm active:scale-[0.99] transition-all"
                      >
                        Update Password
                      </button>
                    </div>
                  </form>
                </div>
              )}

              {/* Orders View */}
              {currentView === 'orders' && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h2 className="text-xl font-normal tracking-wide text-neutral-900">
                      My Orders
                    </h2>
                  </div>

                  <div className="text-center text-neutral-400 py-12">
                    <svg className="w-16 h-16 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                    <p className="text-sm font-light tracking-wide">No orders yet</p>
                    <p className="text-xs mt-1">Start shopping to see your orders here</p>
                  </div>

                  <div className="text-center">
                    <button
                      onClick={() => navigate('/')}
                      style={{ backgroundColor: BRAND_GREEN }}
                      className="text-white text-xs font-light tracking-[0.16em] py-3.5 px-8 shadow-sm active:scale-[0.99] transition-all"
                    >
                      Shop Now
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}