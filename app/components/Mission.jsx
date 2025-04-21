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
          setIsVisible(false); // Reset animation when it's out of view
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
      className={`mission-vision ${isVisible ? 'fade-in' : ''}`}
    >
      <div className="mission fade-child"> {/* fade-child applies delay */}
        <h3>Our Mission</h3>
        <p>
          Empowering individuals with comprehensive knowledge and practical
          skills for successful careers in customs corps and international trade.
        </p>
      </div>

      <div className="vision fade-child">
        <h3>Our Vision</h3>
        <p>
          To empower individuals with the knowledge, skills, and professional
          network needed to build successful careers in customs and international
          trade.
        </p>
      </div>

      <div className="history fade-child">
        <h3>Our History</h3>
        <p>
          Founded in 2018, Customs Cadets has grown into a trusted educational
          platform with a team of experienced customs professionals, trade experts.
        </p>
      </div>
    </div>
  );
}