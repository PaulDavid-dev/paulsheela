import React, { useState } from 'react';
import { Share2, MessageCircle, Copy, Check, Printer, Sparkles, X } from 'lucide-react';
import { getWhatsAppShareUrl } from '../utils/calendarHelper';

export default function ShareModal({ isOpen, onClose, onReopenEnvelope }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-sm bg-[#ffffff] rounded-2xl border-2 border-[#ffb6c1] shadow-[0_20px_60px_rgba(255,182,193,0.4)] p-5 text-center overflow-hidden">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-[#1a382b] p-1 rounded-full hover:bg-[#fff0f3] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="my-1">
          <div className="w-10 h-10 rounded-full bg-[#fff0f3] border border-[#ffb6c1] mx-auto flex items-center justify-center text-[#e88ea0] mb-2 shadow-xs">
            <Share2 className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-cinzel font-bold text-[#1a382b]">
            Share Invitation
          </h3>
          <p className="text-xs font-playfair italic text-[#4e6e60] mt-0.5">
            Share Paul & Sheela's wedding invitation
          </p>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2.5 my-4">
          <a
            href={getWhatsAppShareUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-montserrat font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-4 h-4" />
            Share via WhatsApp
          </a>

          <button
            onClick={handleCopyLink}
            className="w-full py-2.5 px-4 rounded-xl bg-[#fff0f3] hover:bg-[#ffe4e8] text-[#1a382b] border border-[#ffb6c1] font-montserrat font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-700" />
                <span className="text-emerald-800 font-bold">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-[#e88ea0]" />
                <span>Copy Invitation Link</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrint}
            className="w-full py-2.5 px-4 rounded-xl bg-white hover:bg-[#fff9fa] text-[#1a382b] border border-[#ffb6c1]/70 font-montserrat font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4 text-[#996515]" />
            Print / Save PDF
          </button>
        </div>

        {/* Replay unboxing */}
        <div className="pt-2.5 border-t border-[#ffb6c1]/40">
          <button
            onClick={() => {
              onClose();
              onReopenEnvelope();
            }}
            className="text-xs font-cinzel text-[#996515] hover:text-[#1a382b] font-bold inline-flex items-center gap-1 hover:underline cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#e88ea0]" />
            Re-open Envelope Animation
          </button>
        </div>

      </div>
    </div>
  );
}
