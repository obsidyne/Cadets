'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function Navbar({ footerRef, galleryRef, homeRef }) {
  const [curr, setCurr] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setCurr(section);
    setMenuOpen(false);
    if (section === 'contact' && footerRef?.current) {
      footerRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'gallery' && galleryRef?.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'home' && homeRef?.current) {
      homeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='navbar'>
      <Image src="/logo.png" width={40} height={40} alt="Logo" />
      
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? '✖' : '☰'}
      </div>

      <ul className={`nav-links ${menuOpen ? 'show' : ''}`}>
        <li onClick={() => handleNavClick("home")} className={curr === "home" ? "active" : ""}>HOME</li>
        <li onClick={() => handleNavClick("about")} className={curr === "about" ? "active" : ""}>ABOUT</li>
        <li onClick={() => handleNavClick("contact")} className={curr === "contact" ? "active" : ""}>CONTACT</li>
        <li onClick={() => handleNavClick("gallery")} className={curr === "gallery" ? "active" : ""}>GALLERY</li>
      </ul>
    </div>
  );
}
