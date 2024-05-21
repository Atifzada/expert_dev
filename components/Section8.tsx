"use client";
import React, { useEffect, useState } from 'react';

const Section8 = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % 2);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-60 mx-40 mt-8 mb-20 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        <div className="w-full flex-shrink-0">
          <img src="/img1.PNG" alt="Image 1" className="w-full h-full object-cover" />
        </div>
        <div className="w-full flex-shrink-0">
          <img src="/img2.PNG" alt="Image 2" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Section8;
