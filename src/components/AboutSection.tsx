import React from 'react';
import { ARTIST_INFO } from '../data/artworks';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#1e1e26] bg-[#0d0d12]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Visual Workspace Frame */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden border border-[#22222d] bg-[#121217]">
              <div className="aspect-[4/3] w-full overflow-hidden relative">
                <img
                  src="/images/artist-workspace.jpg"
                  alt="Artist workspace with sculpting tools and creative process"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src =
                      '/src/assets/images/about_artist_workspace_1790866580262.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0d]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-xs text-[#ded7c8] flex items-center justify-between">
                  <span className="font-display tracking-wider">Atelier & Studio</span>
                  <span className="text-[#aba393]">Nagpur, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Editorial Text Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="text-xs tracking-[0.2em] text-[#dfb050] uppercase font-medium">
              About the Artist
            </div>

            <h2 className="font-display text-3xl sm:text-4xl text-[#fdfaf4] font-medium tracking-tight leading-tight text-balance">
              {ARTIST_INFO.aboutHeadline}
            </h2>

            <p className="text-base text-[#ded7c8]/90 leading-relaxed">
              {ARTIST_INFO.aboutBio}
            </p>

            {/* Subtle Studio Values - Clean Unboxed Metadata */}
            <div className="pt-4 border-t border-[#22222d] grid grid-cols-2 gap-6 text-sm">
              <div>
                <div className="text-xs uppercase tracking-wider text-[#aba393] mb-1 font-medium">
                  Studio Focus
                </div>
                <p className="text-[#ded7c8]">
                  Handmade sculptures, custom rangoli & bespoke canvas art.
                </p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#aba393] mb-1 font-medium">
                  Commissions
                </div>
                <p className="text-[#ded7c8]">
                  Custom pieces crafted for festivals, sacred spaces & homes.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#dfb050] hover:text-[#f0ce7b] transition-colors focus-visible:outline-none"
              >
                <span>Discuss an artistic idea</span>
                <span aria-hidden="true">→</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
