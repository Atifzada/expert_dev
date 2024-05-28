"use client";
import React, { useState } from "react";
import { LuTriangleRight } from "react-icons/lu";
import { CUSTOM_TABS_SECTION_7, FRONTEND_techItems, BACKEND_techItems, MOBILE_APPLICATION_techItems, OPEN_SOURCE_techItems } from "@/constant";

const Section7 = () => {
    const [activeTab, setActiveTab] = useState("Frontend");
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Change here

    const handleTabClick = (tabKey: string) => {
        setActiveTab(tabKey);
    };

    let techItems: any[] = [];

    switch (activeTab) {
        case "Frontend":
            techItems = FRONTEND_techItems;
            break;
        case "Backend":
            techItems = BACKEND_techItems;
            break;
        case "Mobilní aplikace":
            techItems = MOBILE_APPLICATION_techItems;
            break;
        case "Open Source":
            techItems = OPEN_SOURCE_techItems;
            break;
        default:
            techItems = [];
    }

    return (
        <section className="px-6 md:p-20">
            <div className="flex flex-col gap-2 items-center">
                <div className="flex gap-2 items-center">
                    <LuTriangleRight className="text-pink" style={{ fill: "#FF0066" }} />
                    <span className="text-16 text-center text-pink font-QuickSand font-bold">
                        NA TOHLE JSME EXPERTI
                    </span>
                </div>
                <div>
                    <h2 className="text-40 text-center font-extrabold font-Balooc text-black">
                        Technologie pro naši práci
                    </h2>
                </div>
                <div className="w-full md:w-1/2 text-center">
                    <p className="text-center text-black leading-5 font-QuickSand font-medium">
                        Věříme, že technologie hrají klíčovou roli v dosažení vynikajících výsledků v digitálním marketingu. Proto investujeme do nejmodernějších technologií a nástrojů, které nám umožňují vytvářet inovativní a efektivní projekty pro naše klienty.
                    </p>
                </div>
                <div className="tabs">
                    {/* Tabs navigation */}
                    <ul
                        className="mb-5 flex list-none flex-row justify-center flex-wrap border-b-0 ps-0 py-8"
                        role="tablist"
                        data-twe-nav-ref
                    >
                        {CUSTOM_TABS_SECTION_7.map((tab) => (
                            <li key={tab.key} role="presentation">
                                <button
                                    className={`px-7 text-24 font-QuickSand text-bb font-bold inline-block transition-all duration-300 ease-in-out ${activeTab === tab.key ? 'text-custom-red' : 'text-black'}`}
                                    onClick={() => handleTabClick(tab.key)}
                                    role="tab"
                                    aria-controls={tab.key}
                                    aria-selected={activeTab === tab.key ? "true" : "false"}
                                >
                                    <span className="border-b-2 border-transparent hover:border-custom-red transition-all duration-500 ease-in">
                                        {tab.label}
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                    {/* Tabs content */}
                    <div className="insert font-bold">
                        <div className="mx-16 text-20 font-medium font-QuickSand flex gap-4 flex-wrap justify-center">
                            {/* Map through the techItems array */}
                            {techItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center p-2"
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                >
                                    <div className={`relative p-4 rounded-full ${hoveredIndex === index ? 'bg-custom-red scale-loop' : ''}`}>
                                        <div className="relative w-16 h-16 rounded-full">
                                            <img
                                                src={hoveredIndex === index ? item.image2 : item.image}
                                                alt={item.title}
                                                className="w-full h-full object-contain"
                                            />
                                        </div>
                                    </div>
                                    <p className={`mt-4 text-center ${hoveredIndex === index ? 'visible-title text-custom-red' : 'hidden-title text-black'}`}>
                                        {item.title}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section7;
