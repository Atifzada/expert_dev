"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegBell, FaRegBuilding, FaInstagram } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineFacebook, MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  const [hoveredItem, setHoveredItem] = useState("");

  return (
    <footer className="bg-black text-white">
      <div className="bg-black items-center">
        <section className="px-2 lg:p-8 sm:p-2 sm:mx-2 md:flex md:flex-col sm:flex sm:flex-col sm:items-center lg:flex items-center lg:flex-row sm:gap-4 md:gap-4 lg:gap-4">
          <div className="p-8">
            <Link href="/" passHref>
              <Image src="/logo2.svg" alt="Logo" width={300} height={75} />
            </Link>
          </div>
          <div
            className="w-full main-search flex gap-4 grow items-start rounded-[60px] bg-custom-black sm:flex flex-col sm:w-full md:flex-col md:w-full p-6 lg:flex-row "
            style={{ borderBottomLeftRadius: "0" }}
          >
            <div className="lg:w-1/2 flex gap-2">
              <FaRegBell className="text-5xl lg:text-6xl text-custom-red" />
              <div className="flex-col w-auto">
                <p className="text-custom-white font-QuickSand text-12 font-bold lg:text-16 lg:font-semibold">
                  Získejte nejnovější zprávy
                </p>
                <p className="text-custom-white font-QuickSand text-14 font-medium lg:text-32 lg:font-bold ">
                  Sledujte nás!
                </p>
              </div>
            </div>
            <div
              className="w-full flex justify-between items-center px-2 flex-grow lg:px-4 bg-white rounded-full"
              style={{ borderBottomLeftRadius: 0 }}
            >
              <div>
                <input
                  className="search_input pl-4 py-3 rounded-full pr-16 font-semibold text-15 placeholder-b-black"
                  type="text"
                  placeholder="Váš e-mail"
                />
              </div>

              <div>
                <Link href="/" passHref>
                  <Image
                    className="search_icon bg-custom-red rounded-full cursor-pointer"
                    style={{ borderBottomLeftRadius: 0 }}
                    src="/search-btn.svg"
                    alt="Search Icon"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="main-div p-16 flex flex-col items-center justify-center sm:flex-row sm:flex-wrap sm:justify-center lg:justify-around lg:items-start">
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 text-center sm:text-center lg:text-left">
          <h2 className="text-white font-Balooc font-semibold text-28">
            O nás
          </h2>
          <div className="mt-2">
            <p className="text-white text-15 mt-6 font-QuickSand font-medium">
              Expert Dev je agentura zabývající se webovým designem a marketingem – specializují se na konzultace a implementaci SEO, Google Ads…a celkově digitálních marketingových kampaní.
            </p>
            <div className="flex gap-4 mt-6 justify-center lg:justify-start">
              <MdOutlineFacebook className="text-white text-22 font-semibold hover:scale-110 transform transition duration-300" />
              <FaTwitter className="text-white text-22 font-semibold hover:scale-110 transform transition duration-300" />
              <RxLinkedinLogo className="text-white text-22 font-semibold hover:scale-110 transform transition duration-300" />
              <FaYoutube className="text-white text-22 font-semibold hover:scale-110 transform transition duration-300" />
              <FaInstagram className="text-white text-22 font-semibold hover:scale-110 transform transition duration-300" />
            </div>
          </div>
        </div>
        <div className="w-full my-4 sm:w-1/2 lg:w-1/4 px-4 text-center sm:text-center lg:text-left">
          <h2 className="text-white font-Balooc font-extrabold text-28">
            Naše služby
          </h2>
          <div className="mt-4">
            <div className="text-white text-16 font-Ballo font-normal pb-4 relative" onMouseEnter={() => setHoveredItem("Tvorba webových stránek")} onMouseLeave={() => setHoveredItem("")}>
              {hoveredItem === "Tvorba webových stránek" && (
                <FaArrowRightLong className="text-custom-red mr-2 absolute left-0 top-1/3 transform -translate-y-2/3" />
              )}
              <span className="ml-4">Tvorba webových stránek</span>
            </div>
            <div className="text-white text-16 font-Ballo font-normal pb-4 relative" onMouseEnter={() => setHoveredItem("SEO")} onMouseLeave={() => setHoveredItem("")}>
              {hoveredItem === "SEO" && (
                <FaArrowRightLong className="text-custom-red mr-2 absolute left-0 top-1/3 transform -translate-y-2/3" />
              )}
              <span className="ml-4">SEO</span>
            </div>
            <div className="text-white text-16 font-Ballo font-normal pb-4 relative" onMouseEnter={() => setHoveredItem("Marketing a sociální sítě")} onMouseLeave={() => setHoveredItem("")}>
              {hoveredItem === "Marketing a sociální sítě" && (
                <FaArrowRightLong className="text-custom-red mr-2 absolute left-0 top-1/3 transform -translate-y-2/3" />
              )}
              <span className="ml-4">Marketing a sociální sítě</span>
            </div>
            <div className="text-white text-16 font-Ballo font-normal pb-4 relative" onMouseEnter={() => setHoveredItem("Grafika a vizualizace")} onMouseLeave={() => setHoveredItem("")}>
              {hoveredItem === "Grafika a vizualizace" && (
                <FaArrowRightLong className="text-custom-red mr-2 absolute left-0 top-1/3 transform -translate-y-2/3" />
              )}
              <span className="ml-4">Grafika a vizualizace</span>
            </div>
            <div className="text-white text-16 font-Ballo font-normal pb-4 relative" onMouseEnter={() => setHoveredItem("Vývoj aplikací PHP")} onMouseLeave={() => setHoveredItem("")}>
              {hoveredItem === "Vývoj aplikací PHP" && (
                <FaArrowRightLong className="text-custom-red mr-2 absolute left-0 top-1/3 transform -translate-y-2/3" />
              )}
              <span className="ml-4">Vývoj aplikací PHP</span>
            </div>
            <div className="text-white text-16 font-Ballo font-normal pb-4 relative" onMouseEnter={() => setHoveredItem("Vývoj aplikací Javascript")} onMouseLeave={() => setHoveredItem("")}>
              {hoveredItem === "Vývoj aplikací Javascript" && (
                <FaArrowRightLong className="text-custom-red mr-2 absolute left-0 top-1/3 transform -translate-y-2/3" />
              )}
              <span className="ml-4">Vývoj aplikací Javascript</span>
            </div>
          </div>
        </div>
        <div className="w-full mb-4 sm:w-1/2 lg:w-1/4 px-4 text-center sm:text-center lg:text-left">
          <h2 className="text-white font-Balooc font-semibold text-28">
            Rychlé odkazy
          </h2>
        </div>
        <div className="w-full sm:w-1/2 lg:w-1/4 px-4 text-center sm:text-center lg:text-left">
          <h2 className="text-white font-Balooc font-semibold text-28">
            Kontaktujte
          </h2>
          <div className="call">
            <div className="flex gap-1 mt-4 justify-center lg:justify-start">
              <FaPhoneAlt className="text-2xl pl-2 mt-1 text-custom-red" />
              <p className="text-white pl-2 font-normal text-16 font-Baloo">
                Zavolejte nám
              </p>
            </div>
            <p className="text-white font-semibold text-16 font-Baloo mt-2">
              +420 608 657 281
            </p>
          </div>
          <div className="email mt-6">
            <div className="flex gap-1 justify-center lg:justify-start">
              <MdEmail className="text-2xl text-custom-red" />
              <p className="text-white pl-2 font-normal text-16 font-Baloo">
                Napište nám
              </p>
            </div>
            <p className="text-white font-semibold text-16 font-Baloo mt-2">
              info@expert-dev.cz
            </p>
          </div>
          <div className="address mt-6">
            <div className="flex gap-1 justify-center lg:justify-start">
              <FaRegBuilding className="text-2xl text-custom-red" />
              <p className="text-white pl-2 font-normal text-16 font-Baloo">
                Adresa kanceláře
              </p>
            </div>
            <p className="text-white font-semibold text-16 font-Baloo mt-2">
              třída Tomáše Bati 87 <br />
              760 01 Zlín, Česká republika
            </p>
          </div>
        </div>
      </div>

      <div className="h-20 bg-b-black flex items-center justify-center font-Baloo font-normal text-14">
  <p className="text-grey font-normal flex items-center">
    <span className="font-medium text-14">© 2024</span>
    <span className="inline-block h-5 w-px sm:w-half-px-xs bg-grey mx-1/2"></span>
    <span className="ml-1 font-medium text-14">Expert Dev, s.r.o.</span>
    <span className="inline-block h-5 w-px sm:w-half-px-xs bg-grey mx-1/2"></span>
    <span className="font-medium text-14">Všechna práva vyhrazena</span>
    <span className="inline-block h-5 w-px sm:w-half-px-xs bg-grey mx-1/2"></span>
    <span className="font-medium font-Baloo text-14">GDPR</span>
  </p>
</div>

    </footer>
  );
};

export default Footer;
