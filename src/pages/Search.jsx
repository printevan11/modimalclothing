import React, { useState, useMemo } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const BRAND_OLIVE = '#7C927A'; // Muted organic green seen in image_c6e047.png
const BRAND_DARK_OLIVE = '#5C6E5A'; // Hover state depth color
const ACCENT_GREEN = '#5D6E55'; // Original Modimal primary green brand color

// High-fidelity curated mock dataset representation of luxury pants
const PANTS_COLLECTION = [
  {
    id: 'pants-1',
    title: 'Elastic Waist',
    subtitle: 'Turn It Up Pants',
    price: 110,
    category: 'Pants',
    fabric: 'Cotton',
    collection: 'Fall Collection',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Sky Blue', hex: '#8EBCD5', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80' },
      { name: 'Sage Olive', hex: '#7C927A', img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'pants-2',
    title: 'Tailored Stretch',
    subtitle: 'Turn It Up Pants',
    price: 150,
    category: 'Pants',
    fabric: 'Wool Blend',
    collection: 'Fall Collection',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Espresso Black', hex: '#1C1C1C', img: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'pants-3',
    title: 'Tailored Stretch',
    subtitle: 'Turn It Up Pants',
    price: 140,
    category: 'Pants',
    fabric: 'Linen',
    collection: 'Modiweek',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Black', hex: '#000000', img: 'https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=600&q=80' },
      { name: 'Crimson Red', hex: '#A93226', img: 'https://images.unsplash.com/photo-1509551388413-e18d0ac5d495?auto=format&fit=crop&w=600&q=80' },
      { name: 'Sage Green', hex: '#8F9B8B', img: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'pants-4',
    title: 'High Tillie',
    subtitle: 'Turn It Up Pants',
    price: 110,
    category: 'Pants',
    fabric: 'Linen',
    collection: 'New In',
    isNew: true,
    sizes: ['XS', 'S', 'M'],
    colors: [
      { name: 'Soft Dark Charcoal', hex: '#2C3539', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80' },
      { name: 'Mustard Gold', hex: '#B89B3C', img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80' },
      { name: 'Sage Green', hex: '#8F9B8B', img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'pants-5',
    title: 'Casual Wild Leg',
    subtitle: 'Turn It Up Pants',
    price: 130,
    category: 'Pants',
    fabric: 'Silk',
    collection: 'Modiweek',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: [
      { name: 'Ebony Black', hex: '#1C1C1C', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80' },
      { name: 'Muted Olive', hex: '#7E8B75', img: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'pants-6',
    title: 'Linen Wide Leg',
    subtitle: 'Turn It Up Pants',
    price: 180,
    category: 'Pants',
    fabric: 'Linen',
    collection: 'New In',
    sizes: ['M', 'L', 'XL'],
    colors: [
      { name: 'Classic Charcoal', hex: '#242526', img: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80' },
      { name: 'Lavender Mist', hex: '#D1C4E9', img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'pants-7',
    title: 'Pleated Minimalist Slacks',
    subtitle: 'Straight Leg Trousers',
    price: 165,
    category: 'Pants',
    fabric: 'Wool Blend',
    collection: 'Fall Collection',
    sizes: ['S', 'M', 'L'],
    colors: [
      { name: 'Camel Tan', hex: '#C19A6B', img: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'pants-8',
    title: 'Belted Organic Utility Cargo',
    subtitle: 'Turn It Up Pants',
    price: 145,
    category: 'Pants',
    fabric: 'Cotton',
    collection: 'Modiweek',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: [
      { name: 'Sage Green', hex: '#8F9B8B', img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80' },
      { name: 'Tan Sand', hex: '#D2B48C', img: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'pants-9',
    title: 'Raw Silk Pleated Culotte',
    subtitle: 'Summer Breeze Pants',
    price: 195,
    category: 'Pants',
    fabric: 'Silk',
    collection: 'New In',
    sizes: ['S', 'M'],
    colors: [
      { name: 'Lilac Dusk', hex: '#E0B0FF', img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&q=80' }
    ]
  },
  {
    id: 'pants-10',
    title: 'Tailored Evening Flannel',
    subtitle: 'Structured Winter Trousers',
    price: 210,
    category: 'Pants',
    fabric: 'Wool Blend',
    collection: 'Fall Collection',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Midnight Charcoal', hex: '#212121', img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80' }
    ]
  }
];

export default function App() {
  const [searchQuery, setSearchQuery] = useState('Pants');
  const [favorites, setFavorites] = useState(['pants-3']); // Preset favorite matching user experience
  const [selectedVariants, setSelectedVariants] = useState({}); // Stores selected color indexes { [productId]: colorIndex }
  const [toast, setToast] = useState({ show: false, message: '', type: 'success' });
  const [activeFilters, setActiveFilters] = useState({
    sort: 'default',
    size: [],
    color: [],
    collection: [],
    fabric: []
  });

  // State to manage which filter category accordion sections are currently expanded
  const [openAccordions, setOpenAccordions] = useState({
    sort: true,
    size: true,
    color: true,
    collection: true,
    fabric: true
  });

  // Quick view / Drawer item selection
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [chosenSize, setChosenSize] = useState('');

  const triggerToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast({ show: false, message: '', type: 'success' });
    }, 4000);
  };

  const toggleFavorite = (productId, title) => {
    setFavorites((prev) => {
      const isAlreadyFav = prev.includes(productId);
      if (isAlreadyFav) {
        triggerToast(`Removed "${title}" from your wishlist.`, 'info');
        return prev.filter((id) => id !== productId);
      } else {
        triggerToast(`Added "${title}" to your wishlist.`, 'success');
        return [...prev, productId];
      }
    });
  };

  const handleColorVariantSelect = (productId, index) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [productId]: index
    }));
  };

  const toggleFilterOption = (category, value) => {
    setActiveFilters((prev) => {
      const currentValues = prev[category];
      const newValues = currentValues.includes(value)
        ? currentValues.filter((v) => v !== value)
        : [...currentValues, value];
      return {
        ...prev,
        [category]: newValues
      };
    });
  };

  const toggleAccordion = (section) => {
    setOpenAccordions((prev) => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const resetAllFilters = () => {
    setActiveFilters({
      sort: 'default',
      size: [],
      color: [],
      collection: [],
      fabric: []
    });
    setSearchQuery('Pants');
    triggerToast('Filters and search parameter reset.', 'info');
  };

  const processedProducts = useMemo(() => {
    let result = [...PANTS_COLLECTION];

    // Filter by Query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.fabric.toLowerCase().includes(q) ||
          p.collection.toLowerCase().includes(q)
      );
    }

    // Filter by Fabric type
    if (activeFilters.fabric.length > 0) {
      result = result.filter((p) => activeFilters.fabric.includes(p.fabric));
    }

    // Filter by Collection segment
    if (activeFilters.collection.length > 0) {
      result = result.filter((p) => activeFilters.collection.includes(p.collection));
    }

    // Filter by Size values
    if (activeFilters.size.length > 0) {
      result = result.filter((p) =>
        p.sizes.some((sz) => activeFilters.size.includes(sz))
      );
    }

    // Filter by generic Color warmth / palettes
    if (activeFilters.color.length > 0) {
      result = result.filter((p) => {
        return p.colors.some((col) => {
          const hex = col.hex.toLowerCase();
          return activeFilters.color.some((filterColor) => {
            if (filterColor === 'Light') return ['#8ebcd5', '#d1c4e9', '#e0b0ff'].includes(hex);
            if (filterColor === 'Dark') return ['#1c1c1c', '#000000', '#2c3539', '#242526', '#212121'].includes(hex);
            if (filterColor === 'Muted') return ['#7c927a', '#8f9b8b', '#7e8b75', '#c19a6b', '#d2b48c', '#a93226', '#b89b3c'].includes(hex);
            return false;
          });
        });
      });
    }

    // Sorting execution
    if (activeFilters.sort === 'price-low') {
      result.sort((a, b) => a.price - b.price);
    } else if (activeFilters.sort === 'price-high') {
      result.sort((a, b) => b.price - a.price);
    } else if (activeFilters.sort === 'alphabetical') {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [searchQuery, activeFilters]);

  return (
    <div className="min-h-screen bg-white text-[#1C1C1C] font-sans antialiased relative">
      
      {/* Dynamic Toast Feedback Overlay */}
      {toast.show && (
        <div className={`fixed top-6 right-6 z-50 max-w-sm p-4 rounded shadow-2xl transition-all duration-300 border text-xs font-semibold uppercase tracking-wider ${
          toast.type === 'success' 
            ? 'bg-[#5D6E55] text-white border-emerald-600' 
            : toast.type === 'info' 
              ? 'bg-neutral-800 text-white border-neutral-700'
              : 'bg-red-800 text-white border-red-900'
        }`}>
          <div className="flex items-center gap-2.5">
            {toast.type === 'success' ? (
              <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-white flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 11.518 1.3l-.041.02a.75.75 0 01-.518-1.3zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
              </svg>
            )}
            <span>{toast.message}</span>
          </div>
        </div>
      )}

      {/* Quick View / Cart Drawer */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white max-w-xl w-full p-6 md:p-8 relative grid grid-cols-1 md:grid-cols-2 gap-6 rounded shadow-2xl animate-fade-in border border-neutral-100">
            <button 
              onClick={() => { setSelectedProduct(null); setChosenSize(''); }}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black text-lg font-light transition-colors"
            >
              ✕
            </button>
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 rounded-sm">
              <img 
                src={selectedProduct.colors[selectedVariants[selectedProduct.id] || 0]?.img} 
                alt={selectedProduct.title} 
                className="w-full h-full object-cover object-center" 
              />
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 font-semibold block">
                  {selectedProduct.fabric} Pants
                </span>
                <h3 className="text-xl font-bold tracking-tight text-neutral-900">{selectedProduct.title}</h3>
                <p className="text-sm font-semibold text-neutral-500">{selectedProduct.subtitle}</p>
                <p className="text-lg font-bold text-neutral-800">${selectedProduct.price}</p>
                
                <div className="border-t border-neutral-100 pt-3 space-y-3">
                  <p className="text-xs text-neutral-400 uppercase tracking-widest font-semibold">Select Size</p>
                  <div className="flex gap-2">
                    {selectedProduct.sizes.map((sz) => (
                      <button
                        key={sz}
                        onClick={() => setChosenSize(sz)}
                        className={`px-3 py-1.5 text-xs font-semibold border transition-all ${
                          chosenSize === sz 
                            ? 'border-black bg-black text-white' 
                            : 'border-neutral-300 hover:border-neutral-800'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <button 
                onClick={() => {
                  if (!chosenSize) {
                    triggerToast("Please choose a size first.", "error");
                    return;
                  }
                  triggerToast(`Successfully added "${selectedProduct.title}" (Size ${chosenSize}) to shopping bag!`, 'success');
                  setSelectedProduct(null);
                  setChosenSize('');
                }}
                style={{ backgroundColor: ACCENT_GREEN }}
                className="w-full text-white text-xs font-bold uppercase tracking-[0.2em] py-3.5 hover:opacity-90 transition-all shadow-sm"
              >
                Add To Bag
              </button>
            </div>
          </div>
        </div>
      )}

      <Navbar />

      {/* --- SEARCH COMPONENT (Mirroring image_c6e047.png) --- */}
      {/* High precision search box mimicking the layout precisely */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <div className="relative w-full border-b border-neutral-200 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3 w-full">
            {/* Search Icon */}
            <svg className="w-4 h-4 text-neutral-400 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            
            <input 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search Pants, Linen, Cotton..."
              className="w-full bg-transparent border-none outline-none text-neutral-800 placeholder-neutral-400 font-light text-sm tracking-wide"
            />
          </div>

          {/* Close clearing icon on the right */}
          {searchQuery && (
            <button 
              onClick={() => { setSearchQuery(''); triggerToast('Search cleared.', 'info'); }}
              className="text-neutral-400 hover:text-black transition-colors px-2"
              title="Clear search"
            >
              ✕
            </button>
          )}
        </div>

        {/* Real-time Dynamic Items Counter centered as shown in image_c6e047.png */}
        <div className="text-center py-6">
          <p className="text-neutral-500 text-xs tracking-[0.2em] font-medium uppercase select-none">
            {processedProducts.length} {processedProducts.length === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>

      {/* --- TWO COLUMN MAIN WORKSPACE (Left: Filters, Right: Product Grid) --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pb-24 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        
        {/* --- LEFT COL: FILTER ACCORDIONS PANEL --- */}
        <aside className="lg:col-span-3 space-y-6">
          <div className="flex items-baseline justify-between select-none">
            <h2 className="text-2xl font-bold tracking-tight text-neutral-900 font-sans">
              Filters
            </h2>
            <button 
              onClick={resetAllFilters}
              className="text-xs text-[#7C927A] hover:text-[#5C6E5A] font-semibold underline underline-offset-4 uppercase tracking-wider transition-colors"
            >
              Reset
            </button>
          </div>

          {/* ACCORDION 1: SORT BY */}
          <div className="border-b border-neutral-100 pb-3">
            <button 
              onClick={() => toggleAccordion('sort')}
              style={{ backgroundColor: BRAND_OLIVE }}
              className="w-full text-white text-xs font-bold uppercase tracking-widest px-4 py-3 flex items-center justify-between rounded-sm shadow-xs hover:opacity-95 transition-all"
            >
              <span>Sort By</span>
              <span>{openAccordions.sort ? '−' : '+'}</span>
            </button>

            {openAccordions.sort && (
              <div className="mt-3 px-2 space-y-2.5 animate-fade-in text-xs font-light tracking-wide text-neutral-600">
                {[
                  { label: 'Default View', value: 'default' },
                  { label: 'Price: Low to High', value: 'price-low' },
                  { label: 'Price: High to Low', value: 'price-high' },
                  { label: 'Alphabetical', value: 'alphabetical' }
                ].map((opt) => (
                  <label key={opt.value} className="flex items-center gap-2.5 cursor-pointer select-none py-0.5">
                    <input 
                      type="radio" 
                      name="sort-option" 
                      checked={activeFilters.sort === opt.value}
                      onChange={() => setActiveFilters(prev => ({ ...prev, sort: opt.value }))}
                      className="accent-[#7C927A] h-3.5 w-3.5 border-neutral-300"
                    />
                    <span className={activeFilters.sort === opt.value ? 'font-semibold text-neutral-900' : ''}>
                      {opt.label}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>

          {/* ACCORDION 2: SIZE */}
          <div className="border-b border-neutral-100 pb-3">
            <button 
              onClick={() => toggleAccordion('size')}
              style={{ backgroundColor: BRAND_OLIVE }}
              className="w-full text-white text-xs font-bold uppercase tracking-widest px-4 py-3 flex items-center justify-between rounded-sm shadow-xs hover:opacity-95 transition-all"
            >
              <span>Size</span>
              <span>{openAccordions.size ? '−' : '+'}</span>
            </button>

            {openAccordions.size && (
              <div className="mt-3 px-2 flex flex-wrap gap-2 animate-fade-in">
                {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((sz) => {
                  const isChecked = activeFilters.size.includes(sz);
                  return (
                    <button
                      key={sz}
                      onClick={() => toggleFilterOption('size', sz)}
                      className={`h-9 w-9 text-xs font-semibold border transition-all ${
                        isChecked 
                          ? 'border-black bg-black text-white' 
                          : 'border-neutral-200 text-neutral-600 hover:border-neutral-400 bg-transparent'
                      }`}
                    >
                      {sz}
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* ACCORDION 3: COLOR */}
          <div className="border-b border-neutral-100 pb-3">
            <button 
              onClick={() => toggleAccordion('color')}
              style={{ backgroundColor: BRAND_OLIVE }}
              className="w-full text-white text-xs font-bold uppercase tracking-widest px-4 py-3 flex items-center justify-between rounded-sm shadow-xs hover:opacity-95 transition-all"
            >
              <span>Color</span>
              <span>{openAccordions.color ? '−' : '+'}</span>
            </button>

            {openAccordions.color && (
              <div className="mt-3 px-2 space-y-2.5 animate-fade-in text-xs font-light tracking-wide text-neutral-600">
                {['Dark', 'Muted', 'Light'].map((col) => {
                  const isChecked = activeFilters.color.includes(col);
                  return (
                    <label key={col} className="flex items-center gap-2.5 cursor-pointer select-none py-0.5">
                      <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={() => toggleFilterOption('color', col)}
                        className="accent-[#7C927A] h-3.5 w-3.5 border-neutral-300 rounded-sm"
                      />
                      <span className={isChecked ? 'font-semibold text-neutral-900' : ''}>
                        {col} tones
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          {/* ACCORDION 4: COLLECTION */}
          <div className="border-b border-neutral-100 pb-3">
            <button 
              onClick={() => toggleAccordion('collection')}
              style={{ backgroundColor: BRAND_OLIVE }}
              className="w-full text-white text-xs font-bold uppercase tracking-widest px-4 py-3 flex items-center justify-between rounded-sm shadow-xs hover:opacity-95 transition-all"
            >
              <span>Collection</span>
              <span>{openAccordions.collection ? '−' : '+'}</span>
            </button>

            {openAccordions.collection && (
              <div className="mt-3 px-2 space-y-2.5 animate-fade-in text-xs font-light tracking-wide text-neutral-600">
                {['Fall Collection', 'Modiweek', 'New In'].map((col) => {
                  const isChecked = activeFilters.collection.includes(col);
                  return (
                    <label key={col} className="flex items-center gap-2.5 cursor-pointer select-none py-0.5">
                      <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={() => toggleFilterOption('collection', col)}
                        className="accent-[#7C927A] h-3.5 w-3.5 border-neutral-300 rounded-sm"
                      />
                      <span className={isChecked ? 'font-semibold text-neutral-900' : ''}>
                        {col}
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>

          {/* ACCORDION 5: FABRIC */}
          <div className="border-b border-neutral-100 pb-3">
            <button 
              onClick={() => toggleAccordion('fabric')}
              style={{ backgroundColor: BRAND_OLIVE }}
              className="w-full text-white text-xs font-bold uppercase tracking-widest px-4 py-3 flex items-center justify-between rounded-sm shadow-xs hover:opacity-95 transition-all"
            >
              <span>Fabric</span>
              <span>{openAccordions.fabric ? '−' : '+'}</span>
            </button>

            {openAccordions.fabric && (
              <div className="mt-3 px-2 space-y-2.5 animate-fade-in text-xs font-light tracking-wide text-neutral-600">
                {['Linen', 'Cotton', 'Wool Blend', 'Silk'].map((fab) => {
                  const isChecked = activeFilters.fabric.includes(fab);
                  return (
                    <label key={fab} className="flex items-center gap-2.5 cursor-pointer select-none py-0.5">
                      <input 
                        type="checkbox" 
                        checked={isChecked}
                        onChange={() => toggleFilterOption('fabric', fab)}
                        className="accent-[#7C927A] h-3.5 w-3.5 border-neutral-300 rounded-sm"
                      />
                      <span className={isChecked ? 'font-semibold text-neutral-900' : ''}>
                        {fab}
                      </span>
                    </label>
                  );
                })}
              </div>
            )}
          </div>
        </aside>

        {/* --- RIGHT COL: EDITORIAL MINIMAL CATALOG PRODUCTS GRID --- */}
        <main className="lg:col-span-9">
          
          {processedProducts.length === 0 ? (
            <div className="w-full py-20 text-center space-y-4 bg-[#FCFAF7] border border-neutral-100 rounded-sm p-8">
              <svg className="w-12 h-12 mx-auto text-neutral-300" fill="none" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="text-lg font-semibold text-neutral-800">No items match your active filters</h3>
              <p className="text-xs text-neutral-400 font-light max-w-sm mx-auto leading-relaxed">
                Try resetting filters or typing a different search phrase in the keyword field.
              </p>
              <button 
                onClick={resetAllFilters}
                style={{ backgroundColor: BRAND_OLIVE }}
                className="text-white text-xs font-bold uppercase tracking-widest px-6 py-2.5 shadow-sm hover:opacity-90"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-x-8 gap-y-12">
              {processedProducts.map((p) => {
                const isFavorite = favorites.includes(p.id);
                const activeColorIndex = selectedVariants[p.id] || 0;
                const currentVariant = p.colors[activeColorIndex] || p.colors[0];

                return (
                  <div key={p.id} className="group flex flex-col space-y-3 relative">
                    
                    {/* Visual Media Frame with Heart Badge Overlay */}
                    <div 
                      onClick={() => setSelectedProduct(p)}
                      className="relative aspect-[3/4] bg-[#F6F5F2] overflow-hidden rounded-sm shadow-xs cursor-pointer"
                    >
                      <img 
                        src={currentVariant.img} 
                        alt={`${p.title} - ${currentVariant.name}`}
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                        onError={(e) => {
                          e.target.src = "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80";
                        }}
                      />

                      {/* Top Corner New Tag Badge */}
                      {p.isNew && (
                        <span className="absolute top-4 left-4 bg-white/95 text-neutral-800 font-bold text-[9px] uppercase tracking-[0.25em] px-4 py-1.5 shadow-sm select-none">
                          New
                        </span>
                      )}

                      {/* Heart Wishlist Overlay Badge */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(p.id, p.title);
                        }}
                        className="absolute top-4 right-4 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-sm hover:bg-white active:scale-90 transition-all"
                        title={isFavorite ? "Remove from favorites" : "Save to favorites"}
                      >
                        <svg
                          className={`w-4 h-4 transition-colors ${
                            isFavorite ? 'fill-red-500 stroke-red-500' : 'stroke-neutral-600 fill-none'
                          }`}
                          viewBox="0 0 24 24"
                          strokeWidth="2.2"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>

                      {/* Gentle Hover Add to Bag Prompt bar */}
                      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-all duration-300">
                        <span className="w-full bg-white text-neutral-900 text-[10px] font-bold uppercase tracking-widest text-center py-2.5 block shadow-md select-none rounded-sm">
                          Quick View
                        </span>
                      </div>
                    </div>

                    {/* Metadata & pricing panel */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between items-start">
                        <div className="space-y-0.5">
                          <h4 className="text-sm font-bold tracking-wide text-neutral-900 select-all cursor-pointer" onClick={() => setSelectedProduct(p)}>
                            {p.title}
                          </h4>
                          <p className="text-xs text-neutral-400 font-medium tracking-wide">
                            {p.subtitle}
                          </p>
                        </div>
                        <span className="text-xs font-bold text-neutral-800 tracking-wide">
                          ${p.price}
                        </span>
                      </div>

                      {/* Dynamic Color Selector Dots */}
                      {p.colors.length > 1 && (
                        <div className="flex items-center gap-2 pt-1">
                          {p.colors.map((color, idx) => (
                            <button
                              key={color.name}
                              onClick={() => handleColorVariantSelect(p.id, idx)}
                              style={{ backgroundColor: color.hex }}
                              className={`w-4.5 h-4.5 rounded-full border transition-all ${
                                activeColorIndex === idx
                                  ? 'ring-1 ring-offset-1 ring-neutral-800 border-white scale-110'
                                  : 'border-transparent opacity-80 hover:opacity-100'
                              }`}
                              title={color.name}
                            />
                          ))}
                        </div>
                      )}
                    </div>

                  </div>
                );
              })}
            </div>
          )}

        </main>
      </div>

      <Footer />
    </div>
  );
}