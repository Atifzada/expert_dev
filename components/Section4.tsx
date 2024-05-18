import React from "react";
import { LuTriangleRight } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";

const Section4 = () => {
  return (
    <section className="mt-20">
      <div className='mainContainer flex py-12 px-24 w-full'>
        {/* Image left container */}
        <div className="bg-section4 bg-auto bg-no-repeat h-[90vh] flex-1"></div>

        {/* Right container */}
        <div className="my-12 flex-1">
          <div className="flex items-center mt-8">
            <LuTriangleRight className="text-pink" style={{ fill: "#FF0066" }} />
            <span className="text-16 text-pink font-QuickSand font-bold ml-4">
              KDO JSME?
            </span>
          </div>
          <div className="mt-8">
            <h2 className="text-40 font-extrabold font-Balooc text-black">
              Specialisté na digitální marketing
            </h2>
          </div>
          <div className="mt-8">
            <p className="text-16 font-medium font-QuickSand text-black">
              V Expert Dev je našim primárním cílem dosahovat vynikajících výsledků pro naše klienty. Máme komplexní tým zkušených profesionálů, díky kterým nabídneme širokou škálu služeb šitých na míru unikátním potřebám našich klientů. Jdeme s nejnovějšími trendy a řídíme naše strategie tak, abychom zajistili efektivní oslovení a zapojení různých skupin zákazníků. Díky tomuto přístupu se nám daří překonávat očekávání klientů a podporovat jejich úspěch a oboustrannou spokojenost.
            </p>
          </div>
          <div className="mt-8">
          <div>
          <FaCheck className="text-custom-red absolute left-0 top-1/3 transform -translate-y-2/3"/>
            <span className="ml-2 text-16 font-semibold font-Baloo">Jdeme s dobou, neustále hledáme nové cesty a možnosti</span>
          </div>
          <div>
          <FaCheck className="text-custom-red absolute left-0 top-1/3 transform -translate-y-2/3"/>
            <span className="ml-2 text-16 font-semibold font-Baloo">Zkoumáme a testujeme stále se rozvíjející digitální technologie</span>
          </div>
          <div>
          <FaCheck className="text-custom-red absolute left-0 top-1/3 transform -translate-y-2/3"/>
            <span className="ml-2 text-16 font-semibold font-Baloo">Čerpáme z vlastních zkušeností a poznatků</span>
          </div>
          <div>
          <FaCheck className="text-custom-red absolute left-0 top-1/3 transform -translate-y-2/3"/>
            <span className="ml-2 text-16 font-semibold font-Baloo">Pravidelným školením se udržujeme mistry v oboru</span>
          </div>
          </div>
          <div className="mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
