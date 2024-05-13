import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import english from "./assets/lang/english.json";
import arabic from "./assets/lang/arabic.json";

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    // lng: "ar",
    fallbackLang: "en",
    // ns: ["n2", "n1"],
    // defaultNS: "n2",
    resources: {
      en: {
        translation: english,
      },
      ar: {
        translation: arabic,
      },
    },
  });
