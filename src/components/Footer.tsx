import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const navKeys = ["home", "products", "about", "contact"] as const;
const navPaths = ["/", "/products", "/about", "/contact"];

const Footer = () => {
  const { t } = useLanguage();
  const productNames = t("footer.productNames") as string[];

  return (
    <footer className="gradient-hero text-primary-foreground">
      <div className="container-narrow mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-accent text-sm font-bold text-accent-foreground">
                LM
              </span>
              <span className="text-lg font-bold">{t("footer.brandName") as string}</span>
            </div>
            <p className="text-sm leading-relaxed opacity-70">{t("footer.desc") as string}</p>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-60">{t("footer.quickLinks") as string}</h4>
            <ul className="space-y-2 text-sm">
              {navKeys.map((key, i) => (
                <li key={key}>
                  <Link to={navPaths[i]} className="opacity-70 transition-opacity hover:opacity-100">
                    {t(`nav.${key}`) as string}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-60">{t("footer.productsTitle") as string}</h4>
            <ul className="space-y-2 text-sm">
              {productNames.map((p) => (
                <li key={p}>
                  <Link to="/products" className="opacity-70 transition-opacity hover:opacity-100">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider opacity-60">{t("footer.contactInfo") as string}</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 opacity-60" />
                <span className="opacity-70">{t("footer.address") as string}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 opacity-60" />
                <span className="opacity-70">(852) 2743 2218</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 opacity-60" />
                <span className="opacity-70">info@labelmasters.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-primary-foreground/10 pt-6 text-center text-xs opacity-50">
          © {new Date().getFullYear()} {t("footer.copyright") as string}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
