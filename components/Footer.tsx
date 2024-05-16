import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegBell, FaPhone, FaRegBuilding, FaInstagram } from "react-icons/fa";
import { MdOutlineFacebook, MdEmail } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-black text-white">
      <div className="bg-black items-center">
        <section className="flex gap-8 py-6 px-20">
          <div className="p-8">
            <Link href="/" passHref>
              <Image src="/logo2.svg" alt="Logo" width={300} height={75} />
            </Link>
          </div>
          <div className="main-search w-full flex items-center rounded-full bg-custom-black relative"
                  style={{
                    borderBottomLeftRadius: "0"}}
          >
            <div className="flex px-4">
              <FaRegBell className="text-6xl text-custom-red" />
              <div className="px-6">
                <p className="text-custom-white text-16 font-QuickSand font-semibold ">
                  Získejte nejnovější zprávy
                </p>
                <p className="text-custom-white text-32 font-QuickSand font-bold">
                  Sledujte nás!
                </p>
              </div>
            </div>
            <div className="w-[65%] relative">
              <div className="search flex justify-center items-center">
                <input
                  className="search_input w-full px-4 py-3 rounded-full bg-white pl-4 pr-16 font-semibold text-15 placeholder-b-black"
                  type="text"
                  placeholder="Váš e-mail"
                />
                <Link href="/" passHref>
                  <Image
                    className="search_icon absolute right-0 top-1 bottom-0 bg-custom-red rounded-full px-1 py-1 cursor-pointer mr-4"
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
      <div className="h-96 flex justify-around px-4 pt-6 gap-4 ">
        <div className="flex-col justify-center items-center">
          <h2 className="text-white font-Balloc font-semibold text-24">
            O nás
          </h2>
          <div className="mt-2">
            <span className="text-white text-15 mt-6 font-QuickSand font-medium">
              Expert Dev je agentura zabývající se webovým <br /> designem a
              marketingem – specializují <br /> se na konzultace a
              implementaci SEO, Google Ads…a <br /> celkově digitálních
              marketingových kampaní.
            </span>
            <div className="flex gap-6 mt-6">
            <MdOutlineFacebook className="text-white text-22 font-semibold hover:scale-110 transform transition duration-300" />
              <FaTwitter className="text-white text-22 font-semibold hover:scale-110 transform transition duration-300" />
              <RxLinkedinLogo className="text-white text-22 font-semibold hover:scale-110 transform transition duration-300" />
              <FaYoutube className="text-white text-22 font-semibold hover:scale-110 transform transition duration-300" />
              <FaInstagram className="text-white text-22 font-semibold hover:scale-110 transform transition duration-300" />
            </div>
          </div>
        </div>
        <div className="flex-col">
          <h2 className="text-white font-Balloc font-semibold text-24">
            Naše služby
          </h2>
          <div className="mt-4">
            <p className="text-white text-16 font-Ballo font-normal pb-4">
              Tvorba webových stránek
            </p>
            <p className="text-white text-16 font-Ballo font-normal pb-4">
              SEO
            </p>
            <p className="text-white text-16 font-Ballo font-normal pb-4">
              Marketing a sociální sítě
            </p>
            <p className="text-white text-16 font-Ballo font-normal pb-4">
              Grafika a vizualizace
            </p>
            <p className="text-white text-16 font-Ballo font-normal pb-4">
              Vývoj aplikací PHP
            </p>
            <p className="text-white text-16 font-Ballo font-normal pb-4">
              Vývoj aplikací Javascript
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-white font-Balloc font-semibold text-24">
            Rychlé odkazy
          </h2>
        </div>
        <div>
          <h2 className="text-white font-Balloc font-semibold text-24">
            Kontaktujte
          </h2>
          <div className="call">
            <div className="flex gap-1 mt-4">
              <FaPhone className="text-2xl pl-2 mt-1 text-custom-red" />
              <p className="text-white pl-2 font-normal text-16 font-Baloo">
                Zavolejte nám
              </p>
            </div>
            <p className="text-white font-semibold text-16 font-Baloo mt-2">
              +420 608 657 281
            </p>
          </div>
          <div className="email mt-6">
            <div className="flex gap-1">
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
            <div className="flex gap-1">
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
      <div className="h-20 bg-b-black flex items-center justify-center font-Baloo font-normal text-15">
        <p className="text-grey font-normal flex items-center">
          <span className="font-semibold">© 2024</span>
          <span className="inline-block h-5 w-px bg-grey mx-1"></span>
          <span className="ml-1 font-semibold">Expert Dev, s.r.o.</span>
          <span className="inline-block h-5 w-px bg-grey mx-1"></span>
          <span className="font-semibold">Všechna práva vyhrazena </span>
          <span className="inline-block h-5 w-px bg-grey mx-1"></span>
          <span className="font-semibold font-Baloo">GDPR</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
