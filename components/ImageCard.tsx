import React from "react";

interface ImageCardProps {
    name: string;
    bgImage: string;
    description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ name, bgImage, description }) => {
    return (
        <div className="relative w-[40vw]  max-w-xs">
            <div
                className="h-80 bg-cover"
                style={{ backgroundImage: `url(${bgImage})` }}
            ></div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 flex flex-col items-center rounded-b-lg">
                <h2 className="text-xl font-bold text-white">{name}</h2>
                <span className="text-md text-white">{description}</span>
            </div>
        </div>
    );
};

export default ImageCard;
