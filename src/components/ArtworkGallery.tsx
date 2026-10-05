import React, { useState } from 'react';
import { Artwork, ARTWORKS } from '../data/artworks';
import { ArtworkCard } from './ArtworkCard';

interface ArtworkGalleryProps {
  onArtworkClick: (artwork: Artwork) => void;
  initialFilter?: string;
  isStandalonePage?: boolean;
}

export const ArtworkGallery: React.FC<ArtworkGalleryProps> = ({
  onArtworkClick,
  initialFilter = 'all',
  isStandalonePage = false,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>(initialFilter);

  const filterTabs = [
    { id: 'all', label: 'All Works' },
    { id: 'ganesh-idols', label: 'Ganesh Idols' },
    { id: 'rangoli', label: 'Rangoli' },
    { id: 'paintings', label: 'Paintings' },
  ];

  const filteredArtworks = ARTWORKS.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.categorySlug === activeFilter;
  });

  return (
    <section id="featured-work" className="py-20 border-t border-[#1e1e26]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#dfb050] uppercase font-medium mb-2">
              Portfolio Gallery
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#fdfaf4] font-medium tracking-tight">
              {isStandalonePage ? 'Collection' : 'Featured Work'}
            </h2>
          </div>

          {/* Interactive Filter Control */}
          {!isStandalonePage && (
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#121217] border border-[#22222d] rounded-lg">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap focus-visible:outline-none ${
                    activeFilter === tab.id
                      ? 'bg-[#dfb050] text-[#0a0a0d] shadow-sm font-semibold'
                      : 'text-[#ded7c8]/80 hover:text-[#fdfaf4] hover:bg-[#1a1a24]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArtworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onClick={onArtworkClick}
            />
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center text-xs text-[#aba393] flex items-center justify-center gap-2">
          <span>Click on any artwork to view details and high-resolution photo</span>
        </div>
      </div>
    </section>
  );
};
