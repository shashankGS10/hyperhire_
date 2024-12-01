"use client";
import React,{ useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import type { Profile } from "@/types";


const levels = [
  "scale-90 opacity-80 z-10",
  "scale-100 z-20",
  "scale-90 opacity-80 z-10",
];


interface CarouselProps {
    profiles: Profile[];
  }
  

export default function Carousel({ profiles }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(1); // Start with middle card

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % profiles.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [profiles.length]);

  const handleLeftClick = () => {
    setActiveIndex(
      (prev) => (prev - 1 + profiles.length) % profiles.length
    );
  };

  const handleRightClick = () => {
    setActiveIndex((prev) => (prev + 1) % profiles.length);
  };

  return (
    <div className="relative flex h-full  justify-center ">
      {/* Price Tooltip */}

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-10 left-1/2 -translate-x-1/2 bg-white rounded-full px-6 py-2 shadow-lg z-30"
      >
        <div className="flex items-center gap-2">
          <span className="text-[#5EBFBF] font-extrabold">$</span>
          <span className="text-black">{profiles[activeIndex].price}</span>
        </div>
        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45"></div>
      </motion.div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-y-8">
        <button
          className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-30 hover:bg-gray-50 transition-colors"
          onClick={handleLeftClick}
          aria-label="Previous"
        >
          <span className="text-xl md:text-2xl text-gray-600">&#8249;</span>
        </button>
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence>
          {profiles.map((item, index) => {
            const position =
              (index - activeIndex + profiles.length) %
              profiles.length;

            return (
              <motion.div
              key={index}
              className={`absolute flex flex-col items-center p-4 sm:p-8 bg-white rounded-[24px] shadow-lg transition-all duration-500 ${levels[position]}`}
                style={{
                  width: "15em",
                  height: "25em",
                  left: `${50 + (position - 1) * 30}%`,
                  translateX: "-50%",
                  display: position >= 0 && position < 3 ? "flex" : "none",
                  scale: position === 1 ? 1 : 0.85,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {/* Profile Picture with Flag */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg">
                    <Image
                      width={96}
                      height={96}
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="absolute -bottom-1 right-0 text-xl">
                    {item.flag}
                  </span>
                </div>

                {/* Name and Role */}
                <h3 className="text-2xl font-bold text-gray-800 mb-1">
                  {item.name}
                </h3>
                <p className="text-[#4B6BF5] mb-6 text-base">{item.role}</p>

                {/* Skills - Updated styling */}
                <div className="flex flex-wrap justify-center">
                  {item.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 text-sm bg-[#F8F9FB] text-[#666D80] rounded-full whitespace-nowrap"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
      <div className="flex items-center justify-center gap-y-8">
      <button
        className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center shadow-lg z-30 hover:bg-gray-50 transition-colors"
        onClick={handleRightClick}
        aria-label="Next"
      >
        <span className="text-xl md:text-2xl text-gray-600">&#8250;</span>
      </button>
      </div>
    </div>
  );
}
