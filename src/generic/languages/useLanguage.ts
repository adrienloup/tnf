import { useContext } from "react";
import { LanguageContext } from "@/src/generic/languages/Language.context";

export function useLanguage() {
  return useContext(LanguageContext);
}
