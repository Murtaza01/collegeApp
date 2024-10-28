import useLanguage from "../hooks/useLanguage";
import { useTranslation } from "react-i18next";

export default function Heading({ title }) {

  const { headFont } = useLanguage();
  const { t } = useTranslation();

  return <h2 className={` ${headFont} text-center mt-10 text-xl text-neutral-800 capitalize`}
  >
    {t(title)}
  </h2>
}
