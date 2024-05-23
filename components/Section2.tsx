"use client";
import React, { useEffect } from "react";
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
<div className=" inset-0 flex items-center justify-center z-30">
        <div className="w-[70%] flex gap-4 flex-wrap bg-black rounded-full ml-32 pl-24">
        <div className="w-1/4">
          <div className="absolute pt-4 pl-12 hidden lg:block">
            <FaStar className="text-xl text-white" />
          </div>
          <div className="absolute hidden lg:block mt-8 pl-60">
            <FaAtom className="text-xl text-white" />
          </div>
          <div className="py-12">
            <div className="flex flex-col justify-center w-auto">
              <h2 className="text-32 font-extrabold text-white font-QuickSand block">
                Expert Dev, s.r.o
              </h2>
              <span className="text-16 font-light text-white font-QuickSand">
                vaše digitální agentura
              </span>
            </div>

            <div className="absolute pl-24 hidden lg:block mt-6">
              <FaAtom className="text-xl text-white" />
            </div>
          </div>
        </div>

        <div className="overlay w-1/5 my-6 mr-4 relative rounded-full">
          <div
            className="relative rounded-full bg-cover bg-center h-full w-full"
            style={{
              borderBottomRightRadius: "0",
              borderTopRightRadius: "0",
              backgroundImage: 'url(https://vstupni.expert-dev.cz/wp-content/uploads/2024/01/tvorba-webovych-stranek-pro-hotely-300x169.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div
              className="elementor-background-overlay absolute inset-0 bg-p opacity-50 rounded-full"
              style={{
                borderBottomRightRadius: "0",
                borderTopRightRadius: "0",
              }}
            ></div>
            <div className="elementor-element elementor-element-9f1e0bf elementor-view-default elementor-widget elementor-widget-icon absolute inset-0 flex items-center justify-center">
              <div className="elementor-widget-container">
                <div className="elementor-icon-wrapper">
                  <div className="elementor-icon">
                    <FaPlayCircle className="text-4xl text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/5 flex flex-col items-center justify-center my-6">
          <div className="flex flex-col gap-2 items-center justify-center bg-white p-4">
            <img
              src="https://vstupni.expert-dev.cz/wp-content/uploads/2024/04/google_logo.png"
              alt="Google Logo"
              className="w-24 h-auto"
            />
            <div className="text-2xl font-medium mt-2">
              4.9<span className="font-medium">/5</span>
            </div>
            <img
              src="https://vstupni.expert-dev.cz/wp-content/uploads/2024/04/rating-1024x232.png"
              alt="Rating"
              className="w-full h-auto bg-white"
            />
          </div>
        </div>

        <div
          className="w-1/5 bg-white m-6 pt-4 rounded-full"
          style={{
            borderBottomLeftRadius: "0",
            borderTopLeftRadius: "0",
          }}
        >
          <div className="flex flex-col items-center justify-center">
            <div>
              <h2 className="text-16 font-bold font-QuickSand">
                Programováno
              </h2>
              <hr className="w-full border-t border-gray-500 my-2" />
            </div>
            <div className="text-22 font-bold font-QuickSand">
              5,000 h
            </div>
            <div className="psani-text mt-4">
              <p className="typewrite  text-20 text-black font-normal font-QuickSnad">
                <Typewriter text="Hello World" speed={150} />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right animation  */}
      <div className="w-[20%] flex items-center justify-center">
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
                    className="w-full h-auto text-white"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://vstupni.expert-dev.cz/wp-content/uploads/2021/09/facebook.png"
                    alt="facebook"
                    title="facebook"
                    className="w-full h-auto text-white"
                  />
                </div>
                <div className="swiper-slide">
                  <img
                    src="https://vstupni.expert-dev.cz/wp-content/uploads/2021/09/sklik.png"
                    alt="sklik"
                    title="sklik"
                    className="w-full h-auto text-white"
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
