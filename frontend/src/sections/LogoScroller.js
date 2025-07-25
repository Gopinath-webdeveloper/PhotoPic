import React from 'react';
import '../styles/LogoScroller.css';

const logosRow1 = [
  'InnovateX',
  'QuantumLeap',
  'Apex',
  'Stellar',
  'Momentum',
  'Zenith',
  'Catalyst'
];

const logosRow2 = [
  'Eclipse',
  'Pinnacle',
  'Velocity',
  'Fusion',
  'Horizon',
  'Odyssey',
  'Nexus'
];

function LogoScroller() {
  const duplicatedLogos1 = [...logosRow1, ...logosRow1];
  const duplicatedLogos2 = [...logosRow2, ...logosRow2];

  return (
    <section className="w-full max-w-6xl mx-auto py-12 px-6">
      <p className="text-center text-lg text-text/60 font-semibold mb-8">
        Powering the world's best creative teams
      </p>
      <div className="flex flex-col gap-8">
        <div className="scroller">
          <div className="scroller-inner">
            {duplicatedLogos1.map((logo, index) => (
              <div key={index} className="text-4xl font-bold text-text/40 flex-shrink-0 mx-8">
                {logo}
              </div>
            ))}
          </div>
        </div>
        <div className="scroller">
          <div className="scroller-inner reverse">
            {duplicatedLogos2.map((logo, index) => (
              <div key={index} className="text-4xl font-bold text-text/40 flex-shrink-0 mx-8">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogoScroller; 