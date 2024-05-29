import React from "react";
import { LuTriangleRight } from "react-icons/lu";

const Section13 = () => {
    return (
        <section className="bg-custom-gradient px-16 pt-20 hidden lg:block">
            <div className="outermost_most flex flex-col gap-6">

                {/* upper portion */}
                <div className="flex flex-col gap-2 items-center">
                    <div className="flex items-center">
                        <LuTriangleRight className="text-pink" style={{ fill: "#FF0066" }} />
                        <span className="text-16 text-pink font-QuickSand font-bold pl-2">
                            BLOG A NOVINKY
                        </span>
                    </div>
                    <div>
                        <h2 className="text-40 font-extrabold font-Balooc text-black">
                            Nejnovější články z našeho blogu
                        </h2>
                    </div>
                    <div className="w-1/2 mx-auto text-center">
                        <p className="text-16 font-QuickSand font-medium text-black">
                            V našem blogu vám pravidelně přinášíme nejaktuálnější informace, různé tipy a návody ze světa digitálního marketingu a technologií. Prohlédněte si naše nejnovější články a objevte inspiraci pro vaše digitální strategie.
                        </p>
                    </div>
                </div>

                {/* Lower portion/image card portion */}
                <div className="grid grid-flow grid-cols-4 grid-rows-2 gap-6 min-h-[80vh]">
                    <div className="col-span-2 flex flex-col gap-6">
                    <div className="bg-blog1 bg-no-repeat bg-center rounded-[64px] duration-300 relative border-transparent border-4 hover:border-custom-red cursor-pointer" style={{ borderBottomLeftRadius: "0", backgroundSize: "cover" }}>
                            <div className="absolute inset-0 bg-custom-red opacity-0 hover:opacity-30 rounded-[60px]" style={{ borderBottomLeftRadius: "0" }}></div>
                            <div className="min-h-[65vh] flex items-end p-4">
                                <p className="text-white text-12 font-QuickSand font-medium px-3 py-1 bg-custom-red rounded-full" style={{ borderBottomLeftRadius: "0" }}>BLOG</p>
                            </div>
                        </div>
                        <div>
                            <span className="text-custom-red text-14 font-semibold font-QuickSand">26. 2. 2024</span>
                        </div>
                        <div>
                            <h2 className="text-black text-21 font-semibold font-Balooc">
                                <a href="https://vstupni.expert-dev.cz/ppc-novinky-2024-co-se-chysta-v-online-marketingu/">
                                    PPC novinky 2024 – co se chystá v online marketingu?&nbsp;</a>
                            </h2>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-6">
                    <div className="bg-blog2 bg-no-repeat bg-center rounded-[64px] duration-300 relative border-transparent border-4 hover:border-custom-red cursor-pointer" style={{ borderBottomLeftRadius: "0", backgroundSize: "cover" }}>
                            <div className="absolute inset-0 bg-custom-red opacity-0 hover:opacity-30 rounded-[60px]" style={{ borderBottomLeftRadius: "0" }}></div>
                            <div className="min-h-[30vh] flex items-end p-4">
                                <p className="text-white text-12 font-QuickSand font-medium px-3 py-1 bg-custom-red rounded-full" style={{ borderBottomLeftRadius: "0" }}>BLOG</p>
                            </div>
                        </div>
                        <div>
                            <span className="text-custom-red text-14 font-semibold font-QuickSand">24. 1. 2024</span>
                        </div>
                        <div>
                            <h2 className="text-black text-21 font-semibold font-Balooc">
                                <a href="https://vstupni.expert-dev.cz/5-kroku-k-uspesnemu-zviditelneni-vaseho-noveho-e-shopu/  ">
                                5 kroků k úspěšnému zviditelnění vašeho nového e-shopu &nbsp;</a>
                            </h2>
                        </div>
                        <div>
                            <p className="text-lb text-14 font-QuickSand font-medium">V dnešní době je online trh přeplněný. Proto je pro každý nový e-shop zásadní vědět, jak vyniknout a zaujmout svou cílovou skupinu. Zviditelnění vašeho e-shopu</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                    <div className="bg-blog3 bg-no-repeat bg-center rounded-[64px] duration-300 relative border-transparent border-4 hover:border-custom-red cursor-pointer" style={{ borderBottomLeftRadius: "0", backgroundSize: "cover" }}>
                            <div className="absolute inset-0 bg-custom-red opacity-0 hover:opacity-30 rounded-[60px]" style={{ borderBottomLeftRadius: "0" }}></div>
                            <div className="min-h-[30vh] flex items-end p-4">
                                <p className="text-white text-12 font-QuickSand font-medium px-3 py-1 bg-custom-red rounded-full" style={{ borderBottomLeftRadius: "0" }}>BLOG</p>
                            </div>
                        </div>
                        <div>
                            <span className="text-custom-red text-14 font-semibold font-QuickSand">24. 12. 2023</span>
                        </div>
                        <div>
                            <h2 className="text-black text-21 font-semibold font-Balooc">
                                <a href="https://vstupni.expert-dev.cz/5-kroku-k-uspesnemu-zviditelneni-vaseho-noveho-e-shopu/  ">
                                Jak vytvořit dokonalý Optiweb?   &nbsp;</a>
                            </h2>
                        </div>
                        <div>
                            <p className="text-lb text-14 font-QuickSand font-medium">V dnešní digitální éře, kde online přítomnost hraje klíčovou roli v úspěchu, je tvorba webových stránek důležitým krokem pro každého, kdo chce oslovit svou cílovou</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                    <div className="bg-blog4 bg-no-repeat bg-center rounded-[64px] duration-300 relative border-transparent border-4 hover:border-custom-red cursor-pointer" style={{ borderBottomLeftRadius: "0", backgroundSize: "cover" }}>
                            <div className="absolute inset-0 bg-custom-red opacity-0 hover:opacity-30 rounded-[60px]" style={{ borderBottomLeftRadius: "0" }}></div>
                            <div className="min-h-[30vh] flex items-end p-4">
                                <p className="text-white text-12 font-QuickSand font-medium px-3 py-1 bg-custom-red rounded-full" style={{ borderBottomLeftRadius: "0" }}>BLOG</p>
                            </div>
                        </div>
                        <div>
                            <span className="text-custom-red text-14 font-semibold font-QuickSand">7. 12. 2023</span>
                        </div>
                        <div>
                            <h2 className="text-black text-21 font-semibold font-Balooc">
                                <a href="https://vstupni.expert-dev.cz/proc-je-vyhodne-mit-blog-na-vasem-e-shopu/">
                                Proč je výhodné mít blog na vašem e-shopu? &nbsp;</a>
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                    <div className="bg-blog5 bg-no-repeat bg-center rounded-[64px] duration-300 relative border-transparent border-4 hover:border-custom-red cursor-pointer" style={{ borderBottomLeftRadius: "0", backgroundSize: "cover" }}>
                            <div className="absolute inset-0 bg-custom-red opacity-0 hover:opacity-30 rounded-[60px]" style={{ borderBottomLeftRadius: "0" }}></div>
                            <div className="min-h-[30vh] flex items-end p-4">
                                <p className="text-white text-12 font-QuickSand font-medium px-3 py-1 bg-custom-red rounded-full" style={{ borderBottomLeftRadius: "0" }}>BLOG</p>
                            </div>
                        </div>
                        <div>
                            <span className="text-custom-red text-14 font-semibold font-QuickSand">27. 11. 2023</span>
                        </div>
                        <div>
                            <h2 className="text-black text-21 font-semibold font-Balooc">
                                <a href="https://vstupni.expert-dev.cz/5-kroku-k-uspesnemu-zviditelneni-vaseho-noveho-e-shopu/  ">
                                Přinese nadcházející rok revoluci v e-commerce? Hlavní trendy pro e-shopy v roce 2024  &nbsp;</a>
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                    <div className="bg-blog6 bg-no-repeat bg-center rounded-[64px] duration-300 relative border-transparent border-4 hover:border-custom-red cursor-pointer" style={{ borderBottomLeftRadius: "0", backgroundSize: "cover" }}>
                            <div className="absolute inset-0 bg-custom-red opacity-0 hover:opacity-30 rounded-[60px]" style={{ borderBottomLeftRadius: "0" }}></div>
                            <div className="min-h-[30vh] flex items-end p-4">
                                <p className="text-white text-12 font-QuickSand font-medium px-3 py-1 bg-custom-red rounded-full" style={{ borderBottomLeftRadius: "0" }}>BLOG</p>
                            </div>
                        </div>
                        <div>
                            <span className="text-custom-red text-14 font-semibold font-QuickSand">23. 11. 2023</span>
                        </div>
                        <div>
                            <h2 className="text-black text-21 font-semibold font-Balooc">
                                <a href="https://vstupni.expert-dev.cz/trendy-vyvoje-webu-v-roce-2024-teste-se-na-inovace/">
                                Trendy vývoje webu v roce 2024: Těšte se na inovace &nbsp;</a>
                            </h2>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="bg-blog7 bg-no-repeat bg-center rounded-[64px] duration-300 relative border-transparent border-4 hover:border-custom-red cursor-pointer" style={{ borderBottomLeftRadius: "0", backgroundSize: "cover" }}>
                            <div className="absolute inset-0 bg-custom-red opacity-0 hover:opacity-30 rounded-[60px]" style={{ borderBottomLeftRadius: "0" }}></div>
                            <div className="min-h-[30vh] flex items-end p-4">
                                <p className="text-white text-12 font-QuickSand font-medium px-3 py-1 bg-custom-red rounded-full" style={{ borderBottomLeftRadius: "0" }}>BLOG</p>
                            </div>
                        </div>
                        <div>
                            <span className="text-custom-red text-14 font-semibold font-QuickSand">13. 11. 2023</span>
                        </div>
                        <div>
                            <h2 className="text-black text-21 font-semibold font-Balooc">
                                <a href="https://vstupni.expert-dev.cz/navigace-svetem-dotaci-kdo-a-na-co-je-muze-ziskat/">
                                Navigace světem dotací: Kdo a na co je může získat?&nbsp;</a>
                            </h2>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Section13;
