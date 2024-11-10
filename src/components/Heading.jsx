import useLanguage from "../hooks/useLanguage";
import { useTranslation } from "react-i18next";
export default function Heading({ title, icon }) {

  const { headFont } = useLanguage();
  const { t } = useTranslation();

  return <><h2 className={` ${headFont} flex justify-center items-center gap-2 text-center mt-10 text-2xl text-neutral-800 capitalize`}
  >
    {t(title)}
    {icon ?? undefined}
  </h2>
  </>
}
