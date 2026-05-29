import { useParams, Link, Navigate } from "react-router-dom";
import { useCallback, useMemo, useState } from "react";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import {
  CATEGORY_SLUGS,
  type CategorySlug,
  categoryCoverImages,
  categoryProductImages,
  getProductSlugForCategoryIndex,
  PRODUCT_SLUG_MAP,
  PRODUCT_SLUGS,
  type ProductSlug,
  SLUG_TO_FOLDER_MAP,
} from "@/data/products";

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  let resolvedCategory: CategorySlug | null = null;
  let resolvedProductIdx: number | null = null;
  if (slug && (CATEGORY_SLUGS as readonly string[]).includes(slug)) {
    resolvedCategory = slug as CategorySlug;
  } else if (slug && slug in PRODUCT_SLUG_MAP) {
    const entry = PRODUCT_SLUG_MAP[slug as ProductSlug];
    resolvedCategory = entry.category;
    resolvedProductIdx = entry.index;
  }
  if (!resolvedCategory) return <Navigate to="/products" replace />;

  const currentSlug = resolvedCategory;
  const slugIndex = CATEGORY_SLUGS.indexOf(currentSlug);
  const details = t("categoryDetails.items") as {
    title: string;
    titleEn: string;
    desc: string;
    longDesc: string;
    advantages: { title: string; desc: string }[];
    products: { name: string; desc: string }[];
    faq: { q: string; a: string }[];
  }[];
  const categoryNav = t("products.categories") as { title: string; titleEn: string }[];

  const category = details[slugIndex];
  const productImages = categoryProductImages[currentSlug];

  // Determine which products to show on this page. If the route is a product
  // slug, show only that one product; otherwise show all products in category.
  const productIndices = resolvedProductIdx !== null
    ? [resolvedProductIdx]
    : category.products.map((_, i) => i);

  // Gallery: prefer all images under src/assets/Images/<folder>/ when present.
  const imageModules = useMemo(
    () =>
      import.meta.glob<{ default: string }>("../assets/Images/**/*.{png,jpg,jpeg,svg}", {
        eager: true,
      }),
    [],
  );

  const getGallery = useCallback(
    (idx: number) => {
      const fallback = [productImages[idx]];
      const productSlug = getProductSlugForCategoryIndex(currentSlug, idx);
      if (!productSlug) return fallback;
      const folderName = SLUG_TO_FOLDER_MAP[productSlug];
      if (!folderName) return fallback;

      const norm = (p: string) => p.replace(/\\/g, "/");
      const needle = `/Images/${folderName}/`;

      const urls = Object.keys(imageModules)
        .filter((path) => norm(path).includes(needle))
        .sort((a, b) => norm(a).localeCompare(norm(b), undefined, { numeric: true }))
        .map((path) => imageModules[path].default);

      return urls.length > 0 ? urls : fallback;
    },
    [currentSlug, imageModules, productImages],
  );

  // Active photo state per product index.
  const [activePhoto, setActivePhoto] = useState<Record<number, number>>({});

  // Prev / Next: navigate across all individual products in display order.
  let prevHref: string | null = null;
  let nextHref: string | null = null;
  let prevTitle: string | null = null;
  let nextTitle: string | null = null;
  if (resolvedProductIdx !== null && slug && slug in PRODUCT_SLUG_MAP) {
    const i = PRODUCT_SLUGS.indexOf(slug as ProductSlug);
    if (i > 0) {
      const prev = PRODUCT_SLUGS[i - 1];
      const e = PRODUCT_SLUG_MAP[prev];
      prevHref = `/products/${prev}`;
      prevTitle = (details[CATEGORY_SLUGS.indexOf(e.category)]?.products[e.index]?.name) ?? prev;
    }
    if (i < PRODUCT_SLUGS.length - 1) {
      const next = PRODUCT_SLUGS[i + 1];
      const e = PRODUCT_SLUG_MAP[next];
      nextHref = `/products/${next}`;
      nextTitle = (details[CATEGORY_SLUGS.indexOf(e.category)]?.products[e.index]?.name) ?? next;
    }
  } else {
    if (slugIndex > 0) {
      prevHref = `/products/${CATEGORY_SLUGS[slugIndex - 1]}`;
      prevTitle = categoryNav[slugIndex - 1]?.title ?? null;
    }
    if (slugIndex < CATEGORY_SLUGS.length - 1) {
      nextHref = `/products/${CATEGORY_SLUGS[slugIndex + 1]}`;
      nextTitle = categoryNav[slugIndex + 1]?.title ?? null;
    }
  }

  // Page title/desc/hero image: product-specific when on product page.
  const pageTitle = resolvedProductIdx !== null
    ? category.products[resolvedProductIdx].name
    : category.title;
  const pageDesc = resolvedProductIdx !== null
    ? category.products[resolvedProductIdx].desc
    : category.desc;
  const heroImage = resolvedProductIdx !== null
    ? productImages[resolvedProductIdx]
    : categoryCoverImages[currentSlug];

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="container-narrow mx-auto flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground sm:px-6 lg:px-8">
          <Link to="/" className="hover:text-accent transition-colors">{t("nav.home") as string}</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/products" className="hover:text-accent transition-colors">{t("nav.products") as string}</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          {resolvedProductIdx !== null ? (
            <>
              <Link to={`/products/${currentSlug}`} className="hover:text-accent transition-colors">{category.title}</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-foreground font-medium">{pageTitle}</span>
            </>
          ) : (
            <span className="text-foreground font-medium">{category.title}</span>
          )}
        </div>
      </div>

      {/* Category Quick Nav */}
      {/* <div className="border-b border-border bg-card/50">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categoryNav.map((c, i) => (
              <Link
                key={CATEGORY_SLUGS[i]}
                to={`/products/${CATEGORY_SLUGS[i]}`}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  i === slugIndex
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {c.title}
              </Link>
            ))}
          </div>
        </div>
      </div> */}

      {/* Hero */}
      <section className="gradient-hero py-4">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:gap-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">{category.titleEn}</p>
              <h1 className="mb-4 text-3xl font-extrabold text-primary-foreground sm:text-4xl lg:text-5xl">{pageTitle}</h1>
              <p className="mb-6 max-w-lg text-base leading-relaxed text-primary-foreground/80">{pageDesc}</p>
              {/* <Button asChild size="lg" className="gradient-accent border-0 font-semibold text-accent-foreground">
                <Link to="/contact">{t("categoryDetails.inquire") as string} <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button> */}
            </div>
            <div className="flex-1">
              <div className="overflow-hidden rounded-lg shadow-elevated">
                <img src={heroImage} alt={pageTitle} className="h-full w-full object-cover aspect-[4/3] hidden lg:block" width={1024} height={768} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products in this category */}
      <section className="py-8 bg-secondary/50">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">
            {resolvedProductIdx !== null
              ? (t("categoryDetails.gallery") as string)
              : (t("categoryDetails.productsInCategory") as string)}
          </h2>
          <div className="space-y-12">
            {productIndices.map((i) => {
              const p = category.products[i];
              const gallery = getGallery(i);
              const activeIdx = activePhoto[i] ?? 0;
              return (
                <div key={i} className="overflow-hidden rounded-lg border border-border bg-card shadow-card mx-auto">
                  <div className="p-5">
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{p.name}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                  <div className="border-t border-border bg-background/60 p-5">
                    <div className="flex flex-col gap-4 md:grid md:grid-cols-4">
                      <div className="md:col-span-3 overflow-hidden rounded-md border border-border bg-card ">
                        <img
                          src={gallery[activeIdx]}
                          alt={`${p.name} ${activeIdx + 1}`}
                          className="h-full w-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="md:col-span-1 md:max-h-[600px] md:overflow-y-auto">
                        <div className="flex md:block gap-3 overflow-x-auto md:flex-col md:overflow-x-visible">
                          {gallery.map((src, gi) => (
                            <button
                              key={gi}
                              type="button"
                              onClick={() => setActivePhoto((prev) => ({ ...prev, [i]: gi }))}
                              className={`shrink-0 aspect-square w-20 overflow-hidden rounded-md border-2 transition-all md:w-full lg:w-[60px] mr-2 ${
                                gi === activeIdx
                                  ? "border-accent ring-2 ring-accent/30"
                                  : "border-border hover:border-accent/50"
                              }`}
                              aria-label={`${p.name} photo ${gi + 1}`}
                            >
                              <img
                                src={src}
                                alt={`${p.name} ${gi + 1}`}
                                loading="lazy"
                                className="h-full w-full object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {/* <section className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">{t("categoryDetails.faqTitle") as string}</h2>
          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible className="w-full">
              {category.faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section> */}

      {/* Prev / Next */}
      <section className="border-t border-border bg-card">
        <div className="container-narrow mx-auto flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          {prevHref ? (
            <Link to={prevHref} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>{prevTitle}</span>
            </Link>
          ) : <div />}
          {nextHref ? (
            <Link to={nextHref} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <span>{nextTitle}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero section-padding">
        <div className="container-narrow mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground sm:text-3xl">{t("categoryDetails.ctaTitle") as string}</h2>
          <p className="mx-auto mb-8 max-w-lg text-base text-primary-foreground/70">{t("categoryDetails.ctaDesc") as string}</p>
          <Button asChild size="lg" className="gradient-accent border-0 font-semibold text-accent-foreground">
            <Link to="/contact">{t("categoryDetails.ctaButton") as string} <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
