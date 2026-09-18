import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Church, MapPin, Calendar, Clock } from 'lucide-react';
import { musicPlayer } from '../utils/audioHelper';

export default function EnvelopeIntro({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFlapOpen, setIsFlapOpen] = useState(false);
  const [isLetterSliding, setIsLetterSliding] = useState(false);

  const handleOpenInvitation = () => {
    if (isOpening) return;
    setIsOpening(true);

    // 1. Play Golden Wedding Melody
    musicPlayer.start();

    // 2. Open Flap
    setTimeout(() => {
      setIsFlapOpen(true);
    }, 180);

    // 3. Slide Out Invitation Letter Card & Confetti
    setTimeout(() => {
      setIsLetterSliding(true);
      
      try {
        confetti({
          particleCount: 130,
          spread: 110,
          origin: { y: 0.48 },
          colors: ['#FFB6C1', '#D4AF37', '#FFE4E8', '#FFF0F3', '#FFFFFF', '#B8860B', '#E88EA0'],
          ticks: 260,
          scalar: 1.25,
        });
      } catch (e) {
        console.error(e);
      }
    }, 650);

    // 4. Smooth Transition to Full Invitation
    setTimeout(() => {
      onOpen();
    }, 1900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#fff8fa]/95 backdrop-blur-md px-3 sm:px-4 py-6 overflow-y-auto">
      {/* Romantic Ambient Radial Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,182,193,0.45)_0%,rgba(251,238,168,0.3)_35%,rgba(255,240,243,0.95)_80%)] pointer-events-none" />

      <div className="relative w-full max-w-[460px] flex flex-col items-center my-auto py-2 z-10">
        
        {/* ========================================================
            TOP HEADER & SCRIPTURE
            ======================================================== */}
        <div className="text-center mb-2 sm:mb-3 w-full">
          {/* Holy Matrimony Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#183327] border border-[#d4af37] text-[#fbeea8] text-xs uppercase tracking-[0.2em] font-cinzel font-bold shadow-md animate-float">
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
            Holy Matrimony
            <Sparkles className="w-3.5 h-3.5 text-[#ffd700]" />
          </div>

          {/* Couple Names */}
          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-cinzel font-black tracking-wide text-[#183327] drop-shadow-xs">
            Paul David <span className="text-[#b88a24] font-great-vibes text-4xl sm:text-5xl md:text-6xl font-normal">&amp;</span> Sheela Percy
          </h1>

          {/* Scripture Verse */}
          <div className="mt-2 inline-block px-4 py-1.5 rounded-full bg-white/95 border border-[#d4af37]/60 shadow-xs max-w-sm sm:max-w-md mx-auto">
            <p className="text-xs sm:text-sm font-playfair italic text-[#183327] font-semibold tracking-wide leading-tight">
              "This is the day the LORD has made; let us rejoice and be glad in it."
            </p>
            <span className="text-[10px] sm:text-xs font-cinzel text-[#8a6015] font-bold block mt-0.5">
              — Psalm 118:24 —
            </span>
          </div>
        </div>

        {/* ========================================================
            CLASSIC ROYAL ENVELOPE WITH INNER LETTER CARD
            ======================================================== */}
        <div className="envelope-main-wrapper">
          
          <div
            onClick={handleOpenInvitation}
            className="envelope-box"
          >
            
            {/* 1. ENVELOPE BACK LINER */}
            <div className="envelope-back-liner">
              <div 
                className="absolute inset-0 opacity-30 pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(#d4af37 1px, transparent 1px)`,
                  backgroundSize: '16px 16px',
                }}
              />
            </div>

            {/* 2. INNER LETTER CARD (Slides Up gracefully out of the pocket) */}
            <div
              className={`envelope-letter-card ${
                isLetterSliding ? 'sliding' : ''
              }`}
            >
              {/* Inner Double Borders */}
              <div className="absolute inset-1 border border-[#d4af37]/50 rounded-lg pointer-events-none" />
              <div className="absolute inset-2 border border-[#ffb6c1]/60 rounded-md pointer-events-none" />

              {/* Letter Top Header */}
              <div className="relative z-10 text-center pt-0.5">
                <span className="text-[9px] uppercase font-cinzel tracking-[0.25em] text-[#8a6015] font-bold block">
                  Together With Their Families
                </span>
                <h2 className="text-sm sm:text-base font-cinzel font-bold text-[#183327] tracking-wider mt-0.5 gold-foil-shimmer">
                  G. Paul David &amp; R. Sheela Percy
                </h2>
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#d4af37] to-transparent mx-auto mt-0.5" />
              </div>

              {/* Letter Center Invitation Script */}
              <div className="relative z-10 text-center py-0.5">
                <span className="text-[10px] font-montserrat uppercase tracking-[0.2em] text-[#996515] font-bold block">
                  Cordially Invite
                </span>
                <p className="text-2xl sm:text-3xl font-great-vibes text-[#183327] leading-tight my-0.5">
                  Family &amp; Friends
                </p>
                <span className="text-[9px] font-montserrat text-[#4e6e60] font-medium">
                  to celebrate their Holy Matrimony
                </span>
              </div>

              {/* Letter Bottom Venue & Timing */}
              <div className="relative z-10 bg-[#fff5f7] rounded-lg p-1.5 border border-[#d4af37]/40 flex items-center justify-between text-[9px] font-montserrat font-bold text-[#183327]">
                <div className="text-left">
                  <span className="text-[#8a6015] block font-bold">M.P. Bhavani Mahal</span>
                  <span className="text-[#557567] text-[8px] font-normal">Thirukattupalli</span>
                </div>
                <div className="text-right">
                  <span className="text-[#183327] block font-bold">Sat, 10 Oct 2026</span>
                  <span className="text-[#8a6015] text-[8px]">10:30 AM IST</span>
                </div>
              </div>
            </div>

            {/* 3. ENVELOPE FRONT POCKET (Holds the Letter) */}
            <div className="envelope-front-pocket">
              {/* Pocket Content (Venue info + Vintage stamp) */}
              <div className="envelope-pocket-content">
                
                {/* Left: Venue summary */}
                <div className="text-left" style={{ maxWidth: '240px' }}>
                  <span className="text-[10px] font-cinzel font-bold text-[#8a6015] uppercase tracking-wider block">
                    Holy Wedding Invitation
                  </span>
                  <span className="text-xs sm:text-sm font-serif font-bold text-[#183327] block leading-tight">
                    M.P. Bhavani Mahal
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#527967] font-medium block">
                    Thirukattupalli, Thanjavur
                  </span>
                </div>

                {/* Right: Vintage Scalloped Postage Stamp */}
                <div 
                  className="rounded border-2 border-dashed border-[#d4af37] bg-gradient-to-b from-[#fff0f3] to-[#ffe4e8] p-1 shadow-xs flex flex-col items-center justify-between rotate-2"
                  style={{ width: '56px', height: '70px' }}
                >
                  <div className="w-full flex items-center justify-between px-0.5 text-[7px] font-cinzel font-bold text-[#8a6015]">
                    <span>POST</span>
                    <span>₹26</span>
                  </div>
                  <Church className="w-5 h-5 text-[#996515]" />
                  <span className="text-[8px] font-cinzel font-black text-[#183327] border-t border-[#d4af37]/40 w-full text-center pt-0.5">
                    10 OCT 26
                  </span>
                </div>

              </div>
            </div>

            {/* 4. ENVELOPE TOP FLAP (3D Flips 180° Upwards when opened) */}
            <div
              className={`envelope-top-flap ${
                isFlapOpen ? 'open' : ''
              }`}
            >
              <div className="w-full h-full relative flex items-center justify-center">
                <div 
                  className="absolute"
                  style={{ bottom: '6px', width: '80px', height: '1.5px', background: 'rgba(212, 175, 55, 0.7)' }} 
                />
              </div>
            </div>

            {/* 5. 3D ROYAL WAX SEAL MONOGRAM BUTTON */}
            <div
              className={`envelope-wax-seal ${
                isFlapOpen ? 'broken' : ''
              }`}
            >
              <div 
                className="rounded-full border-2 border-dashed border-[#ffea9f]/80 bg-gradient-to-br from-[#b8860b] to-[#6b4700] flex flex-col items-center justify-center text-center shadow-inner"
                style={{ width: '50px', height: '50px' }}
              >
                <span className="text-xs font-cinzel font-black tracking-widest text-[#fffde6] leading-none drop-shadow-sm">
                  P &amp; S
                </span>
                <span className="text-[7px] font-montserrat font-bold text-[#fbeea8] mt-0.5 tracking-wider">
                  10.10.26
                </span>
              </div>
            </div>

            {/* Golden Glow around Wax Seal */}
            {!isFlapOpen && (
              <div 
                className="absolute rounded-full bg-[#ffd700]/30 blur-md animate-pulse pointer-events-none"
                style={{
                  top: '55%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '90px',
                  height: '90px',
                  zIndex: 25,
                }} 
              />
            )}

          </div>

        </div>

        {/* ========================================================
            TOUCH TO OPEN SACRED INVITATION CTA BUTTON
            ======================================================== */}
        <div className="mt-4 sm:mt-5 text-center z-10 flex flex-col items-center w-full">
          <button
            onClick={handleOpenInvitation}
            disabled={isOpening}
            className="w-full px-6 py-3.5 rounded-full text-xs sm:text-sm font-cinzel font-bold tracking-wider flex items-center justify-center gap-2 cursor-pointer bg-gradient-to-r from-[#ffb6c1] via-[#ffd1dc] to-[#ffb6c1] text-[#183327] border-2 border-[#d4af37] shadow-[0_8px_25px_rgba(255,182,193,0.6),0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_12px_30px_rgba(212,175,55,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all"
            style={{ maxWidth: '340px' }}
          >
            <Sparkles className="w-4 h-4 text-[#8a6015] shrink-0" />
            <span>{isOpening ? "Unfolding Sacred Invitation..." : "Touch to Open Sacred Invitation"}</span>
            <Sparkles className="w-4 h-4 text-[#8a6015] shrink-0" />
          </button>
          
          {/* Subtext Prompt with Melody Icon */}
          <p className="text-xs sm:text-sm text-[#183327] font-montserrat font-semibold mt-2.5 tracking-wide flex items-center gap-1.5 bg-white/80 px-3.5 py-1 rounded-full border border-[#ffb6c1]/40 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-[#e88ea0] fill-[#e88ea0]" />
            Tap to open the holy invitation with melody
          </p>
        </div>

      </div>
    </div>
  );
}
