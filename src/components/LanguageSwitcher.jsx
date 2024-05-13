import React from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const currentLang = localStorage.getItem("i18nextLng");
  const { i18n } = useTranslation();

  async function handleClick() {
    if (currentLang === "ar") {
      await i18n.changeLanguage("en");
    } else {
      await i18n.changeLanguage("ar");
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}
