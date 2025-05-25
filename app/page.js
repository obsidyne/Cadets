'use client';

import { useRef } from 'react';
import Hero from "./components/Hero";

import Spline from '@splinetool/react-spline/next';

import Journey from "./components/Journey";
import Marquee from "./components/Marquee";
import Mission from "./components/Mission";
import Gallery from "./components/Gallery";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
    const footerRef = useRef(null);
    const galleryRef = useRef(null);
    const homeRef = useRef(null);
  return (

      <main>

      {/* <Spline
        scene="https://prod.spline.design/gvROPVZrAwn0oGab/scene.splinecode" 
      /> */}
        <Navbar footerRef={footerRef} galleryRef={galleryRef} homeRef={homeRef}/>
        <Hero ref={homeRef}/>
        <Mission />
        <Marquee />
        <Journey />
        <Gallery ref={galleryRef}/>
        <Footer ref={footerRef}/>
      </main>
  );
}