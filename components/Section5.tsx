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
    <section className="m-28">
      <div className="container mx-auto p-4">
        <div className="flex flex-wrap">
          {sections.map((section, index) => (
            <div key={index} className="w-full md:w-1/4 flex items-start mb-8">
              <div className="flex-1 text-center">
                <div className="text-76 font-extrabold font-QuickSand text-custom-red">
                  <span data-duration="2000" data-to-value={section.value} data-from-value="0">
                    {section.value}{section.value === 300 && '+'}
                  </span>
                </div>
                <div className="text-24 text-black font-semibold font-QuickSand">{section.heading}</div>
              </div>
              {index < 3 && (
                <div className="flex justify-start ml-4">
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
      </div>
    </section>
  );
};

export default Section5;
