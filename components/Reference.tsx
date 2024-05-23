"use client";
import React, { useState, useLayoutEffect } from "react";
import { LuTriangleRight } from "react-icons/lu";
import { RefTabs, vse, weby, eshopy } from "@/constant";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import RefCard from "./custom/RefCard";

function Reference() {
    const [activeTab, setActiveTab] = useState("vse");
    const [hoveredLeft, setHoveredLeft] = useState(false);
    const [hoveredRight, setHoveredRight] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    const refCards = activeTab === "vse" ? vse : activeTab === "weby" ? weby : eshopy;

    const cardsPerSlide = 1;
    const mdCardsPerSlide = 2;
    const lgCardsPerSlide = 3;
    const [currentCardsPerSlide, setCurrentCardsPerSlide] = useState(cardsPerSlide);

    const numSlides = Math.ceil(refCards.length / currentCardsPerSlide);

    const nextSlide = () => {
        if (slideIndex < numSlides - 1) {
            setSlideIndex(slideIndex + 1);
        }
    };

    const prevSlide = () => {
        if (slideIndex > 0) {
            setSlideIndex(slideIndex - 1);
        }
    };

    useLayoutEffect(() => {
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

    return (
        <section className="my-16 py-16">
            <div className="mx-20 flex flex-col gap-2 items-center">
                <div className="flex items-center">
                    <LuTriangleRight className="text-pink" style={{ fill: "#FF0066" }} />
                    <span className="text-16 text-pink font-QuickSand font-bold ml-2">
                        VYBRANÉ PROJEKTY
                    </span>
                </div>
                <div>
                    <h2 className="text-40 font-extrabold font-Balooc text-black">
                        Reference
                    </h2>
                </div>
                <div className="w-1/2 mx-auto text-center">
                    <p className="text-center text-black leading-5 font-QuickSand font-medium">
                        Pomohli jsme firmám různých oborů a všech velikostí dosáhnout jejich marketingových cílů a posunout jejich byznys na další úroveň. Prohlédněte si některé z našich úspěšných projektů spokojených klientů.
                    </p>
                </div>
                <div className="">
                    <div className="tabs">
                        <ul
                            className="mb-5 flex list-none flex-row justify-center flex-wrap border-b-0 ps-0 py-8"
                            role="tablist"
                            data-twe-nav-ref
                        >
                            {RefTabs.map((tab) => (
                                <li key={tab.key} role="presentation">
                                    <button
                                        className={`px-7 text-24 font-QuickSand text-bb font-bold inline-block transition-all duration-300 ease-in-out ${activeTab === tab.key ? 'text-custom-red border-b-2 border-custom-red' : 'text-black'}`}
                                        onClick={() => setActiveTab(tab.key)}
                                        role="tab"
                                        aria-controls={tab.key}
                                        aria-selected={activeTab === tab.key ? "true" : "false"}
                                    >
                                        <span className="border-b-2 border-transparent ">
                                            {tab.label}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                        <div className="insert font-bold">
                            <div className="mx-16 text-20 font-medium font-QuickSand flex gap-4 flex-wrap justify-center">
                                <div className="mt-8 w-full overflow-hidden relative">
                                    <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
                                        {refCards.map((item, index) => (
                                            <div key={index} className="flex-none sm:w-full md:w-1/3 lg:w-1/5 overflow-hidden">
                                                <RefCard
                                                    bgImage={item.bgImage}
                                                    name={item.name}
                                                    description={item.description}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Reference;
