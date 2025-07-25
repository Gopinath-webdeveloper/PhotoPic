import React from 'react';
import { motion } from 'framer-motion';

const photos = [
  { src: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80', alt: 'Wedding Ceremony', className: 'col-span-2 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1541208947395-f2a89a015faa?auto=format&fit=crop&w=800&q=80', alt: 'Couple Portrait', className: 'col-span-1 row-span-2' },
  { src: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=800&q=80', alt: 'Couple Holding Hands', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1515934751635-481d6b1a2298?auto=format&fit=crop&w=800&q=80', alt: 'Bride getting ready', className: 'col-span-1 row-span-1' },
  { src: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80', alt: 'Wedding Details', className: 'col-span-2 row-span-1' },
];

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

function Gallery() {
  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn mb-4">
          Featured Work
        </h2>
        <p className="text-lg text-text/80">A glimpse into the moments we've captured.</p>
      </div>
      <motion.div 
        className="grid grid-cols-2 md:grid-cols-4 auto-rows-[250px] gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {photos.map((photo, i) => (
          <motion.div
            key={i}
            className={`overflow-hidden rounded-2xl shadow-lg group ${photo.className}`}
            variants={cardVariants}
          >
            <img 
              src={photo.src} 
              alt={photo.alt} 
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
            />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Gallery; 