import { useTranslation } from "react-i18next";

export default function useLang() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  async function changeLang() {
    if (currentLang === "ar") {
      await i18n.changeLanguage("en");
      document.body.dir = "ltr";
    } else {
      await i18n.changeLanguage("ar");
      document.body.dir = "rtl";
    }
  }
  return changeLang;
}
