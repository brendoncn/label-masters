import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturedMarquee from "@/components/FeaturedMarquee";

const Index = () => {
  const { t } = useLanguage();
  const stats = t("index.stats") as { value: string; label: string }[];

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
