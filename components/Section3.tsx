import React from "react";
import { LuTriangleRight } from "react-icons/lu";
import { CUSTOM_TABS } from "@/constant";
import CardComponent from "./CardComponent";
// import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

// import { FreeMode, Pagination } from "swiper/modules";

// import { RxArrowTopRight } from "react-icons/rx";

const Section3: React.FC = () => {
  const cardsData = [
    {
      title: "Webové stránky na míru",
      description:
        "Cras sed tortor maximus, pellentesque lectus ac, condimentum nisi. Nullam aliquet pharetra lacinia. Donec.",
      image: "/img11.jpg", // replace with your image path
      tags: "BUSINESS - NEWS - SEO",
    },
    {
      title: "Webové stránky ze šablony",
      description:
        "Cras sed tortor maximus, pellentesque lectus ac, condimentum nisi. Nullam aliquet pharetra lacinia. Donec.",
      image: "/img12.jpg", // replace with your image path
      tags: "BUSINESS - MARKETING - SEO",
    },
    {
      title: "Mikrostránky",
      description:
        "Cras sed tortor maximus, pellentesque lectus ac, condimentum nisi. Nullam aliquet pharetra lacinia. Donec.",
      image: "/img13.jpg", // replace with your image path
      tags: "MARKETING - NEWS - SEO",
    },
    // {
    //   title: "Mikrostránky",
    //   description:
    //     "Cras sed tortor maximus, pellentesque lectus ac, condimentum nisi. Nullam aliquet pharetra lacinia. Donec.",
    //   image: "/img21.jpg", // replace with your image path
    //   tags: "MARKETING - NEWS - SEO",
    // },
    // {
    //   title: "Mikrostránky",
    //   description:
    //     "Cras sed tortor maximus, pellentesque lectus ac, condimentum nisi. Nullam aliquet pharetra lacinia. Donec.",
    //   image: "/img22.jpg", // replace with your image path
    //   tags: "MARKETING - NEWS - SEO",
    // },
  ];

  return (
    <section className="">
      <div className="flex flex-col gap-6 items-center px-56 py-44 h-auto">
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
                      <span className="border-b-2 border-transparent hover:border-custom-red transition-all duration-500 ease-in">
                        {tab.label}
                      </span>
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
              <div className="flex justify-center gap-6 py-10">
                {cardsData.map((card, index) => (
                  <CardComponent
                    key={index}
                    title={card.title}
                    description={card.description}
                    image={card.image}
                    tags={card.tags}
                  />
                ))}
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
