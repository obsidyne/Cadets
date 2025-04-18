import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/Hero";

import Spline from '@splinetool/react-spline/next';
import Journey from "./components/Journey";
import Marquee from "./components/Marquee";
import Mission from "./components/Mission";

export default function Home() {
  return (

      <main>

      {/* <Spline
        scene="https://prod.spline.design/gvROPVZrAwn0oGab/scene.splinecode" 
      /> */}
        <Hero />
        <Mission />
        <Marquee />
        <Journey />
      </main>
  );
}