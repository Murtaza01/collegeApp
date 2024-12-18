import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import homeEN from "./assets/lang/homeEN.json";
import homeAR from "./assets/lang/homeAR.json";
// home = auth + root

const arabicTrans = { ...homeAR, };
const englishTrans = { ...homeEN, };

export default i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    // lng: "ar",
    fallbackLang: "en",
    returnObjects: true,
    // ns: ["n2", "n1"],
    // defaultNS: "n2",
    resources: {
      en: {
        translation: englishTrans,
      },
      ar: {
        translation: arabicTrans,
      },
    },
  });
