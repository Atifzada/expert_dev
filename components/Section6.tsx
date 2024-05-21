'use client'
import React, { useState, useEffect } from "react";
import ImageCard from "./ImageCard";
import { LuTriangleRight } from "react-icons/lu";
import { teamMembers } from "@/constant";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Section6 = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [hoveredLeft, setHoveredLeft] = useState(false);
    const [hoveredRight, setHoveredRight] = useState(false);

    const cardsPerSlide = 1; // Default to 1 card per slide
    const mdCardsPerSlide = 2; // 2 cards per slide on medium screens
    const lgCardsPerSlide = 3; // 3 cards per slide on large screens
    const [currentCardsPerSlide, setCurrentCardsPerSlide] = useState(cardsPerSlide);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1024) {
                setCurrentCardsPerSlide(lgCardsPerSlide);
            } else if (window.innerWidth >= 768) {
                setCurrentCardsPerSlide(mdCardsPerSlide);
            } else {
                setCurrentCardsPerSlide(cardsPerSlide);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const numSlides = Math.ceil(teamMembers.length / currentCardsPerSlide);

    const nextSlide = () => {
        if (slideIndex < numSlides - 1) {
            setSlideIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prevSlide = () => {
        if (slideIndex > 0) {
            setSlideIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <section className="flex flex-col items-center justify-center mb-20 relative">
            <div className="flex flex-col items-center justify-center gap-8">
                <div className="flex items-center justify-center">
                    <LuTriangleRight className="text-pink" style={{ fill: "#FF0066" }} />
                    <span className="text-16 text-pink font-QuickSand font-bold ml-4">
                        HLAVNÍ ČLENOVÉ TÝMU EXPERT DEV
                    </span>
                </div>
                <div className="mt-4">
                    <h2 className="text-40 font-Balooc font-extrabold text-black text-center">
                        Seznamte se s členy našeho <span className="text-custom-red">profesionálního</span> týmu
                    </h2>
                </div>
                <div className="mt-4 px-8">
                    <p className="text-16 text-center font-medium font-QuickSand text-bb px-96">
                        Jsme tým mladých, zkušených a kreativních specialistů, kteří žijí pro nové technologie, sledují aktuální trendy a rádi se učí novým věcem. Prozkoumejte náš příběh neustálého vývoje a transformace, která nás dovedla k tomu, kým jsme dnes.
                    </p>
                </div>
            </div>

            {/* Image cards portion */}
            <div className="mt-8 w-full overflow-hidden relative">
                <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex-none w-full md:w-1/2 lg:w-1/3">
                            <ImageCard
                                bgImage={member.bgImage}
                                name={member.name}
                                description={member.description}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Arrows */}
            <div className="text-2xl w-full flex justify-center gap-6 relative mt-12 left-1/2 transform -translate-x-1/2">
                <div
                    className={`cursor-pointer rounded-full w-16 h-16 flex items-center justify-center transition duration-300 ${hoveredLeft ? 'bg-custom-red text-white' : 'border border-custom-red'} ${slideIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onMouseEnter={() => setHoveredLeft(true)}
                    onMouseLeave={() => setHoveredLeft(false)}
                    onClick={prevSlide}
                >
                    <FaArrowLeft className={hoveredLeft ? 'text-white' : 'text-custom-red'} />
                </div>
                <div
                    className={`cursor-pointer rounded-full w-16 h-16 flex items-center justify-center transition duration-300 ${hoveredRight ? 'bg-custom-red text-white' : 'border border-custom-red'} ${slideIndex === numSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onMouseEnter={() => setHoveredRight(true)}
                    onMouseLeave={() => setHoveredRight(false)}
                    onClick={nextSlide}
                >
                    <FaArrowRight className={hoveredRight ? 'text-white' : 'text-custom-red'} />
                </div>
            </div>
        </section>
    );
};

export default Section6;
