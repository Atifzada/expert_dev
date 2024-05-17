import React from "react";
import { LuTriangleRight } from "react-icons/lu";
import { CUSTOM_TABS } from "@/constant";

const Section3 = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-6 items-center px-72 py-44 h-[70vh]">
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
        <div className="w-[70%]">
          <p className="text-16 font-medium font-QuickSand text-black">
            Snažíme se pomáhat firmám v jejich růstu z hlediska zvýšení prodejů,
            získání potenciálních zákazníků a značek. Neustále pracujeme na tom,
            abychom měli přehled o nejnovějších trendech a osvědčených
            postupech, které lze aplikovat v projektech pro naše klienty.
          </p>
        </div>
        <div>
          <div className="py-8">
            <div className="tabs">
              {/* Tabs navigation */}
              <ul
                className="mb-5 flex list-none flex-row flex-wrap border-b-0 ps-0"
                role="tablist"
                data-twe-nav-ref
              >
                {CUSTOM_TABS.map((tab) => (
                  <li key={tab.key} role="presentation">
                    <a
                      href={`#${tab.key}`}
                      className="px-7 text-24 font-QuickSand text-bb font-bold inline-block transition-all duration-300 ease-in-out"
                      data-twe-target={`#${tab.key}`}
                      role="tab"
                      aria-controls={tab.key}
                      aria-selected="false"
                    >
                      <span className="border-b-2 border-transparent hover:border-custom-red transition-all duration-500 ease-in">{tab.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
              {/* Tabs content */}
              <div className="mb-6">
                {/* {CUSTOM_TABS.map((tab) => (
                  <div
                    key={tab.key}
                    className="hidden opacity-0 transition-opacity duration-300 ease-linear data-[twe-tab-active]:block"
                    id={tab.key}
                    role="tabpanel"
                    aria-labelledby={`${tab.key}-tab`}
                  >
                    {`Tab content for ${tab.label}`}
                  </div>
                ))} */}
              </div>
            </div>
            <div>
                
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
