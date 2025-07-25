import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../sections/Hero';
import LogoScroller from '../sections/LogoScroller';
import Gallery from '../sections/Gallery';
import Pricing from '../sections/Pricing';
import Testimonials from '../sections/Testimonials';
import Footer from '../sections/Footer';

function Home() {
  return (
    <div className="min-h-screen bg-bg text-text flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center px-2">
        <Hero />
        <LogoScroller />
        <Gallery />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

export default Home; 