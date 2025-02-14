import i18next from "i18next";
import { initReactI18next } from "react-i18next";

//Import all translation files
import translationEnglish from "./translation/en/translation.json";
import translationRussian from "./translation/ru/translation.json";
import translationJapanese from "./translation/jp/translation.json";

const resources = {
  en: {
    translation: translationEnglish,
  },
  ru: {
    translation: translationRussian,
  },
  jp: {
    translation: translationJapanese,
  },
};

i18next.use(initReactI18next).init({
  resources,
  lng: "en", //default language
  fallbackLng: "en", // Fallback language if the selected one is unavailable
  interpolation: {
    escapeValue: false,
  },
});

export default i18next;
