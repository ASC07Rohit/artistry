import React from 'react';
import { Artwork, ARTWORKS, CATEGORIES } from '../data/artworks';
import { ArtworkCard } from './ArtworkCard';

interface CategoryPageProps {
  categorySlug: 'ganesh-idols' | 'rangoli' | 'paintings';
  onBackToHome: () => void;
  onArtworkClick: (artwork: Artwork) => void;
  onOpenContact: () => void;
}

export const CategoryPage: React.FC<CategoryPageProps> = ({
  categorySlug,
  onBackToHome,
  onArtworkClick,
  onOpenContact,
}) => {
  const categoryInfo = CATEGORIES.find((c) => c.id === categorySlug) || {
    id: categorySlug,
    name:
      categorySlug === 'ganesh-idols'
        ? 'Ganesh Idols'
        : categorySlug === 'rangoli'
        ? 'Rangoli'
        : 'Paintings',
    shortDesc:
      categorySlug === 'ganesh-idols'
        ? 'A collection of handcrafted Ganesh idol creations.'
        : categorySlug === 'rangoli'
        ? 'Creative rangoli designs for festivals, celebrations and special occasions.'
        : 'A collection of original and custom painting work.',
    image: '',
    alt: '',
    count: 0,
  };

  const artworks = ARTWORKS.filter((a) => a.categorySlug === categorySlug);

  return (
    <div className="py-12 md:py-20 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Navigation Breadcrumb / Back button */}
        <div className="mb-10">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase text-[#aba393] hover:text-[#dfb050] transition-colors focus-visible:outline-none"
          >
            <span aria-hidden="true" className="transform group-hover:-translate-x-1 transition-transform">←</span>
            <span>Back to All Works</span>
          </button>
        </div>

        {/* Minimal Category Header */}
        <div className="mb-14 max-w-3xl">
          <div className="text-xs tracking-[0.2em] text-[#dfb050] uppercase font-medium mb-3">
            Handmade in Nagpur
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#fdfaf4] font-medium tracking-tight mb-4">
            {categoryInfo.name}
          </h1>
          <p className="text-base sm:text-lg text-[#ded7c8]/90 leading-relaxed">
            {categoryInfo.shortDesc}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {artworks.map((artwork) => (
            <ArtworkCard
              key={artwork.id}
              artwork={artwork}
              onClick={onArtworkClick}
            />
          ))}
        </div>

        {/* Category Inquire CTA */}
        <div className="mt-20 p-8 sm:p-12 rounded-lg border border-[#22222d] bg-[#101015] text-center space-y-4">
          <h3 className="font-display text-2xl text-[#fdfaf4] font-medium">
            Commission a Custom {categoryInfo.name} Piece
          </h3>
          <p className="text-sm text-[#ded7c8]/80 max-w-lg mx-auto">
            Have a specific theme, size, or festive requirement in mind? Each piece can be handcrafted to your specifications.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenContact}
              className="px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-[#0a0a0d] bg-[#dfb050] hover:bg-[#f0ce7b] transition-colors rounded focus-visible:outline-none"
            >
              Inquire About Custom Orders
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
