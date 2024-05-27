"use client"
import React, { useState, useEffect } from "react";
import { TABS_DATA } from "@/constant";
import CardComponent from "./CardComponent";
import { GoDot } from "react-icons/go";

const Section3: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(TABS_DATA[0]?.key || "");
  const [windowSize, setWindowSize] = useState<number>(0);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
    setCurrentSlide(0);
  };

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  const getCardsPerView = () => {
    return windowSize >= 1024 ? 3 : windowSize >= 768 ? 2 : 1;
  };

  const getVisibleCards = () => {
    const currentTab = TABS_DATA.find((tab) => tab.key === activeTab);
    if (currentTab) {
      const cardsPerView = getCardsPerView();
      const startIndex = Math.min(currentSlide, currentTab.content.length - cardsPerView);
      const endIndex = startIndex + cardsPerView;
      return currentTab.content.slice(startIndex, endIndex);
    }
    return [];
  };

  const getTotalDots = () => {
    const currentTab = TABS_DATA.find((tab) => tab.key === activeTab);
    if (currentTab) {
      const cardsPerView = getCardsPerView();
      return Math.max(0, currentTab.content.length - cardsPerView + 1);
    }
    return 0;
  };

  const totalDots = getTotalDots();
  const visibleCards = getVisibleCards();

  return (
    <section className="">
      <div className="flex flex-col gap-6 items-center px-20 pt-44 h-auto">
        <div className="flex items-center">
          <span>Icon Placeholder</span>
          <span className="text-16 text-pink font-QuickSand font-bold ml-2">
            NAŠE SLUŽBY
          </span>
        </div>
        <div>
          <h2 className="text-40 font-extrabold font-Balooc text-black">
            Poskytujeme komplexní digitální služby
          </h2>
        </div>
        <div className="w-3/4 mx-auto text-center">
          <p className="text-16 font-medium font-QuickSand text-black">
            Snažíme se pomáhat firmám v jejich růstu z hlediska zvýšení prodejů,
            získání potenciálních zákazníků a značek. Neustále pracujeme na tom,
            abychom měli přehled o nejnovějších trendech a osvědčených
            postupech, které lze aplikovat v projektech pro naše klienty.
          </p>
        </div>
        <div>
          <div className="py-8 w-full flex flex-col justify-center items-center gap-4">
            <div className="tabs">
              <ul
                className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0 justify-center items-center"
                role="tablist"
                data-twe-nav-ref
              >
                {TABS_DATA.map((tab) => (
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
              <div className="">
                {TABS_DATA.map((tab) => (
                  <div
                    key={tab.key}
                    className={`${activeTab === tab.key ? "w-full flex flex-row items-center gap-6" : "hidden"}`}
                    role="tabpanel"
                    aria-labelledby={`${tab.key}-tab`}
                  >
                    {visibleCards.map((item, index) => (
                      <CardComponent
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        tags={item.tags}
                      />
                    ))}
                  </div>
                ))}
                <div className="flex justify-center mt-16">
                  {Array.from({ length: totalDots }).map((_, index) => (
                    <GoDot
                      key={index}
                      className={`text-3xl cursor-pointer ${index === currentSlide ? 'text-custom-red' : 'text-gray-400 hover:text-custom-red transition-all duration-300'}`}
                      onClick={() => handleDotClick(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
