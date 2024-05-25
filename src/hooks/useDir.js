import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function useDir() {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  useEffect(() => {
    if (currentLang === "ar") {
      document.body.dir = "rtl";
    } else {
      document.body.dir = "ltr";
    }
  }, [currentLang]);
}
