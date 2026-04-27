import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageToggle from "@/components/LanguageToggle";
import ThemeToggle from "@/components/ThemeToggle";
import { useLanguage } from "@/i18n/LanguageContext";

const navKeys = ["home", "products", "about", "contact"] as const;
const navPaths = ["/", "/products", "/about", "/contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container-narrow mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <span className="gradient-hero inline-flex h-9 w-9 items-center justify-center rounded-md text-sm font-bold text-primary-foreground">
            LM
          </span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            {t("nav.brand") as string}<span className="text-accent">{t("nav.brandAccent") as string}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navKeys.map((key, i) => (
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
          ))}
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
            {navKeys.map((key, i) => (
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
            ))}
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
