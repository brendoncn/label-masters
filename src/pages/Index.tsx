import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, Cog, Globe2, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedMarquee from "@/components/FeaturedMarquee";

const DESCRIPTION_ICONS = [Globe2, BadgeCheck, Cog] as const;
const FEATURE_ICONS = [Globe2, BadgeCheck, Cog, Package] as const;

const Index = () => {
  const { t } = useLanguage();
  const stats = t("index.stats") as { value: string; label: string }[];
  const descriptionParagraphs = [
    t("index.descriptionContext1"),
    t("index.descriptionContext2"),
    t("index.descriptionContext3"),
  ] as string[];
  const features = t("index.features") as { title: string; desc: string }[];

  return (
    <Layout>
      <HeroCarousel />

      {/* Stats */}
      {/* <section className="border-b border-border bg-card">
        <div className="container-narrow mx-auto grid grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl font-extrabold text-accent sm:text-3xl">{s.value}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Company overview */}
      <section className="section-padding border-y border-border bg-background">
        <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              {t("index.description") as string}
            </p>
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              {t("index.whyUsTitle") as string}
            </h2>
          </header>

          <div className="mx-auto max-w-3xl space-y-5 md:space-y-6">
            {descriptionParagraphs.map((paragraph, index) => {
              const Icon = DESCRIPTION_ICONS[index] ?? Globe2;
              return (
                <article
                  key={index}
                  className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 shadow-card transition-shadow hover:shadow-elevated sm:p-8"
                >
                  <div
                    className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent to-accent/40"
                    aria-hidden
                  />
                  <div className="flex gap-4 sm:gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent sm:h-12 sm:w-12">
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1 pt-0.5">
                      <p className="mb-2 text-xs font-semibold tabular-nums tracking-widest text-accent/80">
                        {String(index + 1).padStart(2, "0")}
                      </p>
                      <p
                        className="leading-relaxed text-muted-foreground text-base font-medium text-foreground/90 sm:text-lg sm:leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {/* <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 md:mt-16 lg:gap-6">
            {features.map((feature, index) => {
              const Icon = FEATURE_ICONS[index] ?? Package;
              return (
                <div
                  key={feature.title}
                  className="rounded-lg border border-border bg-secondary/40 p-5 transition-colors hover:border-accent/30 hover:bg-secondary/60"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-md bg-card text-accent shadow-sm">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mb-1.5 text-sm font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{feature.desc}</p>
                </div>
              );
            })}
          </div> */}
        </div>
      </section>

      {/* Featured Categories */}
      <section className="section-padding bg-secondary/50">
        <div>
          <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="mb-2 text-center text-sm font-semibold uppercase tracking-widest text-accent">{t("index.featured") as string}</h2>
            <p className="mb-12 text-center text-2xl font-bold text-foreground sm:text-3xl">{t("index.featuredTitle") as string}</p>
          </div>
          <FeaturedMarquee />
          <div className="container-narrow mx-auto mt-10 px-4 text-center sm:px-6 lg:px-8">
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
