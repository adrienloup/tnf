import { initReactI18next } from "react-i18next";
import { toTranslation } from "@/src/generic/language/useTranslations";
import { GameTranslations } from "@/src/game/Game.translations";
import { SetupTranslation } from "@/src/setup/Setup.translation";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: toTranslation(GameTranslations, SetupTranslation),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
