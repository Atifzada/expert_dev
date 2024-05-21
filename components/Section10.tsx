import React from 'react';
import { LuTriangleRight } from "react-icons/lu";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Section10 = () => {
    return (
        <section className='mb-20'>
            <div className='flex flex-col gap-2 items-center'>
                <div className="flex items-center">
                    <LuTriangleRight className="text-pink" style={{ fill: "#FF0066" }} />
                    <span className="text-16 text-pink font-QuickSand font-bold ml-2">
                        HODNOCENÍ
                    </span>
                </div>
                <div>
                    <h2 className="text-40 font-extrabold font-Balooc text-black">
                        Co o nás říkají zákazníci?
                    </h2>
                </div>
                <div className="w-1/2 mx-auto text-center">
                    <p className="text-16 font-QuickSand font-medium text-black">
                        Expert Dev poskytuje profesionální služby a má podporu mnoha spokojených zákazníků. Podívejte se, co někteří z nich říkají o našich službách.
                    </p>
                </div>
            </div>
            <div className="loop-container w-full flex flex-col items-center justify-center gap-2 mt-8 relative">
                <div className='recenze-stred text-center'>
                    <a tabIndex="0">
                        <span>
                            <img decoding="async" src="https://vstupni.expert-dev.cz/wp-content/uploads/elementor/thumbs/spokojeni-klienti-qmjze6b01lb0jysuta0sr3hmvbqkuziiw8w93iyex0.png" title="spokojeni-klienti" alt="spokojeni-klienti" loading="lazy" className="rounded" />
                        </span>
                    </a>
                </div>
                <div className="recenze-stred text-center">
                    <p className="text-16 font-QuickSand font-bold text-bb">S konečným výsledkem webu jsme velmi spokojeni</p>
                </div>    
                <div className="w-1/2 mx-auto text-center">
                    <p className='text-16 font-QuickSand font-medium text-bb'>Nejdůležitejší pro naši kancelář je rychlá a pružná reakce na drobné změny na hotových webech. Vždy je nabízeno řešení, optimalizace pro různá zařízení a postupy, které nám vyhovují. Expert dev a pan Nevařil neprosazují tvrdohlavě svou a mají věcný a profesionální přístup. Kolegové, kteří obsluhují služby webu chválí jejich provedení. Mohu jen doporučit</p>
                </div>   
                <br />
                <div className="text-center">
                    <h2 className="text-28 font-Balooc font-bold text-bb">Hodnocení 5/5</h2>
                    <img decoding="async" src="https://vstupni.expert-dev.cz/wp-content/uploads/2024/05/hodnoceni-5.png" alt="Hvězdičky" width="150" className="mx-auto mt-2" />
                </div>

                {/* Left Arrow */}
                <div className="ml-10 sm:ml-20 absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center transition duration-300 border border-custom-red text-custom-red text-2xl hover:bg-custom-red hover:text-white">
                    <FaArrowLeft />
                </div>

                {/* Right Arrow */}
                <div className="mr-10 sm:mr-20 absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer rounded-full w-8 sm:w-12 h-8 sm:h-12 flex items-center justify-center transition duration-300 border border-custom-red text-custom-red text-2xl hover:bg-custom-red hover:text-white">
                    <FaArrowRight />
                </div>
            </div>
        </section>
    );
};

export default Section10;
