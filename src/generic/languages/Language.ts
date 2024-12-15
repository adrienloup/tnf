import { initReactI18next } from "react-i18next";
import { toTranslation } from "@/src/generic/languages/useTranslations";
import { GameTranslation } from "@/src/game/Game.translation";
import { NoticeTranslation } from "@/src/notice/Notice.translation";
import { GenericTranslation } from "@/src/generic/languages/Generic.translation";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  resources: toTranslation(
    GameTranslation,
    NoticeTranslation,
    GenericTranslation,
  ),
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
