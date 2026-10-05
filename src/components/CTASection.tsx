import React from 'react';

interface CTASectionProps {
  onOpenContact: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenContact }) => {
  return (
    <section className="py-20 md:py-24 border-t border-[#1e1e26] relative overflow-hidden bg-[#0c0c10]">
      {/* Subtle ambient warm glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-t from-[#c99738]/10 via-[#2c1016]/10 to-transparent blur-3xl -z-10"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center space-y-6">
        <div className="text-xs tracking-[0.25em] text-[#dfb050] uppercase font-medium">
          Have an idea in mind?
        </div>

        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-[#fdfaf4] font-medium tracking-tight text-balance">
          Let’s create something beautiful.
        </h2>

        <p className="text-sm sm:text-base text-[#ded7c8]/80 max-w-lg mx-auto leading-relaxed">
          Whether you need a custom Ganesh idol for the festive season, an elaborate event rangoli, or an original painting for your space in Nagpur.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenContact}
            className="px-8 py-3.5 text-sm font-medium tracking-wide text-[#0a0a0d] bg-[#dfb050] hover:bg-[#f0ce7b] transition-all rounded shadow-lg hover:shadow-[#dfb050]/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dfb050]"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
};
