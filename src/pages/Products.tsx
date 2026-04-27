import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import tagsImg from "@/assets/products-tags.jpg";
import stickersImg from "@/assets/products-stickers.jpg";
import boxesImg from "@/assets/products-boxes.jpg";
import washImg from "@/assets/products-washlabels.jpg";
import wovenImg from "@/assets/products-woven.jpg";
import rfidImg from "@/assets/products-rfid.jpg";

const images = [tagsImg, stickersImg, boxesImg, washImg, wovenImg, rfidImg];
const slugs = ["hang-tags", "stickers", "boxes", "care-labels", "woven-labels", "rfid"];

const Products = () => {
  const { t } = useLanguage();
  const items = t("products.items") as { title: string; titleEn: string; desc: string; features: string[] }[];
  const viewDetailsLabel = t("productDetail.inquire") as string;

  return (
    <Layout>
      <section className="gradient-hero section-padding">
        <div className="container-narrow mx-auto text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">{t("products.headerTag") as string}</p>
          <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">{t("products.headerTitle") as string}</h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/70">{t("products.headerDesc") as string}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto space-y-16">
          {items.map((p, i) => (
            <div key={i} className={`flex flex-col gap-8 lg:flex-row lg:items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <Link to={`/products/${slugs[i]}`} className="flex-1 overflow-hidden rounded-lg shadow-elevated group">
                <img src={images[i]} alt={p.title} loading="lazy" className="h-full w-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
              </Link>
              <div className="flex-1">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">{p.titleEn}</p>
                <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">{p.title}</h2>
                <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                <ul className="grid grid-cols-2 gap-2 mb-5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button asChild variant="outline" size="sm">
                  <Link to={`/products/${slugs[i]}`}>
                    {viewDetailsLabel} <ArrowRight className="ml-1 h-3.5 w-3.5" />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Products;
