import { useParams, Link, Navigate } from "react-router-dom";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";

// Main product images (reuse existing)
import tagsImg from "@/assets/products-tags.jpg";
import stickersImg from "@/assets/products-stickers.jpg";
import boxesImg from "@/assets/products-boxes.jpg";
import washImg from "@/assets/products-washlabels.jpg";
import wovenImg from "@/assets/products-woven.jpg";
import rfidImg from "@/assets/products-rfid.jpg";

// Detail gallery images
import detailTags1 from "@/assets/detail-tags-1.jpg";
import detailTags2 from "@/assets/detail-tags-2.jpg";
import detailTags3 from "@/assets/detail-tags-3.jpg";
import detailStickers1 from "@/assets/detail-stickers-1.jpg";
import detailStickers2 from "@/assets/detail-stickers-2.jpg";
import detailBoxes1 from "@/assets/detail-boxes-1.jpg";
import detailBoxes2 from "@/assets/detail-boxes-2.jpg";
import detailWash1 from "@/assets/detail-wash-1.jpg";
import detailWash2 from "@/assets/detail-wash-2.jpg";
import detailWoven1 from "@/assets/detail-woven-1.jpg";
import detailWoven2 from "@/assets/detail-woven-2.jpg";
import detailRfid1 from "@/assets/detail-rfid-1.jpg";
import detailRfid2 from "@/assets/detail-rfid-2.jpg";

const SLUGS = ["hang-tags", "stickers", "boxes", "care-labels", "woven-labels", "rfid"] as const;
type Slug = (typeof SLUGS)[number];

const mainImages: Record<Slug, string> = {
  "hang-tags": tagsImg,
  stickers: stickersImg,
  boxes: boxesImg,
  "care-labels": washImg,
  "woven-labels": wovenImg,
  rfid: rfidImg,
};

const galleryImages: Record<Slug, string[]> = {
  "hang-tags": [tagsImg, detailTags1, detailTags2, detailTags3],
  stickers: [stickersImg, detailStickers1, detailStickers2],
  boxes: [boxesImg, detailBoxes1, detailBoxes2],
  "care-labels": [washImg, detailWash1, detailWash2],
  "woven-labels": [wovenImg, detailWoven1, detailWoven2],
  rfid: [rfidImg, detailRfid1, detailRfid2],
};

const ProductDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useLanguage();

  const slugIndex = SLUGS.indexOf(slug as Slug);
  if (slugIndex === -1) return <Navigate to="/products" replace />;

  const currentSlug = slug as Slug;
  const details = t("productDetail.items") as {
    title: string;
    titleEn: string;
    desc: string;
    longDesc: string;
    specs: { label: string; value: string }[];
    advantages: { title: string; desc: string }[];
    faq: { q: string; a: string }[];
  }[];

  const product = details[slugIndex];
  const images = galleryImages[currentSlug];
  const productsListTitle = t("productDetail.items") as { title: string; titleEn: string }[];

  // Navigation: prev/next product
  const prevSlug = slugIndex > 0 ? SLUGS[slugIndex - 1] : null;
  const nextSlug = slugIndex < SLUGS.length - 1 ? SLUGS[slugIndex + 1] : null;
  const prevTitle = prevSlug ? productsListTitle[slugIndex - 1]?.title : null;
  const nextTitle = nextSlug ? productsListTitle[slugIndex + 1]?.title : null;

  return (
    <Layout>
      {/* Breadcrumb */}
      <div className="border-b border-border bg-card">
        <div className="container-narrow mx-auto flex items-center gap-2 px-4 py-3 text-sm text-muted-foreground sm:px-6 lg:px-8">
          <Link to="/" className="hover:text-accent transition-colors">{t("nav.home") as string}</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <Link to="/products" className="hover:text-accent transition-colors">{t("nav.products") as string}</Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground font-medium">{product.title}</span>
        </div>
      </div>

      {/* Product Category Quick Nav */}
      <div className="border-b border-border bg-card/50">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {productsListTitle.map((p, i) => (
              <Link
                key={SLUGS[i]}
                to={`/products/${SLUGS[i]}`}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  i === slugIndex
                    ? "bg-accent text-accent-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                }`}
              >
                {p.title}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="gradient-hero section-padding">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center">
            <div className="flex-1">
              <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">{product.titleEn}</p>
              <h1 className="mb-4 text-3xl font-extrabold text-primary-foreground sm:text-4xl lg:text-5xl">{product.title}</h1>
              <p className="mb-6 max-w-lg text-base leading-relaxed text-primary-foreground/80">{product.desc}</p>
              <Button asChild size="lg" className="gradient-accent border-0 font-semibold text-accent-foreground">
                <Link to="/contact">{t("productDetail.inquire") as string} <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
            </div>
            <div className="flex-1">
              <div className="overflow-hidden rounded-lg shadow-elevated">
                <img src={mainImages[currentSlug]} alt={product.title} className="h-full w-full object-cover aspect-[4/3]" width={800} height={600} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Description + Intro */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">{t("productDetail.aboutProduct") as string}</h2>
            <p className="mb-4 text-2xl font-bold text-foreground sm:text-3xl">{product.title}</p>
            <p className="text-base leading-relaxed text-muted-foreground">{product.longDesc}</p>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">{t("productDetail.gallery") as string}</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((src, i) => (
              <div key={i} className="group overflow-hidden rounded-lg border border-border bg-card shadow-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={src}
                    alt={`${product.title} ${i + 1}`}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specifications Table */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">{t("productDetail.specifications") as string}</h2>
          <div className="mx-auto max-w-2xl overflow-hidden rounded-lg border border-border">
            <table className="w-full">
              <tbody>
                {product.specs.map((spec, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-secondary/30"}>
                    <td className="px-5 py-3.5 text-sm font-semibold text-foreground w-1/3">{spec.label}</td>
                    <td className="px-5 py-3.5 text-sm text-muted-foreground">{spec.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">{t("productDetail.whyChoose") as string}</h2>
          <p className="mb-10 text-center text-2xl font-bold text-foreground sm:text-3xl">{product.title}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {product.advantages.map((adv, i) => (
              <div key={i} className="rounded-lg border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-elevated">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-lg font-bold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">{adv.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold text-foreground sm:text-3xl">{t("productDetail.faqTitle") as string}</h2>
          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible className="w-full">
              {product.faq.map((item, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-base">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Prev / Next Product Navigation */}
      <section className="border-t border-border bg-card">
        <div className="container-narrow mx-auto flex items-center justify-between px-4 py-6 sm:px-6 lg:px-8">
          {prevSlug ? (
            <Link to={`/products/${prevSlug}`} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              <span>{prevTitle}</span>
            </Link>
          ) : <div />}
          {nextSlug ? (
            <Link to={`/products/${nextSlug}`} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
              <span>{nextTitle}</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : <div />}
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero section-padding">
        <div className="container-narrow mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground sm:text-3xl">{t("productDetail.ctaTitle") as string}</h2>
          <p className="mx-auto mb-8 max-w-lg text-base text-primary-foreground/70">{t("productDetail.ctaDesc") as string}</p>
          <Button asChild size="lg" className="gradient-accent border-0 font-semibold text-accent-foreground">
            <Link to="/contact">{t("productDetail.ctaButton") as string} <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetail;
