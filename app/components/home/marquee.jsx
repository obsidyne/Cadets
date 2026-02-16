"use client"

export default function Marquee() {
  return (
    <>
      <style jsx>{`
        @keyframes marquee-ltr {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee-ltr 25s linear infinite;
        }
      `}</style>
      
      <div className="w-screen overflow-hidden my-8">
        <div className="relative py-4 px-0 border-y-2 border-black/20 items-center select-none overflow-hidden flex bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] shadow-lg">
          {/* Animated text container - moves LEFT TO RIGHT */}
          <div className="flex gap-0 animate-marquee">
            <p className="flex-shrink-0 whitespace-nowrap px-8 text-white/90 font-medium text-base tracking-wide">
              ✦ Empowering Future Customs Officers ✦ Professional Training Programs ✦ Expert Guidance & Mentorship ✦ Join the Customs Cadet Corps ✦ Building Tomorrow's Leaders ✦ International Trade Excellence
            </p>
            <p aria-hidden="true" className="flex-shrink-0 whitespace-nowrap px-8 text-white/90 font-medium text-base tracking-wide">
              ✦ Empowering Future Customs Officers ✦ Professional Training Programs ✦ Expert Guidance & Mentorship ✦ Join the Customs Cadet Corps ✦ Building Tomorrow's Leaders ✦ International Trade Excellence
            </p>
          </div>
        </div>
      </div>
    </>
  );
}