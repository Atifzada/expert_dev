"use client"
import React, { useState, useEffect, useRef } from "react";
import { NAV_LINK } from "@/constant";
import Image from "next/image";
import { FaPhone, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaInstagram, FaPhoneAlt, FaRegBuilding } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showReferenceDropdown, setShowReferenceDropdown] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const referenceLinkRef = useRef<HTMLLIElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleReferenceDropdown = () => {
    setShowReferenceDropdown((prevState) => !prevState);
  };

  const closeDropdown = () => {
    setShowReferenceDropdown(false);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024); // Adjust breakpoint as needed
    };

    handleResize(); // Initial check on component mount

    window.addEventListener('resize', handleResize); // Add event listener for window resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up on component unmount
    };
  }, []);

  const toggleOverlay = () => {
    setIsOverlayVisible((prevState) => !prevState);
  };

  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 cursor-pointer z-30 shadow-xl bg-white ring-1 ring-slate-100 fixed  ${scrolling ? "w-[100%]" : "md:rounded-full md:w-[90%] md:shadow-xl md:ring-1 md:top-10 fourK:w-[55%] fourK:top-20 left-0 right-0 ml-auto mr-auto"
        } `}
      style={{
        borderBottomLeftRadius: scrolling ? "" : "0",
      }}
    >
      <Image src="/logo.svg" alt="Logo" width={167} height={40} />
      {/* Desktop */}
      <ul className="hidden lg:flex lg:gap-6 lg:items-center lg:justify-between lg:w-auto ">
        {NAV_LINK.map((link, index) => (
          <li
            key={link.key}
            onMouseEnter={() => link.key === "reference" && toggleReferenceDropdown()}
            onMouseLeave={closeDropdown}
            ref={link.key === "reference" ? referenceLinkRef : null}
          >
            <Link href={link.href}>
              <div className="flex items-center justify-around w-full">
                <span className="transition-all duration-300 ease-in-out border-b-2 border-transparent text-16 font-Baloo font-bold text-black hover:border-custom-red">
                  {link.label}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex lg:border-l sm:border-gray-300 h-16" />
      <div className="hidden lg:flex items-center justify-center gap-2">
        <FaPhone className="text-xl text-custom-red hover:text-black" />
        <span className="text-16 font-Quicksand font-semibold hover:text-custom-red">+420 608 657 281</span>
      </div>
      <div
        className="hidden large:flex text-white cursor-pointer bg-custom-red px-2 py-1 rounded-full transition-colors duration-300 hover:bg-black"
        style={{ borderBottomLeftRadius: "0" }}
      >
        <span className="text-13 font-Quicksand font-normal">NEZÁVAZNÁ POPTÁVKA</span>
      </div>
      <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
        <div className="hidden lg:flex bg-black text-white rounded-full border border-black p-2 group-hover:bg-custom-red group-hover:border-custom-red">
          <IoSearch className="text-[1rem] cursor-pointer" />
        </div>
        <VscThreeBars className="text-[2rem] cursor-pointer lg:hidden" onClick={toggleOverlay} />
      </div>
      {/* Reference Dropdown */}
      {/* {showReferenceDropdown && referenceLinkRef.current && (
        <div
          className="absolute bg-white shadow-lg w-48"
          style={{
            left: referenceLinkRef.current.offsetLeft,
            top: referenceLinkRef.current.offsetTop + referenceLinkRef.current.offsetHeight,
          }}
          onMouseEnter={toggleReferenceDropdown}
          onMouseLeave={closeDropdown}
        >
          <ul className="">
            {NAV_LINK.find((link) => link.key === "reference")?.sublinks?.map((sublink, index) => (
              <li key={index}>
                <div className="text-black hover:text-custom-red block py-2 px-4 border-b border-black">
          <span className="font-semibold font-QuickSand text-16" onClick={() => (window.location.href = sublink.href)}>
            {sublink.label}
            </span>
          </div>
              </li>
            ))}
          </ul>
        </div>
      )} */}

{isOverlayVisible && (
  <div className="fixed inset-0 z-40 flex items-start justify-end bg-custom-gr p-8">
    <div className="w-full h-auto md:mt-2 absolute top-0 right-0 flex flex-col items-start justify-start gap-4 bg-white p-8 rounded-3xl md:w-1/2">
      <button
        className="absolute top-4 right-4 text-4xl font-medium text-black"
        onClick={toggleOverlay}
      >
        &times;
      </button>
      <Image src="/logo.svg" alt="Logo" width={167} height={40} />
      <input
        type="text"
        placeholder="Vyhledávání"
        className="w-full mt-4 p-2 border border-gray-300 bg-custom-gray rounded-md"
      />

      <ul className="flex flex-wrap gap-2 items-center mt-4">
        {NAV_LINK.map((link, index) => (
          <li key={link.key} className="mb-2">
            <Link href={link.href}>
              <span className="text-14 font-Baloo font-semibold text-black hover:text-custom-red">
                {link.label}
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <hr className="w-full border-custom-gray" />

      <div className="flex flex-col items-start mt-4">
        <div>
          <h2 className="text-28 font-Balooc text-custom-red font-extrabold">Kontaktujte O nás</h2>
        </div>

        <div className="flex gap-2 pt-4">
          <div className="">
            <FaPhoneAlt className="text-xl text-custom-red" />
          </div>
          <div>
            <p className="text-black font-normal text-14 font-Baloo">
              Zavolejte nám
            </p>
            <p className="text-black font-medium text-14 font-Baloo">
              +420 608 657 281
            </p>
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <div className="">
            <MdEmail className="text-xl text-custom-red" />
          </div>
          <div>
            <p className="text-black font-normal text-14 font-Baloo">
              Napište nám
            </p>
            <p className="text-black font-medium text-14 font-Baloo">
              info@expert-dev.cz
            </p>
          </div>
        </div>

        <div className="flex gap-2 pt-4">
          <div className="">
            <FaRegBuilding className="text-xl text-custom-red" />
          </div>
          <div>
            <p className="text-black font-normal text-14 font-Baloo">
              Adresa kanceláře
            </p>
            <p className="text-black font-medium text-14 font-Baloo">
              třída Tomáše Bati 87<br />
              760 01 Zlín, Česká republika
            </p>
          </div>
        </div>
        <div className="text-2xl flex mt-4 space-x-2">
          <a href="#" className="bg-custom-red rounded-full p-2 text-white"><FaFacebook /></a>
          <a href="#" className="bg-custom-red rounded-full p-2 text-white"><FaTwitter /></a>
          <a href="#" className="bg-custom-red rounded-full p-2 text-white"><FaLinkedin /></a>
          <a href="#" className="bg-custom-red rounded-full p-2 text-white"><FaYoutube /></a>
          <a href="#" className="bg-custom-red rounded-full p-2 text-white"><FaInstagram /></a>
        </div>
      </div>
    </div>
  </div>
)}

    </nav>
  );
};

export default Navbar;
