'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const navLinks = [
  { id: 'home',    label: 'HOME',    ref: 'homeRef'    },
  { id: 'about',   label: 'ABOUT',   ref: 'aboutRef'   },
  { id: 'journey', label: 'JOURNEY', ref: 'journeyRef' },
  { id: 'gallery', label: 'GALLERY', ref: 'galleryRef' },
  { id: 'faq',     label: 'FAQ',     ref: 'faqRef'     },
];

export default function Navbar({ footerRef, galleryRef, homeRef, aboutRef, journeyRef, faqRef }) {
  const [curr, setCurr]         = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll while drawer is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (section, refName) => {
  setCurr(section);
  setMenuOpen(false);

  const target = document.querySelector(`.${section}`);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth' });
  }
};

  return (
    <>
      {/* ── Fixed top bar ─────────────────────────────────────────── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <button
              onClick={() => handleNavClick('home', 'homeRef')}
              className="flex items-center gap-2 flex-shrink-0"
            >
              <span className="text-lg font-bold bg-gradient-to-r from-[#93254A] to-[#0B454E] bg-clip-text text-transparent">
                Customs Cadet
              </span>
            </button>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map(({ id, label, ref }) => (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id, ref)}
                    className={`relative text-sm font-medium tracking-wide pb-1 transition-colors duration-200
                      ${curr === id
                        ? 'text-[#93254A] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#93254A] after:to-[#0B454E]'
                        : 'text-gray-600 hover:text-[#93254A]'
                      }`}
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <button
              onClick={() => handleNavClick('footer', 'footerRef')}
              className="hidden lg:block py-2 px-6 bg-gradient-to-r from-[#93254A] to-[#0B454E] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Contact Us
            </button>

            {/* Mobile hamburger — animates into ✕ */}
            <button
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg gap-[5px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#93254A]"
            >
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 origin-center
                ${menuOpen ? 'rotate-45 translate-y-[6px]' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300
                ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
              <span className={`block w-5 h-0.5 bg-gray-700 transition-all duration-300 origin-center
                ${menuOpen ? '-rotate-45 -translate-y-[6px]' : ''}`} />
            </button>

          </div>
        </div>
      </nav>

      {/* ── Mobile: dim backdrop ───────────────────────────────────── */}
      <div
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden
          ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />

      {/* ── Mobile: slide-in drawer ────────────────────────────────── */}
      <aside
        aria-label="Mobile navigation"
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-white shadow-2xl flex flex-col
          transition-transform duration-300 ease-in-out lg:hidden
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-gray-100 flex-shrink-0">
          <span className="text-base font-bold bg-gradient-to-r from-[#93254A] to-[#0B454E] bg-clip-text text-transparent">
            Customs Cadet
          </span>
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Drawer links */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          <ul className="flex flex-col gap-1">
            {navLinks.map(({ id, label, ref }) => {
              const active = curr === id;
              return (
                <li key={id}>
                  <button
                    onClick={() => handleNavClick(id, ref)}
                    className={`w-full text-left flex items-center gap-3 px-4 py-3 rounded-xl
                      text-sm font-semibold tracking-wide transition-all duration-200
                      ${active
                        ? 'bg-gradient-to-r from-[#93254A]/10 to-[#0B454E]/10 text-[#93254A]'
                        : 'text-gray-600 hover:bg-gray-50 hover:text-[#93254A]'
                      }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200
                      ${active ? 'bg-[#93254A]' : 'bg-gray-200'}`}
                    />
                    {label}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer CTA */}
        <div className="px-5 py-5 border-t border-gray-100 flex-shrink-0">
          <button
            onClick={() => handleNavClick('footer', 'footerRef')}
            className="w-full py-3 bg-gradient-to-r from-[#93254A] to-[#0B454E] text-white text-sm font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-95"
          >
            Contact Us
          </button>
        </div>
      </aside>

      {/* Pushes page content below the fixed bar */}
      <div className="h-16" />
    </>
  );
}