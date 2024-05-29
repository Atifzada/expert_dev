import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

interface CardProps {
  title: string;
  description: string;
  image: string;
  tags: string;
}

const CardComponent: React.FC<CardProps> = ({
  title,
  description,
  image,
  tags,
}) => {

  const [isHovered, setIsHovered] = useState(false);
  const [isRotate, setIsRotate] = useState(false);

  return (
    <div className="relative w-full max-w-lg shadow-lg">
      <div className="w-full rounded-3xl cursor-pointer overflow-hidden">
        <img
          src={image}
          alt={title}
          className="rounded-3xl transition-transform transform hover:scale-105 "
        />
      </div>
      <div
        className={`absolute -bottom-[15%] transform text-white transition-all duration-300 flex justify-center w-full cursor-pointer`}
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <div className="custom-class bg-custom-red bg-opacity-100 flex-col justify-center items-center py-2 sm:py-8 w-[85%] rounded-[2.5rem] sm:rounded-[4.5rem] text-center rounded-bl-none sm:rounded-bl-none">
          <h2 className="text-[0.5rem] sm:text-[1.125rem] font-bold hover:text-white hover:cursor-pointer transition-transform">{title}</h2>
          <p className="text-[0.35rem] sm:text-[0.85rem] text-gray-300 hover:text-white hover:cursor-pointer transition-transform">{tags}</p>
          <div className={`flex flex-col items-center justify-center gap-1 sm:gap-2 transition-transform ${!isHovered ? 'hidden' : 'flex'}`}>
            <div className="border-t-2 border-white w-[7rem] my-1 sm:my-2" />
            <p className="text-[0.5rem] sm:text-[0.85rem] text-center w-[80%]">{description}</p>
            <div
              className="rounded-[0.25rem] sm:rounded-2xl p-1 sm:p-4 bg-gray-700 flex items-center justify-center"
              onMouseEnter={(e) => {
                setIsRotate(true);
              }}
              onMouseLeave={(e) => {
                setIsRotate(false);
              }}
            >
              <FaPlus className={`text-white text-[0.5rem] sm:text-xl cursor-pointer`}
                onMouseEnter={(e) => {
                  if (isRotate) {
                    e.currentTarget.classList.add('rotatePlus');
                    e.currentTarget.classList.remove('rotateRev');
                  }
                }}
                onMouseLeave={(e) => {
                  if (isRotate) {
                    e.currentTarget.classList.remove('rotatePlus');
                    e.currentTarget.classList.add('rotateRev');
                  }
                }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
