import React from 'react';

const App = () => {
  const values = [
    { title: 'Minimalism', desc: 'We Believe In The Power Of Less. Our Signature Design Philosophy Focuses On Clean, Essential Lines That Allow The Wearer To Curate A Lasting Wardrobe. We Prioritize Quality Over Quantity, We Produce Less, And We Do It Better.' },
    { title: 'Circular', desc: 'Designing With Purpose Means Our End Goal Is Longevity. Our Closed-Loop Process Ensures That Materials Can Be Repurposed Or Returned. When You Wear It, It’s Planning, Not Just For Today, But For Our Future.' },
    { title: 'Ethical', desc: 'Fair Labor Practices Are At The Heart Of Our Production. We Partner With Ethical Mills And Manufacturers Who Share Our Vision. This Ensures Safety, Fair Wages, And Respect For Every Artisan And Individual.' },
    { title: 'Transparency', desc: 'We Make Transparency The Cornerstone Of Our Craft. Traceability Is Key In Everything We Do. You Can Look Well-Researched Info On Where Your Piece Was Made, Providing You With Complete Visibility Into The Journey Of Your Item From Shelf To Center.' },
    { title: 'Eco-Friendly Materials', desc: 'We Are Dedicated To Reducing Our Environmental Impact. Our Commitment Is Sourcing Sustainable Materials. Each Is Selected To Minimize Our Footprint. We Prioritize Fibers That Are Recycled, And Materials That Last Longer For You.' },
    { title: 'Community and Empowerment', desc: 'Our Mission Is About Our Community That Shares In Designing Together. The Right Collaborative Is Vital To Success. We Invest In Programs That Uplift The Communities Where We Source And Manufacture, Creating Better Futures.' },
  ];

  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#2D312E] font-sans">
      
      {}
      <header className="relative h-[40vh] md:h-[60vh] bg-[#3B423C] flex items-center justify-center mb-12 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-90" 
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=1600)' }} 
        />
        <div className="absolute inset-0 bg-black/20" />
        <h1 className="relative text-white text-3xl md:text-5xl font-light tracking-widest uppercase text-center px-4">
          Elegance In Simplicity, Earth's Harmony
        </h1>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-20">
        
        {}
        <section className="mb-16 text-center">
          <h2 className="text-2xl font-medium mb-6 uppercase tracking-wider">Sustainability At Modimal</h2>
          <p className="text-lg leading-relaxed text-[#555] max-w-3xl mx-auto">
            At Modimal, Sustainability Is At The Core Of Everything We Do. Our Brand Identity Is Characterized By Its Sensitivity And Elegance. It Reflects On Our Community And A More Sustainable Future.
          </p>
        </section>

        <section className="mb-20">
          <h3 className="text-xl font-bold mb-8 uppercase tracking-wider text-center md:text-left">Our Mission, The Modimal Six:</h3>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
            {values.map((val, i) => (
              <div key={i}>
                <h4 className="font-bold mb-2 uppercase text-sm">{val.title}</h4>
                <p className="text-sm text-[#555] leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <p className="text-center text-sm text-[#555] max-w-4xl mx-auto mb-20 italic">
          Guided By Our Core Values, We Integrate Sustainability Into Every Thread Of Our Brand, From Thoughtfully Sourced Materials And Innovative Manufacturing Processes To Marking Product Longevity And Ensuring Eco-Friendly Packaging - All Aiming To Create A More Meaningful, Less Resource-Heavy Approach To Fashion.
        </p>

        {}
        <section className="grid md:grid-cols-2 gap-4 mb-20">
          {[
            { label: 'Fitting', src: 'https://images.unsplash.com/photo-1590736733220-4384b6f790c6?auto=format&fit=crop&q=80&w=800' },
            { label: 'Fabric', src: 'https://images.unsplash.com/photo-1588117474408-77f985012353?auto=format&fit=crop&q=80&w=800' },
            { label: 'Sustainability', src: 'https://images.unsplash.com/photo-1584273186433-470034a17937?auto=format&fit=crop&q=80&w=800' },
            { label: 'Washing', src: 'https://images.unsplash.com/photo-1582735689369-4fe89db70043?auto=format&fit=crop&q=80&w=800' }
          ].map((item, i) => (
            <div key={i} className="group cursor-pointer">
              <div 
                className="aspect-[3/4] bg-[#D1D5D2] mb-3 transition-opacity group-hover:opacity-90 bg-cover bg-center" 
                style={{ backgroundImage: `url(${item.src})` }} 
              />
              <div className="py-3 px-4 bg-[#5A635D] text-white text-center font-bold text-xs uppercase tracking-widest">
                {item.label}
              </div>
            </div>
          ))}
        </section>

        <p className="text-center text-sm text-[#555] max-w-4xl mx-auto mb-20 italic">
          With Every Step, Our Quest For Sustainability Is Fortified By Our Trusted Suppliers, United In Our Shared Dedication To Ethical Craftsmanship And A More Conscious Future.
        </p>

        {}
        <section className="mb-20">
          <h3 className="text-xl font-bold mb-8 text-center md:text-left">People Beyond Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1594912953257-22736e6503c7?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1581092160607-ee225208670a?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1596496181813-911475358045?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=400',
              'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=400'
            ].map((url, i) => (
              <div 
                key={i} 
                className="aspect-square bg-gray-300 grayscale hover:grayscale-0 transition-all duration-500 bg-cover bg-center" 
                style={{ backgroundImage: `url(${url})` }} 
              />
            ))}
          </div>
          <button className="mt-8 w-full py-4 bg-[#5A635D] text-white font-bold text-sm uppercase tracking-widest hover:bg-[#454d48] transition-colors">
            Our People
          </button>
        </section>

        {/* Sustainable Process Images */}
        <section className="mb-20">
          <h3 className="text-xl font-bold mb-8 text-center md:text-left">Our Sustainable Process</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1441984904996-e0b6bbc8abf7?w=600&q=80',
              'https://images.unsplash.com/photo-1441986305447-284f3d8a8be8?w=600&q=80',
              'https://images.unsplash.com/photo-1441984904996-e0b6bbc8abf7?w=600&q=80',
              'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80'
            ].map((url, i) => (
              <div key={i} className="aspect-square bg-gray-200 overflow-hidden">
                <img src={url} alt={`Process ${i+1}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </section>

        {}
        <p className="text-sm text-center text-[#555] leading-relaxed mt-12 max-w-2xl mx-auto">
          With Modimal, You're Not Just Wearing Fashion - You're Making A Statement, A Statement That Elegance And Sustainability Can Coexist, Shaping A More Responsible And Beautiful Future For Us All.
        </p>
      </main>
    </div>
  );
};

export default App;