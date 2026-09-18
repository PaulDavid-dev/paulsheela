import React, { useState, useEffect } from 'react';
import { 
  Heart, 
  Sparkles, 
  Share2, 
  Calendar, 
  MapPin, 
  Clock, 
  MessageCircleHeart, 
  RefreshCw,
  Church,
  Navigation
} from 'lucide-react';
import ParticleCanvas from './components/ParticleCanvas';
import SparklingCursor from './components/SparklingCursor';
import MusicPlayer from './components/MusicPlayer';
import EnvelopeIntro from './components/EnvelopeIntro';
import MainInvitation from './components/MainInvitation';
import ShareModal from './components/ShareModal';
import { getGoogleCalendarUrl, WEDDING_DETAILS } from './utils/calendarHelper';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  // Live Countdown calculation (Target: 10th October 2026, 10:30 AM IST)
  const targetDate = new Date('2026-10-10T10:30:00+05:30').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="relative min-h-screen selection:bg-[#ffb6c1]/40 selection:text-[#183327] overflow-x-hidden pb-12 flex flex-col items-center justify-start">
      
      {/* Background Interactive Canvas (#FFB6C1 Light Pink Petals & Golden Stardust) */}
      <ParticleCanvas />

      {/* Sparkling Touch / Cursor Trail */}
      <SparklingCursor />

      {/* 3D Wax Seal Envelope Opening Intro */}
      {!isEnvelopeOpen && (
        <EnvelopeIntro onOpen={() => setIsEnvelopeOpen(true)} />
      )}

      {/* Floating Background Music Controller */}
      <MusicPlayer />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        onReopenEnvelope={() => {
          setIsEnvelopeOpen(false);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
      />



      {/* Main Content */}
      <div className={`w-full flex flex-col items-center transition-opacity duration-700 ${isEnvelopeOpen ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Sweet Top Header Bar */}
        <header className="sticky top-0 z-30 w-full glass-panel border-b border-[#ffb6c1]/60 px-4 sm:px-6 py-2.5">
          <div className="invitation-container flex items-center justify-between">
            
            {/* Monogram Logo */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#1b3d2e] text-[#ffb6c1] border border-[#d4af37] flex items-center justify-center font-cinzel font-bold text-xs shadow-xs">
                P&S
              </div>
              <div className="flex flex-col text-left">
                <span className="font-cinzel font-bold text-xs sm:text-sm text-[#183327] tracking-wider">
                  Paul David & Sheela Percy
                </span>
                <span className="text-[9px] font-montserrat text-[#b88a24] font-semibold uppercase tracking-widest">
                  Saturday, 10th Oct 2026
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsShareModalOpen(true)}
                className="btn-pink px-3.5 py-1.5 rounded-full text-xs font-montserrat font-bold flex items-center gap-1.5 shadow-xs cursor-pointer"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share</span>
              </button>

              <button
                onClick={() => {
                  setIsEnvelopeOpen(false);
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                title="Re-open Envelope Animation"
                className="p-1.5 rounded-full bg-[#fff0f3] hover:bg-[#ffe4e8] text-[#e88ea0] border border-[#ffb6c1] transition-all shadow-xs cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </header>

        {/* Hero Badge */}
        <div className="text-center pt-5 pb-1 px-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#fff0f3] text-[#183327] border border-[#d4af37] text-xs uppercase tracking-[0.2em] font-cinzel font-bold shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            Holy Matrimony Invitation
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          </div>
        </div>

        {/* Centerpiece: Holy Wedding Invitation Card */}
        <main className="w-full flex justify-center">
          <MainInvitation />
        </main>

        {/* Action & Countdown Dock */}
        <div className="invitation-container px-3 sm:px-4 mt-2 mb-6">
          <div className="glass-panel rounded-3xl p-5 sm:p-7 border-2 border-[#ffb6c1] shadow-md text-center">
            
            {/* Live Countdown Ticker */}
            <div className="mb-4">
              <div className="flex items-center justify-center gap-2 mb-2.5">
                <Clock className="w-4 h-4 text-[#b88a24]" />
                <span className="text-xs font-cinzel uppercase tracking-[0.2em] text-[#996515] font-bold">
                  Countdown to Sacred Union
                </span>
              </div>

              {/* 4 Time Units in a Single Symmetrical Horizontal Row */}
              <div className="countdown-grid">
                <div className="bg-[#fffafb] border-2 border-[#ffb6c1]/70 rounded-2xl p-2.5 sm:p-3 shadow-xs">
                  <span className="text-xl sm:text-3xl font-cinzel font-black text-[#183327] block leading-tight">
                    {String(timeLeft.days).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#e88ea0] font-bold mt-0.5 block">Days</span>
                </div>
                <div className="bg-[#fffafb] border-2 border-[#ffb6c1]/70 rounded-2xl p-2.5 sm:p-3 shadow-xs">
                  <span className="text-xl sm:text-3xl font-cinzel font-black text-[#183327] block leading-tight">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#e88ea0] font-bold mt-0.5 block">Hours</span>
                </div>
                <div className="bg-[#fffafb] border-2 border-[#ffb6c1]/70 rounded-2xl p-2.5 sm:p-3 shadow-xs">
                  <span className="text-xl sm:text-3xl font-cinzel font-black text-[#183327] block leading-tight">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#e88ea0] font-bold mt-0.5 block">Mins</span>
                </div>
                <div className="bg-[#fffafb] border-2 border-[#ffb6c1]/70 rounded-2xl p-2.5 sm:p-3 shadow-xs">
                  <span className="text-xl sm:text-3xl font-cinzel font-black text-[#183327] block leading-tight">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-wider text-[#e88ea0] font-bold mt-0.5 block">Secs</span>
                </div>
              </div>
            </div>

            {/* Simple & Sweet Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3.5 border-t border-[#ffb6c1]/50">
              
              {/* Google Maps Directions */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=M.P+Bhavani+Mahal+Thirukattupalli"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold py-3 px-4 rounded-xl text-xs sm:text-sm font-cinzel font-bold flex items-center justify-center gap-2 shadow-xs"
              >
                <Navigation className="w-4 h-4 text-[#183327]" />
                <span>Get Directions</span>
              </a>

              {/* Add to Calendar */}
              <a
                href={getGoogleCalendarUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-emerald py-3 px-4 rounded-xl text-xs sm:text-sm font-montserrat font-bold flex items-center justify-center gap-2 shadow-xs"
              >
                <Calendar className="w-4 h-4 text-[#ffb6c1]" />
                <span>Add to Calendar</span>
              </a>


            </div>

          </div>
        </div>

        {/* Footer */}
        <footer className="w-full max-w-[700px] mx-auto px-4 text-center mt-4">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Heart className="w-3.5 h-3.5 text-[#ffb6c1] fill-[#ffb6c1]" />
            <span className="text-xs sm:text-sm font-cinzel text-[#8f6412] font-bold">
              With best compliments from Friends & Relatives
            </span>
            <Heart className="w-3.5 h-3.5 text-[#ffb6c1] fill-[#ffb6c1]" />
          </div>
          <p className="text-xs text-[#557567] font-montserrat">
            Saturday, 10th October 2026 • M.P Bhavani Mahal, Thirukattupalli
          </p>
        </footer>

      </div>
    </div>
  );
}
