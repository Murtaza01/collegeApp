import { useTranslation } from "react-i18next";

export default function useLang() {
  const currentLang = localStorage.getItem("i18nextLng");
  const { i18n } = useTranslation();
  async function changeLang() {
    if (currentLang === "ar") {
      await i18n.changeLanguage("en");
    } else {
      await i18n.changeLanguage("ar");
    }
  }
  return changeLang;
}
