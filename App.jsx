import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = ['Home', 'Vessels', 'Equipment', 'Operations'];

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-geist">
      {/* Background Video */}
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-[70%_center]"
      />
      
      {/* Optional dark overlay to ensure text legibility over bright water videos */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* Navbar (z-30) */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        {/* Logo */}
        <div className="flex items-center gap-2 text-lg font-semibold tracking-tight text-white sm:text-xl">
          HydroCraft
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-white/80 transition-colors hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <button className="hidden md:block rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105">
          Request Quote
        </button>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center text-white active:scale-90 md:hidden"
          aria-label="Toggle Menu"
        >
          <Menu
            className={`absolute transition-all duration-300 ${
              mobileMenuOpen ? 'scale-50 opacity-0 rotate-90' : 'scale-100 opacity-100 rotate-0'
            }`}
          />
          <X
            className={`absolute transition-all duration-300 ${
              mobileMenuOpen ? 'scale-100 opacity-100 rotate-0' : 'scale-50 opacity-0 -rotate-90'
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Overlay (z-20) */}
      <div
        className={`absolute inset-x-0 top-0 z-20 bg-black/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen ? 'h-screen opacity-100' : 'h-0 opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center px-8 transition-all duration-500 delay-100 ${
            mobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-3xl font-medium text-white/90 hover:text-white"
              >
                {link}
              </a>
            ))}
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="mt-6 w-max rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-transform hover:scale-105"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>

      {/* Hero Content (z-10) */}
      <main className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
        {/* Top Section */}
        <div className="max-w-3xl">
          <div className="mb-4 text-xs text-white/90 sm:mb-6 sm:text-sm animate-[fadeSlideUp_0.8s_ease_0.2s_both]">
            Marine Survey & Subsea Solutions
          </div>
          <h1 className="text-3xl font-medium leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-[fadeSlideUp_0.8s_ease_0.4s_both]">
            Charting the depths, <br />
            mapping the future, <br />
            one nautical mile at a time.
          </h1>
        </div>

        {/* Bottom Section */}
        <div className="mt-8">
          <p className="mb-5 max-w-sm text-sm leading-relaxed text-white/60 sm:mb-6 sm:max-w-lg sm:text-base md:text-lg animate-[fadeSlideUp_0.8s_ease_0.7s_both]">
            Providing advanced water survey vessels and cutting-edge hydrographic equipment for offshore, coastal, and inland marine operations.
          </p>
          <button className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform hover:scale-105 sm:px-6 sm:py-3 animate-[fadeSlideUp_0.8s_ease_0.9s_both]">
            Explore Fleet & Equipment
            <ArrowRight size={16} />
          </button>
        </div>
      </main>
    </div>
  );
}
