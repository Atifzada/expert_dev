"use client";
import React, { useState, useEffect, useLayoutEffect } from "react";

interface SectionData {
  value: number | string;
  heading: string;
}

const AnimatedValue: React.FC<{ value: number | string }> = ({ value }) => {
  const [animatedValue, setAnimatedValue] = useState(0);

  useEffect(() => {
    const animationDuration = 50; // Duration of animation in milliseconds
    const valueIncrement = Number(value) / animationDuration; // Increment for each animation frame

    let currentValue = 0;
    const animationInterval = setInterval(() => {
      currentValue += valueIncrement;
      setAnimatedValue(Math.min(Math.floor(currentValue), Number(value))); // Update animated value
      if (currentValue >= Number(value)) {
        clearInterval(animationInterval); // Stop the interval when animation is complete
      }
    }, 30); // 60 frames per second

    // Clear interval on component unmount
    return () => clearInterval(animationInterval);
  }, [value]);

  return <span>{animatedValue}</span>;
};

const Section5: React.FC = () => {
  const sections: SectionData[] = [
    { value: 8, heading: "Let zkušeností" },
    { value: 15, heading: "Specialistů" },
    { value: 200, heading: "Klientů" },
    { value: 300, heading: "Projektů" },
  ];

  const [isMobile, setIsMobile] = useState(false)

  useLayoutEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const circles = document.querySelectorAll('.circle') as NodeListOf<HTMLElement>;
    const dotted = document.querySelectorAll('.dotted') as NodeListOf<HTMLElement>;
    const totalDuration = 12; // Total duration for all circles (in seconds)
    const circleCount = 4; // Only the first 3 circles should move
    const animationDuration = totalDuration / circleCount; // Equal duration for all circles

    if (isMobile) {
      console.log("I am in mobile")
      // Iterate over each element in the NodeList and apply classList operations
      dotted.forEach((dot, index) => {
        dot.classList.remove('dotted-line');
        dot.classList.add('flat-dotted-line');
      });
      circles.forEach((circle, index) => {
        circle.classList.remove('long-circle');
        circle.classList.add('flat-circle');
        if (index % 2 === 0) {
          circle.classList.add('reverse-flat-circle'); // Apply reverse animation to the second circle
        }
      });
    }

    if (!isMobile) {
      dotted.forEach((dot, index) => {
        dot.classList.remove('flat-dotted-line');
        dot.classList.add('dotted-line');
      });
      circles.forEach((circle, index) => {
        circle.classList.remove('flat-circle');
        circle.classList.add('long-circle');
        if (index < circleCount) {
          circle.style.animationDuration = `${animationDuration}s`;
          circle.style.animationDelay = '3s'; // Ensure no delay for synchronization
          if (index === 1) {
            circle.classList.add('reverse-long-circle'); // Apply reverse animation to the second circle
          }
        }
      });
    }

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
    };

    handleResize(); // Call handleResize initially to set isMobile
    mediaQuery.addEventListener('change', handleResize); // Listen for media query changes

    return () => mediaQuery.removeEventListener('change', handleResize); // Clean up listener on component unmount
  }, [isMobile]);


  return (
    <section className="w-full py-16 lg:px-20 xl:px-28">
      <div className="flex flex-col items-center md:flex-row justify-center p-4">
        {sections.map((section, index) => (
          <div key={index} className="flex flex-col md:flex-row justify-center gap-4 p-4">
            <div className="flex flex-col text-center">
              <div className="text-[4.2rem] lg:text-[4.8rem] xl:text-[5.3rem] font-extrabold font-QuickSand text-custom-red">
                <AnimatedValue value={section.value} />
                {section.value === 300 && '+'}
              </div>
              <div className="text-18 lg:text-24 xl:text-28 text-black font-semibold font-QuickSand">{section.heading}</div>
            </div>
            {(index <= 2 || isMobile) && (
              <div className="flex justify-start">
                <div className="p-2 rounded-lg">
                  <div className="dotted">
                    <div className="w-2 rounded-full bg-custom-red circle"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
