import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { authActions } from "../store/auth";
import stagesData from "../assets/data/stages";
import { useTranslation } from "react-i18next";

export default function StagePickPage() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const stagesArray = Object.keys(stagesData);
  const stages = stagesArray.slice(0, -1);

  function handleClick(stage) {
    dispatch(authActions.setStage(`/${stage}`));
    dispatch(authActions.authorizeUser());
  }
  return (
    <section dir="ltr" className="h-screen center flex-col gap-10 ">
      <h1 className="text-2xl">{t("whichStage")}</h1>
      <ul className="space-y-5">
        {stages.map((stage) => {
          return (
            <li key={stage} className="">
              <Link
                className="clickEffect bg-accent text-neutral-900 shadow-md shadow-neutral-400 block w-52 capitalize rounded-sm text-center py-3 "
                to={`/${stage}`}
                onClick={() => handleClick(stage)}
              >
                {t(`${stage}`)}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
