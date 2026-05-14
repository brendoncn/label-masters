import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { useLanguage } from "@/i18n/LanguageContext";
import { CATEGORY_SLUGS, categoryProductImages, PRODUCT_SLUG_MAP, type ProductSlug } from "@/data/products";
import { max } from "date-fns";

// Reverse lookup: category slug + product index → product slug
const PRODUCT_SLUG_BY_CAT_IDX: Record<string, string> = Object.entries(PRODUCT_SLUG_MAP).reduce(
  (acc, [pSlug, { category, index }]) => {
    acc[`${category}:${index}`] = pSlug;
    return acc;
  },
  {} as Record<string, string>,
);

const Products = () => {
  const { t } = useLanguage();
  const items = t("products.items") as { title: string; titleEn: string; desc: string; features: string[] }[];
  const viewDetailsLabel = t("categoryDetails.inquire") as string;
  const categories = t("products.categories") as { title: string; titleEn: string; desc: string }[];
  const details = t("categoryDetails.items") as {
    products: { name: string; desc: string; features: string[] }[];
  }[];

  // Flatten all products across categories into a single list of "category-like" tiles.
  const allProducts = CATEGORY_SLUGS.flatMap((slug, i) => {
    const images = categoryProductImages[slug];
    const products = details[i]?.products ?? [];
    return products.map((p, j) => ({
      slug,
      productIdx: j,
      productSlug: PRODUCT_SLUG_BY_CAT_IDX[`${slug}:${j}`] as ProductSlug,
      name: p.name,
      desc: p.desc,
      features: p.features,
      image: images[j],
      parentTitle: categories[i]?.title ?? "",
      parentTitleEn: categories[i]?.titleEn ?? "",
    }));
  });

  return (
    // <Layout>
    //   <section className="gradient-hero section-padding">
    //     <div className="container-narrow mx-auto text-center px-4 sm:px-6 lg:px-8">
    //       <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">{t("products.headerTag") as string}</p>
    //       <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">{t("products.headerTitle") as string}</h1>
    //       <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/70">{t("products.headerDesc") as string}</p>
    //     </div>
    //   </section>

    //   <section className="section-padding bg-background">
    //     <div className="container-narrow mx-auto px-4 sm:px-6 lg:px-8">
    //       <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    //         {allProducts.map((p, idx) => (
    //           <Link
    //             key={`${p.productSlug}-${idx}`}
    //             to={`/products/${p.productSlug}`}
    //             className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card shadow-card transition-all hover:shadow-elevated"
    //           >
    //             <div className="aspect-[4/3] overflow-hidden">
    //               <img
    //                 src={p.image}
    //                 alt={p.name}
    //                 loading="lazy"
    //                 width={1024}
    //                 height={768}
    //                 className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
    //               />
    //             </div>
    //             <div className="flex flex-1 flex-col p-5">
    //               <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">{p.parentTitleEn}</p>
    //               <h3 className="mb-2 text-base font-semibold text-foreground">{p.name}</h3>
    //               {p.features.map((f) => (
    //                 <li key={f} className="flex items-center gap-2 text-sm text-foreground">
    //                   <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
    //                   {f}
    //                 </li>
    //               ))}
    //               <p className="text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
    //             </div>
    //           </Link>
    //         ))}
    //       </div>
    //     </div>
    //   </section>
    // </Layout>

    // Note: The above grid layout is a more compact way to show all products, but the design may be too cramped for detailed descriptions. Below is an alternative layout that shows one product per row with more space for text.
    
    <Layout>
      <section className="gradient-hero section-padding">
        <div className="container-narrow mx-auto text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">{t("products.headerTag") as string}</p>
          <h1 className="text-3xl font-extrabold text-primary-foreground sm:text-4xl">{t("products.headerTitle") as string}</h1>
          <p className="mx-auto mt-4 max-w-lg text-base text-primary-foreground/70">{t("products.headerDesc") as string}</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto space-y-16 px-4 sm:px-6 lg:px-8">
          {allProducts.map((p, i) => (
            <div key={i} className={`flex flex-col gap-8 lg:flex-row lg:items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""} w-full max-w-sm lg:max-w-none mx-auto`}>
              <Link to={`/products/${p.productSlug}`} className="flex-1 overflow-hidden rounded-lg shadow-elevated group">
                <img src={p.image} alt={p.name} loading="lazy" className="h-full w-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105" />
              </Link>
              <div className="flex-1">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-accent">{p.parentTitleEn}</p>
                <h2 className="mb-3 text-2xl font-bold text-foreground sm:text-3xl">{p.name}</h2>
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
                  <Link to={`/products/${p.productSlug}`}>
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
