import { useTranslation } from "react-i18next";

export default function useLanguage() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  const isArabic = currentLang === "ar";

  async function changeLang() {
    if (currentLang === "ar") {
      await i18n.changeLanguage("en");
      document.body.dir = "ltr";
    } else {
      await i18n.changeLanguage("ar");
      document.body.dir = "rtl";
    }
  }

  return { changeLang, isArabic };
}
