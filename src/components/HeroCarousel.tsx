import { useState, useEffect, useCallback, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import heroTags from "@/assets/hero-collage-tags.jpg";
import heroBags from "@/assets/hero-collage-bags.jpg";
import heroBoxes from "@/assets/hero-collage-boxes.jpg";
import heroAccessories from "@/assets/hero-collage-accessories.jpg";

const slideImages = [heroTags, heroBags, heroBoxes, heroAccessories];

const AUTOPLAY_INTERVAL = 6000;

const HeroCarousel = () => {
  const { t } = useLanguage();
  const slides = t("index.heroSlides") as {
    tag: string;
    title: string;
    desc: string;
    cta: string;
    link: string;
  }[];
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 700);
    },
    [current, isTransitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % slides.length);
  }, [current, slides.length, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length);
  }, [current, slides.length, goTo]);

  const SWIPE_MIN = 50;

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0];
    touchStart.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart.current) return;
      const touch = e.changedTouches[0];
      const dx = touch.clientX - touchStart.current.x;
      const dy = touch.clientY - touchStart.current.y;
      touchStart.current = null;
      if (Math.abs(dx) < SWIPE_MIN || Math.abs(dx) < Math.abs(dy)) return;
      if (dx > 0) prev();
      else next();
    },
    [next, prev],
  );

  const handleTouchCancel = useCallback(() => {
    touchStart.current = null;
  }, []);

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section
      className="relative min-h-[360px] overflow-hidden touch-pan-y lg:min-h-[400px]"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchCancel}
    >
      {/* Clickable background images — clicking jumps to that category */}
      {slideImages.map((img, i) => (
        <Link
          key={i}
          to={slides[i]?.link ?? "/products"}
          aria-label={slides[i]?.cta}
          tabIndex={i === current ? 0 : -1}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100 z-[1]" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={img}
            alt={slides[i]?.tag ?? ""}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </Link>
      ))}
      <div className="absolute inset-0 z-[2] pointer-events-none" style={{ background: "rgba(0,0,0,0.18)" }} />
 

      {/* Content (above background, but allow background click outside content) */}
      <div className="container-narrow relative z-[3] mx-auto flex min-h-[360px] items-center px-4 py-12 sm:px-6 lg:min-h-[400px] lg:px-8 pointer-events-none">
        <div className="max-w-2xl pointer-events-auto">
          {slides.map((slide, i) => (
            <div
              key={i}
              className={`transition-all duration-700 ${
                i === current
                  ? "visible opacity-100 translate-y-0"
                  : "invisible opacity-0 translate-y-4 absolute"
              }`}
            >
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent opacity-90">
                {slide.tag}
              </p>
              <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl whitespace-pre-line">
                {slide.title}
              </h1>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
                {slide.desc}
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="gradient-accent border-0 text-accent-foreground font-semibold"
                >
                  <Link to={slide.link}>
                    {slide.cta} <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Link to="/contact">
                    {t("index.contactUs") as string}
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows (hide on mobile, show on sm and up) */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-[4] -translate-y-1/2 rounded-full bg-background/20 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/40 sm:left-6 hidden sm:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-[4] -translate-y-1/2 rounded-full bg-background/20 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/40 sm:right-6 hidden sm:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-[4] flex -translate-x-1/2 gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current
                ? "w-8 bg-accent"
                : "w-2 bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
