import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Atmosphere from './components/Atmosphere';
import MenuTeaser from './components/MenuTeaser';
import CTASection from './components/CTASection';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Hero />
      <Atmosphere />
      <MenuTeaser />
      <CTASection />
    </div>
  );
}

export default App;
