import React from 'react';
import { ARTIST_INFO } from '../data/artworks';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenContact }) => {
  return (
    <footer className="border-t border-[#1e1e26] bg-[#08080a] py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-[#181820]">
          {/* Brand & Crafts */}
          <div className="space-y-2">
            <button
              onClick={() => onNavigate('home')}
              className="font-display text-2xl font-semibold tracking-widest text-[#fdfaf4] hover:text-[#dfb050] transition-colors focus-visible:outline-none"
            >
              {ARTIST_INFO.brandName}
            </button>
            <div className="text-xs tracking-wider text-[#aba393]">
              {ARTIST_INFO.tagline}
            </div>
          </div>

          {/* Direct Channels */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-[#ded7c8]">
            <a
              href={ARTIST_INFO.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dfb050] transition-colors"
            >
              WhatsApp
            </a>
            <a
              href={ARTIST_INFO.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#dfb050] transition-colors"
            >
              Instagram
            </a>
            <button
              onClick={onOpenContact}
              className="hover:text-[#dfb050] transition-colors focus-visible:outline-none"
            >
              Contact
            </button>
          </div>
        </div>

        {/* Bottom Bar: Location & Quiet Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#aba393]/80">
          <div className="flex items-center gap-2">
            <span>Nagpur, Maharashtra</span>
            <span aria-hidden="true">·</span>
            <span>Handmade Studio Portfolio</span>
          </div>
          <div>
            <span>© {new Date().getFullYear()} {ARTIST_INFO.brandName}. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
