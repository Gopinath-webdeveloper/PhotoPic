import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../sections/Footer';

const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen bg-bg text-text flex flex-col">
    <Navbar />
    <main className="flex-1 flex items-center justify-center">
      <h1 className="text-5xl font-bold">{title} Page</h1>
    </main>
    <Footer />
  </div>
);

export default PlaceholderPage; 