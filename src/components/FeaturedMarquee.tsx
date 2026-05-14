import { Link } from "react-router-dom";
import { CATEGORY_SLUGS, categoryProductImages } from "@/data/products";
import { useLanguage } from "@/i18n/LanguageContext";

type Item = { src: string; slug: string; title: string; titleEn: string };

const FeaturedMarquee = () => {
  const { t } = useLanguage();
  const categories = t("products.categories") as { title: string; titleEn: string }[];

  const items: Item[] = [];
  CATEGORY_SLUGS.forEach((slug, i) => {
    categoryProductImages[slug].forEach((src) => {
      items.push({ src, slug, title: categories[i]?.title ?? "", titleEn: categories[i]?.titleEn ?? "" });
    });
  });

  // Split into two rows, staggered.
  const row1 = items.filter((_, i) => i % 2 === 0);
  const row2 = items.filter((_, i) => i % 2 === 1);

  const renderRow = (rowItems: Item[], direction: "left" | "right") => (
    <div className="group relative overflow-hidden">
      <div
        className={`flex w-max gap-4 ${
          direction === "left" ? "animate-marquee-left" : "animate-marquee-right"
        } group-hover:[animation-play-state:paused]`}
      >
        {[...rowItems, ...rowItems].map((it, idx) => (
          <Link
            key={`${it.slug}-${idx}`}
            to={`/products/${it.slug}`}
            className="relative block w-56 shrink-0 overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all hover:shadow-elevated sm:w-64"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={it.src}
                alt={it.title}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/70 to-transparent p-3">
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">{it.titleEn}</p>
              <p className="text-sm font-medium text-foreground">{it.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      {renderRow(row1, "left")}
      <div className="pl-12 sm:pl-24">{renderRow(row2, "right")}</div>
    </div>
  );
};

export default FeaturedMarquee;