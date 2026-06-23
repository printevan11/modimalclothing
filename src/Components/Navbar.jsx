import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({
  activeCategory = 'Shop All',
  setActiveCategory = () => {},
  activeFeatured = '',
  setActiveFeatured = () => {},
  triggerToast = () => {},
  wishlist = [],
  cartCount = 0
}) {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');
  const [openMenu, setOpenMenu] = useState(null); // 'collection', 'newin', 'modiweek', 'plussize', 'sustainability', 'search', or null
  const [searchQuery, setSearchQuery] = useState('');
  const menuRef = useRef(null);

  const navItems = [
    { name: 'Collection', key: 'collection' },
    { name: 'New In', key: 'newin' },
    { name: 'Modiweek', key: 'modiweek' },
    { name: 'Plus Size', key: 'plussize' },
    { name: 'Sustainability', key: 'sustainability' }
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenMenu(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (item) => {
    setActiveItem(item.name);
    if (openMenu === item.key) {
      setOpenMenu(null);
    } else {
      setOpenMenu(item.key);
    }
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveFeatured('');
    setOpenMenu(null);
    navigate('/collection');
  };

  const handleFeaturedClick = (featured) => {
    setActiveFeatured(featured);
    setActiveCategory('Shop All');
    setOpenMenu(null);
    if (featured === 'New In') navigate('/new');
    else if (featured === 'Plus Size') navigate('/plus-size');
    else if (featured === 'Modiweek') navigate('/modiweek');
  };

  const categories = [
    'Shop All', 'Tops & Boluses', 'Tees', 'Pants',
    'Dresses & Jumpsuits', 'Jackets & Outwears', 'Pullovers', 'Shorts & Skirts'
  ];

  const featuredItems = ['New In', 'Modiweek', 'Plus Size', 'Best Seller'];
  const moreItems = ['Bundles', 'Occasion Wear', 'Matching Set', 'Suiting'];

  // Content for each menu
  const renderMenuContent = () => {
    if (!openMenu) return null;

    if (openMenu === 'collection') {
      return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 items-start">
          <div className="col-span-1 md:col-span-1 lg:col-span-3 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">Category</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              {categories.map((cat) => (
                <li key={cat}>
                  <button onClick={() => handleCategoryClick(cat)} className={`transition-colors text-left w-full hover:text-[#5D6E56] ${activeCategory === cat ? 'text-[#5D6E56] font-semibold translate-x-1.5' : 'font-light'}`}>
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2.5 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">Featured</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              {featuredItems.map((feat) => (
                <li key={feat}>
                  <button onClick={() => handleFeaturedClick(feat)} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">{feat}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2.5 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">More</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              {moreItems.map((more) => (
                <li key={more}><button onClick={() => setOpenMenu(null)} className="transition-colors font-light text-left w-full hover:text-[#5D6E56]">{more}</button></li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 group cursor-pointer" onClick={() => { handleCategoryClick('Tops & Boluses'); setOpenMenu(null); }}>
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative mb-2 shadow-xs">
              <img src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80" alt="Blouses" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-xs font-medium tracking-wider">Blouses</span>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 group cursor-pointer" onClick={() => { handleFeaturedClick('Plus Size'); setOpenMenu(null); }}>
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative mb-2 shadow-xs">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80" alt="Plus Size" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-xs font-medium tracking-wider">Plus Size</span>
          </div>
        </div>
      );
    }

    if (openMenu === 'newin') {
      return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 items-start">
          <div className="col-span-1 md:col-span-1 lg:col-span-3 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">Shop By</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              {categories.map((cat) => (
                <li key={cat}><button onClick={() => handleCategoryClick(cat)} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">{cat}</button></li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2.5 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">What's New</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              <li><button onClick={() => { setOpenMenu(null); navigate('/new'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] text-[#5D6E56] font-semibold">New Arrivals</button></li>
              <li><button onClick={() => { handleFeaturedClick('Best Seller'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Best Sellers</button></li>
              <li><button onClick={() => { handleFeaturedClick('Modiweek'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Modiweek Picks</button></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2.5 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">Collections</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              {moreItems.map((more) => (
                <li key={more}><button onClick={() => setOpenMenu(null)} className="transition-colors font-light text-left w-full hover:text-[#5D6E56]">{more}</button></li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 group cursor-pointer" onClick={() => { handleCategoryClick('Dresses & Jumpsuits'); setOpenMenu(null); }}>
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative mb-2 shadow-xs">
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80" alt="Dresses" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-xs font-medium tracking-wider">Dresses</span>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 group cursor-pointer" onClick={() => { handleCategoryClick('Tees'); setOpenMenu(null); }}>
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative mb-2 shadow-xs">
              <img src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80" alt="Tees" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-xs font-medium tracking-wider">Tees</span>
          </div>
        </div>
      );
    }

    if (openMenu === 'modiweek') {
      return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 items-start">
          <div className="col-span-1 md:col-span-1 lg:col-span-3 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">Modiweek Edit</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              <li><button onClick={() => { setActiveCategory('Tees'); setOpenMenu(null); navigate('/modiweek'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Everyday Tees</button></li>
              <li><button onClick={() => { setActiveCategory('Pullovers'); setOpenMenu(null); navigate('/modiweek'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Knitwear</button></li>
              <li><button onClick={() => { setActiveCategory('Pants'); setOpenMenu(null); navigate('/modiweek'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Trousers</button></li>
              <li><button onClick={() => { setActiveCategory('Jackets & Outwears'); setOpenMenu(null); navigate('/modiweek'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Outerwear</button></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2.5 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">Curated Looks</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              <li><button onClick={() => setOpenMenu(null)} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Fall Essentials</button></li>
              <li><button onClick={() => setOpenMenu(null)} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Weekend Wear</button></li>
              <li><button onClick={() => setOpenMenu(null)} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Office Edit</button></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2.5 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">Materials</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              <li><button onClick={() => setOpenMenu(null)} className="transition-colors font-light text-left w-full hover:text-[#5D6E56]">Organic Cotton</button></li>
              <li><button onClick={() => setOpenMenu(null)} className="transition-colors font-light text-left w-full hover:text-[#5D6E56]">Linen</button></li>
              <li><button onClick={() => setOpenMenu(null)} className="transition-colors font-light text-left w-full hover:text-[#5D6E56]">Cashmere</button></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 group cursor-pointer" onClick={() => { setOpenMenu(null); navigate('/modiweek'); }}>
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative mb-2 shadow-xs">
              <img src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&q=80" alt="Modiweek" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-xs font-medium tracking-wider">Shop All Modiweek</span>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 group cursor-pointer" onClick={() => { handleFeaturedClick('New In'); setOpenMenu(null); }}>
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative mb-2 shadow-xs">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80" alt="New In" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-xs font-medium tracking-wider">New In</span>
          </div>
        </div>
      );
    }

    if (openMenu === 'plussize') {
      return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 items-start">
          <div className="col-span-1 md:col-span-1 lg:col-span-3 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">Shop Plus Size</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              {categories.slice(1).map((cat) => (
                <li key={cat}><button onClick={() => { setActiveCategory(cat); setOpenMenu(null); navigate('/plus-size'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">{cat}</button></li>
              ))}
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2.5 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">Featured</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              <li><button onClick={() => { setOpenMenu(null); navigate('/plus-size'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] text-[#5D6E56] font-semibold">New Arrivals</button></li>
              <li><button onClick={() => { handleFeaturedClick('Best Seller'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Best Sellers</button></li>
              <li><button onClick={() => { handleFeaturedClick('Modiweek'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Modiweek Picks</button></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2.5 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">Size Guide</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              <li><button onClick={() => setOpenMenu(null)} className="transition-colors font-light text-left w-full hover:text-[#5D6E56]">Size Chart</button></li>
              <li><button onClick={() => setOpenMenu(null)} className="transition-colors font-light text-left w-full hover:text-[#5D6E56]">Fit Guide</button></li>
              <li><button onClick={() => setOpenMenu(null)} className="transition-colors font-light text-left w-full hover:text-[#5D6E56]">Bra Size Guide</button></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 group cursor-pointer" onClick={() => { setOpenMenu(null); navigate('/plus-size'); }}>
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative mb-2 shadow-xs">
              <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80" alt="Plus Size" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-xs font-medium tracking-wider">Shop Plus Size</span>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 group cursor-pointer" onClick={() => { setOpenMenu(null); navigate('/plus-size'); }}>
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative mb-2 shadow-xs">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80" alt="Dresses Plus" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-xs font-medium tracking-wider">Plus Dresses</span>
          </div>
        </div>
      );
    }

    if (openMenu === 'sustainability') {
      return (
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-8 items-start">
          <div className="col-span-1 md:col-span-1 lg:col-span-3 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">Mission & Materials</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              <li><button onClick={() => { setOpenMenu(null); navigate('/mission'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Mission</button></li>
              <li><button onClick={() => { setOpenMenu(null); navigate('/materials'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Materials</button></li>
              <li><button onClick={() => { setOpenMenu(null); navigate('/sustainability'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Production</button></li>
              <li><button onClick={() => { setOpenMenu(null); navigate('/sustainability'); }} className="transition-colors text-left w-full hover:text-[#5D6E56] font-light">Packaging</button></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-3 space-y-5">
            <h3 className="text-xs font-bold text-neutral-400 uppercase tracking-[0.25em] pb-1 border-b border-neutral-100">Impact</h3>
            <ul className="space-y-3 font-medium text-sm text-neutral-800">
              <li><button onClick={() => setOpenMenu(null)} className="transition-colors font-light text-left w-full hover:text-[#5D6E56]">Water Savings</button></li>
              <li><button onClick={() => setOpenMenu(null)} className="transition-colors font-light text-left w-full hover:text-[#5D6E56]">Carbon Footprint</button></li>
              <li><button onClick={() => setOpenMenu(null)} className="transition-colors font-light text-left w-full hover:text-[#5D6E56]">Recycling Program</button></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 group cursor-pointer" onClick={() => { setOpenMenu(null); navigate('/mission'); }}>
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative mb-2 shadow-xs">
              <img src="https://images.unsplash.com/photo-1594144405313-e90e243aee00?auto=format&fit=crop&w=600&q=80" alt="Mission" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-xs font-medium tracking-wider">Our Mission</span>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 group cursor-pointer" onClick={() => { setOpenMenu(null); navigate('/materials'); }}>
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative mb-2 shadow-xs">
              <img src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80" alt="Materials" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-xs font-medium tracking-wider">Materials</span>
          </div>
          <div className="col-span-1 md:col-span-1 lg:col-span-2 group cursor-pointer" onClick={() => { setActiveCategory('Tees'); setOpenMenu(null); navigate('/collection'); }}>
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 relative mb-2 shadow-xs">
              <img src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80" alt="Organic" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <span className="text-xs font-medium tracking-wider">Organic Basics</span>
          </div>
        </div>
      );
    }

    if (openMenu === 'search') {
      return (
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for products..."
              className="w-full px-4 py-3 text-sm border border-neutral-200 focus:border-[#5D6E56] focus:outline-none"
              autoFocus
              onKeyDown={(e) => { if (e.key === 'Enter' && searchQuery.trim()) { setOpenMenu(null); navigate('/search'); } }}
            />
            <button
              onClick={() => { setOpenMenu(null); setSearchQuery(''); }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-[#5D6E56]"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          {searchQuery && (
            <div className="mt-4 space-y-2">
              <p className="text-xs text-neutral-400 uppercase tracking-wider">Search Results for "{searchQuery}"</p>
              <div className="flex flex-col space-y-2">
                <button onClick={() => { setActiveCategory('Tees'); setOpenMenu(null); setSearchQuery(''); navigate('/search'); }} className="text-left text-sm text-neutral-600 hover:text-[#5D6E56]">Tees matching "{searchQuery}"</button>
                <button onClick={() => { setActiveCategory('Dresses & Jumpsuits'); setOpenMenu(null); setSearchQuery(''); navigate('/search'); }} className="text-left text-sm text-neutral-600 hover:text-[#5D6E56]">Dresses matching "{searchQuery}"</button>
                <button onClick={() => { setActiveCategory('Pants'); setOpenMenu(null); setSearchQuery(''); navigate('/search'); }} className="text-left text-sm text-neutral-600 hover:text-[#5D6E56]">Pants matching "{searchQuery}"</button>
                <button onClick={() => { setActiveCategory('Tops & Boluses'); setOpenMenu(null); setSearchQuery(''); navigate('/search'); }} className="text-left text-sm text-neutral-600 hover:text-[#5D6E56]">Tops matching "{searchQuery}"</button>
              </div>
            </div>
          )}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button onClick={() => { setActiveCategory('Tees'); setOpenMenu(null); setSearchQuery(''); navigate('/search'); }} className="text-center p-4 bg-neutral-50 cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=200&q=80" alt="Tees" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform" />
              <span className="text-xs font-medium mt-2 block">Tees</span>
            </button>
            <button onClick={() => { setActiveCategory('Dresses & Jumpsuits'); setOpenMenu(null); setSearchQuery(''); navigate('/search'); }} className="text-center p-4 bg-neutral-50 cursor-pointer group">
              <img src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=200&q=80" alt="Dresses" className="w-full aspect-square object-cover group-hover:scale-105 transition-transform" />
              <span className="text-xs font-medium mt-2 block">Dresses</span>
            </button>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="w-full bg-neutral-900 font-sans antialiased relative">
      <div className="w-full mx-auto">
        <div className="w-full bg-white">
          <div className="bg-[#5D6E56] w-full py-2.5 px-4 text-center select-none">
            <p className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.22em] text-white">Enjoy Free Shipping On All Orders</p>
          </div>

          <nav className="relative w-full bg-white px-6 md:px-10 py-5 flex items-center justify-between border-b border-neutral-100">
            <div className="flex items-center select-none cursor-pointer" onClick={() => { setActiveCategory('Shop All'); setActiveFeatured(''); setOpenMenu(null); navigate('/'); }}>
              <div className="flex flex-col items-start leading-none">
                <div className="flex items-center gap-1">
                  <span className="text-2xl md:text-2.5xl font-bold tracking-tight text-[#1c1c1c] font-sans lowercase">modimal</span>
                  <div className="w-[15px] h-[15px] rounded-full bg-[#5D6E56] flex items-center justify-center text-white shrink-0 mb-0.5">
                    <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M12 3c-4.5 0-8 3.5-8 8s8 10 8 10 8-5.5 8-10-3.5-8-8-8z" />
                    </svg>
                  </div>
                </div>
                <span className="text-[8px] md:text-[9px] font-medium tracking-[0.18em] text-neutral-500 uppercase mt-1 pl-0.5 whitespace-nowrap">women clothing</span>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-8 xl:gap-10">
              {navItems.map((item) => (
                <button key={item.key} onClick={() => handleNavClick(item)} className={`text-[14.5px] font-medium transition-colors duration-150 relative ${activeItem === item.name ? 'text-[#5D6E56] font-semibold' : 'text-neutral-700 hover:text-[#5D6E56]'}`}>
                  {item.name}
                  <span className={`absolute -bottom-1 left-0 transition-all duration-200 ${openMenu === item.key ? 'w-full h-0.5 bg-[#5D6E56]' : 'w-0 h-0'}`} />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 md:gap-5 select-none">
              <button onClick={() => navigate('/search')} className="text-neutral-800 hover:text-[#5D6E56] transition-colors focus:outline-none p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </button>
              <button onClick={() => { setOpenMenu(null); navigate('/login'); }} className="text-neutral-800 hover:text-[#5D6E56] transition-colors focus:outline-none p-1">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              </button>
              <button onClick={() => navigate('/wishlist')} className="text-neutral-800 hover:text-[#5D6E56] transition-colors focus:outline-none p-1 relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                {wishlist.length > 0 && <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{wishlist.length}</span>}
              </button>
              <button onClick={() => navigate('/shopping')} className="text-neutral-800 hover:text-[#5D6E56] transition-colors focus:outline-none p-1 relative">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                {cartCount > 0 && <span className="absolute -top-1 -right-1 bg-[#5D6E56] text-white text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold">{cartCount}</span>}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-1 text-neutral-800 hover:text-[#5D6E56]" aria-label="Toggle Menu">
                {mobileMenuOpen ? <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>}
              </button>
            </div>
          </nav>

          <div ref={menuRef} className={`w-full bg-white shadow-xl border-b border-neutral-100 transition-all duration-300 ease-out overflow-hidden ${openMenu ? 'max-h-[600px] opacity-100 py-10 px-6 md:px-12 lg:px-24' : 'max-h-0 opacity-0 pointer-events-none'}`}>
            {renderMenuContent()}
            <div className="w-full text-center mt-10 pt-4 border-t border-neutral-100 flex justify-center">
              <button onClick={() => setOpenMenu(null)} className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 hover:text-[#5D6E56] flex items-center gap-1">
                <span>Close Menu</span>
                <svg className="w-3.5 h-3.5 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="2.5"><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" /></svg>
              </button>
            </div>
          </div>

          <div className={`lg:hidden overflow-hidden transition-all duration-300 bg-neutral-50 border-t border-neutral-100 ${mobileMenuOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
            <div className="px-6 py-4 flex flex-col gap-3.5">
              {navItems.map((item) => (
                <button key={item.key} onClick={() => { handleNavClick(item); setMobileMenuOpen(false); }} className={`w-full text-left py-1 text-[15px] font-medium ${activeItem === item.name ? 'text-[#5D6E56] font-bold' : 'text-neutral-800 hover:text-[#5D6E56]'}`}>
                  {item.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}