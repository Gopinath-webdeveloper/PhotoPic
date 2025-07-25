import React, { useState } from 'react';
import { PlusIcon, PencilSquareIcon, TrashIcon } from '@heroicons/react/24/solid';

const userPhotos = [
  { id: 1, src: 'https://images.unsplash.com/photo-1516245834210-c4c1427873ab?auto=format&fit=crop&w=800&q=80', alt: 'Mountain Landscape' },
  { id: 2, src: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=800&q=80', alt: 'Lake View' },
  { id: 3, src: 'https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=800&q=80', alt: 'Forest Path' },
];

function MyPhotos() {
  const [photos, setPhotos] = useState(userPhotos); // eslint-disable-line no-unused-vars

  return (
    <div>
      <header className="flex justify-between items-center mb-12">
        <div>
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-btn">
            My Photos
          </h1>
          <p className="text-lg text-text/70 mt-2">Manage your uploaded photos and galleries.</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-3 rounded-lg bg-btn hover:bg-btn-hover text-white font-semibold transition-colors">
          <PlusIcon className="w-6 h-6" />
          Upload Photo
        </button>
      </header>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {photos.map(photo => (
          <div key={photo.id} className="relative group rounded-2xl overflow-hidden">
            <img src={photo.src} alt={photo.alt} className="w-full h-72 object-cover" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
              <button className="p-3 bg-white/20 rounded-full hover:bg-white/30">
                <PencilSquareIcon className="w-6 h-6 text-white" />
              </button>
              <button className="p-3 bg-white/20 rounded-full hover:bg-white/30">
                <TrashIcon className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyPhotos; 