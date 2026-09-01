import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Church } from 'lucide-react';
import { musicPlayer } from '../utils/audioHelper';

export default function EnvelopeIntro({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);
  const [isFlapOpen, setIsFlapOpen] = useState(false);

  const handleOpenInvitation = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Play golden wedding melody
    musicPlayer.start();

    // Trigger golden and light pink (#FFB6C1) confetti burst
    try {
      confetti({
        particleCount: 90,
        spread: 90,
        origin: { y: 0.52 },
        colors: ['#FFB6C1', '#D4AF37', '#FFE4E8', '#FFF0F3', '#FFFFFF'],
        ticks: 220,
        scalar: 1.2,
      });
    } catch (e) {
      console.log(e);
    }

    setTimeout(() => {
      setIsFlapOpen(true);
    }, 280);

    setTimeout(() => {
      onOpen();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1f18]/95 backdrop-blur-2xl px-4 py-6 overflow-y-auto">
      {/* Background ambient radial glow with #FFB6C1 touch */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,182,193,0.25)_0%,rgba(212,175,55,0.15)_35%,rgba(13,31,24,0.98)_70%)] pointer-events-none" />

      <div className="relative w-full max-w-lg flex flex-col items-center my-auto py-4">
        
        {/* Header Greetings */}
        <div className="text-center mb-5 z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1b3d2e]/90 border border-[#ffb6c1]/70 text-[#ffb6c1] text-xs uppercase tracking-[0.2em] font-cinzel mb-2.5 shadow-lg animate-float">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Holy Matrimony
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-cinzel text-transparent bg-clip-text bg-gradient-to-r from-[#ffd1dc] via-[#ffffff] to-[#ffd1dc] drop-shadow-md tracking-wider font-bold">
            Paul & Sheela
          </h1>
          <p className="text-xs sm:text-sm font-playfair italic text-[#d4e5dc] mt-1 tracking-wide">
            "This is the day the LORD has made: Let us rejoice and be glad in it."
          </p>
        </div>

        {/* 3D Envelope Container with Soft Pink Accents */}
        <div
          onClick={handleOpenInvitation}
          className={`group cursor-pointer relative w-full aspect-[1.5/1] max-w-md bg-[#fff8f9] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.6),0_0_30px_rgba(255,182,193,0.3)] border-2 border-[#ffb6c1] p-1.5 transition-all duration-700 select-none ${
            isOpening ? 'scale-105 opacity-90' : 'hover:scale-[1.02] hover:shadow-[0_30px_70px_rgba(255,182,193,0.5)]'
          }`}
        >
          <div className="relative w-full h-full rounded-xl overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#fff5f7] to-[#ffe4e8] border border-[#ffb6c1]/50 flex flex-col justify-between p-5 sm:p-6">
            
            {/* Postal Header */}
            <div className="flex justify-between items-start">
              <div className="text-left">
                <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-cinzel text-[#e88ea0] font-bold block">
                  Holy Wedding Invitation
                </span>
                <span className="text-xs font-serif text-[#1e3a2f] font-bold">
                  M.P Bhavani Mahal
                </span>
                <span className="text-[10px] text-[#557567] block">
                  Thirukattupalli
                </span>
              </div>

              {/* Vintage Stamp */}
              <div className="w-13 h-16 sm:w-14 sm:h-18 rounded border-2 border-dashed border-[#ffb6c1] bg-[#fff0f3] p-1 shadow-sm flex flex-col items-center justify-between rotate-3 group-hover:rotate-0 transition-transform">
                <Church className="w-5 h-5 text-[#d4af37] mt-1" />
                <span className="text-[8px] font-cinzel font-bold text-[#1b3d2e]">10 OCT 26</span>
              </div>
            </div>

            {/* Recipient Script */}
            <div className="text-center my-auto py-1">
              <span className="text-[11px] font-montserrat uppercase tracking-[0.25em] text-[#996515] font-semibold block mb-0.5">
                To Our Beloved
              </span>
              <h2 className="text-3xl sm:text-4xl font-great-vibes text-[#1b3d2e]">
                Family & Friends
              </h2>
              <div className="w-24 h-[1px] mx-auto mt-1.5 bg-gradient-to-r from-transparent via-[#ffb6c1] to-transparent" />
            </div>

            {/* Bottom info */}
            <div className="flex justify-between items-end text-[10px] sm:text-xs text-[#557567] font-montserrat tracking-widest uppercase font-semibold">
              <span>Saturday, 10th Oct 2026</span>
              <span>10:30 AM</span>
            </div>

            {/* Flap fold */}
            <div
              className={`absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-[#fce2e6] to-[#fff5f7] border-b-2 border-[#ffb6c1] origin-top transition-transform duration-700 shadow-sm ${
                isFlapOpen ? '-rotate-x-180 opacity-0 pointer-events-none' : ''
              }`}
              style={{
                clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
              }}
            />

            {/* Wax Seal with Gold and #FFB6C1 accents */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#ffd1dc] via-[#c99f36] to-[#734b04] shadow-[0_8px_25px_rgba(0,0,0,0.4),0_0_20px_rgba(255,182,193,0.7)] border-2 border-[#fff0f3] flex items-center justify-center transition-all duration-500 ${
                isOpening ? 'scale-125 opacity-0' : 'group-hover:scale-110 group-hover:rotate-6'
              }`}
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border border-dashed border-[#fff0f3]/90 flex flex-col items-center justify-center text-[#241704] font-cinzel text-center">
                <span className="text-xs sm:text-sm leading-tight font-black tracking-widest text-[#241704]">
                  P & S
                </span>
                <span className="text-[7px] sm:text-[8px] text-[#3d2c0e] font-sans font-bold mt-0.5">
                  10.10.26
                </span>
              </div>
            </div>

            {/* Halo glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 rounded-full bg-[#ffb6c1]/30 blur-md animate-pulse pointer-events-none" />
          </div>
        </div>

        {/* Tap to open button */}
        <div className="mt-6 text-center z-10 flex flex-col items-center">
          <button
            onClick={handleOpenInvitation}
            disabled={isOpening}
            className="btn-pink px-8 py-3.5 rounded-full text-xs sm:text-sm md:text-base font-cinzel font-bold flex items-center gap-2.5 cursor-pointer shadow-lg hover:shadow-xl animate-pulse"
          >
            <Sparkles className="w-4 h-4 text-[#1a382b]" />
            {isOpening ? "Opening Sacred Invitation..." : "Touch to Open Sacred Invitation"}
            <Sparkles className="w-4 h-4 text-[#1a382b]" />
          </button>
          
          <p className="text-xs text-[#c2d7cc] font-montserrat mt-2.5 tracking-wide flex items-center gap-1.5 opacity-90">
            <Heart className="w-3 h-3 text-[#ffb6c1] fill-[#ffb6c1]" />
            Tap to open the holy invitation with melody
          </p>
        </div>
      </div>
    </div>
  );
}
