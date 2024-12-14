import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Children } from "@/src/generic/types/Children.type";
import { Language } from "@/src/generic/language/Language.type";
import { useLocalStorage } from "@/src/generic/hooks/useLocalStorage";
import { LanguageContext } from "@/src/generic/language/Language.context";

export function LanguageProvider({ children }: { children: Children }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage<Language>(
    "_tnf_1mm2_3_language",
    "en"
  );

  useEffect(() => {
    i18n.changeLanguage(language);
    document.documentElement.lang = i18n.language;
  }, [i18n, language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
