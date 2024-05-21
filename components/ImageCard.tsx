import React from "react";

interface ImageCardProps {
    name: string;
    bgImage: string;
    description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ name, bgImage, description }) => {
    return (
        <div className="group relative flex-wrap min-h-[500px] w-[28vw] overflow-hidden flex justify-between items-end mx-8 transform transition-transform duration-300 hover:translate-y-[-10px]"
            style={{
                borderBottomLeftRadius: "0px",
                borderBottomRightRadius: "100px",
                borderTopLeftRadius: "100px",
                borderTopRightRadius: "100px",
                backgroundImage: `url(${bgImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}
        >
            <div className="absolute inset-0 transition-all duration-300 to-transparent"></div>
            <div className="absolute bottom-4 left-0 right-0 bg-bb p-4 flex flex-col items-center"
                style={{
                    borderBottomLeftRadius: "0px",
                    borderBottomRightRadius: "0px",
                    borderTopLeftRadius: "80px",
                    borderTopRightRadius: "0px",
                }}
            >
                <h2 className="text-40 font-bold font-Balooc text-white">{name}</h2>
                <span className="text-16 text-custom-red font-QuickSand">{description}</span>
            </div>
            {/* Small image that appears on hover */}
            <img
                src='/talk_bg.png'
                alt="Small Hover Image"
                className="absolute top-6 left-6 w-16 h-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
        </div>
    );
};

export default ImageCard;
