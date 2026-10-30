import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ZoomIn, X, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

interface AwardPhoto {
  id: string;
  image: string;
  alt: string;
}

const AWARDS_GALLERY: AwardPhoto[] = [
  {
    id: 'niva-bupa-stage',
    image: '/images/awards/award-niva-bupa-stage.jpg',
    alt: 'Niva Bupa Stage Felicitation with Trophy - Heartiest Congratulations',
  },
  {
    id: 'lic-branch-managers-club',
    image: '/images/awards/award-lic-branch-managers-club.jpg',
    alt: "LIC Branch Manager's Club for Agents - Certificate of Membership (Mumbai Division-IV) Awarded to Kashyap Mehta",
  },
  {
    id: 'max-bupa-premier-league',
    image: '/images/awards/award-max-bupa-premier-league.jpg',
    alt: 'Max Bupa Health Insurance Premier League Star Trophy for Valuable Contribution Awarded to Kashyap Mehta',
  },
  {
    id: 'framed-certificate-presentation',
    image: '/images/awards/award-framed-certificate-presentation.jpg',
    alt: 'Executive Framed Certificate of Felicitation Presentation Ceremony',
  },
  {
    id: 'gbs-glory-trophy',
    image: '/images/awards/award-gbs-glory-trophy.jpg',
    alt: 'GBS Glory Crown Trophy for Highest Business Giver to Multiple Awarded to Kashyap Mehta',
  },
  {
    id: 'bni-premier-leadership',
    image: '/images/awards/award-bni-premier-leadership.jpg',
    alt: 'BNI Premier Chapter Churchgate Leadership Team Wooden Award Plaque for Most Outstanding Power Team Awarded to Kashyap Mehta',
  },
  {
    id: 'heroes-of-health',
    image: '/images/awards/award-heroes-of-health.jpg',
    alt: 'Heroes of Health - Champions Assemble Recognition Award Ceremony',
  },
  {
    id: 'lic-orientation-training',
    image: '/images/awards/award-lic-orientation-training.jpg',
    alt: 'LIC Mumbai Division-IV Certificate of Participation in Orientation Training Awarded to Kashyap Mehta',
  },
  {
    id: 'stars-of-halla',
    image: '/images/awards/award-stars-of-halla.jpg',
    alt: 'Stars of Halla Stage Felicitation Ceremony with Cigna TTK',
  },
  {
    id: 'max-bupa-malaysia',
    image: '/images/awards/award-max-bupa-malaysia.jpg',
    alt: 'Max Bupa Premier League Malaysia Award Convention Feature',
  },
  {
    id: 'appreciation-certificate-2',
    image: '/images/awards/award-appreciation-certificate-2.jpg',
    alt: 'Insurance Advisory Certificate of Excellence Presentation',
  },
  {
    id: 'appreciation-certificate-1',
    image: '/images/awards/award-appreciation-certificate-1.jpg',
    alt: 'Certificate of Appreciation Presentation Felicitation',
  },
];

export const Awards: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === 0 ? AWARDS_GALLERY.length - 1 : prev! - 1));
  }, [selectedIndex]);

  const handleNext = useCallback(() => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! === AWARDS_GALLERY.length - 1 ? 0 : prev! + 1));
  }, [selectedIndex]);

  const handleModalTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };
  const handleModalTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };
  const handleModalTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 40) handleNext();
    if (diff < -40) handlePrev();
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, handlePrev, handleNext]);

  return (
    <section id="awards" className="py-20 md:py-28 bg-white border-y border-brand-borderSubtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-4 text-xs font-semibold uppercase tracking-wider shadow-soft-sm">
            <Trophy className="w-4 h-4 text-emerald-700" />
            <span>Honors & Recognition</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight">
            Awards & Recognition Gallery
          </h2>

          <p className="mt-3 text-base sm:text-lg text-brand-muted max-w-2xl mx-auto">
            A visual showcase of milestone felicitation ceremonies, national insurance conventions, and advisory excellence awards.
          </p>

          <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-brand-forest/80 bg-brand-accentGreenLight/50 px-4 py-1.5 rounded-full border border-brand-accentGreenBorder/60 shadow-soft-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-accentYellow" />
            <span>Click any photo to view full size</span>
          </div>
        </div>

        {/* Masonry Image Gallery (Pinterest-style multi-column layout matching reference photo) */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {AWARDS_GALLERY.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              onClick={() => setSelectedIndex(index)}
              className="break-inside-avoid mb-5 group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-brand-borderSubtle hover:border-brand-accentGreenBorder">
                {/* Natural Aspect Ratio Photo (Edge-to-Edge like reference image, no text on image) */}
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-auto block object-cover rounded-2xl sm:rounded-3xl transition-transform duration-500 group-hover:scale-[1.03]"
                />

                {/* Clean Hover Zoom Indicator */}
                <div className="absolute inset-0 bg-brand-forest/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 text-brand-forest text-xs font-bold shadow-soft-lg backdrop-blur-sm transform scale-90 group-hover:scale-100 transition-transform duration-200">
                    <ZoomIn className="w-4 h-4 text-emerald-700" />
                    <span>View Photo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Full-Screen Gallery Lightbox Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelectedIndex(null)}
            onTouchStart={handleModalTouchStart}
            onTouchMove={handleModalTouchMove}
            onTouchEnd={handleModalTouchEnd}
            className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6"
          >
            {/* Top Bar: Counter & Close Button */}
            <div 
              className="w-full max-w-6xl flex items-center justify-between text-white pt-1 pb-2 sm:pb-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-bold tracking-wider text-white/90 border border-white/10">
                  {selectedIndex + 1} / {AWARDS_GALLERY.length}
                </span>
                <span className="hidden sm:inline text-xs text-white/60">
                  Swipe or use arrow keys to browse
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 active:bg-white/35 text-white transition-colors border border-white/15 focus:outline-none"
                aria-label="Close photo gallery"
              >
                <X className="w-5 h-5" />
                <span className="text-xs font-semibold hidden sm:inline">Close</span>
              </button>
            </div>

            {/* Main Stage: Prev, Image, Next */}
            <div 
              className="relative w-full max-w-6xl flex-1 flex items-center justify-center my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Button */}
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-1 sm:left-4 z-10 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 active:scale-95 text-white border border-white/20 backdrop-blur-sm transition-all focus:outline-none"
                aria-label="Previous photo"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Full Original Image with Title */}
              <motion.div
                key={AWARDS_GALLERY[selectedIndex].id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center justify-center max-h-[74vh] max-w-full px-2 sm:px-12"
              >
                <img
                  src={AWARDS_GALLERY[selectedIndex].image}
                  alt={AWARDS_GALLERY[selectedIndex].alt}
                  className="max-h-[60vh] sm:max-h-[66vh] w-auto max-w-full rounded-xl sm:rounded-2xl shadow-2xl object-contain border border-white/10 bg-white"
                />
                <p className="mt-2.5 sm:mt-3 text-center text-xs sm:text-sm font-medium text-white/90 max-w-2xl px-2 sm:px-4 leading-snug">
                  {AWARDS_GALLERY[selectedIndex].alt}
                </p>
              </motion.div>

              {/* Next Button */}
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-1 sm:right-4 z-10 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 active:scale-95 text-white border border-white/20 backdrop-blur-sm transition-all focus:outline-none"
                aria-label="Next photo"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Bottom Thumbnail Strip */}
            <div 
              className="w-full max-w-2xl mx-auto flex items-center justify-start sm:justify-center gap-1.5 sm:gap-3 py-1.5 sm:py-2 overflow-x-auto px-1"
              onClick={(e) => e.stopPropagation()}
            >
              {AWARDS_GALLERY.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setSelectedIndex(idx)}
                  className={`relative w-11 h-11 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 bg-white/5 ${
                    selectedIndex === idx
                      ? 'border-brand-accentYellow scale-105 shadow-glow-yellow'
                      : 'border-white/20 opacity-50 hover:opacity-100 hover:border-white/50'
                  }`}
                  aria-label={`Jump to photo ${idx + 1}`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
