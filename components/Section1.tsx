import React from 'react';

const Section1 = () => {
  return (
    <div className="flex flex-col items-center justify-end h-[90%] bg-white mt-20">
      <video className="w-[300px] h-[300px] sm:w-full md:h-full" autoPlay muted loop>
        <source src="/video/videoSection.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Section1;
