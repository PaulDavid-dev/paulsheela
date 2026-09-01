import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Send, CheckCircle2, X, Sparkles } from 'lucide-react';

export default function BlessingModal({ isOpen, onClose, onBlessingAdded }) {
  const [name, setName] = useState('');
  const [relation, setRelation] = useState('Friend');
  const [message, setMessage] = useState('');
  const [emoji, setEmoji] = useState('💖');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const emojiOptions = ['💖', '🕊️', '💐', '✨', '💍', '⛪', '🥂', '🎉'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    try {
      confetti({
        particleCount: 90,
        spread: 90,
        origin: { y: 0.6 },
        colors: ['#FFB6C1', '#D4AF37', '#FFE4E8', '#FFF0F3', '#FFFFFF'],
      });
    } catch (err) {
      console.log(err);
    }

    const newWish = {
      id: Date.now(),
      name: name.trim(),
      relation,
      message: message.trim(),
      emoji,
      date: 'Just now',
    };

    if (onBlessingAdded) {
      onBlessingAdded(newWish);
    }

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setMessage('');
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-[#ffffff] rounded-2xl border-2 border-[#ffb6c1] shadow-[0_20px_60px_rgba(255,182,193,0.4)] p-5 sm:p-6 text-center overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 text-gray-400 hover:text-[#1a382b] p-1 rounded-full hover:bg-[#fff0f3] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="my-1">
          <div className="w-10 h-10 rounded-full bg-[#fff0f3] border border-[#ffb6c1] mx-auto flex items-center justify-center text-[#e88ea0] mb-2 shadow-xs">
            <Heart className="w-5 h-5 text-[#e88ea0] fill-[#ffb6c1]" />
          </div>
          <h3 className="text-xl sm:text-2xl font-cinzel font-bold text-[#1a382b]">
            Send Your Holy Blessing
          </h3>
          <p className="text-xs font-playfair italic text-[#4a6b5c] mt-0.5">
            Leave your warm prayer for Paul & Sheela
          </p>
        </div>

        {submitted ? (
          <div className="my-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-sm flex flex-col items-center gap-2">
            <CheckCircle2 className="w-8 h-8 text-emerald-600 animate-bounce" />
            <p className="font-semibold font-cinzel">Blessing Received With Joy! ✨</p>
            <p className="text-xs">May God bless you abundantly!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 text-left space-y-3">
            <div>
              <label className="block text-[11px] font-cinzel font-bold text-[#1a382b] uppercase tracking-wider mb-1">
                Your Name *
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. John & Family"
                className="w-full px-3 py-2 rounded-lg border border-[#ffb6c1] focus:border-[#1a382b] bg-[#fffafb] text-xs sm:text-sm font-montserrat text-[#1a382b] outline-none"
              />
            </div>

            <div>
              <label className="block text-[11px] font-cinzel font-bold text-[#1a382b] uppercase tracking-wider mb-1">
                Relationship
              </label>
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-[#ffb6c1] focus:border-[#1a382b] bg-[#fffafb] text-xs sm:text-sm font-montserrat text-[#1a382b] outline-none"
              >
                <option value="Family">Family / Relative</option>
                <option value="Groom's Side">Groom's Side (Erode)</option>
                <option value="Bride's Side">Bride's Side (Trichy)</option>
                <option value="Friend">Friend / Well Wisher</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-cinzel font-bold text-[#1a382b] uppercase tracking-wider mb-1">
                Pick a Symbol
              </label>
              <div className="flex items-center gap-1.5 overflow-x-auto py-1">
                {emojiOptions.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setEmoji(item)}
                    className={`w-7 h-7 rounded-full flex items-center justify-center text-sm transition-all ${
                      emoji === item
                        ? 'bg-[#1b3d2e] scale-110 shadow-xs ring-2 ring-[#ffb6c1]'
                        : 'bg-[#fff0f3] hover:bg-[#ffe4e8]'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-cinzel font-bold text-[#1a382b] uppercase tracking-wider mb-1">
                Blessing & Wishes *
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your prayers and warm wishes..."
                className="w-full px-3 py-2 rounded-lg border border-[#ffb6c1] focus:border-[#1a382b] bg-[#fffafb] text-xs sm:text-sm font-montserrat text-[#1a382b] outline-none"
              />
            </div>

            <button
              type="submit"
              className="btn-pink w-full py-2.5 rounded-xl text-xs sm:text-sm font-cinzel font-bold flex items-center justify-center gap-2 shadow-md cursor-pointer mt-2"
            >
              <Send className="w-4 h-4 text-[#1a382b]" />
              Send Blessing with Prayers
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
