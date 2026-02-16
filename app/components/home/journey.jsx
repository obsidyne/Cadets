'use client';

import { useEffect, useRef, useState } from 'react';

const journeyData = [
  { 
    date: 'Jan 2023', 
    title: 'Research',
    description: 'Conducted extensive market research and insights from customs professionals to identify key training needs and curriculum requirements.'
  },
  { 
    date: 'Apr 2023', 
    title: 'Prototype Build',
    description: 'Developed our first training modules and pilot programs. Created comprehensive course materials with input from industry experts.'
  },
  { 
    date: 'Jul 2023', 
    title: 'Beta Testing',
    description: 'Launched beta programs with our first cohort of students. Refined curriculum based on real-world feedback and performance metrics.'
  },
  { 
    date: 'Oct 2023', 
    title: 'Feature Expansion',
    description: 'Expanded course offerings to include advanced certifications. Introduced online learning platforms and hybrid training models.'
  },
  { 
    date: 'Jan 2024', 
    title: 'Official Launch',
    description: 'Officially launched Customs Cadet Corps with full-scale operations. Now training professionals across multiple locations nationwide.'
  },
];

export default function OurJourney() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    const current = sectionRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="journey py-24 px-6 text-center relative bg-white max-lg:py-20 max-sm:py-16 max-sm:px-4">
      {/* Title */}
      <h2 className="font-['Special_Gothic_Expanded_One',sans-serif] text-[clamp(2rem,6vw,3.5rem)] font-bold mb-24 bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] bg-clip-text text-transparent max-lg:mb-20 max-sm:mb-16">
        Our Journey
      </h2>

      {/* Card container wrapper with line */}
      <div className="relative max-w-[1300px] mx-auto">
        {/* Animated Line - Through middle of cards */}
        <div className="absolute top-[140px] left-[50px] right-[50px] h-[3px] overflow-hidden z-0 max-lg:left-1/2 max-lg:right-auto max-lg:-translate-x-1/2 max-lg:w-[90%] max-sm:top-auto max-sm:left-auto max-sm:right-auto max-sm:w-0">
          <div 
            className={`h-full bg-gradient-to-r from-[#93254A] via-[#000B26] to-[#0B454E] transition-[width] duration-[2500ms] ease-in-out ${
              visible ? 'w-full' : 'w-0'
            }`}
          />
        </div>

        {/* Card container */}
        <div className="flex justify-between items-start gap-6 relative z-[1] max-lg:flex-wrap max-lg:justify-center max-lg:gap-8 max-sm:flex-col max-sm:items-center max-sm:gap-10">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 w-[240px] min-h-[280px] shadow-lg hover:shadow-2xl text-center transition-all duration-700 ease-out border-2 border-gray-100 hover:border-[#93254A] hover:-translate-y-2 flex flex-col max-lg:w-[280px] max-lg:min-h-[300px] max-sm:w-full max-sm:max-w-[400px] max-sm:min-h-[260px] max-sm:p-6 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: visible ? `${0.2 + index * 0.15}s` : '0s',
              }}
            >
              {/* Date Badge */}
              <div 
                className="text-xs font-bold uppercase tracking-wider mb-4 px-4 py-2 rounded-full inline-block mx-auto"
                style={{
                  backgroundColor: index % 3 === 0 ? '#93254A' : index % 3 === 1 ? '#000B26' : '#0B454E',
                  color: 'white'
                }}
              >
                {item.date}
              </div>

              {/* Title */}
              <h3 className="font-bold text-xl mb-4 text-gray-800 leading-tight">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">
                {item.description}
              </p>

              {/* Decorative gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <div className="mt-16 max-w-3xl mx-auto max-sm:mt-12">
        <p className="text-gray-600 text-base leading-relaxed max-sm:text-sm">
          From humble beginnings to becoming a leading training institution, our journey reflects our commitment to excellence in customs education. Every milestone represents countless hours of dedication from our team and trust from our students.
        </p>
      </div>
    </section>
  );
}