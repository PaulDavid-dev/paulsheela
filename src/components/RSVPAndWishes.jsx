import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Send, Heart, Sparkles, MessageCircleHeart, Users, CheckCircle2, Star } from 'lucide-react';

const INITIAL_WISHES = [
  {
    id: 1,
    name: "Rev. Pastor & Church Elders",
    relation: "Family & Church",
    message: "May the Lord bless Paul David & Sheela Percy abundantly. May your home be filled with God's grace, endless joy, peace, and eternal love.",
    attending: "Joyfully Attending (2)",
    emoji: "⛪",
    date: "Just now",
  },
  {
    id: 2,
    name: "Relatives from Erode & Trichy",
    relation: "Relatives",
    message: "Heartiest congratulations to dear Paul & Sheela! Rejoicing with both families on this holy matrimonial union. Psalm 118:24!",
    attending: "Joyfully Attending (4)",
    emoji: "💖",
    date: "A moment ago",
  },
  {
    id: 3,
    name: "Dear Friends & Well Wishers",
    relation: "Friends",
    message: "Wishing Paul and Sheela a lifetime filled with laughter, harmony, and God's richest blessings! Can't wait to celebrate at Bhavani Mahal!",
    attending: "Joyfully Attending (2)",
    emoji: "🥂",
    date: "Recent",
  },
];

export default function RSVPAndWishes() {
  const [wishes, setWishes] = useState(() => {
    try {
      const saved = localStorage.getItem('paul_sheela_wishes');
      return saved ? JSON.parse(saved) : INITIAL_WISHES;
    } catch {
      return INITIAL_WISHES;
    }
  });

  const [formData, setFormData] = useState({
    name: '',
    relation: "Friend",
    attending: 'Yes, Joyfully Attending (1-2)',
    message: '',
    emoji: '💖',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('paul_sheela_wishes', JSON.stringify(wishes));
    } catch (e) {
      console.log(e);
    }
  }, [wishes]);

  const emojiOptions = ['💖', '🕊️', '💐', '✨', '💍', '⛪', '🥂', '🎉'];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) return;

    // Trigger celebratory confetti explosion
    try {
      confetti({
        particleCount: 120,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#D4AF37', '#F7E7A9', '#7A9A8B', '#FFD1DC', '#FFFFFF'],
      });
    } catch (err) {
      console.log(err);
    }

    const newWish = {
      id: Date.now(),
      name: formData.name.trim(),
      relation: formData.relation,
      message: formData.message.trim(),
      attending: formData.attending,
      emoji: formData.emoji,
      date: "Just now",
    };

    setWishes([newWish, ...wishes]);
    setSubmitted(true);
    setFormData({
      name: '',
      relation: "Friend",
      attending: 'Yes, Joyfully Attending (1-2)',
      message: '',
      emoji: '💖',
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="relative w-full max-w-3xl mx-auto px-2 sm:px-4 py-8 z-10">
      <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-[#d4af37]/60 shadow-[0_20px_50px_rgba(20,45,33,0.1)] relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f4ecd8] border border-[#d4af37]/60 text-[#7a5914] text-xs uppercase tracking-widest font-cinzel font-bold mb-2">
            <MessageCircleHeart className="w-4 h-4 text-[#8f6412]" />
            Blessings & RSVP
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#1a382b]">
            Send Your Holy Wishes
          </h3>
          <p className="text-xs sm:text-sm md:text-base font-playfair italic text-[#4a6b5c] mt-1">
            Leave your warm congratulations and prayers for Paul & Sheela
          </p>
        </div>

        {/* RSVP Form */}
        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#ffffff] to-[#faf6ed] rounded-2xl p-5 sm:p-7 border-2 border-[#d4af37]/45 shadow-sm mb-8 text-left">
          
          {submitted && (
            <div className="mb-5 p-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs sm:text-sm md:text-base flex items-center gap-3 animate-bounce">
              <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
              <span>Thank you! Your heartfelt blessing and RSVP have been received with joy! ✨</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4">
            
            {/* Name input */}
            <div>
              <label className="block text-xs font-cinzel font-bold text-[#1a382b] uppercase tracking-wider mb-1.5">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. John & Family"
                className="w-full px-4 py-3 rounded-xl border border-[#c5a059]/60 focus:border-[#1a382b] focus:ring-1 focus:ring-[#1a382b] bg-white text-xs sm:text-sm font-montserrat text-[#1a382b] outline-none transition-all"
              />
            </div>

            {/* Relation */}
            <div>
              <label className="block text-xs font-cinzel font-bold text-[#1a382b] uppercase tracking-wider mb-1.5">
                Your Relationship
              </label>
              <select
                value={formData.relation}
                onChange={(e) => setFormData({ ...formData, relation: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#c5a059]/60 focus:border-[#1a382b] focus:ring-1 focus:ring-[#1a382b] bg-white text-xs sm:text-sm font-montserrat text-[#1a382b] outline-none transition-all"
              >
                <option value="Family">Family / Relative</option>
                <option value="Groom's Side">Groom's Side (Erode)</option>
                <option value="Bride's Side">Bride's Side (Trichy)</option>
                <option value="Friend">Friend / Colleague</option>
                <option value="Church Member">Church Member / Well Wisher</option>
              </select>
            </div>

          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-4">
            {/* Attendance */}
            <div>
              <label className="block text-xs font-cinzel font-bold text-[#1a382b] uppercase tracking-wider mb-1.5">
                Will you be attending?
              </label>
              <select
                value={formData.attending}
                onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-[#c5a059]/60 focus:border-[#1a382b] focus:ring-1 focus:ring-[#1a382b] bg-white text-xs sm:text-sm font-montserrat text-[#1a382b] outline-none transition-all"
              >
                <option value="Yes, Joyfully Attending (1-2)">Yes, Joyfully Attending (1-2)</option>
                <option value="Yes, Joyfully Attending with Family (3-5+)">Yes, Attending with Family (3-5+)</option>
                <option value="Sending Divine Blessings from Afar">Sending Divine Blessings from Afar</option>
              </select>
            </div>

            {/* Pick Emoji */}
            <div>
              <label className="block text-xs font-cinzel font-bold text-[#1a382b] uppercase tracking-wider mb-1.5">
                Pick a Blessing Symbol
              </label>
              <div className="flex items-center gap-2 overflow-x-auto py-1">
                {emojiOptions.map((emoji) => (
                  <button
                    key={emoji}
                    type="button"
                    onClick={() => setFormData({ ...formData, emoji })}
                    className={`w-9 h-9 rounded-full flex items-center justify-center text-base transition-all cursor-pointer ${
                      formData.emoji === emoji
                        ? 'bg-[#1b3d2e] scale-110 shadow-md ring-2 ring-[#d4af37]'
                        : 'bg-[#f4ecd8] hover:bg-[#e8dbbf]'
                    }`}
                  >
                    {emoji}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Message input */}
          <div className="mb-5">
            <label className="block text-xs font-cinzel font-bold text-[#1a382b] uppercase tracking-wider mb-1.5">
              Your Blessing & Prayer Message *
            </label>
            <textarea
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Write your prayers and warm wishes for Paul & Sheela..."
              className="w-full px-4 py-3 rounded-xl border border-[#c5a059]/60 focus:border-[#1a382b] focus:ring-1 focus:ring-[#1a382b] bg-white text-xs sm:text-sm font-montserrat text-[#1a382b] outline-none transition-all"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn-gold w-full py-3.5 rounded-xl text-xs sm:text-sm md:text-base font-cinzel font-bold flex items-center justify-center gap-2.5 shadow-md cursor-pointer"
          >
            <Send className="w-4 h-4 text-[#1a382b]" />
            Send Blessings & Confirm RSVP
          </button>
        </form>

        {/* Live Blessing Wall Cards */}
        <div className="text-left">
          <h4 className="font-cinzel font-bold text-sm sm:text-lg text-[#1a382b] mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#b88a24] fill-[#b88a24]" />
            Guestbook Blessings ({wishes.length})
          </h4>

          <div className="space-y-4 max-h-96 overflow-y-auto pr-1">
            {wishes.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 rounded-2xl bg-white/95 border border-[#d4af37]/40 shadow-sm hover:border-[#d4af37] transition-all"
              >
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <span className="font-cinzel font-bold text-xs sm:text-base text-[#1a382b] block">
                        {item.name}
                      </span>
                      <span className="text-[11px] sm:text-xs font-montserrat text-[#6b8b7d]">
                        {item.relation} • {item.attending}
                      </span>
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-400 font-montserrat">
                    {item.date}
                  </span>
                </div>

                <p className="text-xs sm:text-sm md:text-base font-playfair italic text-[#2e4d3f] mt-2.5 leading-relaxed bg-[#fdfbf7] p-3 rounded-xl border border-[#c5a059]/25">
                  "{item.message}"
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
