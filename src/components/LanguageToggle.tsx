import { useLanguage } from "@/i18n/LanguageContext";
import type { Language } from "@/i18n/translations";

const options: { value: Language; label: string }[] = [
  { value: "tc", label: "繁" },
  // { value: "sc", label: "简" },
  { value: "en", label: "EN" },
];

const LanguageToggle = () => {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex items-center rounded-md border border-border bg-secondary/60 p-0.5 text-xs">
      {options.map((o) => (
        <button
          key={o.value}
          onClick={() => setLang(o.value)}
          className={`rounded px-2 py-1 font-medium transition-colors ${
            lang === o.value
              ? "bg-accent text-accent-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageToggle;
