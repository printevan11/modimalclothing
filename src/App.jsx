import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import MainPage from './Components/MainPage'
import Footer from './Components/Footer'
import Collection from './pages/Collection'
import New from './pages/New'
import Plus from './pages/Plus'
import Mission from './pages/Mission'
import Materials from './pages/Materials'
import Modiweek from './pages/Modiweek'
import Login from './Forms/Login'
import SignUp from './Forms/SignUp'
import Search from './pages/Search'
import Shopping from './Components/Shopping'
import Wishlist from './pages/Wishlist'
import Checkout from './pages/Checkout'

export default function App() {
  // Shared state for filtering across Navbar and MainPage
  const [activeCategory, setActiveCategory] = useState('Shop All')
  const [activeFeatured, setActiveFeatured] = useState('')
  const [toastMessage, setToastMessage] = useState('')
  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('wishlist');
    return saved ? JSON.parse(saved) : [];
  })
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  })
  const [selectedProduct, setSelectedProduct] = useState(null)

  // Persist wishlist to localStorage
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Persist cart to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Filter functions
  const triggerToast = (msg) => {
    console.log('triggerToast called:', msg)
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3000)
  }

  const handleToggleWishlist = (id, name) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id))
      triggerToast(`Removed "${name}" from wishlist`)
    } else {
      setWishlist([...wishlist, id])
      triggerToast(`Added "${name}" to wishlist`)
    }
  }

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
    triggerToast(`Added "${product.title}" to bag`);
  };

  const handleRemoveFromCart = (index) => {
    const item = cart[index];
    setCart(cart.filter((_, i) => i !== index));
    triggerToast(`Removed "${item.title}" from bag`);
  };

  // Computed cart count
  const cartCount = cart.length;

  // Common page components
  const renderWithNav = (page, title) => (
    <>
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
          {toastMessage}
        </div>
      )}
      <Navbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeFeatured={activeFeatured}
        setActiveFeatured={setActiveFeatured}
        triggerToast={triggerToast}
        wishlist={wishlist}
        cartCount={cartCount}
      />
      {page}
      <Footer />
    </>
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            {/* Toast Notification */}
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}

            {/* Quick View Modal */}
            {selectedProduct && (
              <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
                <div className="bg-white max-w-2xl w-full p-6 md:p-8 relative grid grid-cols-1 md:grid-cols-2 gap-8 rounded-sm shadow-2xl">
                  <button
                    onClick={() => setSelectedProduct(null)}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-black text-lg font-light"
                    aria-label="Close"
                  >
                    ✕
                  </button>

                  <div className="aspect-[3/4] overflow-hidden bg-neutral-100 rounded-sm">
                    <img
                      src={selectedProduct.img}
                      alt={selectedProduct.title}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="space-y-4">
                      <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-bold block">
                        {selectedProduct.category}
                      </span>
                      <h3 className="text-xl font-semibold tracking-tight">{selectedProduct.title}</h3>
                      <p className="text-lg font-bold text-[#5D6E56]">{selectedProduct.price}</p>

                      <p className="text-xs text-neutral-500 leading-relaxed font-light">
                        {selectedProduct.details}
                      </p>

                      <div className="border-t border-neutral-100 pt-4 space-y-2 text-xs text-neutral-500 font-medium">
                        <p>Color: <span className="text-black font-semibold">{selectedProduct.color}</span></p>
                        <p>Available Sizes: <span className="text-black font-semibold">{selectedProduct.size}</span></p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        handleAddToCart(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="w-full bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-[0.2em] py-3.5 hover:bg-neutral-800 transition-colors rounded-sm"
                    >
                      Add To Bag
                    </button>
                  </div>
                </div>
              </div>
            )}

            <Navbar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeFeatured={activeFeatured}
              setActiveFeatured={setActiveFeatured}
              triggerToast={triggerToast}
              wishlist={wishlist}
              cartCount={cartCount}
            />
            <MainPage
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeFeatured={activeFeatured}
              setActiveFeatured={setActiveFeatured}
              triggerToast={triggerToast}
              wishlist={wishlist}
              setWishlist={setWishlist}
              cartCount={cartCount}
                            selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              handleToggleWishlist={handleToggleWishlist}
              handleAddToCart={handleAddToCart}
            />
            <Footer />
          </>
        } />
        <Route path="/collection" element={
          <>
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}
            <Navbar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeFeatured={activeFeatured}
              setActiveFeatured={setActiveFeatured}
              triggerToast={triggerToast}
              wishlist={wishlist}
              cartCount={cartCount}
            />
            <Collection
              wishlist={wishlist}
              setWishlist={setWishlist}
              triggerToast={triggerToast}
              selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              handleAddToCart={handleAddToCart}
            />
            <Footer />
          </>
        } />
        <Route path="/new" element={
          <>
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}
            <Navbar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeFeatured={activeFeatured}
              setActiveFeatured={setActiveFeatured}
              triggerToast={triggerToast}
              wishlist={wishlist}
              cartCount={cartCount}
            />
            <New
              wishlist={wishlist}
              setWishlist={setWishlist}
              triggerToast={triggerToast}
              cartCount={cartCount}
                            selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              handleAddToCart={handleAddToCart}
            />
            <Footer />
          </>
        } />
        <Route path="/modiweek" element={
          <>
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}
            <Navbar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeFeatured={activeFeatured}
              setActiveFeatured={setActiveFeatured}
              triggerToast={triggerToast}
              wishlist={wishlist}
              cartCount={cartCount}
            />
            <Modiweek
              wishlist={wishlist}
              setWishlist={setWishlist}
              triggerToast={triggerToast}
              cartCount={cartCount}
                            selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              handleAddToCart={handleAddToCart}
            />
            <Footer />
          </>
        } />
        <Route path="/plus-size" element={
          <>
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}
            <Navbar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeFeatured={activeFeatured}
              setActiveFeatured={setActiveFeatured}
              triggerToast={triggerToast}
              wishlist={wishlist}
              cartCount={cartCount}
            />
            <Plus
              wishlist={wishlist}
              setWishlist={setWishlist}
              triggerToast={triggerToast}
              cartCount={cartCount}
                            selectedProduct={selectedProduct}
              setSelectedProduct={setSelectedProduct}
              handleAddToCart={handleAddToCart}
            />
            <Footer />
          </>
        } />
        <Route path="/sustainability" element={
          <>
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}
            <Navbar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeFeatured={activeFeatured}
              setActiveFeatured={setActiveFeatured}
              triggerToast={triggerToast}
              wishlist={wishlist}
              cartCount={cartCount}
            />
            <Mission />
            <Footer />
          </>
        } />
        <Route path="/mission" element={
          <>
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}
            <Navbar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeFeatured={activeFeatured}
              setActiveFeatured={setActiveFeatured}
              triggerToast={triggerToast}
              wishlist={wishlist}
              cartCount={cartCount}
            />
            <Mission />
            <Footer />
          </>
        } />
        <Route path="/materials" element={
          <>
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}
            <Navbar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeFeatured={activeFeatured}
              setActiveFeatured={setActiveFeatured}
              triggerToast={triggerToast}
              wishlist={wishlist}
              cartCount={cartCount}
            />
            <Materials />
            <Footer />
          </>
        } />
        <Route path="/login" element={
          <>
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}
            <Login />
          </>
        } />
        <Route path="/signup" element={
          <>
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}
            <SignUp />
          </>
        } />
        <Route path="/search" element={
          <>
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}
            <Search />
          </>
        } />
        <Route path="/shopping" element={
          <>
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}
            <Navbar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeFeatured={activeFeatured}
              setActiveFeatured={setActiveFeatured}
              triggerToast={triggerToast}
              wishlist={wishlist}
              cartCount={cartCount}
            />
            <Shopping
              cart={cart}
              setCart={setCart}
              triggerToast={triggerToast}
            />
            <Footer />
          </>
        } />
        <Route path="/wishlist" element={
          <>
            {toastMessage && (
              <div className="fixed bottom-6 right-6 z-50 bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3.5 shadow-2xl rounded-sm transition-all duration-300">
                {toastMessage}
              </div>
            )}
            <Navbar
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              activeFeatured={activeFeatured}
              setActiveFeatured={setActiveFeatured}
              triggerToast={triggerToast}
              wishlist={wishlist}
              cartCount={cartCount}
            />
            <Wishlist wishlist={wishlist} setWishlist={setWishlist} triggerToast={triggerToast} />
            <Footer />
          </>
        } />
        <Route path="/checkout" element={
          <>
            <Checkout
              cart={cart}
              setCart={setCart}
              triggerToast={triggerToast}
              wishlist={wishlist}
              cartCount={cartCount}
            />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}