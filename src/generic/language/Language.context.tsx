import { createContext } from "react";
import { Language } from "@/src/generic/language/Language.type";

export const LanguageContext = createContext<{
  language: Language;
  setLanguage: (language: Language) => void;
}>({
  language: "en",
  setLanguage: (language: Language) => language,
});
