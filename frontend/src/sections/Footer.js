import React from 'react';

function Footer() {
  return (
    <footer className="w-full py-6 bg-bg text-text flex flex-col items-center border-t border-white/20 mt-16">
      <span className="font-semibold text-lg">&copy; {new Date().getFullYear()} Photopic. All rights reserved.</span>
      <span className="text-sm opacity-70 mt-1">Made with passion for photography.</span>
    </footer>
  );
}

export default Footer; 