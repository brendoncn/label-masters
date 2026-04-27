import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/i18n/LanguageContext";
import heroFactory from "@/assets/hero-factory.jpg";
import heroHangtags from "@/assets/hero-hangtags.jpg";
import heroLabels from "@/assets/hero-labels.jpg";
import heroPackaging from "@/assets/hero-packaging.jpg";

const slideImages = [heroFactory, heroHangtags, heroLabels, heroPackaging];

const AUTOPLAY_INTERVAL = 5000;

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

  useEffect(() => {
    const timer = setInterval(next, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="relative min-h-[520px] overflow-hidden lg:min-h-[600px]">
      {/* Background images */}
      {slideImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt=""
          width={1920}
          height={1080}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      <div className="overlay-dark absolute inset-0" />

      {/* Content */}
      <div className="container-narrow relative z-10 mx-auto flex min-h-[520px] items-center px-4 py-20 sm:px-6 lg:min-h-[600px] lg:px-8">
        <div className="max-w-2xl">
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

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/20 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/40 sm:left-6"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-background/20 p-2 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-background/40 sm:right-6"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
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
