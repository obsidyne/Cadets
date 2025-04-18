"use client";

import { useEffect, useState } from "react";

const journeyData = [
  { date: "Jan 2023", progress: "Research & Ideation" },
  { date: "Apr 2023", progress: "Prototype Build" },
  { date: "Jul 2023", progress: "Beta Testing" },
  { date: "Oct 2023", progress: "Feature Expansion" },
  { date: "Jan 2024", progress: "Product Launch" },
];

export default function OurJourney() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="journey-container">
      <h2 className="journey-title">Our Journey</h2>

      <div className="journey-wrapper">
        {/* Animated horizontal line */}
        <div className="journey-line-container">
          <div className={`journey-line ${visible ? "line-animate" : ""}`} />
        </div>

        {/* Cards positioned on the line */}
        <div className="journey-card-container">
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`journey-card ${visible ? "card-animate" : ""}`}
              style={{ animationDelay: `${0.5 + index * 0.3}s` }}
            >
              <h3>{item.date}</h3>
              <p>{item.progress}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
