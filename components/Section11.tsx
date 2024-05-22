"use client";
import React, { useEffect } from "react";
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import autoplay styles

// Initialize the Swiper modules
Swiper.use([Navigation, Pagination, Autoplay]);

const Section11 = () => {
    useEffect(() => {
        const swiper = new Swiper('.swiper-container', {
            slidesPerView: 3, // Display as many slides as possible
            spaceBetween: 0, // No space between slides
            loop: true, // Loop the slides
            autoplay: {
                delay: 3000, // Time between slides in milliseconds (3000ms = 3s)
                disableOnInteraction: false, // Continue autoplay after interactions
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });

        return () => {
            swiper.destroy();
        };
    }, []);

    return (
        <section className="m-20 justify-center">
            <div className="container mx-auto">
                <div className="flex justify-center">
                    <div className="w-full max-w-5xl">
                        <div className="swiper-container">
                            <div className="swiper-wrapper justify-center">
                                {/* Your slides */}
                                <div className="swiper-slide">
                                    <img src="https://vstupni.expert-dev.cz/wp-content/uploads/2021/12/ak-nevaril.png" alt="Slide 1" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://vstupni.expert-dev.cz/wp-content/uploads/2021/12/bata.png" alt="Slide 2" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://vstupni.expert-dev.cz/wp-content/uploads/2021/12/readyall.png" alt="Slide 3" />
                                </div>
                                <div className="swiper-slide">
                                    <img src="https://vstupni.expert-dev.cz/wp-content/uploads/2021/12/security-segment.png" alt="Slide 4" />
                                </div>
                            </div>
                            {/* Add pagination and navigation */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section11;
