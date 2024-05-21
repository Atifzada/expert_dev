import React from 'react';

const Section1 = () => {
  return (
    <div className="w-full">
      <video className="w-full"autoPlay muted loop>
        <source src="https://vstupni.expert-dev.cz/wp-content/uploads/2021/12/FINALNI-VIDEO.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Section1;
