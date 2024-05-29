"use client";
import React, { useEffect } from "react";
import Image from 'next/image';
import { FaAtom, FaPlayCircle, FaStar } from "react-icons/fa";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

interface TypewriterProps {
  text: string;
  speed?: number;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, speed = 200 }) => {
  useEffect(() => {
    let i = 0;
    let isDeleting = false;
    let displayText = '';
    const element = document.querySelector('.typewrite .obal-psani');

    const type = () => {
      if (element) { // Null check
        if (isDeleting) {
          displayText = text.substring(0, displayText.length - 1);
        } else {
          displayText = text.substring(0, displayText.length + 1);
        }

        element.innerHTML = displayText;

        if (!isDeleting && displayText === text) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        } else if (isDeleting && displayText === '') {
          isDeleting = false;
        }

        setTimeout(type, isDeleting ? speed / 2 : speed);
      }
    };

    type();
  }, [text]);

  return <span className="obal-psani text-black"></span>;
};

const Section2 = () => {
  useEffect(() => {
    // Initialize Swiper
    new Swiper(".elementor-image-carousel-wrapper", {
      loop: true,
      autoplay: {
        delay: 2000,
        reverseDirection: true, // To run the swiper from right to left
      },
    });
  }, []);

  return (
    <section className="bg-hero bg-auto bg-left bg-no-repeat pt-20">
      <div className="relative">
        <div className="inset-0 flex flex-col md:flex-row items-center justify-center z-30">
          {/* <div className="w-[70%] flex flex-col items-center lg:flex-row gap-2 bg-black md:rounded-full lg:rounded-full lg:ml-32 p-6 lg:p-10 border-2 border-custom-red"> */}
          <div className="ml-28 w-[70%] p-4 grid grid-rows-4-col-1 md:grid-cols-4  gap-2 bg-black rounded-full md:max-lg:rounded-[4rem]">
            {/* class_1 */}
            {/* <div className="01 col-span-2 text-white pl-32"> */}
            <div className="01 pt-4 flex flex-col justify-center items-center text-white md:max-lg:col-span-4">
              <h2 className="text-22 font-QuickSand font-extrabold">Expert Dev, s.r.o</h2>
              <p className="text-16 font-QuickSand font-light">vaše digitální agentura</p>
            </div>

            {/* class_2 */}
            <div className="02 md:max-lg:col-span-4" >
  <div className="flex w-full">
    <img 
      src="/section2Overlay.PNG" 
      alt="bg image" 
      className="w-full md:max-lg:h-[3rem] lg:rounded-full lg:rounded-tr-none lg:rounded-br-none overflow-hidden" 
    />
  </div>
            </div>

            {/* class_3 */}
            <div className="03 bg-white flex flex-col justify-center items-center px-2 md:max-lg:col-span-2 md:max-lg:rounded-bl-[2.5rem] ">
            <div className="w-[75%]"><img src="/google_logo.PNG" alt=""/></div>
            <div><p className="text-28 text-black font-QuickSand font-bold">4.9<span className="font-medium">/5</span></p></div>
            <div className="w-[75%]"><img src="/hodnoceni-5.PNG" alt="" /></div>
            </div>

            {/* Class_4 */}
            <div className="04 max-md:rounded-bl-full max-md:rounded-br-full bg-white flex flex-col justify-center items-center gap-4 lg:rounded-full lg:rounded-tl-none lg:rounded-bl-none md:max-lg:col-span-2 md:max-lg:rounded-br-[2.5rem]">
              <div><p className="text-14 font-QuickSand font-bold">Programováno</p></div>
              <div><p className="text-28 text-black font-QuickSand font-bold">5,000 h</p></div>
              <div className="psani-text h-10">
                    <p className="typewrite text-16 md:text-16 text-black font-medium font-QuickSnad">
                      <Typewriter text="Hello World" speed={150} />
                    </p>
                  </div>
            </div>

          </div>
          {/* </div> */}
          {/* Right animation  */}
          <div className="w-full my-4 md:w-[20%] flex flex-col md:flex-row items-center justify-center">
            <div className="elementor-image w-full bg-custom-red p-4">
              {/* Swiper container */}
              <div className="elementor-image-carousel-wrapper swiper-container">
                {/* Swiper wrapper */}
                <div className="swiper-wrapper">
                  {/* Individual slides */}
                  <div className="swiper-slide">
                    <img
                      src="https://vstupni.expert-dev.cz/wp-content/uploads/2021/09/google.png"
                      alt="google"
                      title="google"
                      className="w-full h-auto text-white filter brightness-0 invert"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://vstupni.expert-dev.cz/wp-content/uploads/2021/09/facebook.png"
                      alt="facebook"
                      title="facebook"
                      className="w-full h-auto text-white filter brightness-0 invert"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="https://vstupni.expert-dev.cz/wp-content/uploads/2021/09/sklik.png"
                      alt="sklik"
                      title="sklik"
                      className="w-full h-auto text-white filter brightness-0 invert"
                    />
                  </div>
                </div>
                <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
