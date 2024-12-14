import { toTranslation } from "@/src/generic/language/Translations";
import { GameTranslations } from "@/src/game/Game.translations";
import { SetupTranslation } from "@/src/setup/Setup.translation";

export const useTranslation = toTranslation(GameTranslations, SetupTranslation);
