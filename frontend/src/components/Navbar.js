import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } }
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-black/20 backdrop-blur-md shadow-lg flex items-center justify-between px-6 md:px-10 py-4 border-b border-white/10">
      {/* Left Side: Logo */}
      <div className="text-2xl font-extrabold z-50">
        <Link to="/">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn drop-shadow-md">
            Photopic
          </span>
        </Link>
      </div>

      {/* Center: Main Navigation (Desktop) */}
      <div className="hidden lg:flex items-center gap-8 text-lg">
        <Link to="/" className="hover:text-accent-hover transition-colors">Home</Link>
        <Link to="/gallery" className="hover:text-accent-hover transition-colors">Gallery</Link>
        <Link to="/pricing" className="hover:text-accent-hover transition-colors">Pricing</Link>
        <Link to="/about" className="hover:text-accent-hover transition-colors">About</Link>
        <Link to="/contact" className="hover:text-accent-hover transition-colors">Contact</Link>
      </div>

      {/* Right Side: Auth Links (Desktop) */}
      <div className="hidden lg:flex items-center gap-6">
        {user ? (
          <Link to="/dashboard" className="px-5 py-2 rounded-lg bg-btn hover:bg-btn-hover text-white font-semibold transition-colors">
            Dashboard
          </Link>
        ) : (
          <>
            <Link to="/login" className="hover:text-accent-hover transition-colors text-lg">Login</Link>
            <Link to="/register" className="px-5 py-2 rounded-lg bg-btn hover:bg-btn-hover text-white font-semibold transition-colors">
              Register
            </Link>
          </>
        )}
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden z-50">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <XMarkIcon className="w-8 h-8 text-white" /> : <Bars3Icon className="w-8 h-8 text-white" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="absolute top-0 left-0 w-full h-screen bg-bg flex flex-col items-center justify-center gap-8 text-2xl lg:hidden"
            variants={mobileNavVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to="/pricing" onClick={() => setIsOpen(false)}>Pricing</Link>
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            <div className="mt-8 flex flex-col items-center gap-6">
              {user ? (
                <Link to="/dashboard" onClick={() => setIsOpen(false)} className="px-6 py-3 rounded-lg bg-btn text-white">Dashboard</Link>
              ) : (
                <>
                  <Link to="/login" onClick={() => setIsOpen(false)}>Login</Link>
                  <Link to="/register" onClick={() => setIsOpen(false)} className="px-6 py-3 rounded-lg bg-btn text-white">Register</Link>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar; 