"use client";
import { LuTriangleRight } from "react-icons/lu";
import React, { useState } from "react";
import { TABS_DATA } from "@/constant";
import CardComponent from "./CardComponent";
import { GoDot } from "react-icons/go";

const Section3: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(TABS_DATA[0].key);

  const handleTabClick = (tabKey: string) => {
    setActiveTab(tabKey);
  };

  console.log(TABS_DATA);

  return (
    <section className="">
      <div className="flex flex-col gap-6 items-center px-20 pt-44 h-auto">
        <div className="flex items-center">
          <LuTriangleRight className="text-pink" style={{ fill: "#FF0066" }} />
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
          <div className="py-8 w-full flex flex-col justify-center items-center gap-2">
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
                    className={`${activeTab === tab.key ? "w-full flex flex-row items-center gap-6 flex-wrap" : "hidden"}`}
                    // className={`${activeTab === tab.key ? "w-full flex flex-row items-center gap-6" : "hidden"}`}
                    role="tabpanel"
                    aria-labelledby={`${tab.key}-tab`}
                  >
                    {tab.content.map((item, index) => (
                      <CardComponent
                        key={index}
                        title={item.title}
                        description={item.description}
                        image={item.image}
                        tags={item.tags}
                        className="flex-auto"
                        style={{ margin: '0 1rem' }} // Add margin between cards
                      />
                    ))}
                  </div>
                ))}
                <GoDot />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
