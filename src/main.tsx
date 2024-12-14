import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { initReactI18next } from "react-i18next";
import { version } from "@/package.json";
import { Provider } from "@/src/Provider";
import { useTranslation } from "@/src/generic/language/useTranslation";
// import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import App from "@/src/App";
// import "@/src/generic/language";

// const translator = i18n.use(initReactI18next).use(LanguageDetector);

// translator.init({
//   resources: useTranslation,
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

i18n
  .use(initReactI18next)
  // .use(LanguageDetector)
  .init({
    resources: useTranslation,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

createRoot(document.getElementById("_tnf_1mm2_3")!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>
);

console.log(
  `%c[tnf]%c${version}%c@jff`,
  "padding: 4px 3px 3px; background: #000; font-weight: bold; color: #fff;",
  "padding: 4px 3px 3px; background: #fff; font-weight: bold; color: #000;",
  "padding: 4px 3px 3px; background: #000; font-weight: bold; color: #fff;"
);
