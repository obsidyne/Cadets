'use client';
import Image from 'next/image';
import React, { useState } from 'react';


const Gallery = React.forwardRef((props, ref) => {
  const allImages = [
    { id: 1, src: '/gallery/img1.jpg', alt: 'Gallery img 1' },
    { id: 2, src: '/gallery/img2.jpg', alt: 'Gallery img 2' },
    { id: 3, src: '/gallery/img3.jpg', alt: 'Gallery img 3' },
    { id: 4, src: '/gallery/img4.jpg', alt: 'Gallery img 4' },
    { id: 5, src: '/gallery/img5.jpg', alt: 'Gallery img 5' },
    { id: 6, src: '/gallery/img6.jpg', alt: 'Gallery img 6' },
    { id: 7, src: '/gallery/img2.jpg', alt: 'Gallery img 7' },
    { id: 8, src: '/gallery/img3.jpg', alt: 'Gallery img 8' },
    { id: 9, src: '/gallery/img4.jpg', alt: 'Gallery img 9' },
    { id: 10, src: '/gallery/img1.jpg', alt: 'Gallery img 10' },
    { id: 11, src: '/gallery/img6.jpg', alt: 'Gallery img 11' },
    { id: 12, src: '/gallery/img5.jpg', alt: 'Gallery img 12' },
  ];

  const [visibleImages, setVisibleImages] = useState(allImages.slice(0, 6));
  const [currentIndex, setCurrentIndex] = useState(0);

  const loadMoreImages = () => {
    const nextIndex = (currentIndex + 6) % allImages.length;
    const nextImages = allImages.slice(nextIndex, nextIndex + 6);
    
    if (nextImages.length < 6) {
      const remaining = 6 - nextImages.length;
      setVisibleImages([...nextImages, ...allImages.slice(0, remaining)]);
      setCurrentIndex(remaining);
    } else {
      setVisibleImages(nextImages);
      setCurrentIndex(nextIndex);
    }
  };

  return (
    <section ref={ref} className="gallery py-12 px-4 bg-gray-50">
      <div className="max-w-[1280px] mx-auto my-0">
        <h2 className="text-[2rem] font-bold text-center mb-8 text-gray-900">
          Our Gallery
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleImages.map((image) => (
            <div 
              key={image.id} 
              className="relative aspect-square overflow-hidden rounded-lg shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 ease-in-out hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <button 
            onClick={loadMoreImages} 
            className="py-3 px-6 bg-black text-white font-medium rounded-lg border-none cursor-pointer transition-colors duration-300 ease-in-out text-base hover:bg-gray-600"
          >
            View More
          </button>
        </div>
      </div>
    </section>
  );
});

Gallery.displayName = 'Gallery';

export default Gallery;