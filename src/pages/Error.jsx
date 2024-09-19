import { useTranslation } from "react-i18next";
import { useRouteError } from "react-router-dom";
import useExit from "../hooks/useExit";
import useLanguage from "../hooks/useLanguage";
import errorImg from "../assets/images/404.svg";
export default function ErrorPage() {
  const error = useRouteError();
  const { t } = useTranslation();
  const { paraFont, headFont } = useLanguage();
  const exit = useExit();
  console.log(error)
  return (
    <div
      className={`flex items-center pt-[25vh]  w-11/12 mx-auto text-center flex-col  min-h-screen text-lg ${paraFont}`}
    >
      <img src={errorImg} alt="" className="w-56" />
      <h1>{t("error")}</h1>
      <button
        className={`clickEffect mt-5 text-base rounded-sm capitalize text-neutral-700  bg-accent shadow-neutral-600 px-7 py-2
  ${headFont}  shadow-md`}
        onClick={exit}
      >
        {t("clickHere")}
      </button>
    </div>
  );
}
