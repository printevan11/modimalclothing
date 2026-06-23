import React from 'react';

const materialsData = [
  {
    title: 'Cotton',
    desc: 'We Source Certified Organic Cotton, Which Is Grown Without The Use Of Pesticides Or Synthetic Fertilizers And Requires Less Irrigation As It Relies Mainly On Rainwater. (1). Avoiding Harmful Pesticides Preserves Soil Biodiversity And Protects The Health Of Surrounding Communities. (2). Our Organic Cotton Fabrics Are Made Using Organic Cotton Yarns That Are Certified By The Global Organic Textile Standard (GOTS).',
    img: 'https://images.unsplash.com/photo-1606787620819-87fd0c8399f5?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Wool',
    desc: 'Wool Is A Natural Fiber With Added Performance Attributes Such As Temperature Regulation, Durability, And Natural Water Repellency. Considered A Circular Product By Nature, Wool Can Be Recycled Or Biodegraded Easily. Animal Welfare Is Extremely Important To Us, And Therefore We Only Source Mulesing-Free Wool From Producers That Follow Humane And Eco-Friendly Processes Aligned With Our Animal Welfare Guidelines.',
    img: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Linen',
    desc: 'Found Throughout Our Collections, Linen Is A Sustainable Fiber Made From The Flax Plant. Flax Is Naturally Pest Resistant, That Requires Less Pesticides, Water And Energy To Produce Compared To Cotton And Polyester. Flax Aids In Sequestering Carbon Into The Soil, Which Removes Carbon Dioxide From The Atmosphere And Is Beneficial For Improving Soil Health.',
    img: 'https://images.unsplash.com/photo-1601662528567-526d06436a43?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Silk',
    desc: 'Organic Silk Is A More Reasonable Alternative To Making Conventional Silk Through Traditional Methods. The Silkworms Are Fed Mulberry Tree Leaves From Organic Agriculture That Uses No Pesticides Or Harmful Chemicals And Resulting In A Lustrous Fabric That Is Gentle On Both You And Environment. This Responsibly Sourced Material Epitomizes Our Dedication To Creating Exquisite Clothing With A Conscience.',
    img: 'https://images.unsplash.com/photo-1596704017254-9b5c10898154?auto=format&fit=crop&q=80&w=800'
  },
  {
    title: 'Cashmere',
    desc: 'We’re Proud To Source Our Cashmere Through The Good Cashmere Standard By The Aid By Trade Foundation (ABTF). This Independent Standard Works To Source Traceable, Sustainably Certified Cashmere That Cares For The Wellbeing Of Cashmere Goats, Protects The Environment And Supports The Herders That Produce It.',
    img: 'https://images.unsplash.com/photo-1595333140413-2d931393699b?auto=format&fit=crop&q=80&w=800'
  }
];

const App = () => {
  return (
    <div className="min-h-screen bg-[#FDFBF9] text-[#2D312E] font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Breadcrumbs */}
        <nav className="text-xs text-gray-500 mb-8 uppercase tracking-widest">
          Home / Sustainability / Materials
        </nav>

        {/* Header Section */}
        <header className="mb-16">
          <h1 className="text-3xl font-medium mb-6 uppercase tracking-wider">Sustainably Sourced Materials</h1>
          <p className="text-base leading-relaxed text-[#555]">
            At Modimal, We Believe In Investing In The Now To Design For The Future. That's Why We Are Committed To Sourcing Quality Materials That Will Have Less Impact On The Environment. 
            So Far In 2022, 92% Of The Base Fabrics In Our Collection Are More Sustainably Sourced. Our Goal Is To Use Only 100% Sustainably Sourced Materials By 2025. 
            There Are Five Kinds Of Fabrics In Our Collections That Are Organic And Responsible Sourced, And We Highlight These So You Can Make Considered Choices When You Shop.
          </p>
        </header>

        {/* Material Blocks */}
        <div className="space-y-20 mb-20">
          {materialsData.map((item, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8`}
            >
              <div className="w-full md:w-1/2">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full aspect-[4/3] object-cover bg-gray-200" 
                />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="text-xl font-bold mb-4 uppercase tracking-wider">{item.title}</h3>
                <p className="text-sm text-[#555] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sustainability Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            'https://images.unsplash.com/photo-1441984904996-e0b6bbc8abf7?w=600&q=80',
            'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80',
            'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&q=80',
            'https://images.unsplash.com/photo-1441986305447-284f3d8a8be8?w=600&q=80'
          ].map((url, i) => (
            <div key={i} className="aspect-square bg-gray-200 overflow-hidden">
              <img src={url} alt={`Sustainability ${i+1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Footer Info */}
        <footer className="border-t border-gray-200 pt-12 text-sm text-[#555] leading-relaxed">
          <p className="mb-6">
            We Are Continually Exploring More Sustainable Alternatives That Offer The Same Quality And Performance. We Will Soon Add New Fabrics In To Our Collections Which Are Recycling And Repurposing. By Giving A New Life To Leftover Fabrics Through Recycling And Repurposing, We Can Reduce Our Demand On The Planet's Limited Natural Resources. Recycled Fabrics Are Made Using The Waste From Both The Pre- And Post-Consumer Stage Of A Product's Life.
          </p>
          <p>
            We Track Our Material Usage And Progress Annually As Part Of Textile Exchange's Corporate Fibers And Materials Benchmark, View Our Latest Report <a href="#" className="underline hover:text-black">Here</a>.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default App;