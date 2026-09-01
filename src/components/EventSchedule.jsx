import React from 'react';
import { Clock, Sparkles, Heart, Church, Utensils, Award } from 'lucide-react';

export default function EventSchedule() {
  const events = [
    {
      time: "10:30 AM",
      title: "Welcome & Holy Invocation",
      description: "Gathering of family & esteemed guests, solemn opening prayer and joyful thanksgiving hymns.",
      icon: Church,
      tag: "Opening Prayer",
    },
    {
      time: "11:00 AM",
      title: "Holy Scripture & Nuptial Vows",
      description: "Reading of God's Word, inspirational wedding sermon, and exchange of sacred holy vows.",
      icon: Sparkles,
      tag: "Sacred Vows",
    },
    {
      time: "11:30 AM",
      title: "Ring Exchange & Nuptial Blessing",
      description: "Sanctification and exchange of wedding rings, tying of the sacred knot & pastoral blessings.",
      icon: Heart,
      tag: "Divine Union",
    },
    {
      time: "12:30 PM onwards",
      title: "Grand Wedding Banquet & Feast",
      description: "Felicitation, photo sessions, and delicious traditional wedding feast with family and friends.",
      icon: Utensils,
      tag: "Celebration Feast",
    },
  ];

  return (
    <section className="relative w-full max-w-3xl mx-auto px-2 sm:px-4 py-8 z-10">
      <div className="glass-panel rounded-2xl sm:rounded-3xl p-6 sm:p-10 border-2 border-[#d4af37]/60 shadow-[0_20px_50px_rgba(20,45,33,0.1)] relative overflow-hidden">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#f4ecd8] border border-[#d4af37]/60 text-[#7a5914] text-xs uppercase tracking-widest font-cinzel font-bold mb-2">
            <Clock className="w-4 h-4 text-[#8f6412]" />
            Program of the Auspicious Day
          </div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-cinzel font-bold text-[#1a382b]">
            Order of Holy Matrimony
          </h3>
          <p className="text-sm sm:text-base font-playfair italic text-[#4a6b5c] mt-1">
            Saturday, 10th October 2026
          </p>
        </div>

        {/* Timeline */}
        <div className="relative pl-7 sm:pl-10 border-l-2 border-[#d4af37]/60 space-y-6 sm:space-y-8 ml-2 sm:ml-6 text-left">
          {events.map((event, idx) => {
            const IconComponent = event.icon;
            return (
              <div key={idx} className="relative group">
                {/* Timeline node */}
                <div className="absolute -left-[33px] sm:-left-[43px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#f8e59e] via-[#c99f36] to-[#7a5209] border-2 border-white shadow-md flex items-center justify-center text-[#1e3a2f] group-hover:scale-110 transition-transform">
                  <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 text-[#1e3a2f]" />
                </div>

                {/* Event Card */}
                <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-[#ffffff] to-[#faf6ed] border border-[#d4af37]/45 shadow-sm group-hover:border-[#d4af37] transition-all group-hover:shadow-md">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs sm:text-sm font-montserrat uppercase tracking-widest px-3 py-1 rounded-full bg-[#1b3d2e] text-[#f7e7a9] font-bold">
                      {event.time}
                    </span>
                    <span className="text-xs font-cinzel tracking-wider text-[#996515] uppercase font-bold">
                      {event.tag}
                    </span>
                  </div>

                  <h4 className="font-cinzel font-bold text-base sm:text-xl text-[#1a382b] mt-1">
                    {event.title}
                  </h4>

                  <p className="text-xs sm:text-sm md:text-base font-montserrat text-[#4a6b5c] mt-1.5 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
