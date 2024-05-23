import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { authActions } from "../store/auth";
import useLanguage from "../Hooks/useLanguage";
import { useTranslation } from "react-i18next";

export default function NavigationCard({ title, route, icon, isExit, isLang }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { changeLang, paraFont } = useLanguage();
  const { t } = useTranslation();

  function handleExit() {
    dispatch(authActions.unAuthorize());
    navigate("/authorize");
  }

  async function languageChangeHandler() {
    await changeLang();
  }
  return (
    <li
      className="clickEffect"
      onClick={(isExit && handleExit) || (isLang && languageChangeHandler)}
    >
      <Link
        to={route}
        className="w-40 center flex-col   bg-white shadow-md h-28 rounded-md"
      >
        <span className="text-[65px]">{icon}</span>
        <span className={`capitalize ${paraFont} `}>{t(`${title}`)}</span>
      </Link>
    </li>
  );
}
