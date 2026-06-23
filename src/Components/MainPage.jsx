import React, { useState, useEffect } from 'react';

export default function App({ wishlist = [], setWishlist = () => {}, triggerToast = () => {} }) {
  // Hero carousel state
  const [heroSlide, setHeroSlide] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Best Sellers color and favoriting states
  const [bestSellers, setBestSellers] = useState([
    {
      id: 'bs-1',
      title: 'Tailored Linen',
      subtitle: 'Soft Cozy Knit',
      price: '$110',
      activeColor: 'navy',
      favorited: false,
      colors: [
        { name: 'navy', hex: '#2B3E51', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80' },
        { name: 'black', hex: '#1C1C1C', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80' },
        { name: 'sage', hex: '#8F9B8B', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80' }
      ]
    },
    {
      id: 'bs-2',
      title: 'Timeless Linen',
      subtitle: 'Midi Knit Dress',
      price: '$130',
      activeColor: 'olive',
      favorited: false,
      colors: [
        { name: 'olive', hex: '#5D6E55', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80' },
        { name: 'teal', hex: '#3B7E8C', img: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=600&q=80' },
        { name: 'navy', hex: '#1C2833', img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80' }
      ]
    },
    {
      id: 'bs-3',
      title: 'Knit Dress',
      subtitle: 'Ribbed Slip Silhouette',
      price: '$95',
      activeColor: 'lavender',
      favorited: true,
      colors: [
        { name: 'lavender', hex: '#D1C4E9', img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&q=80' },
        { name: 'beige', hex: '#E1D5C6', img: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=600&q=80' },
        { name: 'sage', hex: '#A9B7A6', img: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&w=600&q=80' }
      ]
    }
  ]);

  // Modiweek items daily coordinate sets
  const [modiweekDays, setModiweekDays] = useState([
    { id: 'mon', day: 'Monday', label: 'Monday Outfits', favorited: false, img: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=600&q=80' },
    { id: 'tue', day: 'Tuesday', label: 'Tuesday Outfits', favorited: false, img: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80' },
    { id: 'wed', day: 'Wednesday', label: 'Wednesday Outfits', favorited: false, img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80' },
    { id: 'thu', day: 'Thursday', label: 'Thursday Outfits', favorited: true, img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&q=80' },
    { id: 'fri', day: 'Friday', label: 'Friday Outfits', favorited: false, img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80' }
  ]);

  // Handle color change for Best Sellers cards
  const handleColorSelect = (productId, colorName) => {
    setBestSellers(prev =>
      prev.map(item =>
        item.id === productId ? { ...item, activeColor: colorName } : item
      )
    );
  };

  // Toggle favorite flag - uses shared wishlist
  const toggleBestSellerFav = (productId, title) => {
    console.log('toggleBestSellerFav called', productId, title, wishlist);
    if (wishlist.includes(productId)) {
      setWishlist(wishlist.filter(id => id !== productId));
      triggerToast(`Removed "${title}" from wishlist`);
    } else {
      setWishlist([...wishlist, productId]);
      triggerToast(`Added "${title}" to wishlist`);
    }
  };

  const toggleModiweekFav = (dayId) => {
    setModiweekDays(prev =>
      prev.map(item =>
        item.id === dayId ? { ...item, favorited: !item.favorited } : item
      )
    );
  };

  return (
    <div className="w-full bg-[#FCFAF7] text-[#1C1C1C] font-sans antialiased">
      
      {}
      {/* --- HERO SECTION (CAROUSEL) --- */}
      <header className="relative w-full aspect-[16/10] md:aspect-[16/7.5] min-h-[460px] max-h-[850px] overflow-hidden">
        {/* Carousel Images */}
        {[
          { src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80", fallback: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80" },
          { src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1920&q=80", fallback: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1920&q=80" },
          { src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80", fallback: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1920&q=80" }
        ].map((img, idx) => (
          <div key={idx} className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${heroSlide === idx ? 'opacity-100' : 'opacity-0'}`}>
            <img
              src={img.src}
              alt={`Modimal Hero ${idx + 1}`}
              className="w-full h-full object-cover object-center"
              onError={(e) => { e.target.src = img.fallback; }}
            />
            <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
          </div>
        ))}

        {/* Carousel Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setHeroSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${heroSlide === idx ? 'bg-white w-6' : 'bg-white/40 hover:bg-white/70'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Floating Typography Branding */}
        <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-16 lg:px-24 z-10">
          <div className="max-w-md space-y-4">
            <h2 className="text-xl md:text-2xl font-serif italic text-white/95 tracking-wide leading-tight">
              Elegance in Simplicity,
            </h2>
            <h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight leading-none">
              Earth's Harmony
            </h1>
            <div className="pt-4">
              <button className="bg-white hover:bg-[#F9F6F0] text-[#1C1C1C] text-xs font-bold uppercase tracking-[0.2em] px-8 py-3.5 shadow-sm transition-all duration-200">
                Discover
              </button>
            </div>
          </div>
        </div>
      </header>

      {}
      {/* --- SECTION: BEST SELLERS --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="flex items-baseline justify-between mb-8">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#1C1C1C]">
            Best Sellers
          </h2>
          <button className="text-xs font-semibold uppercase tracking-widest text-neutral-500 hover:text-neutral-900 transition-colors">
            View all
          </button>
        </div>

        {/* 3-Column Best Sellers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {bestSellers.map((item) => {
            const currentVariant = item.colors.find(c => c.name === item.activeColor) || item.colors[0];

            return (
              <div key={item.id} className="group flex flex-col space-y-4">
                {/* Product Frame */}
                <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden rounded-sm shadow-sm">
                  <img
                    src={currentVariant.img}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Heart Icon Overlay */}
                  <button
                    onClick={() => toggleBestSellerFav(item.id, item.title)}
                    className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md transition-all active:scale-90 hover:bg-neutral-50"
                  >
                    <svg
                      className={`w-4 h-4 transition-colors pointer-events-none ${
                        wishlist.includes(item.id) ? 'fill-red-500 stroke-red-500' : 'stroke-neutral-600 fill-none'
                      }`}
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>

                {/* Info and Color Indicators */}
                <div className="flex flex-col space-y-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold text-[#1C1C1C] tracking-wide">
                        {item.title}
                      </h3>
                      <p className="text-xs text-neutral-500 font-medium">
                        {item.subtitle}
                      </p>
                    </div>
                    <span className="text-sm font-bold text-neutral-800">{item.price}</span>
                  </div>

                  {/* Dot Color Selectors */}
                  <div className="flex items-center gap-1.5 pt-1">
                    {item.colors.map((col) => (
                      <button
                        key={col.name}
                        onClick={() => handleColorSelect(item.id, col.name)}
                        style={{ backgroundColor: col.hex }}
                        className={`w-3.5 h-3.5 rounded-full border transition-all ${
                          item.activeColor === col.name
                            ? 'ring-1 ring-offset-2 ring-neutral-800 border-white'
                            : 'border-transparent'
                        }`}
                        title={col.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {}
      {/* --- SECTION: COLLECTION (Asymmetrical Visual Grid) --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-12 border-t border-neutral-100">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#1C1C1C] mb-8">
          Collection
        </h2>

        {/* 2-Column Nested Asymmetric Layout matching ba9a23.jpg */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Column Stack */}
          <div className="flex flex-col space-y-8">
            {/* Blouses (Landscape aspect-[4/3]) */}
            <div className="relative group aspect-[4/3] bg-neutral-100 overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80"
                alt="Close-up delicate necklace with white v-neck"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5"></div>
              {/* Overlay Button */}
              <div className="absolute bottom-6 right-6">
                <button className="bg-white hover:bg-[#F9F6F0] text-[#1C1C1C] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] px-8 py-3 shadow-md transition-all">
                  Blouses
                </button>
              </div>
            </div>

            {/* Dresses (Portrait aspect-[3/4]) */}
            <div className="relative group aspect-[3/4] bg-neutral-100 overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=800&q=80"
                alt="Model relaxed on leather lounge chair"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5"></div>
              <div className="absolute bottom-6 right-6">
                <button className="bg-white hover:bg-[#F9F6F0] text-[#1C1C1C] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] px-8 py-3 shadow-md transition-all">
                  Dresses
                </button>
              </div>
            </div>
          </div>

          {/* Right Column Stack */}
          <div className="flex flex-col space-y-8">
            {/* Pants (Tall portrait aspect-[3/4.5]) */}
            <div className="relative group aspect-[3/4.5] bg-neutral-100 overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=800&q=80"
                alt="Full body fit in olive trousers near bookcase"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5"></div>
              <div className="absolute bottom-6 right-6">
                <button className="bg-white hover:bg-[#F9F6F0] text-[#1C1C1C] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] px-8 py-3 shadow-md transition-all">
                  Pants
                </button>
              </div>
            </div>

            {/* Coats (Landscape aspect-[4/3]) */}
            <div className="relative group aspect-[4/3] bg-neutral-100 overflow-hidden shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
                alt="Close up of camel coat detailing"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/5"></div>
              <div className="absolute bottom-6 right-6">
                <button className="bg-white hover:bg-[#F9F6F0] text-[#1C1C1C] text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] px-8 py-3 shadow-md transition-all">
                  Coats
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {}
      {/* --- SECTION: MODIWEEK (Weekday Coordinate Sequence) --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-100">
        <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#1C1C1C] mb-8">
          Modiweek
        </h2>

        {/* 5-Column Horizontal Weekday Outfit Slider Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {modiweekDays.map((item) => (
            <div key={item.id} className="group flex flex-col space-y-3">
              <div className="relative aspect-[3/4.5] bg-neutral-100 overflow-hidden rounded-sm shadow-sm">
                <img
                  src={item.img}
                  alt={item.day}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Heart Button Overlay */}
                <button
                  onClick={() => toggleModiweekFav(item.id)}
                  className="absolute top-3.5 right-3.5 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md transition-all active:scale-90"
                >
                  <svg
                    className={`w-3.5 h-3.5 transition-colors ${
                      item.favorited ? 'fill-red-500 stroke-red-500' : 'stroke-neutral-600 fill-none'
                    }`}
                    viewBox="0 0 24 24"
                    strokeWidth="2.2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Day Label Underneath */}
              <div className="text-left">
                <span className="text-xs font-bold text-[#1C1C1C] tracking-wide block capitalize">
                  {item.day}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {}
      {/* --- SECTION: SUSTAINABILITY MIDDLE PARALLAX --- */}
      <section className="relative w-full aspect-[21/9] min-h-[220px] max-h-[460px] bg-neutral-100 overflow-hidden border-t border-b border-neutral-200/40">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=1920&q=80"
            alt="Organic natural cotton branch arrangement"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-neutral-900/5"></div>
        </div>

        {/* Content Box Overlaid right aligned */}
        <div className="absolute inset-0 flex items-center justify-end px-8 md:px-16 lg:px-24">
          <div className="max-w-md bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-sm shadow-sm space-y-3.5 text-right border border-neutral-100">
            <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#5D6E55]">
              Pure & Sustainable
            </p>
            <p className="text-xs md:text-sm text-neutral-600 font-medium leading-relaxed">
              Made with premium organic cotton and biodegradable sustainable fabrics for the earth and the future.
            </p>
            <div className="pt-2">
              <button className="bg-[#5D6E55] hover:bg-[#4d5b46] text-white text-[10px] font-bold uppercase tracking-[0.2em] px-6 py-2.5 shadow-sm transition-all">
                Sustainability
              </button>
            </div>
          </div>
        </div>
      </section>

      {}
      {/* --- SECTION: INSTAGRAM FOLLOW US FEED --- */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 py-16 border-t border-neutral-100">
        <div className="flex flex-col items-start mb-8 space-y-1">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight text-[#1C1C1C]">
            Follow Us @Modimal
          </h2>
          <p className="text-xs text-neutral-500 font-medium tracking-wide">
            Be inspired by minimalist organic trends
          </p>
        </div>

        {/* Layout: Large Left Profile image with a 2x2 grid on the right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Large Left Portrait Block */}
          <div className="relative aspect-[3/4.2] overflow-hidden rounded-sm shadow-sm bg-neutral-100 group">
            <img
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80"
              alt="Editorial split skirt model with handbag"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
              <span className="opacity-0 group-hover:opacity-100 text-white font-bold text-xs uppercase tracking-[0.25em] transition-all bg-black/60 px-4 py-2 rounded-sm backdrop-blur-[1px]">
                View Post
              </span>
            </div>
          </div>

          {/* Right 2x2 Small Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Small Post 1 */}
            <div className="relative aspect-square overflow-hidden rounded-sm shadow-sm bg-neutral-100 group">
              <img
                src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&q=80"
                alt="Model cycling through city"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-bold text-[10px] uppercase tracking-[0.25em] transition-all bg-black/60 px-3 py-1.5 rounded-sm">
                  View Post
                </span>
              </div>
            </div>

            {/* Small Post 2 */}
            <div className="relative aspect-square overflow-hidden rounded-sm shadow-sm bg-neutral-100 group">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80"
                alt="Minimalist blazer coordinate close-up"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-bold text-[10px] uppercase tracking-[0.25em] transition-all bg-black/60 px-3 py-1.5 rounded-sm">
                  View Post
                </span>
              </div>
            </div>

            {/* Small Post 3 */}
            <div className="relative aspect-square overflow-hidden rounded-sm shadow-sm bg-neutral-100 group">
              <img
                src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80"
                alt="B&W model walking outdoors"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-bold text-[10px] uppercase tracking-[0.25em] transition-all bg-black/60 px-3 py-1.5 rounded-sm">
                  View Post
                </span>
              </div>
            </div>

            {/* Small Post 4 */}
            <div className="relative aspect-square overflow-hidden rounded-sm shadow-sm bg-neutral-100 group">
              <img
                src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80"
                alt="Neutral knit blanket draping model portrait"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 text-white font-bold text-[10px] uppercase tracking-[0.25em] transition-all bg-black/60 px-3 py-1.5 rounded-sm">
                  View Post
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}