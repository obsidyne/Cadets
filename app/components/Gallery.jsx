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
    <section ref={ref} className="gallery-section">
      <div className="gallery-container">
        <h2 className="gallery-heading">Our Gallery</h2>
        
        <div className="gallery-grid">
          {visibleImages.map((image) => (
            <div key={image.id} className="gallery-item">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="gallery-image"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
        
        <div className="gallery-button-container">
          <button onClick={loadMoreImages} className="gallery-view-more-button">
            View More
          </button>
        </div>
      </div>
    </section>
  );
});

export default Gallery;