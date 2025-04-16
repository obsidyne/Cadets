'use client';


import Image from 'next/image';
import { useState } from 'react';

export default function Navbar() {

    const [curr,setCurr] = useState("home");

  return (
    <div className='navbar'>
      <Image src="/logo.png" width={40} height={40}></Image>
      <ul className='nav-links'>
        <li onClick={() => setCurr("home")} className={curr === "home"?"active":""}>HOME</li>
        <li onClick={() => setCurr("about")} className={curr === "about"?"active":""}>ABOUT</li>
        <li onClick={() => setCurr("contact")} className={curr === "contact"?"active":""}>CONTACT</li>
        <li onClick={() => setCurr("gallery")} className={curr === "gallery"?"active":""}>GALLERY</li>
      </ul>

      <div className='navright'></div>
    </div>
  )
}
