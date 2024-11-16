import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/home/Hero';
import FeaturedProducts from './components/home/FeaturedProducts';
import Categories from './components/home/Categories';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-16"> {/* Offset for fixed navbar */}
        <Hero />
        <FeaturedProducts />
        <Categories />
      </div>
    </div>
  );
}

export default App;