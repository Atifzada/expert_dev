"use client"
import React, { useState, useEffect, useRef } from "react";
import { NAV_LINK } from "@/constant";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showReferenceDropdown, setShowReferenceDropdown] = useState(false);
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
        <VscThreeBars className="text-[2rem] cursor-pointer" />
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
    </nav>
  );
};

export default Navbar;
