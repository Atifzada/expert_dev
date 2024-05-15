import Link from "next/link";
import React from "react";
import { NAV_LINK } from "@/constant";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { VscThreeBars } from "react-icons/vsc";

const Navbar = () => {
  return (
    <>
      <nav
        className="flex items-center pl-8 cusrsor-pointer z-30 shadow-xl bg-white rounded-full ring-1 ring-slate-100 fixed w-[90%] min-h-[13%] left-[50%] top-10 translate-x-[-50%]"
        style={{
          borderBottomLeftRadius: "0",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Link href="/" passHref>
          <Image src="/logo.svg" alt="Logo" width={170} height={50} />
        </Link>
        {/* Desktop */}
        <ul className="hidden lg:flex ml-20 mr-8">
          {NAV_LINK.map((link, index) => (
            <li key={link.key} className={`relative mx-4 text-black ${index === NAV_LINK.length - 1 ? 'last-item' : ''}`}>
              <Link href={link.href}>
                <div className="flex items-center">
                  <span className="inline-block transition-all duration-300 ease-in-out border-b-2 border-transparent  text-16 font-Baloo font-semibold text-black hover:border-custom-red">
                    {link.label}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="border-l border-gray-300 h-16 m-4"></div>
        <div className="one flex gap-2 ml-4">
          <div className="pl-2 mt-1 text-custom-red">
            <FaPhone className="text-xl hover:text-black" />
          </div>
          <div className="pl-2 text-black">
            <span className="text-16 font-Quicksand font-semibold hover:text-custom-red">
              +420 608 657 281
            </span>
          </div>
        </div>
        <div className="ml-16">
          <div
            className="text-white cursor-pointer bg-custom-red px-2 py-1 rounded-full transition-colors duration-300 hover:bg-black"
            style={{ borderBottomLeftRadius: "0" }}
          >
            <span className="text-13 font-Quicksand font-normal">NEZÁVAZNÁ POPTÁVKA</span>
          </div>
        </div>
        <div className="pl-20 pr-6">
          <div className="group">
            <div className="bg-black text-white rounded-full border border-black p-2 group-hover:bg-custom-red group-hover:border-custom-red">
              <IoSearch className="text-xl cursor-pointer" />
            </div>
          </div>
        </div>
            <VscThreeBars className="text-4xl cursor-pointer" />
      </nav>
    </>
  );
};

export default Navbar;
