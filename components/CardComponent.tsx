import React from "react";

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
  return (
    <div className="relative w-full max-w-lg shadow-lg">
      <div className="w-full rounded-3xl cursor-pointer overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full transition-transform transform hover:scale-105 "
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-white transition-all hover:translate-y-0 flex justify-center w-full">
          <div className="custom-class bg-custom-red bg-opacity-100 flex-col justify-center items-center py-8 w-[85%] rounded-full text-center" style={{ borderBottomLeftRadius: "0" }}>
            <h2 className="text-lg font-bold hover:text-white hover:scale-110 transition-transform">{title}</h2>
            <p className="text-sm hover:text-white hover:scale-110 transition-transform">{tags}</p>
            <div className="hidden group-hover:block mt-2">
              <hr className="border-white w-16 my-2" />
              <p className="text-xs">{description}</p>
              <button className="mt-4 bg-black bg-opacity-50 text-white p-2 rounded-full">
                +
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full h-[75%] bg-custom-red bg-opacity-100 w-full rounded-2xl" style={{ borderBottomLeftRadius: "0" }}></div>
      </div>
    </div>
  );
};

export default CardComponent;
