import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import { type Language, translations } from "./translations";

type TranslationValue = string | string[] | Record<string, unknown>[] | Record<string, unknown>;

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (path: string) => TranslationValue;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("lm-lang") as Language;
    return saved && ["tc", "sc", "en"].includes(saved) ? saved : "tc";
  });

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem("lm-lang", l);
  }, []);

  const t = useCallback(
    (path: string): TranslationValue => {
      const keys = path.split(".");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      let obj: any = translations;
      for (const key of keys) {
        obj = obj?.[key];
        if (obj === undefined) return path;
      }
      // If the value is an object with lang keys, pick current lang
      if (obj && typeof obj === "object" && lang in obj) {
        return obj[lang];
      }
      return obj ?? path;
    },
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
