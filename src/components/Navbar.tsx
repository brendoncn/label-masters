import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/i18n/LanguageContext";
import logoUrl from "@/assets/label-masters-logo.png";
import { CATEGORY_SLUGS, PRODUCT_SLUG_MAP, type ProductSlug } from "@/data/products";

const navKeys = ["home", "products", "about", "contact"] as const;
const navPaths = ["/", "/products", "/about", "/contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  const details = t("categoryDetails.items") as { products: { name: string }[] }[];
  // Build a flat list of all product menu items, in the same order as PRODUCT_SLUG_MAP.
  const productMenu = (Object.entries(PRODUCT_SLUG_MAP) as [ProductSlug, { category: typeof CATEGORY_SLUGS[number]; index: number }][]).map(
    ([pSlug, { category, index }]) => {
      const catIdx = CATEGORY_SLUGS.indexOf(category);
      const name = details[catIdx]?.products[index]?.name ?? pSlug;
      return { slug: pSlug, name };
    },
  );

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container-narrow mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logoUrl}
            alt={`${t("nav.brand") as string}${t("nav.brandAccent") as string}`}
            className="h-10 w-auto object-contain [filter:drop-shadow(0_0_4px_hsl(var(--accent)/0.45))_drop-shadow(0_2px_6px_hsl(var(--primary)/0.25))] dark:[filter:drop-shadow(0_0_6px_hsl(var(--accent)/0.85))_drop-shadow(0_0_14px_hsl(var(--accent)/0.55))] dark:brightness-125"
            height={40}
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navKeys.map((key, i) => {
            if (key === "products") {
              const active = location.pathname.startsWith("/products");
              return (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setProductsOpen(true)}
                  onMouseLeave={() => setProductsOpen(false)}
                >
                  <Link
                    to="/products"
                    className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      active
                        ? "bg-secondary text-foreground"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                  >
                    {t("nav.products") as string}
                    <ChevronDown className="h-3.5 w-3.5" />
                  </Link>
                  {productsOpen && (
                    <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-md border border-border bg-card p-2 shadow-elevated">
                      {productMenu.map((p) => (
                        <Link
                          key={p.slug}
                          to={`/products/${p.slug}`}
                          className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          {p.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }
            return (
              <Link
                key={key}
                to={navPaths[i]}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  location.pathname === navPaths[i]
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {t(`nav.${key}`) as string}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <LanguageToggle />
          <Button asChild size="sm" className="gradient-hero border-0 text-primary-foreground">
            <Link to="/contact">{t("nav.cta") as string}</Link>
          </Button>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-card md:hidden">
          <nav className="container-narrow mx-auto flex flex-col gap-1 px-4 py-3">
            {navKeys.map((key, i) => {
              if (key === "products") {
                return (
                  <div key={key} className="flex flex-col">
                    <button
                      type="button"
                      onClick={() => setMobileProductsOpen((v) => !v)}
                      className={`flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                        location.pathname.startsWith("/products")
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary"
                      }`}
                    >
                      <span>{t("nav.products") as string}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {mobileProductsOpen && (
                      <div className="ml-3 mt-1 flex flex-col border-l border-border pl-3">
                        <Link
                          to="/products"
                          onClick={() => setOpen(false)}
                          className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                        >
                          {t("products.viewCategory") as string}
                        </Link>
                        {productMenu.map((p) => (
                          <Link
                            key={p.slug}
                            to={`/products/${p.slug}`}
                            onClick={() => setOpen(false)}
                            className="rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
                          >
                            {p.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={key}
                  to={navPaths[i]}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${
                    location.pathname === navPaths[i]
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary"
                  }`}
                >
                  {t(`nav.${key}`) as string}
                </Link>
              );
            })}
            <div className="mt-2 flex items-center gap-2">
              <ThemeToggle />
              <LanguageToggle />
              <Button asChild size="sm" className="gradient-hero flex-1 border-0 text-primary-foreground">
                <Link to="/contact" onClick={() => setOpen(false)}>{t("nav.cta") as string}</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
