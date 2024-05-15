import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegBell } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="bg-black max-w-full items-center">
          <section className="flex gap-20 py-6 px-28">
            <div className="p-8">
              <Link href="/" passHref>
                <Image src="/logo2.svg" alt="Logo" width={275} height={75} />
              </Link>
            </div>
            <div className="main-search w-full flex items-center rounded-full bg-custom-black relative"
             style={{
                borderBottomLeftRadius: "0"}}>
              <div className="flex p-6 ">
                <FaRegBell className="text-6xl text-custom-red" />
                <div className="px-6">
                  <span className="text-custom-white text-12">
                    Získejte nejnovější zprávy
                  </span>
                  <p className="text-custom-white text-22">Sledujte nás!</p>
                </div>
              </div>
              <div className="w-[65%] relative">
                <div className="search flex justify-center items-center">
                  <input
                    className="search_input w-full px-4 py-4 rounded-full bg-white pl-4 pr-16"
                    style={{
                        borderBottomLeftRadius: "0"}}
                    type="text"
                    placeholder="Your e-mail"
                  />
                  <Link href="/" passHref>
                    <Image
                      className="search_icon absolute right-0 top-1.5 bottom-0 bg-custom-red rounded-full px-1 py-1 cursor-pointer mr-4"
                      style={{
                        borderBottomLeftRadius: "0"}}
                      src="/search-btn.svg"
                      alt="Search Icon"
                      width={40}
                      height={30}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
};

export default Footer;
