"use client";
import React, { useEffect } from "react";

interface SectionData {
  value: number | string;
  heading: string;
}

const Section5: React.FC = () => {
  const sections: SectionData[] = [
    { value: 8, heading: "Let zkušeností" },
    { value: 15, heading: "Specialistů" },
    { value: 200, heading: "Klientů" },
    { value: 300, heading: "Projektů" },
  ];

  useEffect(() => {
    const circles = document.querySelectorAll('.circle') as NodeListOf<HTMLElement>;
    const totalDuration = 9; // Total duration for all circles (in seconds)
    const circleCount = 3; // Only the first 3 circles should move
    const animationDuration = totalDuration / circleCount; // Equal duration for all circles
    circles.forEach((circle, index) => {
      if (index < circleCount) {
        circle.style.animationDuration = `${animationDuration}s`;
        circle.style.animationDelay = '3s'; // Ensure no delay for synchronization
        if (index === 1) {
          circle.classList.add('reverse-animation'); // Apply reverse animation to the second circle
        }
      }
    });
  }, []);

  return (
    <section className="w-full py-16 lg:px-20 xl:px-28">
      <div className="flex justify-center flex-wrap p-4">
        {sections.map((section, index) => (
          <div key={index} className="flex justify-center gap-4 p-4">
            <div className="flex flex-col text-center">
              <div className="text-[4.2rem] lg:text-[4.8rem] xl:text-[5.3rem] font-extrabold font-QuickSand text-custom-red">
                <span data-duration="2000" data-to-value={section.value} data-from-value="0">
                  {section.value}{section.value === 300 && '+'}
                </span>
              </div>
              <div className="text-18 lg:text-24 xl:text-28 text-black font-semibold font-QuickSand">{section.heading}</div>
            </div>
            {index < 3 && (
              <div className="hidden md:flex md:justify-start">
                <div className="p-2 rounded-lg">
                  <div className="dotted-line">
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
