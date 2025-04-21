'use client';
import { useEffect, useState } from "react";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="hero">
        <div
          className="hero-text parallax"
          style={{
            transform: `translateY(-${offsetY * 1}px)`,
          }}
        >
          <h2 className="text-content">EMPOWER</h2>
          <h2 className="text-content">EMPOWER</h2>
          <h2 className="text-content">EMPOWER</h2>
          <h2 className="text-content">EMPOWER</h2>
          <div className="line-combo">
            <h2 className="text-content">EMPOWER</h2>
            <p className="with-text">with</p>
          </div>
        </div>
      </div>

      <div
        className="titlesection parallax"
        style={{
          transform: `translateY(-${offsetY * 0.6}px)`,
        }}
      >
        <div className="titletext">
          <h1>Customs Cadet Corps</h1>
        </div>
      </div>
    </>
  );
}
