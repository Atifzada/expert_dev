import Link from "next/link";
import React from "react";
import { NAV_LINK } from "@/constant";
import Image from "next/image";
import { FaPhone } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";

const Navbar = () => {
  return (
    <>
      <nav
        className="flex items-center px-8 z-30 shadow-xl bg-white rounded-full ring-1 ring-slate-100 fixed w-[90%] min-h-[12%] left-[50%] top-8 translate-x-[-50%]"
        style={{
          borderBottomLeftRadius: "0",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Link href="/" passHref>
          <Image src="/logo.svg" alt="Logo" width={140} height={50} />
        </Link>
        {/* Desktop */}
        <ul className="hidden lg:flex h-full ml-8">
          {NAV_LINK.map((link) => (
            <li key={link.key} className="relative mx-4 text-gray-500">
              <Link href={link.href}>
                <div className="flex items-center">
                  <span className="inline-block transition-all duration-300 ease-in-out border-b-2 border-transparent font-semibold text-15 text-black hover:border-custom-red">
                    {link.label}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="one flex gap-4">
          <div className="pl-2 mt-1 text-custom-red">
            <FaPhone className="text-xl hover:text-black" />
          </div>
          <div className="pl-2 text-black">
            <span className="text-xl text-14 font-semibold hover:text-custom-red">
              +420608657281
            </span>
          </div>
        </div>
        <div className="ml-20">
          <div
            className="text-white bg-custom-red px-4 py-2 rounded-full transition-colors duration-300 hover:bg-black"
            style={{ borderBottomLeftRadius: "0" }}
          >
            <span className="text-13 font-medium">NEZÁVAZNÁ POPTÁVKA</span>
          </div>
        </div>

        <div className="px-8">
          <div className="group">
            <div className="bg-black text-white rounded-full border border-black p-2 group-hover:bg-custom-red group-hover:border-custom-red">
              <IoSearch className="text-xl" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
