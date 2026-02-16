import Image from "next/image";

import Navbar from "./components/home/navbar";
import Hero from "./components/home/hero";
import Footer from "./components/home/footer";
import OurJourney from "./components/home/journey";
import Marquee from "./components/home/marquee";
import Mission from "./components/home/mission";
import Gallery from "./components/home/gallery";
import FAQ from "./components/home/faq";

export default function Home() {
  return (

    <div>

      <Navbar/>
      <Hero/>
      <Mission/>
      <Marquee/>
      <OurJourney/>
      <Gallery/>
      <FAQ></FAQ>
      <Footer/>
      

    </div>
    
  );
}
