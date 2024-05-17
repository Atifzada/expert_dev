import React from "react";

interface CardProps {
  title: string;
  description: string;
  image: string;
  tags: string;
}

const CardComponent: React.FC<CardProps> = ({ title, description, image, tags }) => {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl shadow-lg transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-full transition-transform transform group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity opacity-0 group-hover:opacity-100 flex flex-col justify-center items-center p-4">
        <h2 className="text-white text-lg font-bold">{title}</h2>
        <p className="text-white text-sm">{tags}</p>
        <hr className="border-pink-500 w-16 my-2" />
        <p className="text-white text-center text-xs">{description}</p>
        <button className="mt-4 bg-black bg-opacity-50 text-white p-2 rounded-full">
          +
        </button>
      </div>
      <div className="absolute bottom-4 left-4 bg-pink-500 text-white p-4 rounded-xl">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm">{tags}</p>
      </div>
    </div>
  );
};

export default CardComponent;
