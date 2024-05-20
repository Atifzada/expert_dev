import React from "react";
import ImageCard from "./ImageCard";
import { LuTriangleRight } from "react-icons/lu";
import { teamMembers } from "@/constant";

const Section6 = () => {
    return (
        <section className="flex flex-col items-center justify-center mb-20">
            <div className="flex flex-col items-center justify-center">
                <div className="flex items-center justify-center">
                    <LuTriangleRight className="text-pink" style={{ fill: "#FF0066" }} />
                    <span className="text-16 text-pink font-QuickSand font-bold ml-4">
                        HLAVNÍ ČLENOVÉ TÝMU EXPERT DEV
                    </span>
                </div>
                <div className="mt-4">
                    <h2 className="text-40 font-Balooc font-extrabold text-black text-center">
                        Seznamte se s členy našeho <span className="text-custom-red">profesionálního</span> týmu
                    </h2>
                </div>
                <div className="mt-4 px-8">
                    <p className="text-16 text-center font-medium font-QuickSand text-bb px-96">
                        Jsme tým mladých, zkušených a kreativních specialistů, kteří žijí pro nové technologie, sledují aktuální trendy a rádi se učí novým věcem. Prozkoumejte náš příběh neustálého vývoje a transformace, která nás dovedla k tomu, kým jsme dnes.
                    </p>
                </div>
            </div>

            {/* Image cards portion */}
            <div className="mt-8 flex gap-8">
                {teamMembers.map((member, index) => (
                    <ImageCard
                        key={index}
                        bgImage={member.bgImage}
                        name={member.name}
                        description={member.description}
                    />
                ))}
            </div>
        </section>
    );
};

export default Section6;
