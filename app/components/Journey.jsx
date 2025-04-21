'use client';

import { useEffect, useRef, useState } from 'react';

const journeyData = [
  { date: 'Jan 2023', progress: 'Research & Ideation' },
  { date: 'Apr 2023', progress: 'Prototype Build' },
  { date: 'Jul 2023', progress: 'Beta Testing' },
  { date: 'Oct 2023', progress: 'Feature Expansion' },
  { date: 'Jan 2024', progress: 'Product Launch' },
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
    <section ref={sectionRef} className="journey-section">
      <h2 className="journey-title">Our Journey</h2>

      <div className="journey-line-wrapper">
        <div className={`journey-line ${visible ? 'line-animate' : ''}`} />
      </div>

      <div className="journey-card-list">
        {journeyData.map((item, index) => (
          <div
            key={index}
            className={`journey-card ${visible ? 'card-animate' : ''}`}
            style={{
              animationDelay: visible ? `${0.3 + index * 0.3}s` : '0s',
              animationFillMode: 'forwards'
            }}
          >
            <h3>{item.date}</h3>
            <p>{item.progress}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
