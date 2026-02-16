'use client';

import { useEffect, useRef, useState } from 'react';

export default function Mission() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`about flex justify-center items-stretch gap-8 w-full max-w-7xl my-16 mx-auto py-12 px-6 transition-all duration-700 ease-out max-lg:flex-col max-lg:gap-6 max-sm:px-4 max-sm:gap-5 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      {/* Mission Card */}
      <div 
        className={`flex-1 p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border-t-4 border-[#93254A] max-sm:p-6 ${
          isVisible ? 'opacity-100 translate-y-0 delay-200' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#93254A] to-[#000B26] rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>

        <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
          Our Mission
        </h3>
        <p className="text-gray-600 leading-relaxed text-center text-sm">
          Empowering individuals with comprehensive knowledge and practical
          skills for successful careers in customs corps and international trade.
        </p>
      </div>

      {/* Vision Card */}
      <div 
        className={`flex-1 p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border-t-4 border-[#000B26] max-sm:p-6 ${
          isVisible ? 'opacity-100 translate-y-0 delay-400' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#000B26] to-[#0B454E] rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
          </svg>
        </div>

        <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
          Our Vision
        </h3>
        <p className="text-gray-600 leading-relaxed text-center text-sm">
          To empower individuals with the knowledge, skills, and professional
          network needed to build successful careers in customs and international
          trade.
        </p>
      </div>

      {/* History Card */}
      <div 
        className={`flex-1 p-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border-t-4 border-[#0B454E] max-sm:p-6 ${
          isVisible ? 'opacity-100 translate-y-0 delay-[600ms]' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#0B454E] to-[#93254A] rounded-lg flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        <h3 className="text-xl font-bold mb-3 text-center text-gray-800">
          Our History
        </h3>
        <p className="text-gray-600 leading-relaxed text-center text-sm">
          Founded in 2018, Customs Cadets has grown into a trusted educational
          platform with a team of experienced customs professionals, trade experts.
        </p>
      </div>
    </div>
  );
}