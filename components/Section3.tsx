"use client"
import React, { useState, useEffect } from "react";
import { TABS_DATA } from "@/constant";
import CardComponent from "./CardComponent";
import { LuTriangleRight } from "react-icons/lu";
import { MdCircle } from "react-icons/md";

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
      <div className="flex flex-col gap-4 items-center px-4 lg:px-20 pt-44 h-auto">
        <div className="flex items-center">
          <LuTriangleRight className="text-pink" style={{ fill: "#FF0066", height: '13px', width: '13px' }} />
          <span className="text-16 text-pink font-QuickSand font-bold pl-3">
            NAŠE SLUŽBY
          </span>
        </div>
        <div>
          <h2 className="mx-auto text-center text-28 md:text-40 font-extrabold font-Balooc leading-10 text-black">
            Poskytujeme komplexní digitální služby
          </h2>
        </div>
        <p className="text-14 font-medium lg:w-[53%] lg:text-16 leading-[1.125rem] font-QuickSand text-black text-center">
          Snažíme se pomáhat firmám v jejich růstu z hlediska zvýšení prodejů,
          získání potenciálních zákazníků a značek. Neustále pracujeme na tom,
          abychom měli přehled o nejnovějších trendech a osvědčených
          postupech, které lze aplikovat v projektech pro naše klienty.
        </p>
        <div>
          <div className="py-4 w-full flex flex-col justify-center items-center">
            <div className="tabs">
              <ul
                className="flex list-none flex-row flex-wrap border-b-0 ps-0 justify-center items-center"
                role="tablist"
                data-twe-nav-ref
              >
                {TABS_DATA.map((tab) => (
                  <li key={tab.key} role="presentation">
                    <button
                      className={`px-7 text-20 md:text-24 leading-[3rem] font-QuickSand text-bb font-bold inline-block transition-all duration-300 ease-in-out ${activeTab === tab.key ? 'text-26 md:text-32' : 'text-bb'}`}
                      onClick={() => handleTabClick(tab.key)}
                      role="tab"
                      aria-controls={tab.key}
                      aria-selected={activeTab === tab.key ? "true" : "false"}
                    >
                      <span className="border-b-2 border-transparent hover:border-custom-red transition-all duration-500 ease-in capitalize">
                        {tab.label}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-12 ">
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
                <div className="flex justify-center mt-20 gap-2">
                  {Array.from({ length: totalDots }).map((_, index) => (
                    <MdCircle
                      key={index}
                      className="cursor-pointer transition-all duration-300"
                      style={{
                        color: index === currentSlide ? '#FF0000' : '#A0AEC0',
                        fill: index === currentSlide ? '#FF0000' : '#A0AEC0',
                      }}
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
