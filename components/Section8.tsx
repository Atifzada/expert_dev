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
    <section className="relative h-20 md:h-60 mx-2 sm:mx-6 md:mx-40 overflow-hidden rounded-xl">
      <div className="flex items-center transition-transform duration-1000" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
        <div className="w-full flex-shrink-0 items-center ">
          <img src="/img1.PNG" alt="Image 1" className="object-cover" />
        </div>
        <div className="w-full flex-shrink-0">
          <img src="/img2.PNG" alt="Image 2" className="object-cover" />
        </div>
      </div>
    </section>
  );
};

export default Section8;
