import { useContext } from "react";
import { LanguageContext } from "@/src/generic/language/Language.context";

export function useLanguage() {
  return useContext(LanguageContext);
}
