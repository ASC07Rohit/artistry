import React from 'react';
import { CATEGORIES } from '../data/artworks';

interface CategorySectionProps {
  onSelectCategory: (categorySlug: string) => void;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectCategory,
}) => {
  return (
    <section id="what-i-create" className="py-20 border-t border-[#1e1e26]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="text-xs tracking-[0.2em] text-[#dfb050] uppercase font-medium mb-2">
              Disciplines & Craft
            </div>
            <h2 className="font-display text-3xl sm:text-4xl text-[#fdfaf4] font-medium tracking-tight">
              What I Create
            </h2>
          </div>
          <p className="text-sm text-[#aba393] max-w-md">
            Three distinct expressions of handmade artistry, created with traditional patience and contemporary sensibility.
          </p>
        </div>

        {/* 3 Editorial Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CATEGORIES.map((cat, idx) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group cursor-pointer flex flex-col bg-[#111116] border border-[#22222d] hover:border-[#dfb050]/50 transition-all duration-300 rounded-lg overflow-hidden"
            >
              {/* Large Image Frame */}
              <div className="aspect-[4/3] w-full overflow-hidden relative bg-[#181820]">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    const fallbackMap: Record<string, string> = {
                      'ganesh-idols': '/src/assets/images/category_ganesh_idol_1790866534332.jpg',
                      'rangoli': '/src/assets/images/category_rangoli_art_1790866550077.jpg',
                      'paintings': '/src/assets/images/category_acrylic_painting_1790866564404.jpg',
                    };
                    e.currentTarget.src = fallbackMap[cat.id] || '/images/hero-ganesh.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-80" />
                <div className="absolute top-4 left-4 text-xs font-mono text-[#ded7c8]/80 bg-[#0c0c10]/80 backdrop-blur-sm px-2 py-0.5 rounded border border-[#272732]">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-display text-xl text-[#fdfaf4] font-medium tracking-wide group-hover:text-[#dfb050] transition-colors mb-2">
                    {cat.name}
                  </h3>
                  <p className="text-sm text-[#ded7c8]/80 leading-relaxed mb-6">
                    {cat.shortDesc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#1e1e26] flex items-center justify-between">
                  <span className="text-xs font-medium text-[#dfb050] group-hover:underline flex items-center gap-1.5">
                    View Work
                    <span aria-hidden="true" className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </span>
                  <span className="text-xs text-[#aba393]">
                    Explore collection
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
