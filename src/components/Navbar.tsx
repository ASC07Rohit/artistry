import React, { useState } from 'react';
import { ARTIST_INFO } from '../data/artworks';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  onNavigate,
  onOpenContact,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'ganesh-idols', label: 'Ganesh Idols' },
    { id: 'rangoli', label: 'Rangoli' },
    { id: 'paintings', label: 'Paintings' },
    { id: 'about', label: 'About' },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0a0a0d]/90 border-b border-[#22222a] transition-all">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="text-left font-display text-xl sm:text-2xl font-semibold tracking-widest text-[#fbf8f2] hover:text-[#dfb050] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c99738]"
        >
          {ARTIST_INFO.brandName}
        </button>

        {/* Zone 2: 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#ded7c8]">
          {navLinks.map((link) => {
            const isActive = currentView === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors py-1 relative whitespace-nowrap focus-visible:outline-none ${
                  isActive
                    ? 'text-[#fbf8f2] font-semibold'
                    : 'text-[#ded7c8]/80 hover:text-[#fbf8f2]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#c99738]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs sm:text-sm font-medium tracking-wide text-[#0a0a0d] bg-[#dfb050] hover:bg-[#f0ce7b] transition-colors whitespace-nowrap rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#dfb050]"
          >
            Contact
          </button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 text-[#ded7c8] hover:text-[#fbf8f2] focus-visible:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#22222a] bg-[#0c0c10] px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left text-base py-2 transition-colors ${
                  currentView === link.id
                    ? 'text-[#dfb050] font-semibold'
                    : 'text-[#ded7c8] hover:text-[#fbf8f2]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-4 border-t border-[#1e1e26] flex items-center justify-between text-xs text-[#aba393]">
            <span>Nagpur, Maharashtra</span>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="text-[#dfb050] hover:underline"
            >
              Get in Touch →
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
