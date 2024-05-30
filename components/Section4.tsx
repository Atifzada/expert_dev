import React from "react";
import { LuTriangleRight } from "react-icons/lu";
import { FaCheck, FaArrowAltCircleRight } from "react-icons/fa";
import { BsChatDots } from "react-icons/bs";
import Image from "next/image";

const Section4 = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between w-full gap-4 px-4 md:px-12 large:px-28 py-10 my-16">
      <div className="flex items-center justify-center w-full sm:w-[80%] lg:w-[40%]">
        <Image src={'/O-nas.jpg'} alt="section-4" height={579} width={591
        }></Image>
      </div>
      <div className="hidden lg:flex lg:absolute lg:right-[50%]">
        <Image src={'/o-nas-sipka.png'} alt="section-4" height={150} width={71}></Image>
      </div>
      {/* Right container */}
      <div className="flex flex-col items-center lg:items-start lg:w-[50%] lg:gap-6 gap-4 p-2">
        <div className="flex items-center gap-2">
          <LuTriangleRight className="text-pink" style={{ fill: "#FF0066", height: '13px', width: '13px' }} />
          <span className="text-16 text-pink font-QuickSand font-semibold">
            KDO JSME?
          </span>
        </div>
        <h2 className="text-28 md:text-40 font-Balooc font-extrabold text-black leading-7 md:leading-10 text-center lg:text-left md:max-lg:pb-16">
          Specialisté na digitální marketing
        </h2>
        <p className="text-14 lg:text-16 leading-5 font-medium font-QuickSand text-black text-center lg:text-left">
          V Expert Dev je našim primárním cílem dosahovat vynikajících výsledků pro naše klienty. Máme komplexní tým zkušených profesionálů, díky kterým nabídneme širokou škálu služeb šitých na míru unikátním potřebám našich klientů. Jdeme s nejnovějšími trendy a řídíme naše strategie tak, abychom zajistili efektivní oslovení a zapojení různých skupin zákazníků. Díky tomuto přístupu se nám daří překonávat očekávání klientů a podporovat jejich úspěch a oboustrannou spokojenost.
        </p>
        <div className="flex flex-col items-start font-bold w-full">
          <div className="flex items-center gap-4">
            <FaCheck className="text-custom-red text-xl font-bold" />
            <span className="text-16 font-semibold font-Baloo2">Jdeme s dobou, neustále hledáme nové cesty a možnosti</span>
          </div>
          <div className="flex items-center gap-4">
            <FaCheck className="text-custom-red text-xl font-bold" />
            <span className="text-16 font-semibold font-Baloo2">Zkoumáme a testujeme stále se rozvíjející digitální technologie</span>
          </div>
          <div className="flex items-center gap-4">
            <FaCheck className="text-custom-red text-xl font-bold" />
            <span className="text-16 font-semibold font-Baloo2">Čerpáme z vlastních zkušeností a poznatků</span>
          </div>
          <div className="flex items-center gap-4">
            <FaCheck className="text-custom-red text-xl font-bold" />
            <span className="text-16 font-semibold font-Baloo2">Pravidelným školením se udržujeme mistry v oboru</span>
          </div>
        </div>
        <div className="sm:max-lg:py-6 flex flex-col large:flex-row items-center justify-between lg:items-start large:items-center w-full large:w-[80%] fourK:w-[60%] gap-2 lg:gap-8">
          <div className="flex items-center justify-around gap-2 large:w-[45%] fourK:w-[60%] bg-custom-red rounded-full p-2 text-white font-medium font-QuickSand" style={{ borderBottomLeftRadius: "0" }}>
            <p className="text-center font-medium leading-4 font-QuickSand text-16">Více o Expert Dev</p>
            <FaArrowAltCircleRight className="text-16 lg:text-20" />
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-2 w-full large:w-[60%] fourK:w-[40%] text-pink  font-QuickSand p-2">
            <BsChatDots className="text-20 md:text-28" />
            <p className="text-14 md:text-16 font-QuickSand font-semibold leading-4">Konzultace zdarma</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;