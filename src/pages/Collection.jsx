import { useState } from 'react'

const MOCK_PRODUCTS = [
  {
    id: 'prod-1',
    title: 'Earth-Tone Belted Midi Dress',
    category: 'Dresses & Jumpsuits',
    price: '$145',
    featured: 'New In',
    size: 'M',
    color: 'Olive Green',
    img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80',
    details: 'A classic organic long-sleeve midi silhouette featuring a self-tie belt and premium breathable weave.'
  },
  {
    id: 'prod-2',
    title: 'Premium Organic Cotton Tee',
    category: 'Tees',
    price: '$45',
    featured: 'Modiweek',
    size: 'S',
    color: 'White',
    img: 'https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&w=600&q=80',
    details: 'Crafted from pure GOTS certified organic cotton for a featherlight feel and luxurious daily wear.'
  },
  {
    id: 'prod-3',
    title: 'Tailored Wide-Leg Trouser',
    category: 'Pants',
    price: '$115',
    featured: 'New In',
    size: 'L',
    color: 'Sage Green',
    img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80',
    details: 'Elegantly high-waisted and flowing smoothly down to raw hem finishes.'
  },
  {
    id: 'prod-4',
    title: 'Minimal Scoop Neck Dress',
    category: 'Dresses & Jumpsuits',
    price: '$130',
    featured: 'Plus Size',
    size: 'XL',
    color: 'Black',
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=600&q=80',
    details: 'A timeless black slip tank dress optimized for natural draping and comfort.'
  },
  {
    id: 'prod-5',
    title: 'Draped Linen Wrap Blouse',
    category: 'Tops & Boluses',
    price: '$89',
    featured: 'New In',
    size: 'M',
    color: 'Cream',
    img: 'https://images.unsplash.com/photo-1549062572-544a64fb0c56?auto=format&fit=crop&w=600&q=80',
    details: 'Wrap-around tailored blouse made with high-grade European flax.'
  },
  {
    id: 'prod-6',
    title: 'Unstructured Linen Utility Jacket',
    category: 'Jackets & Outwears',
    price: '$178',
    featured: 'Modiweek',
    size: 'L',
    color: 'Desert Khaki',
    img: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=600&q=80',
    details: 'A lightweight unstructured wind-breaking outer layer with functional safari pockets.'
  },
  {
    id: 'prod-7',
    title: 'Soft Cozy Knitted Cardigan',
    category: 'Pullovers',
    price: '$110',
    featured: 'Modiweek',
    size: 'XL',
    color: 'Soft Beige',
    img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&q=80',
    details: 'Chunky but light knit pullover crafted from organic cashmere blend.'
  },
  {
    id: 'prod-8',
    title: 'Minimalist Relaxed Shorts',
    category: 'Shorts & Skirts',
    price: '$65',
    featured: 'Plus Size',
    size: 'XXL',
    color: 'Charcoal',
    img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80',
    details: 'Elasticized high rise tailored shorts optimized for warm casual walks.'
  }
];

export default function Collection({ wishlist, setWishlist, triggerToast, selectedProduct, setSelectedProduct, handleAddToCart }) {
  const [activeCategory, setActiveCategory] = useState('Shop All');

  // Get related products for "You may also like"
  const getRelatedProducts = (currentId) => {
    const others = MOCK_PRODUCTS.filter(p => p.id !== currentId);
    return others.sort(() => Math.random() - 0.5).slice(0, 4);
  };

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const filteredProducts = MOCK_PRODUCTS.filter(item => {
    if (activeCategory === 'Shop All') return true;
    return item.category === activeCategory;
  });

  const categories = [
    'Shop All',
    'Tops & Boluses',
    'Tees',
    'Pants',
    'Dresses & Jumpsuits',
    'Jackets & Outwears',
    'Pullovers',
    'Shorts & Skirts'
  ];

  const handleToggleWishlist = (id, name) => {
    if (wishlist.includes(id)) {
      setWishlist(wishlist.filter(item => item !== id));
      triggerToast(`Removed "${name}" from wishlist`);
    } else {
      setWishlist([...wishlist, id]);
      triggerToast(`Added "${name}" to wishlist`);
    }
  };

  return (
    <div className="w-full bg-[#FCFAF7] text-[#1C1C1C] font-sans antialiased">

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 relative grid grid-cols-1 md:grid-cols-2 gap-8 rounded-sm shadow-2xl">
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 text-neutral-400 hover:text-black text-lg font-light z-10"
              aria-label="Close"
            >
              ✕
            </button>

            {/* Product Image */}
            <div className="aspect-[3/4] overflow-hidden bg-neutral-100 rounded-sm">
              <img
                src={selectedProduct.img}
                alt={selectedProduct.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Details */}
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
                  <p>Size: <span className="text-black font-semibold">{selectedProduct.size}</span></p>
                </div>
              </div>

              <button
                onClick={() => {
                  handleAddToCart(selectedProduct);
                }}
                className="w-full bg-[#1C1C1C] text-white text-xs font-bold uppercase tracking-[0.2em] py-3.5 hover:bg-neutral-800 transition-colors rounded-sm"
              >
                Add To Bag
              </button>
            </div>

            {/* You May Also Like */}
            <div className="col-span-1 md:col-span-2 mt-4 pt-6 border-t border-neutral-100">
              <h4 className="text-sm font-bold tracking-wide mb-4">You May Also Like</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {getRelatedProducts(selectedProduct.id).map((prod) => (
                  <div
                    key={prod.id}
                    onClick={() => handleProductClick(prod)}
                    className="cursor-pointer group"
                  >
                    <div className="aspect-[3/4] bg-neutral-100 overflow-hidden rounded-sm mb-2">
                      <img
                        src={prod.img}
                        alt={prod.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-xs font-medium truncate">{prod.title}</p>
                    <p className="text-xs text-neutral-500">{prod.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero */}
      <header className="relative w-full aspect-[16/10] min-h-[300px] bg-neutral-100 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1920&q=80"
          alt="Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Collection
          </h1>
        </div>
      </header>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-sm font-medium tracking-wide px-4 py-2 transition-colors ${
                activeCategory === cat
                  ? 'bg-[#5D6E56] text-white'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.map((prod) => {
            const isFav = wishlist.includes(prod.id);
            return (
              <div key={prod.id} className="group flex flex-col space-y-4">
                <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden shadow-xs cursor-pointer" onClick={() => handleProductClick(prod)}>
                  <img
                    src={prod.img}
                    alt={prod.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                  />
                  <button
                    onClick={() => handleToggleWishlist(prod.id, prod.title)}
                    className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white flex items-center justify-center shadow-md"
                  >
                    <svg
                      className={`w-4 h-4 ${isFav ? 'fill-red-500 stroke-red-500' : 'stroke-neutral-600 fill-none'}`}
                      viewBox="0 0 24 24"
                      strokeWidth="2.2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-sm font-semibold tracking-wide text-neutral-800">
                      {prod.title}
                    </h4>
                    <span className="text-sm font-bold">{prod.price}</span>
                  </div>
                  <p className="text-xs text-neutral-400">{prod.color} • Size {prod.size}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}