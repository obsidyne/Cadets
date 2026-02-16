'use client';
import React, { useEffect, useState } from "react";

const Hero = React.forwardRef((props, ref) => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div 
        ref={ref} 
        className="home relative flex flex-col justify-center items-center min-h-screen w-full pt-16 px-4 overflow-hidden max-sm:min-h-screen max-sm:px-2"
      >
        {/* Text Content */}
        <div
          className="relative z-10 flex flex-col items-center w-full will-change-transform transition-transform duration-100 ease-out"
          style={{
            transform: `translateY(-${offsetY * 0.5}px)`,
          }}
        >
          {/* Main EMPOWER text stack with gradient and fade (bottom to top) */}
          <div className="flex flex-col items-center leading-[0.75] mb-2 w-full max-sm:items-center max-sm:leading-[0.7]">
            <div className="relative --bg-red-200">
            <h2 className="font-['Special_Gothic_Expanded_One',sans-serif] font-bold text-[clamp(3rem,10vw,8rem)] m-0 bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] bg-clip-text text-transparent opacity-20 tracking-tight max-sm:text-[clamp(4rem,15vw,6rem)]">
              EMPOWER
            </h2>
            <h2 className="font-['Special_Gothic_Expanded_One',sans-serif] font-bold text-[clamp(3rem,10vw,8rem)] m-0 bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] bg-clip-text text-transparent opacity-40 tracking-tight max-sm:text-[clamp(4rem,15vw,6rem)]">
              EMPOWER
            </h2>
            <h2 className="font-['Special_Gothic_Expanded_One',sans-serif] font-bold text-[clamp(3rem,10vw,8rem)] m-0 bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] bg-clip-text text-transparent opacity-60 tracking-tight max-sm:text-[clamp(4rem,15vw,6rem)]">
              EMPOWER
            </h2>
            <h2 className="font-['Special_Gothic_Expanded_One',sans-serif] font-bold text-[clamp(3rem,10vw,8rem)] m-0 bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] bg-clip-text text-transparent opacity-80 tracking-tight max-sm:text-[clamp(4rem,15vw,6rem)]">
              EMPOWER
            </h2>
            
            {/* Last line with "with" - centered EMPOWER with offset "with" */}
            <div className="flex items-center justify-center w-full relative">
              <h2 className="font-['Special_Gothic_Expanded_One',sans-serif] font-bold text-[clamp(3rem,10vw,8rem)] m-0 bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] bg-clip-text text-transparent opacity-100 tracking-tight leading-[0.75] max-sm:text-[clamp(4rem,15vw,6rem)] max-sm:leading-[0.7]">
                EMPOWER
              </h2>
            </div>

            <div className="hidden md:block bottom-[3rem] right-[-101%] w-[min-content] border-black relative font-['Special_Gothic_Expanded_One',sans-serif] font-bold text-[clamp(1rem,10vw,4rem)] m-0 bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] bg-clip-text text-transparent opacity-100 tracking-tight leading-[0.75]">
              with
            </div>
            </div>

          </div>
        </div>

        {/* Title Section - Customs Cadets Corps */}
        <div
          className="relative z-10 mt-12 will-change-transform transition-transform duration-100 ease-out max-sm:mt-8 w-full"
          style={{
            transform: `translateY(-${offsetY * 0.3}px)`,
          }}
        >
          <h1 className="font-['Special_Gothic_Expanded_One',sans-serif] text-[clamp(2.5rem,8vw,5.5rem)] font-extrabold text-center m-0 leading-tight px-4 max-sm:text-[clamp(2.5rem,10vw,4rem)]">
            <span className="bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] bg-clip-text text-transparent">
              Customs Cadets Corps
            </span>
          </h1>
        </div>
      </div>
    </>
  );
});

Hero.displayName = 'Hero';

export default Hero;