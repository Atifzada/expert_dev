import React from "react";
import { LuTriangleRight } from "react-icons/lu";
import { FaCheck } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import Image from "next/image";

const Section4 = () => {
  return (
    <section className="my-20">
      <div className='mainContainer flex py-12 px-24 w-full'>
        {/* Image left container */}
        <div className="bg-section4 bg-auto bg-no-repeat flex-1 mt-12"></div>

        {/* Right container */}
        <div className="my-12 flex-1 gap-6">
          <div className="flex items-center mt-8">
            <LuTriangleRight className="text-pink" style={{ fill: "#FF0066" }} />
            <span className="text-16 text-pink font-QuickSand font-bold ml-4">
              KDO JSME?
            </span>
          </div>
          <div className="mt-8">
            <h2 className="text-40 font-Balooc font-extrabold text-black">
              Specialisté na digitální marketing
            </h2>
          </div>
          <div className="mt-8">
            <p className="text-16 font-medium font-QuickSand text-bb">
              V Expert Dev je našim primárním cílem dosahovat vynikajících výsledků pro naše klienty. Máme komplexní tým zkušených profesionálů, díky kterým nabídneme širokou škálu služeb šitých na míru unikátním potřebám našich klientů. Jdeme s nejnovějšími trendy a řídíme naše strategie tak, abychom zajistili efektivní oslovení a zapojení různých skupin zákazníků. Díky tomuto přístupu se nám daří překonávat očekávání klientů a podporovat jejich úspěch a oboustrannou spokojenost.
            </p>
          </div>
          <div className="mt-8">
            <div className="relative font-bold flex items-center">
              <FaCheck className="text-custom-red text-xl font-bold" />
              <span className="ml-2 text-16 font-semibold font-Baloo2">Jdeme s dobou, neustále hledáme nové cesty a možnosti</span>
            </div>
            <div className="relative font-bold flex items-center">
              <FaCheck className="text-custom-red text-xl font-bold" />
              <span className="ml-2 text-16 font-semibold font-Baloo2">Zkoumáme a testujeme stále se rozvíjející digitální technologie</span>
            </div>
            <div className="relative font-bold flex items-center">
              <FaCheck className="text-custom-red text-xl font-bold" />
              <span className="ml-2 text-16 font-semibold font-Baloo2">Čerpáme z vlastních zkušeností a poznatků</span>
            </div>
            <div className="relative font-bold flex items-center">
              <FaCheck className="text-custom-red text-xl font-bold" />
              <span className="ml-2 text-16 font-semibold font-Baloo2">Pravidelným školením se udržujeme mistry v oboru</span>
            </div>
          </div>

          <div className="flex mt-8">

            <div className="flex gap-12">
                <div className="flex gap-2 bg-custom-red rounded-full p-2 text-20 text-white font-medium font-QuickSand" style={{ borderBottomLeftRadius: "0" }}>
                  <p className="pl-2">Více o Expert Dev</p>
                  <Image
                    className="search_icon bg-custom-red rounded-full cursor-pointer"
                    src="/search-btn.svg"
                    alt="Search Icon"
                    width={28}
                    height={24}
                  />
                </div>

                <div className="flex gap-2 text-18 text-pink font-semibold font-QuickSand p-2">
                <BsChatDots className="text-3xl"/>
                  <p>Konzultace zdarma</p>
                </div>

            </div>

            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;