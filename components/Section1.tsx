'use client'
import { useState, useEffect } from 'react';

const Section1 = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1200);
    };

    // Call handleResize on initial load
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full md:w-[90%] lg:h-[100%] bg-white md:mx-auto mt-10 lg:pb-[250px]">
      {isLargeScreen ? <video className="w-[300px] h-[300px] sm:w-full md:h-full" autoPlay muted loop>
        <source src="/video/video-LG.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> :
        <video className="w-[300px] h-[300px] sm:w-full md:h-full" autoPlay muted loop>
          <source src="/video/video-SM.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>}
    </div>
  );
};

export default Section1;
