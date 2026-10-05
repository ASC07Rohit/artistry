import React from 'react';
import { ARTIST_INFO } from '../data/artworks';

interface HeroProps {
  onExploreWork: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onOpenContact }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-16 md:pb-28">
      {/* Subtle atmospheric ambient glow */}
      <div
        className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#3f1620]/25 via-[#2b1016]/10 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Editorial Typography */}
          <div className="lg:col-span-6 space-y-6">
            {/* Small label (clean unboxed text, no pill) */}
            <div className="flex items-center gap-2 text-xs tracking-[0.25em] text-[#dfb050] uppercase font-medium">
              <span>Handmade Art</span>
              <span aria-hidden="true">·</span>
              <span>Nagpur</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#fdfaf4] leading-[1.12] text-balance">
              {ARTIST_INFO.heroTitle}
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-[#ded7c8]/90 max-w-xl leading-relaxed">
              {ARTIST_INFO.heroSubtitle}
            </p>

            {/* Quick craft indicator */}
            <div className="flex items-center gap-3 text-xs tracking-wider text-[#aba393] uppercase pt-2">
              <span className="text-[#ded7c8]">Ganesh Idols</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#ded7c8]">Rangoli</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#ded7c8]">Paintings</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreWork}
                className="px-6 py-3.5 text-sm font-medium tracking-wide text-[#0a0a0d] bg-[#dfb050] hover:bg-[#f0ce7b] transition-all rounded shadow-md hover:shadow-[#dfb050]/20 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dfb050]"
              >
                Explore the Work
              </button>
              <button
                onClick={onOpenContact}
                className="px-5 py-3.5 text-sm font-medium tracking-wide text-[#ded7c8] hover:text-[#fdfaf4] hover:bg-[#1a1a24] border border-[#272732] transition-colors rounded whitespace-nowrap focus-visible:outline-none"
              >
                Inquire & Connect
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-6">
            <div className="relative group overflow-hidden rounded-lg border border-[#272732] bg-[#121217] shadow-2xl">
              <div className="aspect-[16/10] sm:aspect-[16/9] w-full relative overflow-hidden">
                <img
                  src="/images/hero-ganesh.jpg"
                  alt="Handcrafted Ganesh Idol sculpture with traditional Indian craftsmanship"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="eager"
                  onError={(e) => {
                    // Fallback to internal asset if public path issues occur
                    const target = e.currentTarget;
                    if (!target.src.includes('hero_ganesh_sculpture')) {
                      target.src = '/src/assets/images/hero_ganesh_sculpture_1790866520425.jpg';
                    }
                  }}
                />
                {/* Subtle gradient scrim */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d]/80 via-transparent to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                {/* Quiet caption */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#ded7c8]/90 pointer-events-none">
                  <span className="font-display tracking-wider">Handcrafted Clay Ganesh Idol</span>
                  <span className="text-[#aba393]">Studio Piece · Nagpur</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
