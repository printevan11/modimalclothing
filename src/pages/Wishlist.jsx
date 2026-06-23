import React from 'react';

export default function Wishlist({ wishlist = [], setWishlist = () => {}, triggerToast = () => {} }) {
  // Product data to display when items are in wishlist
  const products = {
    'bs-1': {
      title: 'Tailored Linen',
      subtitle: 'Soft Cozy Knit',
      price: '$110',
      img: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80'
    },
    'bs-2': {
      title: 'Timeless Linen',
      subtitle: 'Midi Knit Dress',
      price: '$130',
      img: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=600&q=80'
    },
    'bs-3': {
      title: 'Knit Dress',
      subtitle: 'Ribbed Slip Silhouette',
      price: '$95',
      img: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=600&q=80'
    }
  };

  const handleRemove = (id, title) => {
    setWishlist(wishlist.filter(item => item !== id));
    triggerToast(`Removed "${title}" from wishlist`);
  };

  return (
    <div className="w-full bg-[#FCFAF7] text-[#1C1C1C] font-sans antialiased">
      <div className="max-w-5xl mx-auto py-16 px-6">
        <h1 className="text-3xl font-normal tracking-wide mb-2">My Wishlist</h1>
        <p className="text-sm text-neutral-400 mb-8">Items you've saved</p>

        {wishlist.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-16 h-16 mx-auto text-neutral-300 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p className="text-neutral-500 mb-4">Your wishlist is empty</p>
            <button
              onClick={() => window.location.href = '/'}
              className="bg-[#5D6E56] text-white text-xs font-bold uppercase tracking-widest px-6 py-3"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {wishlist.map(id => {
              const product = products[id];
              if (!product) return null;
              return (
                <div key={id} className="flex flex-col space-y-4">
                  <div className="relative aspect-[3/4] bg-neutral-100 overflow-hidden rounded-sm shadow-sm">
                    <img
                      src={product.img}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => handleRemove(id, product.title)}
                      className="absolute top-4 right-4 w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-md transition-all hover:bg-neutral-50"
                    >
                      <svg
                        className="w-4 h-4 fill-red-500 stroke-red-500"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-sm font-bold text-[#1C1C1C] tracking-wide">{product.title}</h3>
                      <p className="text-xs text-neutral-500 font-medium">{product.subtitle}</p>
                    </div>
                    <span className="text-sm font-bold text-neutral-800">{product.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}