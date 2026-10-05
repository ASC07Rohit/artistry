import React from 'react';
import { Artwork } from '../data/artworks';

interface ArtworkCardProps {
  artwork: Artwork;
  onClick: (artwork: Artwork) => void;
}

export const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork, onClick }) => {
  return (
    <div
      onClick={() => onClick(artwork)}
      className="group cursor-pointer relative bg-[#111116] border border-[#20202a] hover:border-[#dfb050]/60 transition-all duration-300 rounded-lg overflow-hidden flex flex-col"
    >
      {/* Image Area with hover zoom */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#16161e]">
        <img
          src={artwork.image}
          alt={artwork.alt}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
          referrerPolicy="no-referrer"
          onError={(e) => {
            const fallbackMap: Record<string, string> = {
              'ganesh-idols': '/src/assets/images/category_ganesh_idol_1790866534332.jpg',
              'rangoli': '/src/assets/images/category_rangoli_art_1790866550077.jpg',
              'paintings': '/src/assets/images/category_acrylic_painting_1790866564404.jpg',
            };
            e.currentTarget.src = fallbackMap[artwork.categorySlug] || '/images/hero-ganesh.jpg';
          }}
        />

        {/* Ambient Dark Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c10] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

        {/* Expand Icon Indicator on Hover */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-[#0a0a0d]/80 text-[#fdfaf4] p-1.5 rounded backdrop-blur-sm border border-[#2a2a35]">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
          </svg>
        </div>
      </div>

      {/* Card Info */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
        <div>
          {/* Small unboxed category label as requested */}
          <div className="text-[11px] tracking-[0.2em] uppercase font-medium text-[#dfb050] mb-1.5">
            {artwork.category}
          </div>

          <h3 className="font-display text-lg text-[#fdfaf4] font-medium leading-snug group-hover:text-[#dfb050] transition-colors">
            {artwork.title}
          </h3>
        </div>

        {artwork.medium && (
          <div className="pt-3 mt-3 border-t border-[#1a1a24] text-xs text-[#aba393] flex items-center justify-between">
            <span className="truncate pr-2">{artwork.medium}</span>
            <span className="text-[#dfb050]/80 shrink-0 group-hover:translate-x-0.5 transition-transform">
              View →
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
