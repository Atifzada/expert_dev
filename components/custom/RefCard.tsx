"use client";

import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa";

interface RefCardProps {
    bgImage: string;
    name: string;
    description: string;
}

const RefCard: React.FC<RefCardProps> = ({ bgImage, name, description }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleHover = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div className="relative flex w-[460px] h-[330px] rounded-[25px] overflow-hidden">
            <div className="w-full bg-cover" style={{ backgroundImage: `url(${bgImage})` }} onMouseEnter={(e) => {
                e.currentTarget.classList.remove('imgMovUp');
                e.currentTarget.classList.add('imgMovDown');
            }}
                onMouseLeave={(e) => {
                    e.currentTarget.classList.remove('imgMovDown');
                    e.currentTarget.classList.add('imgMovUp');
                }} />
            <div className="absolute left-0 bottom-8 w-[85%] h-[40%] rounded-r-[1.5rem] p-8 z-10 bg-custom-red opacity-0 cursor-pointer on-mouse-over" onMouseEnter={(e) => {
                e.currentTarget.classList.add('on-mouse-enter');
            }}
                onMouseLeave={(e) => {
                    e.currentTarget.classList.remove('on-mouse-enter');
                }}>
                <h6 className='absolute left-8 bottom-15 text-white font-Baloo text-[1.3rem] capitalize my-2'>{name}</h6>
                <p className='absolute left-8 bottom-8 text-gray-300 text-[0.85rem] uppercase my-2'>{description}</p>
                <div
                    className="absolute -right-7 bottom-9 w-[10%] h-[10%] rounded-[1rem] p-8 z-15 bg-gray-700 flex-none items-center justify-center"
                    onMouseEnter={(e) => {
                        const plusIcon = e.currentTarget.querySelector('.plus-icon');
                        if (plusIcon) {
                            plusIcon.classList.remove('rotateRev');
                            plusIcon.classList.add('rotatePlus');
                        }
                    }}
                    onMouseLeave={(e) => {
                        const plusIcon = e.currentTarget.querySelector('.plus-icon');
                        if (plusIcon) {
                            plusIcon.classList.remove('rotatePlus');
                            plusIcon.classList.add('rotateRev');
                        }
                    }}
                >
                    <FaPlus className='text-white text-2xl absolute left-5 top-5 plus-icon' />
                </div>
            </div>
        </div>
    );
}

export default RefCard;
