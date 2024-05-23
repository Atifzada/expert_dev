import React from "react";
import { LuTriangleRight } from "react-icons/lu";

const Section12 = () => {
    return (
        <section className="m-20">
            <div className="mx-24 py-12 flex flex-col gap-2 items-center bg-black rounded-[100px]" style={{ borderBottomLeftRadius: "0" }}>
                {/* text section */}
                <div className="flex items-center gap-4">
                    <LuTriangleRight className="text-pink" style={{ fill: "#FF0066" }} />
                    <span className="text-16 text-white font-QuickSand font-bold ml-2">
                        ZAČNĚTE S NÁMI PRACOVAT
                    </span>
                </div>

                <div>
                    <h2 className="text-40 font-extrabold font-Balooc text-white">
                        Kontaktní <span className="text-custom-red">formulář</span>
                    </h2>
                </div>

                <div className="mx-auto text-center px-20">
                    <p className="text-center text-white leading-5 font-QuickSand font-medium">
                        Zaujala vás naše práce? Chcete se stát součástí týmu, kde je vzájemná podpora a pomoc na prvním místě? Nehledáte pouze práci, ale i kolektiv, ve kterém vám práce půjde od ruky?
                    </p>
                </div>

                {/* form section */}
                <div className="form mt-8">
                    <form action="/#wpcf7-f33869-p33807-o1" method="post" className="w-full" aria-label="Kontaktní formulář" noValidate>
                        <div className="m--2 grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <input size={60} className="w-full bg-white rounded-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white" aria-required="true" aria-invalid="false" placeholder="Jméno*" type="text" name="your-name" style={{ borderBottomLeftRadius: "0" }} />
                            </div>
                            <div>
                                <input size={60} className="w-full bg-white rounded-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white" aria-required="true" aria-invalid="false" placeholder="Telefon*" type="tel" name="phone" style={{ borderBottomLeftRadius: "0" }} />
                            </div>
                            <div>
                                <input size={60} className="w-full bg-white rounded-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white" aria-required="true" aria-invalid="false" placeholder="E-mail*" type="email" name="your-email" style={{ borderBottomLeftRadius: "0" }} />
                            </div>
                            <div className="font-Quicksand font-bol">
                                <select className="w-full bg-white font-Quicksand font-bol rounded-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white" aria-required="true" aria-invalid="false" name="vyber-pomoci" style={{ borderBottomLeftRadius: "0" }}>
                                    <option value="Tvorba webové stránky">Tvorba webové stránky</option>
                                    <option value="SEO">SEO</option>
                                    <option value="Marketing">Marketing</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6">
                            <textarea cols={40} rows={3} className="w-full bg-white rounded-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:bg-white" aria-required="true" aria-invalid="false" placeholder="Zpráva..." name="your-message" style={{ borderBottomLeftRadius: "0", marginRight: "10px" }}></textarea>
                        </div>
                        <div className="mt-4 flex justify-center">
                            <div className="bg-custom-red flex items-center rounded-full px-4">
                                <button type="submit" className="text-white text-18 font-normal font-QuickSand p-2 rounded-full" style={{ borderBottomLeftRadius: "0", marginRight: "10px" }}>
                                    <span>Začít konzultovat</span>
                                </button>
                                <img decoding="async" className="inline-block h-5" src="https://vstupni.expert-dev.cz/wp-content/uploads/2024/02/messenger.png" alt="Submit" />
                            </div>
                        </div>
                        <div className="wpcf7-response-output" aria-hidden="true"></div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Section12;
