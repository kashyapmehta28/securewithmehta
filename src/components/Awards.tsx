import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ZoomIn, X, ChevronLeft, ChevronRight, Sparkles, ArrowRight, Images, ChevronDown } from 'lucide-react';

interface AwardPhoto {
  id: string;
  image: string;
  alt: string;
  title?: string;
  category?: string;
}

const AWARDS_GALLERY: AwardPhoto[] = [
  {
    id: 'niva-bupa-stage',
    image: '/images/awards/award-niva-bupa-stage.jpg',
    alt: 'Niva Bupa Stage Felicitation with Trophy - Heartiest Congratulations',
    title: 'Niva Bupa Stage Felicitation',
    category: 'National Stage Convention',
  },
  {
    id: 'lic-branch-managers-club',
    image: '/images/awards/award-lic-branch-managers-club.jpg',
    alt: "LIC Branch Manager's Club for Agents - Certificate of Membership (Mumbai Division-IV) Awarded to Kashyap Mehta",
    title: "LIC Branch Manager's Club",
    category: 'Mumbai Division-IV Membership',
  },
  {
    id: 'max-bupa-premier-league',
    image: '/images/awards/award-max-bupa-premier-league.jpg',
    alt: 'Max Bupa Health Insurance Premier League Star Trophy for Valuable Contribution Awarded to Kashyap Mehta',
    title: 'Premier League Star Trophy',
    category: 'Max Bupa Health Insurance',
  },
  {
    id: 'gbs-glory-trophy',
    image: '/images/awards/award-gbs-glory-trophy.jpg',
    alt: 'GBS Glory Crown Trophy for Highest Business Giver to Multiple Awarded to Kashyap Mehta',
    title: 'GBS Glory Crown Trophy',
    category: 'Highest Business Contribution',
  },
  {
    id: 'framed-certificate-presentation',
    image: '/images/awards/award-framed-certificate-presentation.jpg',
    alt: 'Executive Framed Certificate of Felicitation Presentation Ceremony',
    title: 'Certificate of Felicitation',
    category: 'Executive Presentation',
  },
  {
    id: 'bni-premier-leadership',
    image: '/images/awards/award-bni-premier-leadership.jpg',
    alt: 'BNI Premier Chapter Churchgate Leadership Team Wooden Award Plaque for Most Outstanding Power Team Awarded to Kashyap Mehta',
    title: 'BNI Leadership Award Plaque',
    category: 'Most Outstanding Power Team',
  },
  {
    id: 'heroes-of-health',
    image: '/images/awards/award-heroes-of-health.jpg',
    alt: 'Heroes of Health - Champions Assemble Recognition Award Ceremony',
    title: 'Heroes of Health Honor',
    category: 'Champions Assemble Ceremony',
  },
  {
    id: 'lic-orientation-training',
    image: '/images/awards/award-lic-orientation-training.jpg',
    alt: 'LIC Mumbai Division-IV Certificate of Participation in Orientation Training Awarded to Kashyap Mehta',
    title: 'LIC Orientation Certificate',
    category: 'Mumbai Division-IV',
  },
  {
    id: 'stars-of-halla',
    image: '/images/awards/award-stars-of-halla.jpg',
    alt: 'Stars of Halla Stage Felicitation Ceremony with Cigna TTK',
    title: 'Stars of Halla Felicitation',
    category: 'Cigna TTK Stage Convention',
  },
  {
    id: 'max-bupa-malaysia',
    image: '/images/awards/award-max-bupa-malaysia.jpg',
    alt: 'Max Bupa Premier League Malaysia Award Convention Feature',
    title: 'Malaysia Convention Feature',
    category: 'International Premier League',
  },
  {
    id: 'appreciation-certificate-2',
    image: '/images/awards/award-appreciation-certificate-2.jpg',
    alt: 'Insurance Advisory Certificate of Excellence Presentation',
    title: 'Certificate of Excellence',
    category: 'Advisory Performance',
  },
  {
    id: 'appreciation-certificate-1',
    image: '/images/awards/award-appreciation-certificate-1.jpg',
    alt: 'Certificate of Appreciation Presentation Felicitation',
    title: 'Certificate of Appreciation',
    category: 'Felicitation Recognition',
  },
];

// Number of photos visible in the initial maze (first 7 featured, plus 1 Extra Photos Box for the remaining 5)
const FEATURED_COUNT = 7;

export const Awards: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
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

  // Specific grid span classes for the 7 featured items in the maze (Mobile, Tablet, Laptop)
  const getMazeTileClasses = (index: number) => {
    switch (index) {
      case 0:
        // Hero Centerpiece: Spans 2 cols & 2 rows on laptop, 2 cols on tablet/mobile
        return 'col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2 min-h-[220px] sm:min-h-[300px] lg:min-h-[440px]';
      case 1:
        // Wide Certificate: 2 cols on laptop, 1 on mobile/tablet
        return 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1 min-h-[140px] sm:min-h-[200px] lg:min-h-[210px]';
      case 2:
        // Tall Trophy: Spans 2 rows on laptop, 1 col on mobile/tablet
        return 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-2 min-h-[140px] sm:min-h-[200px] lg:min-h-[440px]';
      case 3:
        // Square Trophy: 1 col, 1 row
        return 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 min-h-[140px] sm:min-h-[200px] lg:min-h-[210px]';
      case 4:
        // Horizontal Certificate Presentation: 2 cols on laptop, 1 on mobile/tablet
        return 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1 min-h-[140px] sm:min-h-[200px] lg:min-h-[210px]';
      case 5:
        // Plaque: 1 col, 1 row
        return 'col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 min-h-[140px] sm:min-h-[200px] lg:min-h-[210px]';
      case 6:
        // Stage Award: 2 cols on laptop, 1 on mobile/tablet
        return 'col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1 min-h-[140px] sm:min-h-[200px] lg:min-h-[210px]';
      default:
        return 'col-span-1 md:col-span-1 lg:col-span-1 min-h-[180px]';
    }
  };

  const remainingPhotosCount = AWARDS_GALLERY.length - FEATURED_COUNT;
  const previewThumbnails = AWARDS_GALLERY.slice(FEATURED_COUNT, FEATURED_COUNT + 3);

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
            <span>Interlocking maze structure • Click any photo or the box to view all</span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MAZE STRUCTURE GRID (Responsive across Mobile, Tablet, and Laptop)        */}
        {/* ========================================================================= */}
        {!isExpanded ? (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 auto-rows-fr">
            {/* The First 7 Featured Photos */}
            {AWARDS_GALLERY.slice(0, FEATURED_COUNT).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35, delay: index * 0.04 }}
                onClick={() => setSelectedIndex(index)}
                className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-brand-borderSubtle hover:border-brand-accentGreenBorder cursor-pointer ${getMazeTileClasses(
                  index
                )}`}
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />

                {/* Subtle Hover Gradient & Overlay Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-5">
                  {item.category && (
                    <span className="text-[10px] sm:text-xs font-bold text-brand-accentYellow uppercase tracking-wider">
                      {item.category}
                    </span>
                  )}
                  <p className="text-white text-xs sm:text-sm font-semibold line-clamp-2 mt-0.5">
                    {item.title || item.alt}
                  </p>
                  <div className="mt-2 inline-flex items-center gap-1.5 text-white/90 text-[11px] font-bold">
                    <ZoomIn className="w-3.5 h-3.5 text-brand-accentYellow" />
                    <span>View Photo</span>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* ===================================================================== */}
            {/* TILE 8: THE EXTRA PHOTOS BOX (Holds all other images when clicked)    */}
            {/* ===================================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, delay: 0.3 }}
              onClick={() => setSelectedIndex(FEATURED_COUNT)}
              className="col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-1 min-h-[180px] sm:min-h-[200px] lg:min-h-[210px] group relative overflow-hidden rounded-2xl sm:rounded-3xl cursor-pointer border border-brand-accentGreenBorder shadow-soft hover:shadow-soft-lg active:scale-[0.99] transition-all duration-300 bg-brand-forest"
            >
              {/* Blurred Photo Backdrop from the 8th award */}
              <img
                src={AWARDS_GALLERY[FEATURED_COUNT].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-30 group-hover:scale-115 transition-transform duration-700"
              />

              {/* Rich Emerald Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-forest/95 via-brand-forest/85 to-[#0b291c]/95" />

              {/* Interactive Box Content */}
              <div className="relative z-10 h-full flex flex-col justify-between p-5 sm:p-6 text-white">
                {/* Top Row: Stacked Thumbnails & Extra Badge */}
                <div className="flex items-center justify-between gap-3">
                  {/* Overlapping Thumbnails Preview */}
                  <div className="flex -space-x-3 items-center">
                    {previewThumbnails.map((thumb) => (
                      <div
                        key={thumb.id}
                        className="w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-white shadow-md bg-white flex-shrink-0"
                      >
                        <img
                          src={thumb.image}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Counter Badge */}
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-brand-accentYellow text-brand-dark text-xs font-black shadow-soft">
                    +{remainingPhotosCount} More Photos
                  </span>
                </div>

                {/* Middle: Title & Explanation */}
                <div className="my-2">
                  <h3 className="text-base sm:text-lg font-black text-white leading-tight">
                    View All {AWARDS_GALLERY.length} Awards & Felicitations
                  </h3>
                  <p className="text-xs text-white/80 line-clamp-1 sm:line-clamp-2 mt-1">
                    Click to open full gallery of national insurance conventions, LIC certificates, and leadership trophies.
                  </p>
                </div>

                {/* Bottom Row: Call to Action Pill */}
                <div className="pt-2 border-t border-white/15 flex items-center justify-between text-xs font-bold text-brand-accentYellow group-hover:text-white transition-colors">
                  <div className="inline-flex items-center gap-1.5">
                    <Images className="w-4 h-4 text-brand-accentYellow" />
                    <span>Open Complete Photo Vault</span>
                  </div>
                  <div className="flex items-center gap-1 text-[11px] uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-lg backdrop-blur-xs">
                    <span>Explore All</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : (
          /* ========================================================================= */
          /* EXPANDED VIEW: Shows all 12 photos in an extended responsive mosaic maze  */
          /* ========================================================================= */
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5">
            {AWARDS_GALLERY.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                onClick={() => setSelectedIndex(index)}
                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-brand-borderSubtle hover:border-brand-accentGreenBorder cursor-pointer min-h-[170px] sm:min-h-[220px]"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 sm:p-4">
                  {item.category && (
                    <span className="text-[10px] font-bold text-brand-accentYellow uppercase tracking-wider">
                      {item.category}
                    </span>
                  )}
                  <p className="text-white text-xs font-semibold line-clamp-2 mt-0.5">
                    {item.title || item.alt}
                  </p>
                  <div className="mt-1.5 inline-flex items-center gap-1 text-white/90 text-[10px] font-bold">
                    <ZoomIn className="w-3 h-3 text-brand-accentYellow" />
                    <span>View Fullscreen</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* View All / Collapse Controls */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setSelectedIndex(FEATURED_COUNT)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-brand-forest hover:bg-brand-forestHover active:bg-brand-forestHover text-white text-xs sm:text-sm font-bold shadow-soft hover:shadow-soft-lg transition-all group"
          >
            <Images className="w-4 h-4 text-brand-accentYellow" />
            <span>Open All {AWARDS_GALLERY.length} Photos in Viewer</span>
            <ArrowRight className="w-4 h-4 text-brand-accentYellow group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-brand-accentGreenLight active:bg-brand-accentGreen text-brand-forest border border-brand-borderSubtle hover:border-brand-accentGreenBorder text-xs sm:text-sm font-bold shadow-soft-sm transition-all"
          >
            <span>{isExpanded ? 'Collapse to Maze Layout' : `Expand All ${AWARDS_GALLERY.length} on Page`}</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* FULL-SCREEN GALLERY LIGHTBOX MODAL (Browse all 12 photos)                  */}
      {/* ========================================================================= */}
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
            className="fixed inset-0 z-50 bg-black/94 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6"
          >
            {/* Top Bar: Counter & Close Button */}
            <div 
              className="w-full max-w-6xl flex items-center justify-between text-white pt-1 pb-2 sm:pb-3"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-xs font-bold tracking-wider text-white/90 border border-white/10">
                  {selectedIndex + 1} / {AWARDS_GALLERY.length}
                </span>
                <span className="hidden sm:inline text-xs text-white/60">
                  Swipe or use keyboard arrows to browse
                </span>
              </div>

              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/15 hover:bg-white/25 active:bg-white/35 text-white transition-colors border border-white/15 focus:outline-none"
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
                className="flex flex-col items-center justify-center max-h-[70vh] sm:max-h-[74vh] max-w-full px-2 sm:px-12"
              >
                <img
                  src={AWARDS_GALLERY[selectedIndex].image}
                  alt={AWARDS_GALLERY[selectedIndex].alt}
                  className="max-h-[48vh] xs:max-h-[52vh] sm:max-h-[66vh] w-auto max-w-full rounded-xl sm:rounded-2xl shadow-2xl object-contain border border-white/10 bg-white"
                />
                <p className="mt-2 sm:mt-3 text-center text-xs sm:text-sm font-medium text-white/90 max-w-2xl px-2 sm:px-4 leading-snug line-clamp-2 sm:line-clamp-none">
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

            {/* Bottom Thumbnail Strip (All 12 photos selectable) */}
            <div 
              className="w-full max-w-2xl mx-auto flex items-center justify-start sm:justify-center gap-1.5 sm:gap-3 py-1.5 sm:py-2 overflow-x-auto px-1 no-scrollbar"
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
