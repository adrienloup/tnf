import { Resource, ResourceKey, ResourceLanguage } from "i18next";
import { Translations } from "./Translations.type";

const languages = ([key, value]: [string, ResourceKey]): [
  string,
  ResourceLanguage,
] => [
  key,
  {
    translation: value,
  },
];

const merge = (translations: Translations[]): Translations =>
  translations
    .flatMap((translations) => Object.entries(translations))
    .reduce(
      (acc, [key, translation]) => ({
        ...acc,
        [key]: acc[key] ? { ...acc[key], ...translation } : translation,
      }),
      {} as Translations,
    );

export const toTranslation = (...translations: Translations[]): Resource =>
  Object.entries(merge(translations))
    .map(languages)
    .reduce(
      (acc, current) => ({
        ...acc,
        [current[0]]: current[1],
      }),
      {},
    );
