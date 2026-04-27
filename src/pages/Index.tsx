import { Link } from "react-router-dom";
import { ArrowRight, Globe, Award, Factory, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import HeroCarousel from "@/components/HeroCarousel";
import tagsImg from "@/assets/products-tags.jpg";
import stickersImg from "@/assets/products-stickers.jpg";
import boxesImg from "@/assets/products-boxes.jpg";

const featureIcons = [Globe, Award, Factory, ShieldCheck];
const productImages = [tagsImg, stickersImg, boxesImg];

const Index = () => {
  const { t } = useLanguage();
  const stats = t("index.stats") as { value: string; label: string }[];
  const features = t("index.features") as { title: string; desc: string }[];
  const highlights = t("index.productHighlights") as { title: string; desc: string }[];

  return (
    <Layout>
      <HeroCarousel />

      {/* Stats */}
      <section className="border-b border-border bg-card">
        <div className="container-narrow mx-auto grid grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold text-accent sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto">
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">{t("index.whyUs") as string}</h2>
          <p className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">{t("index.whyUsTitle") as string}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => {
              const Icon = featureIcons[i];
              return (
                <div key={i} className="rounded-lg border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-elevated">
                  <Icon className="mb-4 h-8 w-8 text-accent" />
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="section-padding bg-secondary/50">
        <div className="container-narrow mx-auto">
          <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">{t("index.featured") as string}</h2>
          <p className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">{t("index.featuredTitle") as string}</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((p, i) => (
              <Link
                key={i}
                to="/products"
                className="group overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all hover:shadow-elevated"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={productImages[i]} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="mb-1 text-lg font-semibold text-foreground">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.desc}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">{t("index.viewAll") as string} <ArrowRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gradient-hero section-padding">
        <div className="container-narrow mx-auto text-center">
          <h2 className="mb-4 text-2xl font-bold text-primary-foreground sm:text-3xl">{t("index.ctaTitle") as string}</h2>
          <p className="mx-auto mb-8 max-w-lg text-base text-primary-foreground/70">{t("index.ctaDesc") as string}</p>
          <Button asChild size="lg" className="gradient-accent border-0 font-semibold text-accent-foreground">
            <Link to="/contact">{t("index.ctaButton") as string} <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
