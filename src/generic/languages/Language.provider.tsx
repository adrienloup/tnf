import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useLocalStorage } from "@/src/generic/hooks/useLocalStorage";
import { Children } from "@/src/generic/types/Children.type";
import { Language } from "@/src/generic/languages/Language.type";
import { LanguageContext } from "@/src/generic/languages/Language.context";

export function LanguageProvider({ children }: { children: Children }) {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useLocalStorage<Language>(
    "_language_1mm2_3",
    "en",
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
