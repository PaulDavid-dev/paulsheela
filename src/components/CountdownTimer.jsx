import React, { useState, useEffect } from 'react';
import { Calendar, Clock, Bell, Sparkles, Heart } from 'lucide-react';
import { getGoogleCalendarUrl, downloadIcsFile } from '../utils/calendarHelper';

export default function CountdownTimer({ onOpenCalendarModal }) {
  const targetDate = new Date('2026-10-10T10:30:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section className="relative w-full max-w-3xl mx-auto px-2 sm:px-4 py-8 z-10">
      <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-10 text-center border-2 border-[#d4af37]/60 shadow-[0_20px_50px_rgba(20,45,33,0.1)] relative overflow-hidden">
        
        {/* Glow ambient background */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#d4af37]/20 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-[#c5a059]" />
          <span className="text-xs sm:text-sm font-cinzel tracking-[0.25em] text-[#7a5914] uppercase font-bold">
            The Auspicious Moment
          </span>
          <Sparkles className="w-4 h-4 text-[#c5a059]" />
        </div>

        <h3 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#1a382b] mb-2">
          Counting Down To Holy Matrimony
        </h3>

        <p className="text-sm sm:text-base font-playfair italic text-[#4a6b5c] max-w-lg mx-auto mb-8">
          "Therefore what God has joined together, let no one separate." – Mark 10:9
        </p>

        {/* Countdown Grid */}
        <div className="grid grid-cols-4 gap-3 sm:gap-6 max-w-xl mx-auto mb-8">
          {timeUnits.map((unit, idx) => (
            <div
              key={idx}
              className="group relative flex flex-col items-center justify-center p-3 sm:p-6 rounded-2xl bg-gradient-to-b from-[#fffdfa] to-[#f4ecd8] border-2 border-[#d4af37]/60 shadow-lg hover:border-[#d4af37] transition-all hover:scale-105"
            >
              {/* Digit */}
              <span className="text-2xl sm:text-4xl md:text-5xl font-cinzel font-black text-[#143224] tracking-tight">
                {String(unit.value).padStart(2, '0')}
              </span>
              {/* Label */}
              <span className="text-[10px] sm:text-xs md:text-sm font-montserrat uppercase tracking-wider text-[#7a5914] font-bold mt-1.5">
                {unit.label}
              </span>
              {/* Shimmer dot */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#d4af37] rounded-full opacity-70" />
            </div>
          ))}
        </div>

        {/* Calendar Sync Quick Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href={getGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-emerald px-6 py-3 rounded-full text-xs sm:text-sm font-montserrat font-bold flex items-center gap-2 shadow-md"
          >
            <Calendar className="w-4 h-4 text-[#f7e7a9]" />
            Add to Google Calendar
          </a>

          <button
            onClick={downloadIcsFile}
            className="px-6 py-3 rounded-full text-xs sm:text-sm font-montserrat font-bold bg-[#f5ecd8] text-[#1a382b] border border-[#d4af37] hover:bg-[#ebdcc0] transition-colors flex items-center gap-2 shadow-sm"
          >
            <Bell className="w-4 h-4 text-[#8f6412]" />
            Download iCal / Outlook
          </button>
        </div>

      </div>
    </section>
  );
}
