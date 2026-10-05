import React, { useEffect } from 'react';
import { Artwork, ARTIST_INFO } from '../data/artworks';

interface ArtworkLightboxProps {
  artwork: Artwork | null;
  onClose: () => void;
  onInquire: (artwork: Artwork) => void;
}

export const ArtworkLightbox: React.FC<ArtworkLightboxProps> = ({
  artwork,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (artwork) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [artwork, onClose]);

  if (!artwork) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-4xl w-full bg-[#111116] border border-[#272733] rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#ded7c8] hover:text-[#fdfaf4] bg-[#0c0c10]/80 rounded-full border border-[#272732] focus-visible:outline-none"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* High Resolution Image View */}
        <div className="md:w-3/5 bg-[#09090b] flex items-center justify-center relative overflow-hidden min-h-[300px] md:min-h-[460px]">
          <img
            src={artwork.image}
            alt={artwork.alt}
            className="w-full h-full object-contain max-h-[75vh]"
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
        </div>

        {/* Artwork Editorial Details */}
        <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div className="space-y-4">
            {/* Small unboxed category label */}
            <div className="flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-medium text-[#dfb050]">
              <span>{artwork.category}</span>
              <span aria-hidden="true">·</span>
              <span>Nagpur</span>
            </div>

            <h2 className="font-display text-2xl sm:text-3xl text-[#fdfaf4] font-medium leading-snug">
              {artwork.title}
            </h2>

            <p className="text-sm text-[#ded7c8]/90 leading-relaxed">
              {artwork.description}
            </p>

            {/* Spec breakdown */}
            <div className="pt-4 border-t border-[#1e1e28] space-y-2 text-xs">
              {artwork.medium && (
                <div className="flex justify-between py-1">
                  <span className="text-[#aba393]">Medium:</span>
                  <span className="text-[#ded7c8] font-medium">{artwork.medium}</span>
                </div>
              )}
              {artwork.dimensions && (
                <div className="flex justify-between py-1 border-t border-[#1a1a24]">
                  <span className="text-[#aba393]">Dimensions / Size:</span>
                  <span className="text-[#ded7c8] font-medium">{artwork.dimensions}</span>
                </div>
              )}
              <div className="flex justify-between py-1 border-t border-[#1a1a24]">
                <span className="text-[#aba393]">Origin:</span>
                <span className="text-[#ded7c8] font-medium">{ARTIST_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="pt-6 mt-6 border-t border-[#1e1e28]">
            <button
              onClick={() => onInquire(artwork)}
              className="w-full py-3 text-xs sm:text-sm font-medium tracking-wide text-[#0a0a0d] bg-[#dfb050] hover:bg-[#f0ce7b] transition-colors rounded text-center focus-visible:outline-none"
            >
              Inquire About This Piece
            </button>
            <p className="text-[11px] text-center text-[#aba393] mt-2">
              Connect via WhatsApp or Phone for availability & custom work
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
