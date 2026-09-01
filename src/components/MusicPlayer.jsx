import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { musicPlayer } from '../utils/audioHelper';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const unsubscribe = musicPlayer.subscribe((playing) => {
      setIsPlaying(playing);
    });
    return () => unsubscribe();
  }, []);

  const handleToggle = () => {
    musicPlayer.toggle();
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      <button
        onClick={handleToggle}
        title={isPlaying ? "Mute Background Melody" : "Play Sacred Wedding Harp Melody"}
        className="group relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-gradient-to-r from-[#1b3d2e]/95 to-[#132a21]/95 text-[#ffb6c1] border border-[#ffb6c1]/70 shadow-[0_8px_25px_rgba(255,182,193,0.3)] backdrop-blur-md hover:border-[#ffb6c1] hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer"
      >
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full bg-[#ffb6c1]/20 blur-sm animate-pulse pointer-events-none" />
        )}

        <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-[#ffb6c1]/20 text-[#ffb6c1]">
          {isPlaying ? (
            <Volume2 className="w-3 h-3 text-[#ffb6c1] animate-pulse" />
          ) : (
            <VolumeX className="w-3 h-3 text-gray-400" />
          )}
        </div>

        <div className="flex flex-col text-left">
          <span className="text-[9px] tracking-wider uppercase font-cinzel text-[#ffb6c1]">
            {isPlaying ? "Sacred Harp" : "Music Paused"}
          </span>
          <span className="text-[11px] font-semibold text-white/95">
            {isPlaying ? "Playing" : "Tap to Play"}
          </span>
        </div>

        {isPlaying && (
          <div className="flex items-end gap-0.5 h-3.5 ml-1 pl-1 border-l border-[#ffb6c1]/40">
            <span className="w-0.5 bg-[#ffb6c1] rounded-full sound-bar-1" />
            <span className="w-0.5 bg-[#ffb6c1] rounded-full sound-bar-2" />
            <span className="w-0.5 bg-[#ffb6c1] rounded-full sound-bar-3" />
            <span className="w-0.5 bg-[#ffb6c1] rounded-full sound-bar-4" />
          </div>
        )}
      </button>
    </div>
  );
}
