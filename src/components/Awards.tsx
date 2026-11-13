import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ZoomIn, X, ChevronLeft, ChevronRight, Sparkles, ArrowRight, Images } from 'lucide-react';

interface AwardPhoto {
  id: string;
  image: string;
  alt: string;
  title: string;
  category: string;
}

const AWARDS_GALLERY: AwardPhoto[] = [
  {
    id: 'niva-bupa-stage',
    image: '/images/awards/award-niva-bupa-stage.jpg',
    alt: 'Niva Bupa Stage Felicitation with Trophy - Heartiest Congratulations',
    title: 'Niva Bupa Stage Felicitation',
    category: 'National Convention',
  },
  {
    id: 'lic-branch-managers-club',
    image: '/images/awards/award-lic-branch-managers-club.jpg',
    alt: "LIC Branch Manager's Club for Agents - Certificate of Membership (Mumbai Division-IV) Awarded to Kashyap Mehta",
    title: "LIC Branch Manager's Club",
    category: 'Mumbai Division-IV',
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
    id: 'bni-premier-leadership',
    image: '/images/awards/award-bni-premier-leadership.jpg',
    alt: 'BNI Premier Chapter Churchgate Leadership Team Wooden Award Plaque for Most Outstanding Power Team Awarded to Kashyap Mehta',
    title: 'BNI Leadership Award Plaque',
    category: 'Outstanding Power Team',
  },
  {
    id: 'framed-certificate-presentation',
    image: '/images/awards/award-framed-certificate-presentation.jpg',
    alt: 'Executive Framed Certificate of Felicitation Presentation Ceremony',
    title: 'Certificate of Felicitation',
    category: 'Executive Presentation',
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

// Number of photos shown in the 1-page compact maze (first 6 photos + 1 extra photos box)
const FEATURED_COUNT = 6;

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

  const remainingPhotosCount = AWARDS_GALLERY.length - FEATURED_COUNT;
  const previewThumbnails = AWARDS_GALLERY.slice(FEATURED_COUNT, FEATURED_COUNT + 3);

  return (
    <section id="awards" className="py-10 sm:py-12 lg:py-14 bg-white border-y border-brand-borderSubtle relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Compact 1-page fitting */}
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-accentGreen text-brand-forest border border-brand-accentGreenBorder mb-2 text-[11px] font-bold uppercase tracking-wider shadow-soft-sm">
            <Trophy className="w-3.5 h-3.5 text-emerald-700" />
            <span>Honors & Recognition</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-brand-dark tracking-tight">
            Awards & Recognition Gallery
          </h2>

          <p className="mt-1 text-xs sm:text-sm text-brand-muted">
            Felicitation ceremonies, national insurance conventions, and advisory excellence awards.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* COMPACT MAZE STRUCTURE (Fits completely in one screen view on all devices) */}
        {/* 6 columns x 2 rows on Laptop (lg), 3 columns on Tablet, 2 on Mobile       */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:grid-rows-2 gap-2.5 sm:gap-3.5 lg:h-[410px]">
          
          {/* Tile 0: Hero Stage Award (2 cols x 2 rows on laptop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedIndex(0)}
            className="col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-2 h-44 sm:h-52 md:h-56 lg:h-full group relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-brand-borderSubtle hover:border-brand-accentGreenBorder cursor-pointer"
          >
            <img
              src={AWARDS_GALLERY[0].image}
              alt={AWARDS_GALLERY[0].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-3 sm:p-4 text-white">
              <span className="text-[10px] font-bold text-brand-accentYellow uppercase tracking-wider">{AWARDS_GALLERY[0].category}</span>
              <p className="text-xs sm:text-sm font-bold truncate mt-0.5">{AWARDS_GALLERY[0].title}</p>
              <span className="inline-flex items-center gap-1 text-[11px] text-white/90 font-medium mt-1">
                <ZoomIn className="w-3.5 h-3.5 text-brand-accentYellow" /> View Photo
              </span>
            </div>
          </motion.div>

          {/* Tile 1: LIC Membership Certificate (2 cols x 1 row on laptop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.04 }}
            onClick={() => setSelectedIndex(1)}
            className="col-span-1 md:col-span-1 lg:col-span-2 lg:row-span-1 h-32 sm:h-36 md:h-56 lg:h-full group relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-brand-borderSubtle hover:border-brand-accentGreenBorder cursor-pointer"
          >
            <img
              src={AWARDS_GALLERY[1].image}
              alt={AWARDS_GALLERY[1].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2.5 sm:p-3 text-white">
              <span className="text-[9px] font-bold text-brand-accentYellow uppercase">{AWARDS_GALLERY[1].category}</span>
              <p className="text-[11px] sm:text-xs font-bold truncate">{AWARDS_GALLERY[1].title}</p>
            </div>
          </motion.div>

          {/* Tile 2: Star Trophy (1 col x 1 row on laptop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.08 }}
            onClick={() => setSelectedIndex(2)}
            className="col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 h-32 sm:h-36 md:h-44 lg:h-full group relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-brand-borderSubtle hover:border-brand-accentGreenBorder cursor-pointer"
          >
            <img
              src={AWARDS_GALLERY[2].image}
              alt={AWARDS_GALLERY[2].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2 text-white">
              <p className="text-[10px] font-bold truncate">{AWARDS_GALLERY[2].title}</p>
            </div>
          </motion.div>

          {/* Tile 3: GBS Glory Crown Trophy (1 col x 1 row on laptop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.12 }}
            onClick={() => setSelectedIndex(3)}
            className="col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 h-32 sm:h-36 md:h-44 lg:h-full group relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-brand-borderSubtle hover:border-brand-accentGreenBorder cursor-pointer"
          >
            <img
              src={AWARDS_GALLERY[3].image}
              alt={AWARDS_GALLERY[3].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2 text-white">
              <p className="text-[10px] font-bold truncate">{AWARDS_GALLERY[3].title}</p>
            </div>
          </motion.div>

          {/* Tile 4: BNI Leadership Plaque (1 col x 1 row on laptop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.16 }}
            onClick={() => setSelectedIndex(4)}
            className="col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 h-32 sm:h-36 md:h-44 lg:h-full group relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-brand-borderSubtle hover:border-brand-accentGreenBorder cursor-pointer"
          >
            <img
              src={AWARDS_GALLERY[4].image}
              alt={AWARDS_GALLERY[4].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2 text-white">
              <p className="text-[10px] font-bold truncate">{AWARDS_GALLERY[4].title}</p>
            </div>
          </motion.div>

          {/* Tile 5: Framed Presentation (1 col x 1 row on laptop) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.2 }}
            onClick={() => setSelectedIndex(5)}
            className="col-span-1 md:col-span-1 lg:col-span-1 lg:row-span-1 h-32 sm:h-36 md:h-44 lg:h-full group relative overflow-hidden rounded-2xl bg-white shadow-soft hover:shadow-soft-lg transition-all duration-300 border border-brand-borderSubtle hover:border-brand-accentGreenBorder cursor-pointer"
          >
            <img
              src={AWARDS_GALLERY[5].image}
              alt={AWARDS_GALLERY[5].alt}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-2 text-white">
              <p className="text-[10px] font-bold truncate">{AWARDS_GALLERY[5].title}</p>
            </div>
          </motion.div>

          {/* Tile 6: THE EXTRA PHOTOS BOX (Holds all 6 remaining photos when clicked) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.24 }}
            onClick={() => setSelectedIndex(FEATURED_COUNT)}
            className="col-span-2 md:col-span-2 lg:col-span-2 lg:row-span-1 h-36 sm:h-40 md:h-44 lg:h-full group relative overflow-hidden rounded-2xl cursor-pointer border-2 border-brand-accentGreenBorder shadow-soft hover:shadow-soft-lg active:scale-[0.99] transition-all duration-300 bg-brand-forest"
          >
            {/* Blurred backdrop from 7th award */}
            <img
              src={AWARDS_GALLERY[FEATURED_COUNT].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover blur-sm scale-110 opacity-25 group-hover:scale-115 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-forest/95 via-brand-forest/90 to-[#0a2519]/95" />

            {/* Interactive Box Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-3.5 sm:p-4 lg:p-4 text-white">
              {/* Top Row: Mini Overlapping Thumbnails + Badge */}
              <div className="flex items-center justify-between gap-2">
                <div className="flex -space-x-2.5 items-center">
                  {previewThumbnails.map((thumb) => (
                    <div
                      key={thumb.id}
                      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border-2 border-white shadow-sm bg-white flex-shrink-0"
                    >
                      <img src={thumb.image} alt="" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-brand-accentYellow text-brand-dark text-[10px] sm:text-xs font-black shadow-soft">
                  +{remainingPhotosCount} More
                </span>
              </div>

              {/* Title */}
              <div className="my-1">
                <h3 className="text-xs sm:text-sm font-black text-white leading-tight">
                  View All {AWARDS_GALLERY.length} Honors & Awards
                </h3>
                <p className="text-[10px] sm:text-[11px] text-white/80 line-clamp-1 mt-0.5">
                  Tap box to open complete photo viewer
                </p>
              </div>

              {/* Action Bar */}
              <div className="pt-1.5 border-t border-white/15 flex items-center justify-between text-[11px] font-bold text-brand-accentYellow group-hover:text-white transition-colors">
                <span className="flex items-center gap-1">
                  <Images className="w-3.5 h-3.5" /> Open Vault
                </span>
                <span className="flex items-center gap-0.5">
                  Explore <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Compact bottom status bar */}
        <div className="mt-3 sm:mt-4 flex items-center justify-between flex-wrap gap-2 text-xs text-brand-muted border-t border-brand-borderSubtle/60 pt-2.5">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs">
            <Sparkles className="w-3.5 h-3.5 text-brand-forest" />
            <span>Fitted in 1 page • Click any photo or the extra box to view fullscreen</span>
          </div>

          <button
            type="button"
            onClick={() => setSelectedIndex(FEATURED_COUNT)}
            className="inline-flex items-center gap-1 font-bold text-brand-forest hover:underline text-xs"
          >
            <Images className="w-3.5 h-3.5" />
            <span>Browse All {AWARDS_GALLERY.length} Awards</span>
            <ArrowRight className="w-3.5 h-3.5" />
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
