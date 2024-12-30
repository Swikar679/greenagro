import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import CompanyInfo from './components/CompanyInfo';
import Stats from './components/Stats';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Navbar />
      <Hero />
      <Stats />
      <Categories />
      <CompanyInfo />
      <Footer />
    </div>
  );
}

export default App;