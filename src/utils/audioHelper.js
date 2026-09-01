// Romantic Wedding Ambient Music Synthesizer & Controller using Web Audio API

class WeddingMusicSynthesizer {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.intervalId = null;
    this.currentStep = 0;
    this.masterGain = null;
    this.listeners = new Set();
  }

  initContext() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.18, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playHarpPluck(freq, time, duration = 2.4, velocity = 0.5) {
    if (!this.ctx || !this.masterGain) return;
    
    // Main fundamental oscillator (warm sine/triangle)
    const osc = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gainNode = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, time);

    // Warm harmonic
    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(freq * 2, time);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(1400, time);
    filter.frequency.exponentialRampToValueAtTime(350, time + duration);

    // Harp-like envelope: fast attack, exponential soft decay
    gainNode.gain.setValueAtTime(0.0001, time);
    gainNode.gain.linearRampToValueAtTime(velocity * 0.28, time + 0.03);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, time + duration);

    osc.connect(filter);
    osc2.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc.start(time);
    osc2.start(time);
    osc.stop(time + duration);
    osc2.stop(time + duration);
  }

  playChordArpeggio(notes, baseTime) {
    notes.forEach((freq, index) => {
      this.playHarpPluck(freq, baseTime + index * 0.22, 3.2, 0.45 - index * 0.04);
    });
  }

  start() {
    this.initContext();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.notify();

    // Sacred & Romantic Harmonic Sequence (D, A, Bm, F#m, G, D, G, A in warm peaceful harp frequencies)
    const chords = [
      [146.83, 220.00, 293.66, 369.99, 440.00, 587.33], // D maj (D3, A3, D4, F#4, A4, D5)
      [110.00, 220.00, 277.18, 329.63, 440.00, 554.37], // A maj (A2, A3, C#4, E4, A4, C#5)
      [123.47, 185.00, 246.94, 293.66, 369.99, 493.88], // B min (B2, F#3, B3, D4, F#4, B4)
      [92.50, 185.00, 220.00, 277.18, 369.99, 440.00],  // F# min (F#2, F#3, A3, C#4, F#4, A4)
      [98.00, 196.00, 246.94, 293.66, 392.00, 493.88],  // G maj (G2, G3, B3, D4, G4, B4)
      [146.83, 220.00, 293.66, 369.99, 440.00, 587.33], // D maj
      [98.00, 196.00, 246.94, 293.66, 392.00, 493.88],  // G maj
      [110.00, 220.00, 277.18, 329.63, 440.00, 554.37], // A maj
    ];

    let chordIndex = 0;
    const playNext = () => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const chord = chords[chordIndex % chords.length];
      this.playChordArpeggio(chord, now);

      // Play high gentle celestial bell sparkle
      const bellFreqs = [587.33, 739.99, 880.00, 1108.73, 1174.66];
      const randomBell = bellFreqs[Math.floor(Math.random() * bellFreqs.length)];
      this.playHarpPluck(randomBell, now + 1.2, 3.5, 0.18);

      chordIndex++;
    };

    playNext();
    this.intervalId = setInterval(playNext, 3800);
  }

  stop() {
    this.isPlaying = false;
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
    this.notify();
  }

  toggle() {
    if (this.isPlaying) {
      this.stop();
    } else {
      this.start();
    }
    return this.isPlaying;
  }

  subscribe(listener) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  notify() {
    this.listeners.forEach((listener) => listener(this.isPlaying));
  }
}

export const musicPlayer = new WeddingMusicSynthesizer();
