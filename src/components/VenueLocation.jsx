import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Car, Compass, ExternalLink, Phone } from 'lucide-react';
import { WEDDING_DETAILS } from '../utils/calendarHelper';

export default function VenueLocation() {
  const [copied, setCopied] = useState(false);

  const fullAddress = "M.P Bhavani Mahal, Thirukattupalli, Thanjavur District, Tamil Nadu 613104";

  const handleCopy = () => {
    navigator.clipboard.writeText(fullAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative w-full max-w-3xl mx-auto px-2 sm:px-4 py-8 z-10">
      <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-[#d4af37]/60 shadow-[0_20px_50px_rgba(20,45,33,0.1)] relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f4ecd8] border border-[#d4af37]/60 text-[#7a5914] text-xs uppercase tracking-widest font-cinzel font-bold mb-2">
            <Compass className="w-4 h-4 text-[#8f6412]" />
            Wedding Venue & Directions
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#1a382b]">
            M.P Bhavani Mahal
          </h3>
          <p className="text-sm sm:text-base font-playfair italic text-[#4a6b5c] mt-1">
            Thirukattupalli, Tamil Nadu
          </p>
        </div>

        {/* Venue Card Content */}
        <div className="bg-gradient-to-br from-[#ffffff] to-[#faf5eb] rounded-2xl p-5 sm:p-7 border-2 border-[#d4af37]/55 shadow-md mb-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#1e3a2f] text-[#f7e7a9] flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6 text-[#f7e7a9]" />
              </div>
              <div>
                <h4 className="font-cinzel font-bold text-base sm:text-xl text-[#1a382b]">
                  M.P Bhavani Mahal
                </h4>
                <p className="text-xs sm:text-sm md:text-base font-montserrat text-[#4a6b5c] mt-1 max-w-md leading-relaxed">
                  {fullAddress}
                </p>
              </div>
            </div>

            {/* Copy Address Button */}
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-montserrat font-bold bg-[#f5ecd8] hover:bg-[#ebdcc0] text-[#1a382b] border border-[#d4af37] flex items-center gap-2 transition-all self-end sm:self-center cursor-pointer shadow-xs"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-700" />
                  <span className="text-emerald-800">Address Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#8f6412]" />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Quick Action Navigation Links */}
          <div className="mt-6 pt-5 border-t border-[#d4af37]/30 flex flex-wrap items-center gap-4">
            <a
              href="https://www.google.com/maps/search/?api=1&query=M.P+Bhavani+Mahal+Thirukattupalli"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-6 py-3.5 rounded-full text-xs sm:text-sm font-cinzel font-bold flex items-center gap-2.5 shadow-md flex-1 justify-center min-w-[220px]"
            >
              <Navigation className="w-4 h-4 text-[#1a382b]" />
              Get Directions in Google Maps
            </a>
          </div>
        </div>

        {/* Travel & Route Information Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
          
          {/* From Trichy */}
          <div className="p-4 rounded-xl bg-[#fffdf8] border border-[#d4af37]/40 shadow-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <Car className="w-4 h-4 text-[#8f6412]" />
              <span className="font-cinzel text-xs sm:text-sm font-bold text-[#1a382b]">
                From Trichy (~30 km)
              </span>
            </div>
            <p className="text-xs sm:text-sm font-montserrat text-[#537365] leading-relaxed">
              Via Grand Anicut (Kallanai) route along the scenic Cauvery river bank (~45 mins drive).
            </p>
          </div>

          {/* From Thanjavur */}
          <div className="p-4 rounded-xl bg-[#fffdf8] border border-[#d4af37]/40 shadow-xs">
            <div className="flex items-center gap-2 mb-1.5">
              <Car className="w-4 h-4 text-[#8f6412]" />
              <span className="font-cinzel text-xs sm:text-sm font-bold text-[#1a382b]">
                From Thanjavur (~25 km)
              </span>
            </div>
            <p className="text-xs sm:text-sm font-montserrat text-[#537365] leading-relaxed">
              Via Budalur - Thirukattupalli Main Road (~35 mins drive).
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
