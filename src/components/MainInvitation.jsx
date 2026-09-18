import React, { useState, useRef } from 'react';
import { Calendar, MapPin, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function MainInvitation() {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [blessingShower, setBlessingShower] = useState(0);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Gentle 3D tilt
    const rotateX = ((y - centerY) / centerY) * -2.5;
    const rotateY = ((x - centerX) / centerX) * 2.5;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const triggerFlowerShower = () => {
    setBlessingShower((prev) => prev + 1);

    try {
      // Shower of wedding flower petals and gold stardust
      confetti({
        particleCount: 75,
        spread: 105,
        origin: { y: 0.6 },
        colors: ['#FFB6C1', '#D4AF37', '#FFE4E8', '#FFF0F3', '#FFFFFF', '#E88EA0', '#FFD700'],
        ticks: 220,
        scalar: 1.15,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="relative invitation-container px-3 sm:px-4 py-3 z-10">
      {/* 3D Tilt Wrapper */}
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
        className="luxury-card-surface rounded-3xl p-4 sm:p-8 md:p-10 border-2 border-[#ffb6c1] royal-glow-border shadow-[0_20px_60px_rgba(255,182,193,0.45),0_0_35px_rgba(212,175,55,0.22)] relative overflow-hidden text-center select-none transition-all"
      >
        {/* Ornate Double Inner Borders */}
        <div className="absolute inset-2 sm:inset-3 border border-[#d4af37]/80 rounded-2xl pointer-events-none" />
        <div className="absolute inset-3 sm:inset-4.5 border border-[#ffb6c1]/60 rounded-xl pointer-events-none" />

        {/* Ornate Corner Accents */}
        <div className="royal-corner-tl" />
        <div className="royal-corner-tr" />
        <div className="royal-corner-bl" />
        <div className="royal-corner-br" />

        {/* Botanical Foliage & Light Pink Roses (Top-Left) */}
        <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-32 sm:w-44 h-32 sm:h-44 pointer-events-none opacity-90 select-none z-0">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <g transform="translate(36,36)">
              <ellipse cx="18" cy="48" rx="15" ry="26" fill="#4d7061" transform="rotate(-35 18 48)" opacity="0.9" />
              <ellipse cx="48" cy="18" rx="16" ry="28" fill="#365749" transform="rotate(25 48 18)" opacity="0.95" />
              <ellipse cx="65" cy="65" rx="15" ry="26" fill="#6e9484" transform="rotate(-15 65 65)" opacity="0.88" />
              <ellipse cx="10" cy="85" rx="13" ry="22" fill="#426354" transform="rotate(-60 10 85)" opacity="0.8" />
              <path d="M 0 0 Q 50 50 88 88" stroke="#c5a059" strokeWidth="1.8" fill="none" opacity="0.8" />
              <circle cx="44" cy="44" r="24" fill="#fff0f3" stroke="#ffb6c1" strokeWidth="1.4" />
              <circle cx="44" cy="44" r="17" fill="#ffe4e8" stroke="#f58da0" strokeWidth="1" />
              <circle cx="44" cy="44" r="11" fill="#ffb6c1" stroke="#e87a90" strokeWidth="0.9" />
              <circle cx="44" cy="44" r="5.5" fill="#e86b84" />
            </g>
          </svg>
        </div>

        {/* Botanical Foliage & Light Pink Roses (Top-Right) */}
        <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-32 sm:w-44 h-32 sm:h-44 pointer-events-none opacity-90 select-none z-0 scale-x-[-1]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <g transform="translate(36,36)">
              <ellipse cx="18" cy="48" rx="15" ry="26" fill="#4d7061" transform="rotate(-35 18 48)" opacity="0.9" />
              <ellipse cx="48" cy="18" rx="16" ry="28" fill="#365749" transform="rotate(25 48 18)" opacity="0.95" />
              <ellipse cx="65" cy="65" rx="15" ry="26" fill="#6e9484" transform="rotate(-15 65 65)" opacity="0.88" />
              <ellipse cx="10" cy="85" rx="13" ry="22" fill="#426354" transform="rotate(-60 10 85)" opacity="0.8" />
              <path d="M 0 0 Q 50 50 88 88" stroke="#c5a059" strokeWidth="1.8" fill="none" opacity="0.8" />
              <circle cx="44" cy="44" r="24" fill="#fff0f3" stroke="#ffb6c1" strokeWidth="1.4" />
              <circle cx="44" cy="44" r="17" fill="#ffe4e8" stroke="#f58da0" strokeWidth="1" />
              <circle cx="44" cy="44" r="11" fill="#ffb6c1" stroke="#e87a90" strokeWidth="0.9" />
              <circle cx="44" cy="44" r="5.5" fill="#e86b84" />
            </g>
          </svg>
        </div>

        {/* Botanical Foliage & Light Pink Roses (Bottom-Left) */}
        <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-32 sm:w-44 h-32 sm:h-44 pointer-events-none opacity-90 select-none z-0 scale-y-[-1]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <g transform="translate(36,36)">
              <ellipse cx="18" cy="48" rx="15" ry="26" fill="#4d7061" transform="rotate(-35 18 48)" opacity="0.9" />
              <ellipse cx="48" cy="18" rx="16" ry="28" fill="#365749" transform="rotate(25 48 18)" opacity="0.95" />
              <ellipse cx="65" cy="65" rx="15" ry="26" fill="#6e9484" transform="rotate(-15 65 65)" opacity="0.88" />
              <ellipse cx="10" cy="85" rx="13" ry="22" fill="#426354" transform="rotate(-60 10 85)" opacity="0.8" />
              <path d="M 0 0 Q 50 50 88 88" stroke="#c5a059" strokeWidth="1.8" fill="none" opacity="0.8" />
              <circle cx="44" cy="44" r="24" fill="#fff0f3" stroke="#ffb6c1" strokeWidth="1.4" />
              <circle cx="44" cy="44" r="17" fill="#ffe4e8" stroke="#f58da0" strokeWidth="1" />
              <circle cx="44" cy="44" r="11" fill="#ffb6c1" stroke="#e87a90" strokeWidth="0.9" />
              <circle cx="44" cy="44" r="5.5" fill="#e86b84" />
            </g>
          </svg>
        </div>

        {/* Botanical Foliage & Light Pink Roses (Bottom-Right) */}
        <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-32 sm:w-44 h-32 sm:h-44 pointer-events-none opacity-90 select-none z-0 scale-[-1]">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <g transform="translate(36,36)">
              <ellipse cx="18" cy="48" rx="15" ry="26" fill="#4d7061" transform="rotate(-35 18 48)" opacity="0.9" />
              <ellipse cx="48" cy="18" rx="16" ry="28" fill="#365749" transform="rotate(25 48 18)" opacity="0.95" />
              <ellipse cx="65" cy="65" rx="15" ry="26" fill="#6e9484" transform="rotate(-15 65 65)" opacity="0.88" />
              <ellipse cx="10" cy="85" rx="13" ry="22" fill="#426354" transform="rotate(-60 10 85)" opacity="0.8" />
              <path d="M 0 0 Q 50 50 88 88" stroke="#c5a059" strokeWidth="1.8" fill="none" opacity="0.8" />
              <circle cx="44" cy="44" r="24" fill="#fff0f3" stroke="#ffb6c1" strokeWidth="1.4" />
              <circle cx="44" cy="44" r="17" fill="#ffe4e8" stroke="#f58da0" strokeWidth="1" />
              <circle cx="44" cy="44" r="11" fill="#ffb6c1" stroke="#e87a90" strokeWidth="0.9" />
              <circle cx="44" cy="44" r="5.5" fill="#e86b84" />
            </g>
          </svg>
        </div>

        {/* Card Main Body */}
        <div className="relative z-10 flex flex-col items-center max-w-xl mx-auto w-full px-1">
          
          {/* Top Radiant Golden Cross */}
          <div className="relative my-2 sm:my-3 flex items-center justify-center">
            <div className="absolute w-36 h-36 sm:w-44 sm:h-44 pointer-events-none opacity-85 animate-holy-rays">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="46" fill="none" stroke="url(#goldRaysCard)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.75" />
                <defs>
                  <radialGradient id="goldRaysCard" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#fff6c4" stopOpacity="0.95" />
                    <stop offset="50%" stopColor="#ffb6c1" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
                  </radialGradient>
                </defs>
                {Array.from({ length: 24 }).map((_, i) => (
                  <line
                    key={i}
                    x1="50"
                    y1="50"
                    x2={50 + 44 * Math.cos((i * Math.PI) / 12)}
                    y2={50 + 44 * Math.sin((i * Math.PI) / 12)}
                    stroke="#e8cb6d"
                    strokeWidth={i % 2 === 0 ? "1.1" : "0.6"}
                    opacity={i % 2 === 0 ? "0.9" : "0.5"}
                  />
                ))}
              </svg>
            </div>

            {/* Glowing Golden Cross */}
            <div className="relative z-10 animate-divine-cross">
              <svg width="48" height="68" viewBox="0 0 44 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-[0_4px_16px_rgba(212,175,55,0.7)]">
                <defs>
                  <linearGradient id="crossGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#fff2bf" />
                    <stop offset="35%" stopColor="#d4af37" />
                    <stop offset="70%" stopColor="#a37618" />
                    <stop offset="100%" stopColor="#f7e7a9" />
                  </linearGradient>
                </defs>
                <rect x="17" y="2" width="10" height="60" rx="1.5" fill="url(#crossGoldGrad)" stroke="#80550e" strokeWidth="0.8" />
                <rect x="17" y="2" width="3" height="60" fill="#ffffff" fillOpacity="0.7" />
                <rect x="2" y="16" width="40" height="10" rx="1.5" fill="url(#crossGoldGrad)" stroke="#80550e" strokeWidth="0.8" />
                <rect x="2" y="16" width="40" height="3" fill="#ffffff" fillOpacity="0.7" />
                <polygon points="22,18 25,21 22,24 19,21" fill="#fffdf0" stroke="#80550e" strokeWidth="0.6" />
              </svg>
            </div>
          </div>

          {/* Bible Scripture Quote */}
          <div className="mt-0.5 mb-3 text-center px-3 w-full">
            <p className="text-[14px] sm:text-[16px] md:text-[18px] font-playfair italic text-[#132a21] leading-relaxed tracking-wide">
              "This is the day the LORD has made:
              <br />
              <span className="font-semibold text-[#183327]">Let us rejoice and be glad in it."</span>
            </p>
            <p className="text-[11px] sm:text-xs font-montserrat uppercase tracking-[0.25em] text-[#996515] font-bold mt-1">
              – Psalm 118:24 –
            </p>

            <div className="flex items-center justify-center gap-3 my-2.5">
              <div className="w-14 sm:w-20 h-[1.5px] bg-gradient-to-r from-transparent to-[#ffb6c1]" />
              <Heart className="w-3.5 h-3.5 text-[#e88ea0] fill-[#ffb6c1]" />
              <div className="w-14 sm:w-20 h-[1.5px] bg-gradient-to-l from-transparent to-[#ffb6c1]" />
            </div>
          </div>

          {/* Main Title: HOLY WEDDING INVITATION */}
          <div className="text-center w-full mb-2">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-cinzel font-black tracking-[0.16em] text-[#132a21] uppercase drop-shadow-xs">
              Holy Wedding Invitation
            </h2>

            <div className="flex items-center justify-center gap-2 mt-1.5 mb-3 w-full max-w-xs mx-auto">
              <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
              <div className="w-2 h-2 rotate-45 bg-[#d4af37]" />
              <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent" />
            </div>
          </div>

          {/* =========================================================================
              COUPLE ANNOUNCEMENT PROMINENTLY AT THE TOP
              ========================================================================= */}
          <div className="w-full my-2 py-5 sm:py-6 px-3 sm:px-6 relative bg-gradient-to-b from-[#fff7f9] via-[#ffffff] to-[#fff7f9] rounded-2xl border-2 border-[#ffb6c1] shadow-[0_8px_25px_rgba(255,182,193,0.3),0_0_15px_rgba(212,175,55,0.15)]">
            
            {/* Top delicate ribbon & badge */}
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-10 sm:w-16 h-[1px] bg-[#d4af37]/60" />
              <span className="text-[10px] sm:text-xs font-cinzel uppercase tracking-[0.25em] text-[#996515] font-bold">
                Sacred Matrimony
              </span>
              <div className="w-10 sm:w-16 h-[1px] bg-[#d4af37]/60" />
            </div>

            {/* Groom Showcase */}
            <div className="flex flex-col items-center justify-center text-center my-1.5">
              <span className="text-xs sm:text-sm font-playfair italic text-[#4d7061] font-medium mb-0.5">
                Selvan.
              </span>
              <h1 className="couple-name-responsive font-cinzel font-black tracking-wider text-[#132a21] gold-foil-shimmer hover:scale-[1.01] transition-transform">
                G. PAUL DAVID
              </h1>
            </div>

            {/* Classic Calligraphic "With" */}
            <div className="flex items-center justify-center gap-3 my-1">
              <span className="text-sm sm:text-base text-[#d4af37]">❧</span>
              <span className="script-with-responsive font-great-vibes text-[#b88a24] leading-none drop-shadow-xs">
                With
              </span>
              <span className="text-sm sm:text-base text-[#d4af37]">☙</span>
            </div>

            {/* Bride Showcase */}
            <div className="flex flex-col items-center justify-center text-center my-1.5">
              <span className="text-xs sm:text-sm font-playfair italic text-[#4d7061] font-medium mb-0.5">
                Selvi.
              </span>
              <h1 className="couple-name-responsive font-cinzel font-black tracking-wider text-[#132a21] gold-foil-shimmer hover:scale-[1.01] transition-transform">
                R. SHEELA PERCY
              </h1>
            </div>

            {/* Bottom Floral Divider */}
            <div className="flex items-center justify-center gap-2 mt-3">
              <span className="text-xs text-[#4d7061]">🌿</span>
              <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#ffb6c1] to-transparent" />
              <Heart className="w-3.5 h-3.5 text-[#ffb6c1] fill-[#ffb6c1]" />
              <div className="w-16 sm:w-28 h-[1px] bg-gradient-to-l from-transparent via-[#ffb6c1] to-transparent" />
              <span className="text-xs text-[#4d7061]">🌿</span>
            </div>
          </div>

          {/* =========================================================================
              PARENTS SECTION (Symmetrically aligned for all devices)
              ========================================================================= */}
          <div className="w-full mt-4 mb-2 text-center">
            <span className="text-xs sm:text-sm font-cinzel uppercase tracking-[0.2em] text-[#996515] font-bold block mb-3">
              Together With Their Beloved Parents
            </span>

            {/* Symmetrical Parents Grid */}
            <div className="parents-grid font-playfair py-1">
              
              {/* Groom's Parents */}
              <div className="flex flex-col items-center bg-white/70 sm:bg-transparent rounded-xl p-2.5 sm:p-0 border border-[#ffb6c1]/40 sm:border-0 shadow-xs sm:shadow-none">
                <p className="parents-name-responsive font-bold text-[#132a21] leading-snug">
                  Mr. B. Gunasekaran &amp;
                  <br />
                  Mrs. G. Lourdumary - <span className="font-normal">(Gracy)</span>
                </p>
                <p className="text-xs font-montserrat text-[#4d7061] font-semibold tracking-wider mt-1.5">
                  Erode - Nadarmadu.
                </p>
              </div>

              {/* Center Divider & Symbol */}
              <div className="flex flex-row sm:flex-col items-center justify-center px-1 py-0.5">
                <div className="hidden sm:block w-[1.5px] h-5 bg-[#ffb6c1]" />
                <span className="text-xl sm:text-2xl font-playfair italic text-[#b88a24] font-bold mx-2 sm:my-0.5">
                  &amp;
                </span>
                <div className="hidden sm:block w-[1.5px] h-5 bg-[#ffb6c1]" />
              </div>

              {/* Bride's Parents */}
              <div className="flex flex-col items-center bg-white/70 sm:bg-transparent rounded-xl p-2.5 sm:p-0 border border-[#ffb6c1]/40 sm:border-0 shadow-xs sm:shadow-none">
                <p className="parents-name-responsive font-bold text-[#132a21] leading-snug">
                  Mr. R. Raju &amp;
                  <br />
                  Mrs. R. Nallammal - <span className="font-normal">(Thabithal)</span>
                </p>
                <p className="text-xs font-montserrat text-[#4d7061] font-semibold tracking-wider mt-1.5">
                  Trichy - Sholamadevi.
                </p>
              </div>

            </div>
          </div>

          {/* Solicitation Message */}
          <div className="my-3 max-w-lg px-2 text-center">
            <p className="text-[13.5px] sm:text-[15.5px] text-[#244234] font-playfair italic leading-relaxed">
              We solicit your esteemed presence with family and friends on the auspicious occasion of the wedding of our children
            </p>
          </div>

          {/* =========================================================================
              DATE & VENUE FRAME
              ========================================================================= */}
          <div className="w-full my-3 bg-gradient-to-r from-[#fff9fa] via-[#ffffff] to-[#fff9fa] border-2 border-[#ffb6c1] rounded-2xl p-4 sm:p-5 shadow-xs relative">
            <div className="event-details-grid text-left divide-y sm:divide-y-0 sm:divide-x divide-[#ffb6c1]/60">
              
              {/* Date & Time */}
              <div className="flex items-start gap-3 pt-1 sm:pt-0 sm:pr-3">
                <div className="w-11 h-11 rounded-xl bg-[#fff0f3] border-2 border-[#ffb6c1] flex items-center justify-center shrink-0 text-[#1e3a2f] shadow-xs">
                  <Calendar className="w-6 h-6 text-[#e88ea0]" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-montserrat uppercase tracking-wider text-[#996515] font-bold block">
                    On Saturday,
                  </span>
                  <p className="text-[15px] sm:text-lg font-cinzel font-bold text-[#132a21] leading-snug">
                    the 10<sup>th</sup> October 2026,
                  </p>
                  <p className="text-xs sm:text-sm font-montserrat text-[#4d7061] font-semibold mt-0.5">
                    From 10.30 a.m. onwards
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-start gap-3 pt-3 sm:pt-0 sm:pl-3">
                <div className="w-11 h-11 rounded-xl bg-[#fff0f3] border-2 border-[#ffb6c1] flex items-center justify-center shrink-0 text-[#1e3a2f] shadow-xs">
                  <MapPin className="w-6 h-6 text-[#e88ea0]" />
                </div>
                <div>
                  <span className="text-[10px] sm:text-xs font-montserrat uppercase tracking-wider text-[#996515] font-bold block">
                    At,
                  </span>
                  <p className="text-[15px] sm:text-lg font-cinzel font-bold text-[#132a21] leading-snug">
                    M.P Bhavani Mahal,
                  </p>
                  <p className="text-xs sm:text-sm font-montserrat text-[#4d7061] font-semibold mt-0.5">
                    Thirukattupalli
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Lower Artwork: Golden Holy Bible & Flying Dove */}
          <div className="flex items-center justify-center gap-6 my-2.5">
            {/* Flying Dove */}
            <div className="w-14 h-11 flex items-center justify-center animate-float">
              <svg viewBox="0 0 60 40" className="w-full h-full fill-[#c5a059] opacity-95">
                <path d="M10,20 C15,12 25,5 35,8 C40,10 45,15 48,22 C42,20 35,22 30,26 C25,30 20,32 12,30 C6,28 8,24 10,20 Z" />
                <path d="M35,8 C40,4 48,2 55,4 C52,9 48,15 45,18 Z" />
                <path d="M5,22 Q0,20 2,16" stroke="#4d7061" strokeWidth="1.6" fill="none" />
                <circle cx="1" cy="17" r="1.6" fill="#4d7061" />
              </svg>
            </div>

            {/* Holy Bible */}
            <div className="w-16 h-12 flex items-center justify-center">
              <svg viewBox="0 0 70 45" className="w-full h-full">
                <path d="M5,35 Q20,38 35,33 Q50,38 65,35 L68,10 Q50,15 35,10 Q20,15 2,10 Z" fill="#fffdfa" stroke="#d4af37" strokeWidth="1.4" />
                <path d="M35,10 L35,33" stroke="#d4af37" strokeWidth="1.8" />
                <line x1="52" y1="17" x2="52" y2="29" stroke="#996515" strokeWidth="1.4" />
                <line x1="47" y1="21" x2="57" y2="21" stroke="#996515" strokeWidth="1.4" />
              </svg>
            </div>
          </div>

          {/* Compliments */}
          <div className="mt-1 text-center w-full">
            <p className="text-xs sm:text-sm font-playfair italic text-[#39594b] tracking-wide">
              With best compliments from:
            </p>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-great-vibes text-[#132a21] font-medium mt-1">
              Friends &amp; Relatives
            </h3>
            
            <div className="flex items-center justify-center gap-2.5 mt-2.5">
              <div className="w-10 h-[1px] bg-[#ffb6c1]" />
              <Heart className="w-3.5 h-3.5 text-[#ffb6c1] fill-[#ffb6c1]" />
              <div className="w-10 h-[1px] bg-[#ffb6c1]" />
            </div>
          </div>

          {/* Interactive "Shower Petals & Bless the Couple" Action */}
          <div className="mt-4 w-full flex flex-col items-center">
            <button
              onClick={triggerFlowerShower}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#fff0f3] via-[#ffe4e8] to-[#fff0f3] border border-[#d4af37] text-[#183327] hover:border-[#ffb6c1] hover:scale-105 active:scale-95 transition-all text-xs font-montserrat font-bold shadow-xs flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-[#d4af37]" />
              <span>Shower Petals &amp; Bless the Couple</span>
              <Heart className="w-3.5 h-3.5 text-[#e88ea0] fill-[#e88ea0]" />
            </button>
            {blessingShower > 0 && (
              <span className="text-[11px] text-[#4d7061] font-medium mt-1.5 animate-pulse">
                🌸 {blessingShower} floral blessing{blessingShower > 1 ? 's' : ''} showered!
              </span>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
